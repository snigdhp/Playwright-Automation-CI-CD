const { test, expect } = require('@playwright/test');

test('Home Page', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Title assertion
  await expect(page).toHaveTitle(/Google/);

  // URL assertion (regex to avoid region redirect issues)
  await expect(page).toHaveURL(/google/);
});