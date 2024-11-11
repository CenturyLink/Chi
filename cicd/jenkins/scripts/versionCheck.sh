#!/bin/bash

set +x

git whatchanged -1 --format=oneline
git diff HEAD~2 package.json | grep '"version":' || echo "No package.json changes"

rm -rf chi_version_bump

if [ $(git diff HEAD~2 package.json | grep '"version":' | wc -l) -eq 2 ]; then
    echo -n "yes" > chi_version_bump
else
    echo -n "no" > chi_version_bump
fi

cat chi_version_bump
echo "All good."