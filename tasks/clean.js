import del from 'del';
import gulp from 'gulp';
import fs from 'fs';

gulp.task('clean', gulp.series(
    (done) => del([ 'dist/*' ], done),
    (done) => fs.mkdir('dist/js/ce', {recursive: true}, (err) => {
        if (err) throw err;
        done();
      }),
    (done) => fs.mkdir('dist/js/vue', {recursive: true}, (err) => {
        if (err) throw err;
        done();
      })
  ));
