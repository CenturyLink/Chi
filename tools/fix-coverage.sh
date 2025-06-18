replace_string() {
  machine="$(uname -s)"

  echo "s/$2/$3/"

  if [[ "$machine" == "Darwin" ]]
  then
      sed -i '' "s/$2/$3/" "$1"
  else
      sed -i "s/$2/$3/" "$1"
  fi

  echo "Replaced value in '$1' (using $machine)..."
}

target="node_modules/istanbul-lib-source-maps/lib/get-mapping.js"
old_expresion="source: pathutils.relativeTo(start.source, origFile),"
new_expresion="source: origFile,"

replace_string $target "$old_expresion" "$new_expresion"