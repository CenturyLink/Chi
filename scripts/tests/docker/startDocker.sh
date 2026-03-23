#!/bin/bash
source "$(dirname "$0")/../backstopConfig.sh"

REPO_PATH=$(cd $(pwd); pwd)

docker build -t backstopjs -f backstop_data/docker/Dockerfile .

docker run --rm -i --name backstopjs \
  --privileged \
  --shm-size=6gb \
  -e GH_TOKEN \
  -e SKIP_SRI=true \
  -e SKIP_BOILERPLATES=true \
  -e SKIP_CHI_DOCUMENTATION=true \
  -e THEMES_TO_BUILD=${THEMES_TO_TEST} \
  -e USER_PATH=${REPO_PATH} \
  -e STOP_TESTS_ON_FAILURE=0 \
  --cap-add=SYS_ADMIN \
  -v ${REPO_PATH}:/backstopjs \
  -p 8000:8000 \
  backstopjs \
  ${1:-tests:visual:run}
