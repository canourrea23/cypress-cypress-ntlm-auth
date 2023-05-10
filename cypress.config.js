const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9kusd7',
  e2e: {
    "trashAssetsBeforeRuns": true,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      // implement node event listeners here

      return config
    },
      retries: {
        runMode: 2,
        openMode: 2,
      },
  },
});


