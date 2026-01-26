# Checks if the variable is already set (jenkins), if not, sets a default value
if [ -z ${THEMES_TO_TEST+x} ]; 
then 
  export THEMES_TO_TEST="lumen"
fi;

# Stop tests on first failure (1 = true, 0 = false)
if [ -z ${STOP_TESTS_ON_FAILURE+x} ]; 
then 
  export STOP_TESTS_ON_FAILURE=1
fi;

export SKIP_BOILERPLATES=true
export SKIP_DOCUMENTATION_INSTALL=true
export SKIP_SRI=true

set_backstop_config () {
  find . -maxdepth 1 -name 'backstop*.json' -not -name '*_*' | while read -r file
  do
    if [ -f "$file" ]; then
      for THEME in ${THEMES_TO_TEST//,/ }; 
      do
        new_file="${file%\.json}_$THEME.json"

        sed "s|<theme>|${THEME}|g" $file > "$new_file"
      done
     fi
  done
}
