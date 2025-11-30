docker run -d -p 8010:80 ngnix
docker run -d -p 8020:80 tomee

docker build -t myimage .
notepad docker-compose.yml
docker compose up -d

version: "3.9"
services:
  nginx:
    image: nginx:latest
    ports:
      - "8010:80"
  tomee:
    image: tomee:latest
    ports:
      - "8020:8080"
