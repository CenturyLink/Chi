const gulp = require('gulp');
const replace = require('gulp-replace');
const fs = require('fs');
const currentVersion = JSON.parse(fs.readFileSync('./package.json')).version;

gulp.task('update:boilerplate:assets', function(done) {
  const sriJson = JSON.parse(fs.readFileSync('./sri.json'));
  const cssSRI = sriJson['dist/chi.css'];
  const jsSRI = sriJson['dist/js/chi.js'];
  const favSVGSRI = sriJson['dist/assets/themes/lumen/images/favicon.svg'];
  const favICOSRI = sriJson['dist/assets/themes/lumen/images/favicon.ico'];
  const ceModuleSRI = sriJson['dist/js/ce/ux-chi-ce/ux-chi-ce.esm.js'];

  const newCSS = `<link rel="stylesheet" href="https://lib.lumen.com/chi/${currentVersion}/chi.css" integrity="${cssSRI}" crossorigin="anonymous">`;
  const newJS = `<script src="https://lib.lumen.com/chi/${currentVersion}/js/chi.js" integrity="${jsSRI}" crossorigin="anonymous"></script>`;
  const newFavSVG = `<link rel="icon" type="image/svg+xml" href="https://lib.lumen.com/chi/${currentVersion}/assets/themes/lumen/images/favicon.svg" integrity="${favSVGSRI}" crossorigin="anonymous">`;
  const newFavICO = `<link rel="alternate icon" href="https://lib.lumen.com/chi/${currentVersion}/assets/themes/lumen/images/favicon.ico" integrity="${favICOSRI}" crossorigin="anonymous">`;
  const newCEModule = `<script type="module" src="https://lib.lumen.com/chi/${currentVersion}/js/ce/ux-chi-ce/ux-chi-ce.esm.js" integrity="${ceModuleSRI}" crossorigin="anonymous"></script>`;

  function updateVueFavIcon(path) {
    const newLibLumenFavICO = `<link rel="alternate icon" href="https://lib.lumen.com/chi/${currentVersion}/assets/themes/lumen/images/favicon.ico" integrity="${favICOSRI}" crossorigin="anonymous">`;

    gulp
      .src(`${path}/index.html`)
      .pipe(
        replace(/<link rel="alternate icon" href="https:\/\/lib.lumen.com\/chi\/.*favicon.ico.*>/g, newLibLumenFavICO)
      );
  }

  function updateIndexFile(path) {
    gulp.src(`${path}/index.html`)
      .pipe(replace(/<link rel="stylesheet" href="https:\/\/lib.lumen.com\/chi.*\/chi.css.*>/g,
        newCSS))
      .pipe(replace(/<script src="https:\/\/lib.lumen.com\/chi\/.*\/chi.js.*><\/script>/g,
        newJS))
      .pipe(replace(/<link rel="icon" type="image\/svg.xml" href="https:\/\/lib.lumen.com\/chi\/.*favicon.svg.*>/g,
        newFavSVG))
      .pipe(replace(/<link rel="alternate icon" href="https:\/\/lib.lumen.com\/chi\/.*favicon.ico.*>/g,
        newFavICO))
      .pipe(replace(/<script type="module" src="https:\/\/lib.lumen.com\/chi\/.*ux-chi-ce.esm.js.*><\/script>/g,
        newCEModule))
      .pipe(gulp.dest(path));
    done();
  }

  [
    'src/boilerplates/angular/chi-angular-boilerplate/src',
    'src/boilerplates/react/chi-react-boilerplate/public',
    'src/boilerplates/stencil/chi-stencil-boilerplate/src',
  ].forEach((path) => updateIndexFile(path));

  updateVueFavIcon('src/boilerplates/vue/chi-vue-boilerplate');
});
