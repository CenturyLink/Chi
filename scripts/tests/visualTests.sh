#!/bin/bash
source "$(dirname "$0")/backstopConfig.sh"

# 1. Read the target config from the command line argument
TARGET_CONFIG=$1

if [ -z "$TARGET_CONFIG" ]; then
  echo "Error: No config provided. Usage: ./visualTests.sh responsive"
  exit 1
fi

SECONDS=0

if [ -d "reports" ]; then
    rm -rf "reports"
fi

echo "[CHI]: Installing dependencies for $TARGET_CONFIG..."

# TO BE REMOVED ONCE MIGRATION TO NODE22 IS COMPLETE
sed -i.bak 's/"@centurylink\/chi-documentation":[[:space:]]*"[^"]*"/"@centurylink\/chi-documentation": "1.57.0"/' package.json && rm package.json.bak
mv package-lock-tests.json package-lock.json

npm i

npx playwright install

npm run build

npm run start:dist &
SERVER_PID=$!

# Function to perform visual tests
test_theme () {
  CONFIG=$1
  node ./scripts/tests/visualTests.js $CONFIG
  return $?
}

set_backstop_config

message=''

# 2. Loop only through themes, but strictly execute the TARGET_CONFIG
for theme in ${THEMES_TO_TEST//,/ }; do
  echo "[CHI]: Running $TARGET_CONFIG for $theme..."
  test_theme backstop-"$TARGET_CONFIG"_"$theme".json
  
  TEST_EXIT_CODE=$?

  if [ $TEST_EXIT_CODE -ne 0 ]; then
    # Note: ensure we replace the dash with underscore for the HTML report path if that matches your folder structure
    message+=$'\n'"[CHI]: FAILED TESTS: $USER_PATH/reports/$theme/html_report/${TARGET_CONFIG//-/_}/index.html"
    
    if [ $STOP_TESTS_ON_FAILURE -ne 0 ]; then
      break
    fi
  fi
done

minutes=$((SECONDS / 60))
seconds=$((SECONDS % 60))
echo "[CHI]: Visual tests ($TARGET_CONFIG) finished in ${minutes} minutes and ${seconds} seconds"
echo "$message"

kill $SERVER_PID

if [ -x "$(command -v killall)" ]; then
  killall node
fi

if [ -n "$message" ]; then
  exit 1
else
  exit 0
fi