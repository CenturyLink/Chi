import backstop from 'backstopjs';

const local = !process.env.JENKINS_HOME;

(async () => {
  try {
    await backstop('test', { docker: local, config: 'backstop-responsive.json' });
    await backstop('test', { docker: local, config: 'backstop-non-responsive.json' });
    await backstop('test', { docker: local, config: 'backstop-non-responsive-ce.json' });
  } catch (error) {
    console.error('[CHI]: Error executing tests: ', error);
    process.exit(1);
  }
})();