import backstop from 'backstopjs';

(async () => {
  try {
    await backstop('approve', { config: 'backstop-responsive.json' });
    await backstop('approve', { config: 'backstop-non-responsive.json' });
  } catch (error) {
    console.error('[CHI]: Error approving tests: ', error);
    process.exit(1);
  }
})();