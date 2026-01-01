pipeline {
    agent any

    environment {
        AWS_REGION = 'eu-west-2'
        ECR_REGISTRY = '975050024946.dkr.ecr.${AWS_REGION}.amazonaws.com'
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
                script {
                    sh '''
                    aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_REGISTRY
                    '''
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    def services = ['auth', 'streaming', 'admin', 'chat', 'frontend']

                    // Backend services
                    services.each { service ->
                        sh """
                        docker build -t $ECR_REGISTRY/${service}:latest ./StreamingApp/backend/${service} || true
                        """
                    }

                    // Frontend
                    sh """
                    docker build -t $ECR_REGISTRY/frontend:latest ./StreamingApp/frontend || true
                    """
                }
            }
        }

        stage('Push Docker Images to ECR') {
            steps {
                script {
                    def services = ['auth', 'streaming', 'admin', 'chat', 'frontend']

                    services.each { service ->
                        sh "docker push $ECR_REGISTRY/${service}:latest"
                    }
                }
            }
        }

        stage('Deploy with Helm') {
            steps {
                script {
                    sh """
                    helm upgrade --install streamingapp $HELM_CHART_DIR -n $NAMESPACE --create-namespace --values $HELM_CHART_DIR/values.yaml
                    """
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                script {
                    sh "kubectl get pods -n $NAMESPACE"
                    sh "kubectl get svc -n $NAMESPACE"
                    sh "kubectl get ingress -n $NAMESPACE"
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
