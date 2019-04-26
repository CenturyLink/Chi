import gulp from 'gulp';
import {Folders} from "./constants";
const { spawn } = require('child_process');

const tasks = ['start'];

function startStencil(){
  const child = spawn('npm', tasks, {cwd: Folders.src.CUSTOM_ELEMENTS});
  child.stdout.on('data', function(data) {
    if (data) {
      console.log(data.toString());
    }
  });
  return child;
}

startStencil.description = "Starts stencil watch & compile. ";
gulp.task('stencil:start', startStencil);
