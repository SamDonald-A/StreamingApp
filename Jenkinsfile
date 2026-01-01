pipeline {
    agent any

    environment {
        AWS_REGION   = 'eu-west-2'
        AWS_ACCOUNT  = '975050024946'
        ECR_REGISTRY = "${AWS_ACCOUNT}.dkr.ecr.${AWS_REGION}.amazonaws.com"
        NAMESPACE    = 'streamingapp'
        HELM_CHART   = 'StreamingApp/streaming-app-helm'
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
                  docker build -t $ECR_REGISTRY/auth:latest \
                    -f StreamingApp/backend/authService/Dockerfile \
                    StreamingApp/backend

                  echo "Building admin service"
                  docker build -t $ECR_REGISTRY/admin:latest \
                    -f StreamingApp/backend/adminService/Dockerfile \
                    StreamingApp/backend

                  echo "Building chat service"
                  docker build -t $ECR_REGISTRY/chat:latest \
                    -f StreamingApp/backend/chatService/Dockerfile \
                    StreamingApp/backend

                  echo "Building streaming service"
                  docker build -t $ECR_REGISTRY/streaming:latest \
                    -f StreamingApp/backend/streamingService/Dockerfile \
                    StreamingApp/backend

                  echo "Building frontend"
                  docker build -t $ECR_REGISTRY/frontend:latest \
                    StreamingApp/frontend
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
                  helm upgrade --install streamingapp $HELM_CHART \
                    -n $NAMESPACE --create-namespace
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'kubectl get pods -n $NAMESPACE'
                sh 'kubectl get svc -n $NAMESPACE'
                sh 'kubectl get ingress -n $NAMESPACE'
            }
        }
    }

    post {
        success {
            mail to: 'samdonaldand@gmail.com',
                 subject: "✅ Jenkins SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Build succeeded.\n${env.BUILD_URL}"
        }
        failure {
            mail to: 'samdonaldand@gmail.com',
                 subject: "❌ Jenkins FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Build failed.\n${env.BUILD_URL}"
        }
        always {
            echo 'Pipeline finished.'
        }
    }
}
