import gulp from 'gulp';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';

const merge = require('merge-stream');

function buildIamges(source, dest) {
  return gulp.src(
    source,
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
    .pipe(gulp.dest(dest));
}

function buildWebsiteImages() {
  const globalImages = buildIamges('src/website/assets/images/**/*', 'dist/assets/images');
  const centurylinkImages = buildIamges('src/website/assets/themes/centurylink/images/**/*', 'dist/assets/themes/centurylink/images');
  const lumenImages = buildIamges('src/website/assets/themes/lumen/images/**/*', 'dist/assets/themes/lumen/images');

  return merge(globalImages, centurylinkImages, lumenImages);
}

buildWebsiteImages.description = 'Optimizes website images and puts them in ' +
  'the respective folders. Returns a stream. ';

gulp.task('build:website:images', buildWebsiteImages);
