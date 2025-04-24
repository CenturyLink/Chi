#!/bin/bash

vue_src_dir="src/boilerplates/vue/chi-vue-boilerplate"
stencil_src_dir="src/boilerplates/stencil/chi-stencil-boilerplate"
react_src_dir="src/boilerplates/react/chi-react-boilerplate"
es6_src_dir="src/boilerplates/es6/chi-vue-es6-boilerplate"
angular_src_dir="src/boilerplates/angular/chi-angular-boilerplate"

dist_dir="dist/boilerplates"

mkdir -p "$dist_dir"

src_dirs=("$vue_src_dir" "$stencil_src_dir" "$react_src_dir" "$es6_src_dir" "$angular_src_dir")

for src_dir in "${src_dirs[@]}"; do
  if [ -d "$src_dir" ]; then
    folder_name=$(basename "$src_dir")
    zip -r "$dist_dir/${folder_name}.zip" "$src_dir" > /dev/null 2>&1 
  fi
done
