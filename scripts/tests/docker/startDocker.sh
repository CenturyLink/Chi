#!/bin/bash

REPO_PATH=$(cd $(pwd); pwd)

# Create the backstopjs image
docker build -t backstopjs -f backstop_data/docker/Dockerfile .

# Run backstopjs container
docker run --rm -it --name backstopjs \
  --privileged \
  --shm-size=2gb \
  --cap-add=SYS_ADMIN \
  -v ${REPO_PATH}:/backstopjs \
  -p 8000:8000 \
  backstopjs