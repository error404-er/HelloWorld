build:
  B - INVOKE
  P - ARCHIEVE, BUILD
test
  B - COPY, INVOKE
  P - ARCHIEVE, .. BUILD
deploy
  B - COPY
  P - DEPLOY .WAR  **.*.war webpath, TOMCAT - admin/****** url   */



SCRIPT
    node {
    
    stage('Git Repo & Clean') {
        echo "Cloning repository and cleaning project"

        // Clone Git repository
        bat 'git clone https://github.com/budarajumadhurika/SampleMavenJavaProject.git'

        // Maven clean
        bat 'mvn clean -f SampleMavenJavaProject'
    }

    stage('Install') {
        echo "Running Maven install"
        bat 'mvn install -f SampleMavenJavaProject'
    }

    stage('Test') {
        echo "Running Maven tests"
        bat 'mvn test -f SampleMavenJavaProject'
    }
}


WEBHOOKS
  ngrok.exe http 8888
url - /github-webhook/
