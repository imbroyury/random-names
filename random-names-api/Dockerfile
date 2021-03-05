FROM node:fermium-alpine3.13

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm ci

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]