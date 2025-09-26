#!/bin/bash
source "$(dirname "$0")/backstopConfig.sh"

for theme in ${THEMES_TO_TEST//,/ };
do
  node ./scripts/tests/approve.js $theme
done
