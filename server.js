AWS + Docker (HTML Website Deployment) — Quick Revision Notes
1. Launch EC2 Instance
AWS → Academy Learner Lab → Start Lab
Services → EC2
Launch Instance:
    Name: ubuntu
    AMI: Ubuntu
    Instance Type: t2.micro
    Key Pair: create new
    Enable all checkboxes (security group etc.)
Launch

2. Connect to Instance
Instances → select instance → Connect → SSH client
Copy the SSH command and paste in your terminal

🟦 EC2 Commands (inside the server)
3. Install required softwares
sudo apt update
sudo apt-get install docker.io
sudo apt install git
sudo apt install nano

4. Clone your repository
git clone <your-https-repo-link>
ls
cd <repo-folder-name>

5. Create Dockerfile
nano Dockerfile


Paste:

FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html


Save: CTRL+O → Enter → CTRL+X

6. Build and Run Docker
sudo docker build -t mywebapp .
sudo docker run -d -p 80:80 mywebapp

7. Run Website
Take Public IP of instance → paste in browser
http://<public-ip>

🟧 Nagios (Monitoring Tool) — Quick Notes
1. Run PowerShell as Administrator
docker pull jasonrivers/nagios:latest
docker run -d --name nagios -p 8080:80 jasonrivers/nagios

2. Access Nagios
http://localhost:8080
username: nagiosadmin
password: nagios

🟩 Kubernetes (Minikube – Nginx Deployment)
1. Start Minikube
minikube start


or if driver needed:

minikube start --driver=virtualbox

2. Check status
minikube version
minikube status

3. Create Nginx Deployment
kubectl create deployment mynginx --image=nginx

4. Check Deployment + Pods
kubectl get deployments
kubectl get pods

5. Expose Nginx on NodePort
kubectl expose deployment mynginx --type=NodePort --port=80 --target-port=80

6. Get Service
kubectl get svc

7. Access Nginx Service
minikube service mynginx


or manually:

minikube ip
NodePort = 300xx
Open browser → http://<minikube-ip>:300xx

🟨 Jenkins (Maven Java Project)
1. Create Freestyle Job
New Item → sample-maven-project-build → Freestyle → OK
Source Code Management → git
URL: <your github repo>
Branch: main
Build Steps → Invoke top level maven targets
Goals: clean install
Post build actions → Archive artifacts: **/**
Save

2. Create Test Job (optional if you need)
New Item → sample-maven-project-test → Freestyle
No environment
Build steps:
1) Copy artifacts from build job
2) Invoke top level Maven targets
Goals: test
Post-build: Archive artifacts
Save

3. Create Pipeline View
+ New View → Build Pipeline View
Name: pipeline
Initial Job: sample-maven-project-build
Create
