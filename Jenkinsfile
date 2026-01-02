pipeline {
    agent any

    options {
        timeout(time: 60, unit: 'MINUTES')
        durabilityHint('PERFORMANCE_OPTIMIZED')
        timestamps()
    }

    environment {
        AWS_REGION    = 'eu-west-2'
        ECR_REGISTRY  = '975050024946.dkr.ecr.eu-west-2.amazonaws.com'
        NAMESPACE     = 'streamingapp'
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
                withCredentials([
                    [$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-creds']
                ]) {
                    sh '''
                        set -e
                        aws ecr get-login-password --region $AWS_REGION \
                        | docker login --username AWS --password-stdin $ECR_REGISTRY
                    '''
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                sh '''
                    set -euo pipefail

                    build_image () {
                        NAME=$1
                        PATH=$2
                        echo "🚀 Building $NAME"
                        docker build -t $ECR_REGISTRY/$NAME:latest $PATH
                    }

                    build_image auth backend/authService
                    build_image admin backend/adminService
                    build_image chat backend/chatService
                    build_image streaming backend/streamingService
                    build_image frontend frontend
                '''
            }
        }

        stage('Push Images to ECR') {
            steps {
                sh '''
                    set -euo pipefail

                    push_image () {
                        NAME=$1
                        echo "📦 Pushing $NAME"
                        docker push $ECR_REGISTRY/$NAME:latest
                    }

                    push_image auth
                    push_image admin
                    push_image chat
                    push_image streaming
                    push_image frontend
                '''
            }
        }

        stage('Deploy with Helm') {
            steps {
                sh '''
                    set -euo pipefail

                    helm upgrade --install streamingapp $HELM_CHART_DIR \
                      --namespace $NAMESPACE \
                      --create-namespace \
                      --values $HELM_CHART_DIR/values.yaml \
                      --atomic \
                      --timeout 10m \
                      --debug
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                    kubectl get pods -n $NAMESPACE -o wide
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
                 body: """Build Successful 🎉

Job: ${env.JOB_NAME}
Build: #${env.BUILD_NUMBER}

URL:
${env.BUILD_URL}
"""
        }
        failure {
            mail to: 'samdonaldand@gmail.com',
                 subject: "❌ Jenkins FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: """Build Failed ❌

Job: ${env.JOB_NAME}
Build: #${env.BUILD_NUMBER}

Check logs:
${env.BUILD_URL}
"""
        }
        always {
            echo 'Pipeline finished.'
        }
    }
}
