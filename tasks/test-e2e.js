import gulp from 'gulp';
import {serveAndWatch} from "./watch";
import Processes from "./helpers/processes";
const { spawn } = require('child_process');

const runParams = ['cypress', 'run'];
const runInteractiveParams = ['cypress', 'open'];

function runCypress() {
  const child = spawn('npx', runParams);
  child.stdout.on('data', function(data) {
    if (data) {
      console.log(data.toString());
    }
  });
  Processes.addChild(child);
  return child;
}

function runCypressInteractive() {
  const child = spawn('npx', runInteractiveParams);
  child.stdout.on('data', function(data) {
    if (data) {
      console.log(data.toString());
    }
  });
  Processes.addChild(child);
  return child;
}

gulp.task('test:e2e', gulp.parallel(
  'stencil:start:es5',
  gulp.series(
    'build',
    gulp.parallel(
      serveAndWatch,
      gulp.series(
        runCypress,
        'serve:stop'
      )
    )
  )
));

gulp.task('test:e2e:interactive', gulp.parallel(
  'stencil:start',
  gulp.series(
    'build',
    gulp.parallel(
      serveAndWatch,
      gulp.series(
        runCypressInteractive,
        'serve:stop'
      )
    )
  )
));
