#!/bin/bash

if [ "$#" -lt 2 ]; then
  exit 1
fi

origin="$1"
dest="$2"

if [ ! -d "$origin" ]; then
  exit 1
fi

mkdir -p "$dest"
cp -r "$origin/"* "$dest"
