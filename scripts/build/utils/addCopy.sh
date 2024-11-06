#!/bin/bash

if [ "$#" -lt 2 ]; then
    echo "Usage: $0 <copyright_message> <file1.js> <file2.js> ..."
    exit 1
fi

copyright_message="$1"

for file in "${@:2}"; do
    if [ -f "$file" ]; then
        temp_file=$(mktemp)

        echo -e "$copyright_message\n" > "$temp_file"
        cat "$file" >> "$temp_file"
        mv "$temp_file" "$file"
    else
        echo "Warning: '$file' is not a valid file."
    fi
done