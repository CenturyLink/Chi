#!/bin/bash

chiVue='updates/chi-vue'
ce='updates/ce'
docs='updates/documentation'

dist='dist'

chmod +x scripts/copyFiles.sh

bash scripts/copyFiles.sh $chiVue $dist/chi-vue/umd
# bash copyFiles.sh $ce $dist/js/ce
# bash copyFiles.sh $docs $dist/documentation