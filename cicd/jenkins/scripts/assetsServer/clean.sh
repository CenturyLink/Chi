#!/bin/bash

cat "${WORKSPACE}/CHANGELOG.md"

if [ -e "${WORKSPACE}/ux-chi-AssetsServer" ]; then
  rm -rf "${WORKSPACE}/ux-chi-AssetsServer"
fi