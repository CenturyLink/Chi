#!/bin/bash

sed -i 's#/getting-started#getting-started#g' dist/index.html

cat "${WORKSPACE}/CHANGELOG.md"

if [ -e "${WORKSPACE}/ux-chi-AssetsServer" ]; then
  rm -rf "${WORKSPACE}/ux-chi-AssetsServer"
fi