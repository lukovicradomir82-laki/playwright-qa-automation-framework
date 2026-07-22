import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly welcomeBanner: Locator;
  readonly logoutButton: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    super(page);
    this.welcomeBanner = page.getByTestId('welcome-banner');
    this.logoutButton = page.getByRole('button', { name: /log ?out/i });
    this.searchInput = page.getByPlaceholder('Search');
  }

  async isLoggedIn(): Promise<boolean> {
    return this.isVisible(this.welcomeBanner);
  }

  async search(term: string) {
    await this.fill(this.searchInput, term);
    await this.page.keyboard.press('Enter');
  }

  async logout() {
    await this.click(this.logoutButton);
  }
}
