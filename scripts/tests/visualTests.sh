#!/bin/bash

SECONDS=0

# Clean reports folder
if [ -d "reports" ]; then
    rm -rf "reports"
fi

bash ./scripts/tests/createReports.sh

npm run build
npm run start:dist &
SERVER_PID=$!

node ./scripts/tests/visualTests.js
TEST_EXIT_CODE=$?

minutes=$((SECONDS / 60))
seconds=$((SECONDS % 60))
echo "[CHI]: Visual tests finished in ${minutes} minutes and ${seconds} seconds"

kill $SERVER_PID
killall node

if [ $TEST_EXIT_CODE -ne 0 ]; then
  echo "[CHI]: Visual tests failed"
  exit $TEST_EXIT_CODE
else
  echo "[CHI]: Visual tests passed"
fi
