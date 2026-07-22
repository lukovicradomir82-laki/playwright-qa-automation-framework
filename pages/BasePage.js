const { expect } = require('@playwright/test');

/**
 * BasePage holds reusable actions shared across all Page Objects.
 * Every specific page (LoginPage, HomePage, ...) extends this class.
 */
class BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
  }

  async goto(path = '/') {
    await this.page.goto(path);
  }

  async waitForElement(locator, timeout = 10000) {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async click(locator) {
    await this.waitForElement(locator);
    await locator.click();
  }

  async fill(locator, value) {
    await this.waitForElement(locator);
    await locator.fill(value);
  }

  async getText(locator) {
    await this.waitForElement(locator);
    return (await locator.textContent())?.trim() ?? '';
  }

  async isVisible(locator) {
    return locator.isVisible();
  }

  async expectVisible(locator) {
    await expect(locator).toBeVisible();
  }

  async expectText(locator, text) {
    await expect(locator).toHaveText(text);
  }

  async takeScreenshot(name) {
    await this.page.screenshot({ path: `test-results/screenshots/${name}.png`, fullPage: true });
  }

  async reload() {
    await this.page.reload();
  }

  async getTitle() {
    return this.page.title();
  }
}

module.exports = { BasePage };
