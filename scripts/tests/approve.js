import backstop from 'backstopjs';

(async (theme) => {
  try {
    await backstop('approve', { config: `backstop-responsive_${theme}.json` });
    await backstop('approve', { config: `backstop-non-responsive_${theme}.json` });
  } catch (error) {
    console.error('[CHI]: Error approving tests: ', error);
    process.exit(1);
  }
})(process.argv[2]);
