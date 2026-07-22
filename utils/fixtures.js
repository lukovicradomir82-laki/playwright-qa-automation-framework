const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');

/**
 * Extends the base Playwright test with ready-to-use Page Objects,
 * so tests don't need to instantiate them manually every time.
 *
 * Usage in a test file:
 *   const { test, expect } = require('../utils/fixtures');
 *   test('...', async ({ loginPage, homePage }) => { ... });
 */
const test = base.test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

module.exports = { test, expect: base.expect };
