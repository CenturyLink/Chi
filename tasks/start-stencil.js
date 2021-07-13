import gulp from 'gulp';
import {Folders} from "./constants";
import Processes from "./helpers/processes";
const { spawn } = require('child_process');

const startParams = ['start'];

function startStencil(){
  const child = spawn('npm', startParams, {cwd: Folders.src.CUSTOM_ELEMENTS});
  child.stdout.on('data', function(data) {
    if (data) {
      console.log(data.toString());
    }
  });
  Processes.addChild(child);
  return child;
}

startStencil.description = "Starts stencil watch & compile. ";
gulp.task('stencil:start', startStencil);

const startEs5Params = ['run', 'start.es5'];

function startStencilEs5(){
  const child = spawn('npm', startEs5Params, {cwd: Folders.src.CUSTOM_ELEMENTS});
  child.stdout.on('data', function(data) {
    if (data) {
      console.log(data.toString());
    }
  });
  Processes.addChild(child);
  return child;
}

startStencil.description = "Starts stencil watch & compile. Generates ES5 files. ";
gulp.task('stencil:start:es5', startStencilEs5);
