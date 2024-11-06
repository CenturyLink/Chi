FROM nexusprod.corp.intranet:4567/nginx:1.19.2-alpine

COPY ./cicd/docker/nginx/default.conf /etc/nginx/conf.d/
COPY ./dist/ /var/www/html/