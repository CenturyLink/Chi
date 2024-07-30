import gulp from 'gulp';
import shell from 'gulp-shell';

function updateFiles(done) {
  shell.task(['bash scripts/updateFiles.sh'])
  done();
}

gulp.task('update-dist-files', updateFiles);