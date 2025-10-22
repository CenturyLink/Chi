#!/bin/bash

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <source_file> <destination_folder>"
    exit 1
fi

source_file="$1"
destination_folder="$2"

if [ ! -f "$source_file" ]; then
    echo "Error: The file '$source_file' does not exist."
    exit 1
fi

if [ ! -d "$destination_folder" ]; then
    mkdir -p "$destination_folder"
fi

cp "$source_file" "$destination_folder"
