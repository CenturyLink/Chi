#!/bin/bash
source "$(dirname "$0")/../backstopConfig.sh"

REPO_PATH=$(cd $(pwd); pwd)

# Create the backstopjs image
docker build -t backstopjs -f backstop_data/docker/Dockerfile .

# Run backstopjs container
docker run --rm -it --name backstopjs \
  --privileged \
  --shm-size=6gb \
  -e GH_TOKEN \
  -e SKIP_SRI=true \
  -e SKIP_BOILERPLATES=true \
  -e THEMES_TO_BUILD=${THEMES_TO_TEST} \
  -e USER_PATH=${REPO_PATH} \
  -e STOP_TESTS_ON_FAILURE=0 \
  --cap-add=SYS_ADMIN \
  -v ${REPO_PATH}:/backstopjs \
  -p 8000:8000 \
  backstopjs
