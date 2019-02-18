import gulp from 'gulp';

const watchOptions = { usePolling: true, interval: 500 };

gulp.task('watch', gulp.series(
  'build',
  gulp.parallel(
    'serve',
    () => gulp.watch(
      'src/chi/**/*.scss', 
      watchOptions,
      gulp.series(
        'serve:notify:start',
        gulp.parallel('lint:css', 'build:chi:styles'),
        'serve:notify:end'
      )
    ),
    () => gulp.watch(
      'src/chi/**/*.js', 
      watchOptions,
      gulp.series(
        'serve:notify:start',
          'build:chi:scripts',
          'build:chi:scriptsES6',
          'build:chi:scriptsAMD',
        'serve:notify:end',
        'serve:reload'
      )
    ),
    () => gulp.watch(
      'src/website/assets/images/**/*', 
      watchOptions,
      gulp.series(
        'serve:notify:start',
        'build:website:images',
        'serve:notify:end',
        'serve:reload'
      )
    ),
    () => gulp.watch(
      'src/website/assets/styles/**/*', 
      watchOptions,
      gulp.series(
        'serve:notify:start',
        'build:website:styles',
        'serve:notify:end'
      )
    ),
    () => gulp.watch(
      'src/website/assets/scripts/**/*', 
      watchOptions,
      gulp.series(
        'serve:notify:start',
        'build:website:scripts',
        'serve:notify:end',
        'serve:reload'
      )
    ),
    () => gulp.watch(
      'src/website/views/**/*', 
      watchOptions,
      gulp.series(
        'serve:notify:start',
        'build:website:views',
        'serve:notify:end',
        'serve:reload'
      )
    ),
    () => gulp.watch(
      'test/**/*.pug', 
      watchOptions,
      gulp.series(
        'serve:notify:start',
        'build:test',
        'serve:notify:end',
        'serve:reload'
      )
    )
  )
));
