// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  // How long we allow each test to run before failing automatically. By default, playwright has a 30 second timeout for each test. Here, we set it to 40 seconds (40 * 1000 milliseconds).
  // Here, tests can run 40 seconds (40 * 1000 milliseconds) before timing out.
  timeout: 40 * 1000,

  // How long Playwright should wait for assertions like `toHaveTitle`.
  // This sets 50 seconds (50 * 1000 ms) for assertion checks.
  expect: {
    timeout: 50 * 1000
  },

  // Report test results as a local HTML file.
  reporter: 'html',

  use: {

    // Choose which browser engine we run tests in.
    // chromium works like Google Chrome.
    browserName: 'chromium',
    
    // You can switch to other browser engines if needed:
    // browserName: 'firefox',
    // browserName: 'webkit',

    // headless: false allows the browser window to show while tests run.
    // headless: true runs tests without showing a browser window.
    headless: false
  },

});

/*
Alternative way to write the same configuration:

const config = {
  // place config options here, for example:
  // testDir: './tests',
  // timeout: 40 * 1000,
};

module.exports = config;
*/
