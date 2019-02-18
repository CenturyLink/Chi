import gulp from 'gulp';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';

function buildWebsiteImages() {
  return gulp.src(
    'src/website/assets/images/**/*',
    { since: gulp.lastRun(buildWebsiteImages) })
    .pipe(plumber())
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest('dist/assets/images'));
}

buildWebsiteImages.description = 'Optimizes images and puts them in ' +
  'the dist/assets/images folder. Returns a stream. ';

gulp.task('build:website:images', buildWebsiteImages);
