import backstop from 'backstopjs';
import fs from 'fs';

const local = !process.env.JENKINS_HOME;
const baseUrl = local ? 'http://host.docker.internal:8000' : 'http://localhost:8000';

const modifyBackstopConfig = (configFile) => {
  const config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));

  config.scenarios.forEach(scenario => {
    scenario.url = scenario.url.replace('http://host.docker.internal:8000', baseUrl);
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
      
      await backstop('test', { docker: local, config: modifiedConfigFile });
      fs.unlinkSync(modifiedConfigFile);
    }
  } catch (error) {
    console.error('[CHI]: Error executing tests: ', error);
    process.exit(1);
  }
})();
