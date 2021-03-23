FROM node:fermium-alpine3.13

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm ci

EXPOSE 8000

ENTRYPOINT [ "npm", "start" ]