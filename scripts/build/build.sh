#!/bin/bash
set -e

SECONDS=0

# Clean dist folder
if [ -d "dist" ]; then
    rm -rf "dist"
fi

# Clean sri.json file
if [ -f "sri.json" ]; then
    rm -f "sri.json"
fi

# Build CSS
node ./scripts/build/css/build.js

# Build JS
node ./scripts/build/js/build.js

# Build utils
bash ./scripts/build/utils/copyFile.sh ./src/chi/components/input-file/input-file.js dist
node ./scripts/build/utils/buildIcons.js
node ./scripts/build/utils/buildSprites.js
bash ./scripts/build/utils/copyFiles.sh ./assets dist/assets

# Copy lib
bash ./scripts/build/utils/copyFiles.sh ./lib/chi-custom-elements dist/js/ce
bash ./scripts/build/utils/copyFiles.sh ./lib/chi-documentation dist
bash ./scripts/build/utils/copyFile.sh ./lib/chi-vue/index.umd.js dist/chi-vue/umd

# Build SRI
node ./scripts/build/utils/buildSri.js

# Build boilerplates
bash ./scripts/build/utils/buildBoilerplates.sh

# Build tests

node ./scripts/build/utils/buildTests.js
bash ./scripts/build/utils/copyFiles.sh ./tests/styles dist/tests

minutes=$((SECONDS / 60))
seconds=$((SECONDS % 60))

echo "[CHI]: Build finished in ${minutes} minutes and ${seconds} seconds"