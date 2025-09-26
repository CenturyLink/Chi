#!/bin/bash
source "$(dirname "$0")/backstopConfig.sh"

SECONDS=0

# Clean reports folder
if [ -d "reports" ]; then
    rm -rf "reports"
fi

echo "[CHI]: Installing dependencies..."

npm ci
npx playwright install

npm run build

npm run start:dist &
SERVER_PID=$!


# Function to perform visual tests
test_theme () {
  THEME=$1

  node ./scripts/tests/visualTests.js $THEME
  return $?
}

set_backstop_config

message=''

for theme in $THEMES_TO_TEST;
do
  test_theme $theme
  TEST_EXIT_CODE=$?

  if [ $TEST_EXIT_CODE -ne 0 ]; then
    message+=$'\n'"[CHI]: Visual tests failed for $theme"
    message+=$'\n\t'"[CHI]: RESPONSIVE REPORT reports/$theme/html_report/responsive/index.html"
    message+=$'\n\t'"[CHI]: NON RESPONSIVE REPORT reports/$theme/html_report/non_responsive/index.html"
    message+=$'\n\t'"[CHI]: CUSTOM ELEMENTS REPORT reports/$theme/html_report/non_responsive_ce/index.html"
  fi
done

minutes=$((SECONDS / 60))
seconds=$((SECONDS % 60))
echo "[CHI]: Visual tests finished in ${minutes} minutes and ${seconds} seconds"
echo "$message"

kill $SERVER_PID

if [ -x "$(command -v killall)" ]; then
  killall node
fi

