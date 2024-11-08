#!/bin/bash

SECONDS=0

npm run build
npm run start:dist &
SERVER_PID=$!

node ./scripts/tests/e2eTests.js
TEST_EXIT_CODE=$?

minutes=$((SECONDS / 60))
seconds=$((SECONDS % 60))
echo "[CHI]: E2E tests finished in ${minutes} minutes and ${seconds} seconds"

kill $SERVER_PID
killall node

if [ $TEST_EXIT_CODE -ne 0 ]; then
  echo "[CHI]: E2E tests failed"
  exit $TEST_EXIT_CODE
else
  echo "[CHI]: E2E tests passed"
fi