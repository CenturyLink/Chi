import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('update-dist-files', shell.task(['bash scripts/updateFiles.sh']));