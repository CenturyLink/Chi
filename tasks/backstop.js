import gulp from 'gulp';
import backstopjs from 'backstopjs';
import { server } from './serve';

gulp.task('backstop-test-responsive', gulp.series(
  'serve',
  () => {
    const promise = new Promise((resolve) => {
      return backstopjs('test', { config: 'backstop-responsive.json' })
          .finally(resolve);
    });

    promise.finally(() => {
      server.exit();
    });

    return promise;
  }
));

gulp.task('backstop-test-non-responsive', gulp.series(
  'serve',
  () => {
    const promise = new Promise((resolve) => {
      return backstopjs('test', { config: 'backstop-non-responsive.json' })
        .finally(resolve);
    });

    promise.finally(() => {
      server.exit();
    });

    return promise;
  }
));

gulp.task('backstop-custom-elements-test', gulp.series(
  'serve',
  () => {
    const promise = new Promise((resolve) => {
      return backstopjs('test', { config: 'backstop-non-responsive-ce.json' })
        .finally(resolve);
    });

    promise.finally(() => {
      server.exit();
    });

    return promise;
  }
));

gulp.task('backstop-approve', () => Promise.all([
  backstopjs('approve', { config: 'backstop-responsive.json' }),
  backstopjs('approve', { config: 'backstop-non-responsive.json' })
]));

gulp.task('backstop-approve-vue', () => Promise.all([
  backstopjs('approve', { config: 'backstop-vue.json' })
]));
