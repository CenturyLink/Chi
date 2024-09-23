#!/bin/bash

chiVue='lib/chi-vue'
ce='lib/chi-custom-elements'
docs='lib/documentation'

dist='dist'

chmod +x scripts/copyFiles.sh

bash scripts/copyFiles.sh $chiVue $dist/chi-vue/umd
bash scripts/copyFiles.sh $ce $dist/js/ce
# bash copyFiles.sh $docs $dist/documentation