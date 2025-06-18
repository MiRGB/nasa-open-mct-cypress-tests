const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:8080/",
    redirectionLimit: 2,
    retries: {
      "runMode": 1,
      "openMode": 1
    },
    watchForFileChanges: true,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    waitForAnimations: true,
    testIsolation: false
  },
});
