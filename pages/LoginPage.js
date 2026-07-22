const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    // Adjust these selectors to match the real application under test
    this.usernameInput = page.getByTestId('username-input');
    this.passwordInput = page.getByTestId('password-input');
    this.loginButton = page.getByRole('button', { name: /log ?in/i });
    this.errorMessage = page.getByTestId('login-error');
  }

  async open() {
    await this.goto('/login');
  }

  async login(username, password) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async getErrorMessage() {
    return this.getText(this.errorMessage);
  }
}

module.exports = { LoginPage };
