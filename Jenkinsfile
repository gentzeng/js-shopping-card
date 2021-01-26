pipeline {
  agent any
  stages {
    stage('CodeQuality') {
      steps {
        withSonarQubeEnv 'SonarScanner'
        waitForQualityGate(credentialsId: 'SonarQube', abortPipeline: true)
      }
    }

    stage('Build') {
      steps {
        sh '''								nodejs(nodeJSInstallationName: \'NodeJS 14.15.4\' ) {
										sh \'npm install\'
                		sh \'npm run css-compile\'
                		sh \'npm run css-purifyjs\'
                		sh \'npm run css-prefix\'
                		sh \'npm run css-minify\'
								}'''
        }
      }

    }
  }