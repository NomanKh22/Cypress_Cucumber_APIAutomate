const report = require("multiple-cucumber-html-reporter");

const startTime = new Date();
// ... run your tests here ...
const endTime = new Date();

report.generate({
  jsonDir: "./json-logs/",
  reportPath: "./cypress/cucumber-report/",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "API Automation" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: startTime.toLocaleString() },
      { label: "Execution End Time", value: endTime.toLocaleString() },
    ],
  },
});