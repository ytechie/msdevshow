FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY ./out /usr/share/nginx/html
COPY nginx.conf /etc/nginx

RUN echo "`date -u`" > /usr/share/nginx/html/when.txt

EXPOSE 80