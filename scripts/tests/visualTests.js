import backstop from 'backstopjs';

(async () => {
  try {
    const configFiles = ['backstop-responsive.json', 'backstop-non-responsive.json'];
    
    for (const configFile of configFiles) {
      await backstop('test', {  docker: true, config: configFile });
    }
  } catch (error) {
    console.error('[CHI]: Error executing tests: ', error);
    process.exit(1);
  }
})();