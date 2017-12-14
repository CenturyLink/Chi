!/usr/bin/env bash

docker build -t chi:latest .

if [ $1 = "start" ]; then
  docker run --rm -ti -m 400M \
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
else
  docker run --rm -ti --shm-size=1g \
              -u $(id -u):$(id -g) \
              -v $PWD/src:/app/src \
              -v $PWD/test:/app/test \
              -v $PWD/tasks:/app/tasks \
              -v $PWD/scripts:/app/scripts \
              -v $PWD/reports:/app/reports \
              -v $PWD/config:/app/config \
              chi:latest npm run $1
fi
