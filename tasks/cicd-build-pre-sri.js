import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('update-dist-files', shell.task(['bash scripts/updateFiles.sh']));

gulp.task('cicd:build:pre:sri', gulp.series(
  'clean',
  'build:chi',
  'build:test',
  'copy:chi:ce-docs-scripts',
  'update-dist-files',
  'build:website:images'
));
