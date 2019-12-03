import path from 'path';

const rootFolder = path.join(__dirname, '..');
const sources = path.join(rootFolder, '{src,test}', 'chi', '**', '*.scss');

'use strict';
 
var gulp = require('gulp'),
    sassLint = require('gulp-sass-lint');
 
gulp.task('lint:css', function () {
  return gulp.src(sources)
    .pipe(sassLint({
      options: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
});