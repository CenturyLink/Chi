#!/bin/bash
set -e

SECONDS=0

CHI_DOCUMENTATION="./node_modules/@centurylink/chi-documentation"
CHI_CE="./node_modules/@centurylink/chi-custom-elements"
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
if [ -z "${SKIP_BOILERPLATES}" ]; then
  bash ./scripts/build/utils/buildBoilerplates.sh
fi

# Build tests
node ./scripts/build/utils/buildTests.js
bash ./scripts/build/utils/copyFiles.sh ./tests/styles dist/tests

# Copy assets from dependencies: chi-documentation, chi-vue, chi-custom-elements
bash ./scripts/build/utils/copyFiles.sh $CHI_DOCUMENTATION/.output/public dist
bash ./scripts/build/utils/copyFile.sh $CHI_DOCUMENTATION/CHANGELOG.md dist
bash ./scripts/build/utils/copyFile.sh $CHI_VUE_UMD dist/chi-vue/umd
bash ./scripts/build/utils/copyFiles.sh "$CHI_CE/dist" dist/js/ce

# Has to be executed after the documentation assets are copied until docs.json is removed from chi-documentation repository
bash ./scripts/build/utils/copyFile.sh "$CHI_CE/docs/docs.json" dist

# Build SRI
if [ -z "${SKIP_SRI}" ]; then
  node ./scripts/build/utils/buildSri.js;
  bash ./scripts/build/utils/copyFile.sh sri.json dist;
fi

minutes=$((SECONDS / 60))
seconds=$((SECONDS % 60))

echo "[CHI]: Build finished in ${minutes} minutes and ${seconds} seconds"
