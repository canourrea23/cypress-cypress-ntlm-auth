const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 4509,
  viewportHeight: 3000,
  projectId: '9kusd7',
  numTestskeptInMemory:0,
  e2e: {
    "trashAssetsBeforeRuns": true,
    experimentalStudio: true,
    baseUrl: 'https://uat-centr.loupactive.com',
    setupNodeEvents(on, config) {
      // require('@cypress/code-coverage/task')(on, config)
      // implement node event listeners here

      return config
    },
      retries: {
        runMode: 3,
        openMode: 3,
      },
      // excludeSpecPattern: './cypress/screenshots/**.{js,jsx,ts,tsx}, ./cypress/screenshots/**.{js,jsx,ts,tsx}'
  },
});


