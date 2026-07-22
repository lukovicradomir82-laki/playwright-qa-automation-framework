const { test, expect } = require('@playwright/test');

test.describe('Example smoke checks', () => {
  test('homepage has expected title @smoke', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.+/);
  });

  test('API request example - status check @api', async ({ request }) => {
    const response = await request.get('/api/health');
    expect(response.status()).toBeLessThan(500);
  });
});
