const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.welcomeBanner = page.getByTestId('welcome-banner');
    this.logoutButton = page.getByRole('button', { name: /log ?out/i });
    this.searchInput = page.getByPlaceholder('Search');
  }

  async isLoggedIn() {
    return this.isVisible(this.welcomeBanner);
  }

  async search(term) {
    await this.fill(this.searchInput, term);
    await this.page.keyboard.press('Enter');
  }

  async logout() {
    await this.click(this.logoutButton);
  }
}

module.exports = { HomePage };
