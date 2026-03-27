# Playwright Learning Project 1

This repository contains a small Playwright test suite for learning purposes.

## Project structure

- `tests/` - test specifications
  - `UIBasicTest.spec.js` - basic browser navigation and title assertions
- `playwright.config.js` - Playwright configuration (timeout, reporter, browser)

## How to run

1. Install dependencies (if not already):
   ```bash
   npm install
   ```

2. Run tests:
   ```bash
   npx playwright test
   ```

3. View HTML report after tests complete:
   ```bash
   npx playwright show-report
   ```

## Notes

- The tests use Chromium and run in headed mode (`headless: false`) for visual feedback.
- Comments are written to help beginners understand Playwright and JavaScript flow.

## Comment Reference (from tests/UIBasicTest.spec.js)

Simple JavaScript concepts for people who are new to Playwright:

1. `async` and `await`
- JavaScript runs code asynchronously by default, meaning it doesn't wait for one command to finish before starting the next.
- `async` functions allow you to write code that looks synchronous but actually runs asynchronously.
- `async` goes before your function name.
- `await` goes before commands that take time, like opening a page or checking a title.
- `await` waits for a command to finish before moving to the next line.
- This is useful when opening pages and checking values in the browser.

2. The test function itself:
- `test('name', async ({ page }) => { ... })` is how Playwright declares a test.
- `{ page }` is called a fixture. It gives you a browser tab to work with.

3. Browser actions:
- `await page.goto('https://...')` opens the website.
- `await page.title()` reads the text shown in the browser title bar.
- `await expect(page).toHaveTitle('...')` checks that the title is what you expect.

4. Optional manual context steps:
- `const context = await browser.newContext()` creates an isolated browser session.
- `const page = await context.newPage()` opens a new tab in that session.
- These are useful when you want separate cookies and storage.

5. General notes:
- Use `const` for values that do not change. `let` is for variables that might change.
- Use `test.only` when debugging a single test case. Eg: `test.only('name', async ({ page }) => { ... })` will run only that test and skip others.

### Inline test notes
- `console.log(await page.title())` prints the currently loaded page title to console.
- `await expect(page).toHaveTitle('...')` asserts on page title.

## Comment Reference (from playwright.config.js)

- `testDir: './tests'` tells Playwright where to find test files.
- `timeout: 40 * 1000` sets each test's maximum run time to 40 seconds.
- `expect.timeout: 50 * 1000` sets the wait time for assertions to 50 seconds.
- `reporter: 'html'` enables HTML test result output.
- `use.browserName: 'chromium'` sets the browser engine to Chromium.
- `use.headless: false` opens a visible browser window; `true` runs in the background.

Alternative config style (common in older examples):

```js
const config = {
  // testDir: './tests',
  // timeout: 40 * 1000,
};

module.exports = config;
```

## Quick Playwright command reference

- Run all tests:
  ```bash
  npx playwright test
  ```

- Run a specific test file:
  ```bash
  npx playwright test tests/UIBasicTest.spec.js
  ```

- Run tests in headed mode (shows browser window; useful for learning):
  ```bash
  npx playwright test --headed
  ```

- Run tests with debug information (slower, shows trace in browser):
  ```bash
  npx playwright test --debug
  ```

- Generate and open HTML report after tests:
  ```bash
  npx playwright show-report
  ```

- Test retries on failure (e.g., 2 retries):
  ```bash
  npx playwright test --retries=2
  ```

- Run tests with specific browser (chromium, firefox, webkit):
  ```bash
  npx playwright test --project=chromium
  npx playwright test --project=firefox
  npx playwright test --project=webkit
  ```

- Open Playwright docs from CLI:
  ```bash
  npx playwright open https://playwright.dev
  ```


