#!/bin/bash

SECONDS=0
export THEMES_TO_BUILD=lumen

if [ ! -d node_modules/mocha ]; then
  export NODE_ENV=development
  npm ci
fi

npm run build:testing
npm run start:dist &
SERVER_PID=$!

node ./scripts/tests/e2eTests.js
TEST_EXIT_CODE=$?

minutes=$((SECONDS / 60))
seconds=$((SECONDS % 60))
echo "[CHI]: E2E tests finished in ${minutes} minutes and ${seconds} seconds"

kill $SERVER_PID 2>/dev/null || true

if [ $TEST_EXIT_CODE -ne 0 ]; then
  echo "[CHI]: E2E tests failed"
  exit $TEST_EXIT_CODE
else
  echo "[CHI]: E2E tests passed"
fi
