import gulp from 'gulp';

gulp.task('watch', [ 'serve' ], () => {
  gulp.watch('src/chi/**/*.scss', [ 'lint:css', 'build:chi' ]);
  gulp.watch('src/website/assets/images/**/*', [ 'build:website:images' ]);
  gulp.watch('src/website/assets/styles/**/*', [ 'build:website:styles' ]);
  gulp.watch('src/website/assets/scripts/**/*', [ 'build:website:scripts' ]);
  gulp.watch('src/website/views/**/*', [ 'build:website:views' ]);
  gulp.watch('test/**/*.pug', [ 'build:test' ]);
});
