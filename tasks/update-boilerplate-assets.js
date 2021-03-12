const gulp = require('gulp');
const replace = require('gulp-replace');
const fs = require('fs');
const currentVersion = JSON.parse(fs.readFileSync('./package.json')).version;
const sriJson = JSON.parse(fs.readFileSync('./sri.json'));
const cssSRI = sriJson['dist/chi.css'];
const jsSRI = sriJson['dist/js/chi.js'];
const favSVGSRI = sriJson['src/website/assets/images/favicon.svg'];
const favICOSRI = sriJson['src/website/assets/images/favicon.ico'];
const ceModuleSRI = sriJson['src/custom-elements/www/build/ux-chi-ce.esm.js'];
const ceNoModuleSRI = sriJson['src/custom-elements/www/build/ux-chi-ce.js'];

gulp.task('update:boilerplate:assets', function(done) {
  const newCSS = `<link rel="stylesheet" href="https://assets.ctl.io/chi/${currentVersion}/chi.css" integrity="${cssSRI}" crossorigin="anonymous">`;
  const newJS = `<script src="https://assets.ctl.io/chi/${currentVersion}/js/chi.js" integrity="${jsSRI}" crossorigin="anonymous"></script>`;
  const newFavSVG = `<link rel="icon" type="image/svg+xml" href="https://assets.ctl.io/chi/${currentVersion}/assets/images/favicon.svg" integrity="${favSVGSRI}" crossorigin="anonymous">`;
  const newFavICO = `<link rel="alternate icon" href="https://assets.ctl.io/chi/${currentVersion}/assets/images/favicon.ico" integrity="${favICOSRI}" crossorigin="anonymous">`;
  const newCEModule = `<script type="module" src="https://assets.ctl.io/chi/${currentVersion}/js/ce/ux-chi-ce/ux-chi-ce.esm.js" integrity="${ceModuleSRI}" crossorigin="anonymous"></script>`;
  const newCENoModule = `<script nomodule="" src="https://assets.ctl.io/chi/${currentVersion}/js/ce/ux-chi-ce/ux-chi-ce.js" integrity="${ceNoModuleSRI}" crossorigin="anonymous"></script>`;

  function updateIndexFile(path) {
    gulp.src(`${path}/index.html`)
      .pipe(replace(/<link rel="stylesheet" href="https:\/\/assets\.ctl\.io\/chi.*\/chi.css.*>/g,
        newCSS))
      .pipe(replace(/<script src="https:\/\/assets.ctl.io\/chi\/.*\/chi.js.*><\/script>/g,
        newJS))
      .pipe(replace(/<link rel="icon" type="image\/svg.xml" href="https:\/\/assets.ctl.io\/chi\/.*favicon.svg.*>/g,
        newFavSVG))
      .pipe(replace(/<link rel="alternate icon" href="https:\/\/assets.ctl.io\/chi\/.*favicon.ico.*>/g,
        newFavICO))
      .pipe(replace(/<script type="module" src="https:\/\/assets.ctl.io\/chi\/.*ux-chi-ce.esm.js.*><\/script>/g,
        newCEModule))
      .pipe(replace(/<script nomodule="" src="https:\/\/assets.ctl.io\/chi\/.*ux-chi-ce.js.*><\/script>/g,
        newCENoModule))
      .pipe(gulp.dest(path));
    done();
  }

  [
    'src/boilerplates/angular/chi-angular-boilerplate/src',
    'src/boilerplates/es6/chi-vue-es6-boilerplate/public',
    'src/boilerplates/react/chi-react-boilerplate/public',
    'src/boilerplates/stencil/chi-stencil-boilerplate/src',
    'src/boilerplates/vue/chi-vue-boilerplate/public'
  ].forEach(path => updateIndexFile(path));
});
