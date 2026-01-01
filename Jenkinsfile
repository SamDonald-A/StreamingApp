pipeline {
    agent any

    environment {
        AWS_REGION = 'eu-west-2'
        ECR_REGISTRY = "975050024946.dkr.ecr.${AWS_REGION}.amazonaws.com"
        NAMESPACE = 'streamingapp'
        HELM_CHART_DIR = './StreamingApp/streaming-app-helm'
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
                    sh """
                    aws ecr get-login-password --region $AWS_REGION | \
                    docker login --username AWS --password-stdin $ECR_REGISTRY
                    """
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    def services = ['auth', 'streaming', 'admin', 'chat', 'frontend']

                    services.each { service ->
                        echo "Building Docker image for ${service}..."
                        sh "docker build -t $ECR_REGISTRY/${service}:latest ./StreamingApp/${service == 'frontend' ? 'frontend' : 'backend/' + service}"
                    }
                }
            }
        }

        stage('Push Docker Images to ECR') {
            steps {
                script {
                    def services = ['auth', 'streaming', 'admin', 'chat', 'frontend']

                    services.each { service ->
                        echo "Pushing Docker image for ${service} to ECR..."
                        sh "docker push $ECR_REGISTRY/${service}:latest"
                    }
                }
            }
        }

        stage('Deploy with Helm') {
            steps {
                sh """
                helm upgrade --install streamingapp $HELM_CHART_DIR \
                -n $NAMESPACE --create-namespace \
                --values $HELM_CHART_DIR/values.yaml
                """
            }
        }

        stage('Verify Deployment') {
            steps {
                sh "kubectl get pods -n $NAMESPACE"
                sh "kubectl get svc -n $NAMESPACE"
                sh "kubectl get ingress -n $NAMESPACE"
            }
        }
    }

    post {
        success {
            mail to: 'samdonaldand@gmail.com',
                 subject: "✅ Jenkins SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Build Successful! Check details: ${env.BUILD_URL}"
        }
        failure {
            mail to: 'samdonaldand@gmail.com',
                 subject: "❌ Jenkins FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Build Failed! Check logs: ${env.BUILD_URL}"
        }
        always {
            echo 'Pipeline finished.'
        }
    }
}
