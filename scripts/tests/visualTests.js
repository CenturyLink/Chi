import backstop from 'backstopjs';

(async (theme, configFile) => {
  try {
    await backstop('test', { config: configFile });
  } catch (error) {
    console.error('[CHI]: Error executing tests: ', error);
    process.exit(1);
  }
})(process.argv[2], process.argv[3]);
