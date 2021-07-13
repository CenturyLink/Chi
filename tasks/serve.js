import gulp from 'gulp';
import browserSync from 'browser-sync';
import Processes from "./helpers/processes";

export const server = browserSync.create();

function serve(done) {
  server.init({
    server: {
      baseDir: 'dist',
    },
    port: 8000,
    ui: {
      port: 8001
    },
    ghostMode: false,
    open: false,
    middleware: [
      function (req, res, next) {
        res.setHeader('cache-control', 'public, max-age=0');
        res.setHeader('chi-custom-header', 'ok');
        next();
      }
    ]
  });
  done();
}

function serveVue(done) {
  server.init({
    server: {
      baseDir: 'src/chi-vue/dist',
    },
    port: 9090,
    ui: {
      port: 9091
    },
    https: true,
    ghostMode: false,
    open: false,
    middleware: [
      function (req, res, next) {
        res.setHeader('cache-control', 'public, max-age=0');
        next();
      }
    ]
  });
  done();
}

function notifyStart(done) {
  server.notify("Compiling, please wait!");
  done();
}

function notifyEnd(done) {
  server.notify("Done");
  done();
}

function reload(done) {
  server.reload();
  done();
}

function stop(done) {
  server.exit();
  Processes.killAll();
  done();
}

serve.description = 'Serves the dist folder. ';
reload.description = 'Reloads browser. ';
notifyStart.description = 'Notifies the developer ' +
  'compile is starting in the browser window. ';
notifyEnd.description = 'Notifies the developer ' +
  'compile is ending in the browser window. ';

gulp.task('serve', serve);
gulp.task('serve:vue', serveVue);
gulp.task('serve:notify:start', notifyStart);
gulp.task('serve:notify:end', notifyEnd);
gulp.task('serve:reload', reload);
gulp.task('serve:stop', stop);
