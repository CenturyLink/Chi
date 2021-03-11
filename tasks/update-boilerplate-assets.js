const gulp = require('gulp');
const replace = require('gulp-replace');
const fs = require('fs');
let currentVersion = JSON.parse(fs.readFileSync('./package.json')).version;
let cssSRI = JSON.parse(fs.readFileSync('./sri.json'))['dist/chi.css'];
let jsSRI = JSON.parse(fs.readFileSync('./sri.json'))['dist/js/chi.js'];

gulp.task('update:boilerplate:assets', function(done) {
  const newCSS = `<link rel="stylesheet" href="https://assets.ctl.io/chi/${currentVersion}/chi.css" integrity="${cssSRI}" crossorigin="anonymous">`;
  const newJS = `<script src="https://assets.ctl.io/chi/${currentVersion}/js/chi.js" integrity="${jsSRI}" crossorigin="anonymous"></script>`;

  function updateIndexFile(path) {
    gulp.src(`${path}/index.html`)
      .pipe(replace(/<link rel="stylesheet" href="https:\/\/assets\.ctl\.io\/chi.*\/chi.css.*>/g,
        newCSS))
      .pipe(replace(/<script src="https:\/\/assets.ctl.io\/chi\/.*\/chi.js.*><\/script>/g,
        newJS))
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
