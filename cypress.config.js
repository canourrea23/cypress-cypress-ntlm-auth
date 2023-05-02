const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9kusd7',
  e2e: {
    "trashAssetsBeforeRuns": true,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      retries: {
        runMode: 2,
        openMode: 4,
      },
  },
});


