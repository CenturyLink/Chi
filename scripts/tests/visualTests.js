import backstop from 'backstopjs';
import fs from 'fs';

const modifyBackstopConfig = (configFile) => {
  const config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
  const baseUrl = process.env.JENKINS_HOME ? 'http://host.docker.internal' : 'http://localhost';

  config.scenarios.forEach(scenario => {
    scenario.url = scenario.url.replace('http://localhost', baseUrl);
  });

  const modifiedConfigFile = `modified-${configFile}`;

  fs.writeFileSync(modifiedConfigFile, JSON.stringify(config, null, 2));

  return modifiedConfigFile;
}

(async () => {
  try {
    const configFiles = ['backstop-responsive.json', 'backstop-non-responsive.json', 'backstop-non-responsive-ce.json'];
    
    for (const configFile of configFiles) {
      const modifiedConfigFile = modifyBackstopConfig(configFile);
      
      await backstop('test', { config: modifiedConfigFile });
      fs.unlinkSync(modifiedConfigFile);
    }
  } catch (error) {
    console.error('[CHI]: Error executing tests: ', error);
    process.exit(1);
  }
})();