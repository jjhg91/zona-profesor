FROM nginx:1.24.0-alpine3.17-slim
WORKDIR /usr/share/nginx/html
COPY ./build/ ./
