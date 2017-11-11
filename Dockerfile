FROM nginx:latest

COPY ./out /usr/share/nginx/html
COPY nginx.conf /etc/nginx

EXPOSE 80