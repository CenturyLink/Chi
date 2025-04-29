#!/bin/bash

REPO_PATH=$(cd $(pwd); pwd)

SKIP_CI=true

# Create the backstopjs image
docker build -t backstopjs -f backstop_data/docker/Dockerfile .

# Run backstopjs container
docker run --rm -it --name backstopjs \
  --privileged \
  --shm-size=6gb \
  -e GH_TOKEN \
  -e SKIP_SRI=true \
  -e SKIP_BOILERPLATES=true \
  -e THEMES_TO_BUILD=lumen \
  --cap-add=SYS_ADMIN \
  -v ${REPO_PATH}:/backstopjs \
  -p 8000:8000 \
  backstopjs
