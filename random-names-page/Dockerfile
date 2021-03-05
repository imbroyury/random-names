FROM node:fermium-alpine3.13

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm ci

EXPOSE 80

ENTRYPOINT [ "npm", "start" ]