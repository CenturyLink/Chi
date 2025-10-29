import backstop from 'backstopjs';

(async (configFile) => {
  try {
    await backstop('test', { config: configFile });
  } catch (error) {
    console.error('[CHI]: Error executing tests: ', error);
    process.exit(1);
  }
})(process.argv[2]);
