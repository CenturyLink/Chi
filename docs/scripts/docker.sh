#!/usr/bin/env bash

docker build -t chi-docs:latest .

if [ $1 = "start" ]; then
  docker run --rm -ti \
              -u $(id -u):$(id -g) \
              -v $PWD/src:/app/src \
              -v $PWD/tasks:/app/tasks \
              -v $PWD/scripts:/app/scripts \
              -p 8080:8080 \
              -p 35730:35730 \
              chi-docs:latest npm run $1
else
  docker run --rm -ti \
              -u $(id -u):$(id -g) \
              -v $PWD/src:/app/src \
              -v $PWD/tasks:/app/tasks \
              -v $PWD/scripts:/app/scripts \
              chi-docs:latest npm run $1
fi
