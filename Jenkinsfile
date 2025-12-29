pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build & Deploy') {
            steps {
                sh '''
                docker compose down || true
                docker compose build --no-cache
                docker compose up -d
                '''
            }
        }
    }

    post {
        success {
            echo "Frontend deployed successfully"
        }
        failure {
            echo "Pipeline failed"
        }
    }
}
