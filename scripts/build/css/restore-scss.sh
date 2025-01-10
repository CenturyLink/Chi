#!/bin/bash

backup_suffix=".bak"

find src/chi/components -type f -name "*.scss" | while read -r file; do
  if [ -f "$file$backup_suffix" ]; then
    mv "$file$backup_suffix" "$file"
  fi
done