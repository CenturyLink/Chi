#!/bin/bash

theme="$1"
theme_dir="src/chi/themes/$theme"
backup_suffix=".bak"

if [[ "$OSTYPE" == "darwin"* ]]; then
  SED_FLAGS="-i ''"
else
  SED_FLAGS="-i"
fi

if [ -d "$theme_dir" ]; then
  find src/chi/components -type f -name "*.scss" | while read -r file; do
    if [ -f "$file" ]; then
      cp "$file" "$file$backup_suffix"

      tmp_file=$(mktemp "${file}.XXXXXX")
      sed "s|@import '_variables'|@import 'src/chi/themes/$theme/_variables.scss'|g" "$file" > "$tmp_file"
      sed "s|@import '_mixins'|@import 'src/chi/themes/$theme/_mixins.scss'|g" "$tmp_file" > "${file}.tmp"
      
      mv "${file}.tmp" "$file"
      rm "$tmp_file"
    else
      echo "File $file does not exist."
    fi
  done
else
  echo "$theme_dir does not exist."
fi
