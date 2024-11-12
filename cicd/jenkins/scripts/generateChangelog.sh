#!/bin/bash

rootPath=$1
packageJsonPath="${rootPath}package.json"

packageVersion=$(jq -r '.version' "${packageJsonPath}")
plainVersion=$(echo "${packageVersion}" | cut -d'-' -f1)
versionMajor=$(echo "${plainVersion}" | cut -d'.' -f1)
versionMinor=$(echo "${plainVersion}" | cut -d'.' -f2)
versionPatch=$(echo "${plainVersion}" | cut -d'.' -f3)

versionMajorOld=$( [ "${versionMajor}" -eq 0 ] && echo "0" || echo "${versionMajor}")
versionMinorOld=$( [ "${versionMinor}" -eq 0 ] && echo "0" || echo $((versionMinor - 1)))
versionPatchOld=$( [ "${versionPatch}" -eq 0 ] && echo "0" || echo $((versionPatch - 1)))

publishVersion="v${versionMajor}.${versionMinor}.${versionPatch}"

echo "READING CHANGELOG FOR VERSION: ${publishVersion}"
echo "${publishVersion}" > "${rootPath}shortCHANGELOG.md"
echo "" >> "${rootPath}shortCHANGELOG.md"
sed -n -e "/${versionMajor}.${versionMinor}.${versionPatch}/,/${versionMajorOld}.${versionMinorOld}.${versionPatchOld}/ p" "${rootPath}CHANGELOG.md" | head -n -2 >> "${rootPath}shortCHANGELOG.md"

echo "${publishVersion}"
