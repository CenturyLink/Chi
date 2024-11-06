#!/bin/bash

CURRENT_VERSION=$(grep '"version"' package.json | awk -F'"' '{print $4}')
NEW_VERSION=$1

export LC_ALL=C

grep -rl "$CURRENT_VERSION" --exclude-dir={lib,src,dist,node_modules,tests,backstop_data,reports} --exclude={package-lock.json,README.md} . | while read -r file; do
  sed -i "" "s|$CURRENT_VERSION|$NEW_VERSION|g" "$file"
done

echo "[CHI]: Release from \"$CURRENT_VERSION\" to \"$NEW_VERSION\" done successfully"