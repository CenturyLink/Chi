#!/bin/bash

if [ $# -ne 2 ]; then
    echo "Folders: $0 <origin> <dist>"
    exit 1
fi

origin=$1
dist=$2

if [ ! -d "$origin" ]; then
    echo "Error: '$origin' folder does not exist."
    exit 1
fi

if [ ! -d "$dist" ]; then
    mkdir -p "$dist"
fi

cp -r "$origin"/* "$dist"