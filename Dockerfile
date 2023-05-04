#FROM nginx:1.24.0-alpine3.17-slim
#WORKDIR /usr/share/nginx/html
#COPY ./build/ ./



FROM node:14-alpine

WORKDIR /app

COPY . /app

RUN npm install

CMD ["npm","start"]
