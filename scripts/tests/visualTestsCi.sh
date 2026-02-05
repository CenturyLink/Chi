#!/bin/bash
source "$(dirname "$0")/backstopConfig.sh"

SECONDS=0
TESTS_HOST="backstop-net"
APP_URL="http://$TESTS_HOST:8000"


##################################
#     Prepare environment.       #
##################################

# Clean reports folder
if [ -d "reports" ]; then
    rm -rf "reports"
fi

echo "[CHI]: Installing dependencies..."

npm i backstopjs@6.3.25;
npm i playwright@1.51.0;
npm install -g playwright@~1.51.0 \
  & npx playwright@~1.51.0 install chromium;

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
#          Launch   tests        #
##################################

echo "[CHI]: Launching visual tests..."

THEMES_TO_TEST=$THEMES_TO_TEST TESTS_HOST=$TESTS_HOST ./scripts/tests/visualTests.sh


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
