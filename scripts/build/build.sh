#!/bin/bash
source "$(dirname "$0")/../tests/backstopConfig.sh"
set -e

SECONDS=0

CHI_DOCUMENTATION="./node_modules/@centurylink/chi-documentation"
CHI_CE="./node_modules/@centurylink/chi-custom-elements"
CHI_VUE="./node_modules/@centurylink/chi-vue"
CHI_VUE_UMD="./node_modules/@centurylink/chi-vue/umd/index.umd.js"

# Clean dist folder
if [ -d "dist" ]; then
    rm -rf "dist"
fi

# Build CSS
node ./scripts/build/css/build.js

# Build JS
node ./scripts/build/js/build.js

# Build utils
bash ./scripts/build/utils/copyFile.sh ./src/chi/components/input-file/input-file.js dist
node ./scripts/build/utils/buildIcons.js

# Copy static assets
bash ./scripts/build/utils/copyFiles.sh ./assets/images dist/assets/images
bash ./scripts/build/utils/copyFiles.sh ./assets/themes/connect dist/assets/themes/connect
bash ./scripts/build/utils/copyFiles.sh ./assets/themes/lumen dist/assets/themes/lumen
bash ./scripts/build/utils/copyFiles.sh ./assets/themes/centurylink dist/assets/themes/centurylink

# Build boilerplates
if [ -z "${SKIP_BOILERPLATES}" ]; then
  bash ./scripts/build/utils/buildBoilerplates.sh
fi

# Build tests
node ./scripts/build/utils/buildTests.js $THEMES_TO_TEST
bash ./scripts/build/utils/copyFiles.sh ./tests/styles dist/tests

# Copy assets from dependencies: chi-documentation (optional), chi-vue, chi-custom-elements
if [ -z "${SKIP_CHI_DOCUMENTATION}" ]; then
  bash ./scripts/build/utils/copyFiles.sh $CHI_DOCUMENTATION/.output/public dist
  bash ./scripts/build/utils/copyFile.sh $CHI_DOCUMENTATION/CHANGELOG.md dist
else
  echo "[CHI]: SKIP_CHI_DOCUMENTATION is set — skipping @centurylink/chi-documentation (.output/public, CHANGELOG.md)"
fi
bash ./scripts/build/utils/copyFile.sh $CHI_VUE_UMD dist/chi-vue/umd
bash ./scripts/build/utils/copyFiles.sh "$CHI_CE/dist" dist/js/ce

# Has to be executed after the documentation assets are copied until docs.json is removed from chi-documentation repository
bash ./scripts/build/utils/copyFile.sh "$CHI_CE/docs/docs.json" dist

# Build MCP metadata
node ./scripts/build/utils/buildMcp.js

# Copy MCP metadata to dist/metadata
mkdir -p dist/metadata
bash ./scripts/build/utils/copyFile.sh src/mcp/metadata.json dist/metadata/chi.json # Chi

if [ -f "$CHI_CE/src/mcp/metadata.json" ]; then
  bash ./scripts/build/utils/copyFile.sh "$CHI_CE/src/mcp/metadata.json" dist/metadata/custom-elements.json # Chi Custom Elements
fi

if [ -f "$CHI_VUE/src/mcp/metadata.json" ]; then
  bash ./scripts/build/utils/copyFile.sh "$CHI_VUE/src/mcp/metadata.json" dist/metadata/vue.json # Chi Vue
fi

# Build SRI
if [ -z "${SKIP_SRI}" ] && [ "${BUILD_TARGET}" = "prod" ]; then
  if [ -f "sri.json" ]; then
    rm -f "sri.json"
  fi

  node ./scripts/build/utils/buildSri.js;
  bash ./scripts/build/utils/copyFile.sh sri.json dist;
else
  echo "[CHI]: Skipping SRI generation for non-prod build"
fi

minutes=$((SECONDS / 60))
seconds=$((SECONDS % 60))

echo "[CHI]: Build finished in ${minutes} minutes and ${seconds} seconds"
