const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://sauce-demo.myshopify.com/",
    experimentalPromptCommand: true,
    screenshotPromptCommand: true,
    defaultBrowser: 'chrome',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
