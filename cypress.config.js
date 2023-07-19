const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/reports/cypress-pr.[hash].xml'
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    experimentalMemoryManagement: true,
    testIsolation: false,
    baseUrl: 'http://localhost:8000/'
  }
});
