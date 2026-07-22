const { test, expect } = require('../utils/fixtures');
const { users, messages } = require('../utils/testData');

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
  });

  test('user can log in with valid credentials @smoke', async ({ loginPage, homePage }) => {
    await loginPage.login(users.validUser.username, users.validUser.password);
    await expect(await homePage.isLoggedIn()).toBeTruthy();
  });

  test('shows an error with invalid credentials @regression', async ({ loginPage }) => {
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    const error = await loginPage.getErrorMessage();
    expect(error).toContain(messages.invalidLogin);
  });

  test('login button is disabled until fields are filled @regression', async ({ loginPage }) => {
    await expect(loginPage.loginButton).toBeVisible();
  });
});
