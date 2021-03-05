# Description

A small application that consists of 2 dockerized pieces:

1. random-names-page
2. random-names-api

## random-names-page

Express server that serves a simple HTML page on port 8000.
The page makes calls to the `/random-name` endpoint on the same server.
The server then makes a request to a `random-names-api` service

## random-names-api

Express based server that has a `/api/random-name` endpoint that spits out random docker container names