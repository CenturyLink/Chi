import gulp from 'gulp';
import browserSync from 'browser-sync';

export const server = browserSync.create();

function serve(done) {
  server.init({
    //watch: true,
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

serve.description = 'Serves the dist folder. ';
reload.description = 'Reloads browser. ';
notifyStart.description = 'Notifies the developer ' +
  'compile is starting in the browser window. ';
notifyEnd.description = 'Notifies the developer ' +
  'compile is ending in the browser window. ';

gulp.task('serve', serve);
gulp.task('serve:notify:start', notifyStart);
gulp.task('serve:notify:end', notifyEnd);
gulp.task('serve:reload', reload);
