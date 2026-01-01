pipeline {
    agent any

    environment {
        AWS_REGION   = 'eu-west-2'
        ECR_REGISTRY = "975050024946.dkr.ecr.${AWS_REGION}.amazonaws.com"
        NAMESPACE    = 'streamingapp'
        HELM_CHART_DIR = 'StreamingApp/streaming-app-helm'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Login to AWS ECR') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'aws-creds'
                ]]) {
                    sh '''
                      aws ecr get-login-password --region $AWS_REGION \
                      | docker login --username AWS --password-stdin $ECR_REGISTRY
                    '''
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                sh '''
                  echo "Building auth service"
                  docker build -t $ECR_REGISTRY/auth:latest backend/authService

                  echo "Building admin service"
                  docker build -t $ECR_REGISTRY/admin:latest backend/adminService

                  echo "Building chat service"
                  docker build -t $ECR_REGISTRY/chat:latest backend/chatService

                  echo "Building streaming service"
                  docker build -t $ECR_REGISTRY/streaming:latest backend/streamingService

                  echo "Building frontend"
                  docker build -t $ECR_REGISTRY/frontend:latest frontend
                '''
            }
        }

        stage('Push Images to ECR') {
            steps {
                sh '''
                  docker push $ECR_REGISTRY/auth:latest
                  docker push $ECR_REGISTRY/admin:latest
                  docker push $ECR_REGISTRY/chat:latest
                  docker push $ECR_REGISTRY/streaming:latest
                  docker push $ECR_REGISTRY/frontend:latest
                '''
            }
        }

        stage('Deploy with Helm') {
            steps {
                sh '''
                  helm upgrade --install streamingapp $HELM_CHART_DIR \
                    -n $NAMESPACE \
                    --create-namespace \
                    --values $HELM_CHART_DIR/values.yaml
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                  kubectl get pods -n $NAMESPACE
                  kubectl get svc -n $NAMESPACE
                  kubectl get ingress -n $NAMESPACE
                '''
            }
        }
    }

    post {
        success {
            mail to: 'samdonaldand@gmail.com',
                 subject: "✅ Jenkins SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: """Build Successful!

Job: ${env.JOB_NAME}
Build: #${env.BUILD_NUMBER}

URL: ${env.BUILD_URL}
"""
        }

        failure {
            mail to: 'samdonaldand@gmail.com',
                 subject: "❌ Jenkins FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: """Build Failed!

Job: ${env.JOB_NAME}
Build: #${env.BUILD_NUMBER}

Check logs: ${env.BUILD_URL}
"""
        }

        always {
            echo 'Pipeline finished.'
        }
    }
}
