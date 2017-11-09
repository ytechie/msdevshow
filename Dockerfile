# Pull nginx base image
FROM nginx:latest

# Expost port 80
EXPOSE 80

COPY ./out /usr/share/nginx/html