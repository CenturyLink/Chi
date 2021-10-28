import gulp from 'gulp';

const requires = {
  'clean': require('./tasks/clean.js'),
  'serve': require('./tasks/serve.js'),
  'update-boilerplate-assets': require('./tasks/update-boilerplate-assets.js'),
  'build-boilerplates': require('./tasks/build-boilerplates.js'),
  'build-chi-styles': require('./tasks/build-chi-styles.js'),
  'build-ctl-styles': require('./tasks/build-ctl-styles.js'),
  'build-portal-styles': require('./tasks/build-portal-styles.js'),
  'build-chi-assets': require('./tasks/build-chi-assets.js'),
  'build-chi-sprite': require('./tasks/build-chi-sprite.js'),
  'build-chi-scripts-amd': require('./tasks/build-chi-scripts-amd.js'),
  'build-chi-scripts-es6': require('./tasks/build-chi-scripts-es6.js'),
  'build-chi-scripts': require('./tasks/build-chi-scripts.js'),
  'build-test-fixtures': require('./tasks/build-test-fixtures.js'),
  'build-chi': require('./tasks/build-chi.js'),
  'build-test-styles': require('./tasks/build-test-styles.js'),
  'build-test': require('./tasks/build-test.js'),
  'build-website-images': require('./tasks/build-website-images.js'),
  'build-website-scripts': require('./tasks/build-website-scripts.js'),
  'build-website-styles': require('./tasks/build-website-styles.js'),
  'build-website-views': require('./tasks/build-website-views.js'),
  'build-website': require('./tasks/build-website.js'),
  'copy-chi-ce-docs-scripts': require('./tasks/copy-chi-ce-docs-scripts'),
  'copy-chi-ce-scripts': require('./tasks/copy-chi-ce-scripts'),
  'copy-chi-vue-scripts': require('./tasks/copy-chi-vue-scripts'),
  'sri-chi-assets' : require('./tasks/sri-chi-assets'),
  'build': require('./tasks/build.js'),
  'backstop': require('./tasks/backstop.js'),
  'ci': require('./tasks/ci.js'),
  'constants': require('./tasks/constants.js'),
  'lint-css': require('./tasks/lint-css.js'),
  'test': require('./tasks/test.js'),
  'watch': require('./tasks/watch.js'),
  'stencil-start': require('./tasks/start-stencil.js'),
  'vue-start': require('./tasks/start-vue.js'),
  'custom-elements-watch': require('./tasks/watch-custom-elements.js'),
  'vue-watch': require('./tasks/watch-vue.js'),
  'lint-typescript': require('./tasks/lint-typescript'),
  'test-custom-elements': require('./tasks/test-custom-elements'),
  'test-e2e': require('./tasks/test-e2e')
};

gulp.task('default', function(){});
