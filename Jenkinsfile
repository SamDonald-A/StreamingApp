pipeline {
    agent any

    environment {
        AWS_REGION     = 'eu-west-2'
        ECR_REGISTRY   = "975050024946.dkr.ecr.${AWS_REGION}.amazonaws.com"
        NAMESPACE      = 'streamingapp'
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
                    withCredentials([[
                        $class: 'AmazonWebServicesCredentialsBinding',
                        credentialsId: 'aws-creds'
                    ]]) {
                        sh '''
                        echo "Logging in to AWS ECR..."
                        aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_REGISTRY
                        '''
                    }
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    def services = ['auth', 'streaming', 'admin', 'chat', 'frontend']

                    services.each { service ->
                        sh """
                        echo "Building Docker image for ${service}..."
                        docker build -t $ECR_REGISTRY/${service}:latest ./StreamingApp/backend/${service} || true
                        """
                    }

                    // Frontend
                    sh """
                    echo "Building Docker image for frontend..."
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
                        sh """
                        echo "Pushing Docker image for ${service} to ECR..."
                        docker push $ECR_REGISTRY/${service}:latest
                        """
                    }
                }
            }
        }

        stage('Deploy with Helm') {
            steps {
                script {
                    sh """
                    echo "Deploying with Helm..."
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
        success {
            echo 'Deployment successful! Sending email...'
            emailext(
                subject: "✅ Jenkins SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                    <p><b>Build Status:</b> SUCCESS</p>
                    <p><b>Job:</b> ${env.JOB_NAME}</p>
                    <p><b>Build Number:</b> ${env.BUILD_NUMBER}</p>
                    <p><b>Check Build:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>
                """,
                mimeType: 'text/html',
                to: 'samdonaldand@gmail.com'
            )
        }

        failure {
            echo 'Deployment failed! Sending email...'
            emailext(
                subject: "❌ Jenkins FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                    <p><b>Build Status:</b> FAILED</p>
                    <p><b>Job:</b> ${env.JOB_NAME}</p>
                    <p><b>Build Number:</b> ${env.BUILD_NUMBER}</p>
                    <p><b>Check Build Logs:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>
                """,
                mimeType: 'text/html',
                to: 'samdonaldand@gmail.com'  
            )
        }

        always {
            echo 'Pipeline finished.'
        }
    }
}
