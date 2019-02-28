#!/usr/bin/env bash

docker build -t chi:latest .

if [ $1 = "start" ]; then
  docker run --rm -ti --name chi -m 1g \
              -u $(id -u):$(id -g) \
              -v $PWD/src:/app/src:delegated \
              -v $PWD/test:/app/test:delegated \
              -v $PWD/tasks:/app/tasks:delegated \
              -v $PWD/scripts:/app/scripts:delegated \
              -v $PWD/reports:/app/reports:delegated \
              -v $PWD/config:/app/config:delegated \
              -p 8000:8000 \
              -p 35729:35729 \
              chi:latest npm run $1
else
  docker run --rm -ti --name chi --shm-size=1g \
              -u $(id -u):$(id -g) \
              -v $PWD/src:/app/src:delegated \
              -v $PWD/test:/app/test:delegated \
              -v $PWD/tasks:/app/tasks:delegated \
              -v $PWD/scripts:/app/scripts:delegated \
              -v $PWD/reports:/app/reports:delegated \
              -v $PWD/config:/app/config:delegated \
              chi:latest npm run $1
fi
