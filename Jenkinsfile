pipeline {
    agent any

    options {
        timeout(time: 60, unit: 'MINUTES')
        durabilityHint('PERFORMANCE_OPTIMIZED')
        timestamps()
    }

    environment {
        AWS_REGION     = 'eu-west-2'
        ECR_REGISTRY   = '975050024946.dkr.ecr.eu-west-2.amazonaws.com'
        NAMESPACE      = 'streamingapp'
        HELM_CHART_DIR = 'streaming-app-helm'
        DOCKER         = '/usr/bin/docker'
        EKS_CLUSTER    = 'sam-cluster-streaming'
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
                    [$class: 'AmazonWebServicesCredentialsBinding',
                     credentialsId: 'aws-creds']
                ]) {
                    sh '''
                        set -e
                        aws ecr get-login-password --region $AWS_REGION | \
                        $DOCKER login --username AWS --password-stdin $ECR_REGISTRY
                    '''
                }
            }
        }

        stage('Configure kubectl for EKS') {
            steps {
                sh '''
                    set -e
                    aws eks update-kubeconfig \
                      --region $AWS_REGION \
                      --name $EKS_CLUSTER

                    kubectl get nodes
                '''
            }
        }

        stage('Build Docker Images') {
            steps {
                sh '''
                    set -e

                    build_image () {
                        NAME=$1
                        DOCKERFILE=$2
                        CONTEXT=$3

                        echo "🚀 Building $NAME"
                        $DOCKER build \
                          -t $ECR_REGISTRY/$NAME:latest \
                          -f $DOCKERFILE \
                          $CONTEXT
                    }

                    build_image auth backend/authService/Dockerfile backend
                    build_image admin backend/adminService/Dockerfile backend
                    build_image chat backend/chatService/Dockerfile backend
                    build_image streaming backend/streamingService/Dockerfile backend
                    build_image frontend frontend/Dockerfile frontend
                '''
            }
        }

        stage('Push Images to ECR') {
            steps {
                sh '''
                    set -e
                    $DOCKER push $ECR_REGISTRY/auth:latest
                    $DOCKER push $ECR_REGISTRY/admin:latest
                    $DOCKER push $ECR_REGISTRY/chat:latest
                    $DOCKER push $ECR_REGISTRY/streaming:latest
                    $DOCKER push $ECR_REGISTRY/frontend:latest
                '''
            }
        }

        stage('Deploy Application with Helm') {
            steps {
                sh '''
                    set -e
                    helm upgrade --install streamingapp $HELM_CHART_DIR \
                      --namespace $NAMESPACE \
                      --create-namespace \
                      --values $HELM_CHART_DIR/values.yaml \
                      --wait \
                      --timeout 10m
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
                 subject: "SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: """Build Successful

Job: ${env.JOB_NAME}
Build: #${env.BUILD_NUMBER}
URL: ${env.BUILD_URL}
"""
        }

        failure {
            mail to: 'samdonaldand@gmail.com',
                 subject: "FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: """Build Failed

Job: ${env.JOB_NAME}
Build: #${env.BUILD_NUMBER}
URL: ${env.BUILD_URL}
"""
        }
    }
}
