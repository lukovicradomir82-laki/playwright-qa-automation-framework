import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

/**
 * Extends the base Playwright test with ready-to-use Page Objects,
 * so tests don't need to instantiate them manually every time.
 *
 * Usage in a test file:
 *   import { test, expect } from '../utils/fixtures';
 *   test('...', async ({ loginPage, homePage }) => { ... });
 */
type Fixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export { expect } from '@playwright/test';
