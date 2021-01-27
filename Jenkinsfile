pipeline {
  agent any
  stages {
    stage('Presets') {
			steps {
      	nodejs(nodeJSInstallationName: 'NodeJS 14.15.4' ) {
					sh 'npm install --save-dev'
      	}
			}
    }
    stage('SonarCodeQuality') {
      environment {
        SCANNER_HOME = tool 'SonarQubeScanner'
      }
      steps {
        nodejs(nodeJSInstallationName: 'NodeJS 14.15.4' ) {
         sh 'npm run lint-sonar-report' 
        }
        dir('.sonar-reports') {
          writeFile file:'dummy',  text:''
        }
        withSonarQubeEnv('SonarQube') {
          sh '''$SCANNER_HOME/bin/sonar-scanner
          '''
        }
      }
    }

    stage('Build CSS') {
      steps {
        nodejs(nodeJSInstallationName: 'NodeJS 14.15.4' ) {
					sh 'npm run css-compile'
					sh 'npm run css-purify'
					sh 'npm run css-prefix'
					sh 'npm run css-minify'
        }
      }
    }

    stage('Test') {
      steps {
        nodejs(nodeJSInstallationName: 'NodeJS 14.15.4' ) {
          sh 'npm run test'
        }
      }
    }
  }
}
