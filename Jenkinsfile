pipeline {
  agent any
  tools {
    nodejs 'NodeJS 14.15.4'
  }
  stages {
    stage('Presets') {
      steps {
        dir('.sonar-reports') {
          writeFile file:'dummy',  text:''
        }

        nodejs(nodeJSInstallationName: 'NodeJS 14.15.4' ) {
          sh 'npm install --save-dev'
        }
      }
    }

    stage('Code Analysis') {
      parallel {
        stage('Linting') {
          steps {
            nodejs(nodeJSInstallationName: 'NodeJS 14.15.4' ) {
              sh 'npm run sonar-report-lint'
            }
          }
        }

        stage('Test') {
          steps {
            nodejs(nodeJSInstallationName: 'NodeJS 14.15.4' ) {
              sh 'npm run sonar-report-test'
            }
          }
        }
      }
    }

    stage('SonarReporting') {
      environment {
        SCANNER_HOME = tool 'SonarQubeScanner'
      }

      steps {
        withSonarQubeEnv('SonarQube') {
          sh '''$SCANNER_HOME/bin/sonar-scanner
          '''
        }

        timeout(time: 1, unit: 'HOURS') {
          waitForQualityGate abortPipeline: true
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
  }
}
