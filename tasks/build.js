import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('update-dist-files', shell.task(['bash scripts/updateFiles.sh']));

gulp.task(
  'build',
  gulp.series(
    'clean',
    'build:chi',
    'build:test',
    'build:website',
    'update:boilerplate:assets',
    'build:boilerplates',
    'copy:chi:ce-docs-scripts',
    'update-dist-files'
  )
);