pipeline {
  agent any
  stages {
    stage('SonarCodeQuality') {
      environment {
        SCANNER_HOME =SonarQubeSanner
      }
      steps {
        withSonarQubeEnv 'SonarQube' {
          sh '''$SCANNER_HOME/bin/sonar-scanner
          '''
        }
      }
    }

    stage('Build') {
      steps {
        nodejs(nodeJSInstallationName: 'NodeJS 14.15.4' ) {
					sh 'npm install'
					sh 'npm run css-compile'
					sh 'npm run css-purifyjs'
					sh 'npm run css-prefix'
					sh 'npm run css-minify'
        }
      }
    }
  }