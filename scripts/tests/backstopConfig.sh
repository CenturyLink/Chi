# to add new theme, execute the command backstop('reference')
# needs to add the theme report also in jenkinsfile
# export THEMES_TO_TEST="lumen portal centurylink colt brightspeed test"
export THEMES_TO_TEST="lumen"

set_backstop_config () {
  find . -maxdepth 1 -name 'backstop*.json' -not -name '*_*' | while read -r file
  do
    if [ -f "$file" ]; then
      for THEME in $THEMES_TO_TEST; 
      do
        new_file="${file%\.json}_$THEME.json"

        sed "s|<theme>|${THEME}|g" $file > "$new_file"
      done
     fi
  done
}
