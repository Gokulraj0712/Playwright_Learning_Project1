const { test, expect } = require('@playwright/test');

/*
Simple JavaScript concepts for people who are new to Playwright:

1. `async` and `await`
- JavaScript runs code asynchronously by default, meaning it doesn't wait for one command to finish before starting the next.
- `async` functions allow you to write code that looks synchronous but actually runs asynchronously.
- `async` goes before your function name.
- 'await' goes before commands that take time, like opening a page or checking a title.
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
- Use `const` for values that do not change. 'let' is for variables that might change.
- Use `test.only` when debugging a single test case. Eg: `test.only('name', async ({ page }) => { ... })` will run only that test and skip others.
*/


test('Browser Context Playwright Test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    // Print the current page title for debugging or learning purposes
    // `page.title()` returns the title text of the loaded page
    console.log(await page.title());

    // Verify the page title with Playwright test assertions
    // Official docs: https://playwright.dev/docs/test-assertions
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

});

test('Page Playwright Test', async ({ page }) => {

    await page.goto("https://google.com/");

    // Show the page title in the console so we can see what was loaded.
    // This is useful when we are learning or checking the test's behavior.
    console.log(await page.title());

    // Check that the browser has opened Google by confirming the title is exactly "Google".
    // Assertions make the test pass or fail based on expected values.
    // Official docs: https://playwright.dev/docs/test-assertions
    await expect(page).toHaveTitle("Google");

});