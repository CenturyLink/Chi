import gulp from 'gulp';
import backstopjs from 'backstopjs';
import { server } from './serve';

gulp.task('backstop-test', gulp.series(
  'serve',
  () => {
    const promise = new Promise((resolve) => {
      return backstopjs('test', { config: 'backstop-responsive.json' })
        .finally(() => backstopjs('test', { config: 'backstop-non-responsive.json' })
          .finally(resolve));
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
