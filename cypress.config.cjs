const { defineConfig } = require('cypress');
const path = require('path');
const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json')));
const basePath = `chi/${packageJson.version}`;

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/reports/cypress-pr.[hash].xml',
  },
  video: true,
  videoCompression: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*',
    supportFile: 'cypress/support/e2e.cjs',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.cjs')(on, config);
    },
    experimentalMemoryManagement: true,
    testIsolation: false,
    baseUrl: `http://localhost:8000/${basePath}`
  }
});
