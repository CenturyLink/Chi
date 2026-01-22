#!/bin/bash
source "$(dirname "$0")/backstopConfig.sh"

SECONDS=0
CONFIG_FILES=("responsive" "non-responsive" "non-responsive-ce")

# Clean reports folder
if [ -d "reports" ]; then
    rm -rf "reports"
fi

echo "[CHI]: Installing dependencies..."

# backstop runs on node 20 not 22, npm ci will give conflicts with package-lock
# TO BE REMOVED ONCE MIGRATION TO NODE22 IS COMPLETE
sed -i.bak 's/"@centurylink\/chi-documentation":[[:space:]]*"[^"]*"/"@centurylink\/chi-documentation": "1.57.0"/' package.json && rm package.json.bak
mv package-lock-tests.json package-lock.json

npm i

# npm ci
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

for theme in ${THEMES_TO_TEST//,/ };
do
  for config in "${CONFIG_FILES[@]}"; do
    test_theme backstop-"$config"_"$theme".json
    
    TEST_EXIT_CODE=$?

    if [ $TEST_EXIT_CODE -ne 0 ]; then
      message+=$'\n'"[CHI]: FAILED TESTS: $USER_PATH/reports/$theme/html_report/${config//-/_}/index.html"
      
      if [ $STOP_TESTS_ON_FAILURE -ne 0 ]; then
        break 2
      fi
    fi
  done
done

minutes=$((SECONDS / 60))
seconds=$((SECONDS % 60))
echo "[CHI]: Visual tests finished in ${minutes} minutes and ${seconds} seconds"
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

