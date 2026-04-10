#!/bin/bash

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <source_file> <destination_folder_or_file>"
    exit 1
fi

source_file="$1"
dest="$2"

if [ ! -f "$source_file" ]; then
    echo "Error: The file '$source_file' does not exist."
    exit 1
fi

if [ -d "$dest" ] || [[ "$dest" == */ ]]; then
    mkdir -p "$dest"
    cp "$source_file" "$dest/"
    exit 0
fi

base=$(basename "$dest")

if [[ "$base" == *.* ]] && [ "$base" != "." ] && [ "$base" != ".." ]; then
    mkdir -p "$(dirname "$dest")"
    cp "$source_file" "$dest"
    exit 0
fi

mkdir -p "$dest"
cp "$source_file" "$dest/"
