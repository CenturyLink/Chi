import backstop from 'backstopjs';

(async () => {
  try {
    const configFiles = ['backstop-responsive.json', 'backstop-non-responsive.json', 'backstop-non-responsive-ce.json'];
    
    for (const configFile of configFiles) {
      await backstop('test', { config: configFile });
    }
  } catch (error) {
    console.error('[CHI]: Error executing tests: ', error);
    process.exit(1);
  }
})();