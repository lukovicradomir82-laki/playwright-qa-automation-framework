import { Page, Locator, expect } from '@playwright/test';

/**
 * BasePage holds reusable actions shared across all Page Objects.
 * Every specific page (LoginPage, HomePage, ...) extends this class.
 */
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string = '/') {
    await this.page.goto(path);
  }

  async waitForElement(locator: Locator, timeout = 10000) {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async click(locator: Locator) {
    await this.waitForElement(locator);
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await this.waitForElement(locator);
    await locator.fill(value);
  }

  async getText(locator: Locator): Promise<string> {
    await this.waitForElement(locator);
    return (await locator.textContent())?.trim() ?? '';
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  async expectVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async expectText(locator: Locator, text: string | RegExp) {
    await expect(locator).toHaveText(text);
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `test-results/screenshots/${name}.png`, fullPage: true });
  }

  async reload() {
    await this.page.reload();
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
}
