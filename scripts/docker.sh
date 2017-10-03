#!/usr/bin/env bash

docker build -t chi:latest .
docker run --rm -ti \
           -u $(id -u):$(id -g) \
           -v $PWD/src:/app/src \
           -v $PWD/test:/app/test \
           -v $PWD/tasks:/app/tasks \
           -v $PWD/scripts:/app/scripts \
           -v $PWD/reports:/app/reports \
           -v $PWD/config:/app/config \
           -p 8000:8000 \
           -p 35729:35729 \
           chi:latest npm run $1
