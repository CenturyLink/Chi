import backstop from 'backstopjs';

(async (theme) => {
  const configFiles = [
    `backstop-responsive_${theme}.json`, 
    `backstop-non-responsive_${theme}.json`, 
    `backstop-non-responsive-ce_${theme}.json`
  ];
  
  try {
    for (const configFile of configFiles) {
      await backstop('test', { config: configFile });
    }
  } catch (error) {
    console.error('[CHI]: Error executing tests: ', error);
    process.exit(1);
  }
})(process.argv[2]);
