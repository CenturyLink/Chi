#!/bin/bash
source "$(dirname "$0")/backstopConfig.sh"

APP_URL="http://localhost:8000"
REPO_PATH=$(cd $(pwd); pwd)
SECONDS=0
TESTS_HOST="host.docker.internal"


##################################
#     Prepare environment.       #
##################################

# Clean reports folder
if [ -d "reports" ]; then
    rm -rf "reports"
fi

set_backstop_config

# echo "[CHI]: Installing dependencies..."

# npm ci;

# THEMES_TO_TEST=$THEMES_TO_TEST ./scripts/build/build.sh

# npm run start:dist &
# APP_PID=$!


TIMER=0

until curl -sf "$APP_URL" > /dev/null; do
  echo "[CHI]: Waiting for app to be available at $APP_URL..."

  if [ $TIMER -ge 60 ]; then
    echo "[CHI]: ERROR: App did not start within 60s. Exiting."
    exit 1
  fi

  sleep 2
  $TIMER=$TIMER + 2
done


##################################
#       Launch docker tests      #
##################################

echo "[CHI]: Launching visual tests in Docker..."

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
  -e TESTS_HOST=${TESTS_HOST} \
  -e STOP_TESTS_ON_FAILURE=0 \
  --cap-add=SYS_ADMIN \
  -v ${REPO_PATH}/backstop_data:/backstopjs/backstop_data \
  -v ${REPO_PATH}/reports:/backstopjs/reports \
  backstopjs
TEST_STATUS=$?



##################################
#            Cleanup             #
##################################


minutes=$((SECONDS / 60))
seconds=$((SECONDS % 60))

echo "[CHI]: Visual tests finished in ${minutes} minutes and ${seconds} seconds"

# if [ -x "$(command -v killall)" ]; then
#   killall node
# fi

if [ $TEST_STATUS -eq 0 ]; then
  echo "Backstop passed ✅"
  exit 1
else
  echo "Backstop failed ❌"
  exit 0
fi
