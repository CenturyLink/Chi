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
