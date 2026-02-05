#!/bin/bash
source "$(dirname "$0")/backstopConfig.sh"

CONFIG_FILES=("responsive" "non-responsive" "non-responsive-ce")

set_backstop_config

echo $(ls /opt/pw-browsers)

# Function to perform visual tests
test_theme () {
  CONFIG=$1

  node ./scripts/tests/visualTests.js $CONFIG
  return $?
}


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


echo "$message"


# if [ -x "$(command -v killall)" ]; then
#   killall node
# fi

if [ -n "$message" ]; then
  exit 1
else
  exit 0
fi

