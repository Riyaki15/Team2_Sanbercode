const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    env:{
      email:"rakibrizky@gmail.com",
      pass: "Rakibrizky15"


    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      
      
    },
  },
});
