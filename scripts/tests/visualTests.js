import backstop from 'backstopjs';

(async () => {
  try {
    await backstop('test', { config: 'backstop-responsive.json' });
    await backstop('test', { config: 'backstop-non-responsive.json' });
    await backstop('test', { config: 'backstop-non-responsive-ce.json' });
  } catch (error) {
    console.error('[CHI]: Error executing tests: ', error);
    process.exit(1);
  }
})();