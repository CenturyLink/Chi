import gulp from 'gulp';
// import plumber from 'gulp-plumber';
//import tslint from "gulp-tslint";


function lintTS (done) {
  console.log("TODO: TSLint not configured yet. ");
  done();
  // return gulp.src("**/*.tsx")
  //   .pipe(plumber())
  //   .pipe(tslint({
  //     formatter: "verbose"
  //   }))
  //   .pipe(tslint.report({
  //     formatter: "verbose"
  //   }));
}

lintTS.description = "Lints TypeScript code. ";

gulp.task('lint:typescript', lintTS);
