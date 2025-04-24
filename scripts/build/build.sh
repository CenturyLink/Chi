#!/bin/bash
set -e

SECONDS=0

CHI_DOCUMENTATION="./node_modules/@centurylink/chi-documentation/.output/public"
CHI_CE="./node_modules/@centurylink/chi-custom-elements/dist"
CHI_VUE_UMD="./node_modules/@centurylink/chi-vue/umd/index.umd.js"

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

# Build boilerplates
bash ./scripts/build/utils/buildBoilerplates.sh

# Build tests
node ./scripts/build/utils/buildTests.js
bash ./scripts/build/utils/copyFiles.sh ./tests/styles dist/tests

# Copy assets from dependencies: chi-documentation, chi-vue, chi-custom-elements
bash ./scripts/build/utils/copyFiles.sh $CHI_DOCUMENTATION dist
bash ./scripts/build/utils/copyFile.sh $CHI_VUE_UMD dist/chi-vue/umd
bash ./scripts/build/utils/copyFiles.sh $CHI_CE dist/js/ce

# Build SRI
node ./scripts/build/utils/buildSri.js
bash ./scripts/build/utils/copyFile.sh sri.json dist

minutes=$((SECONDS / 60))
seconds=$((SECONDS % 60))

echo "[CHI]: Build finished in ${minutes} minutes and ${seconds} seconds"
