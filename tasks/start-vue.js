import gulp from 'gulp';
import {Folders} from "./constants";
import Processes from "./helpers/processes";
const { spawn } = require('child_process');

const startParams = ['start'];

function startVueProcess(){
  const child = spawn('npm', startParams, {cwd: Folders.src.VUE});
  child.stdout.on('data', function(data) {
    if (data) {
      console.log(data.toString());
    }
  });
  Processes.addChild(child);
  return child;
}

startVueProcess.description = "Starts VUE watch & build. ";
gulp.task('vue:start', startVueProcess);

const startVue = ['run', 'serve'];

function startVueServe(){
  const child = spawn('npm', startVue, {cwd: Folders.src.VUE});
  child.stdout.on('data', function(data) {
    if (data) {
      console.log(data.toString());
    }
  });
  Processes.addChild(child);
  return child;
}

startVueServe.description = "Starts Vue watch & serve. ";
gulp.task('vue:serve', startVueServe);
