const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  // viewportWidth: 4509,
  // viewportHeight: 3000,
  // defaultCommandTimeout: "90000",
  projectId: "9kusd7",
  numTestskeptInMemory: 0,
  e2e: {
    // specPattern: './cypress/e2e/**/**.{js}',
    trashAssetsBeforeRuns: true,
    experimentalStudio: true,
    experimentalStudio: true,
    // baseUrl: "https://uat-centr.loupactive.com",
    setupNodeEvents(on, config) {
      // require('@cypress/code-coverage/task')(on, config)
      // implement node event listeners here

      return config;
    },
    retries: {
      runMode: 3,
      openMode: 1,
    },
    
    // excludeSpecPattern: './cypress/screenshots/**.{js,jsx,ts,tsx}, ./cypress/screenshots/**.{js,jsx,ts,tsx}'
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});