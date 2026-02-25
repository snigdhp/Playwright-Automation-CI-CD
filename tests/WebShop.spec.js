const {test ,expect  } = require("@playwright/test");

test('test', async ({ page }) => {
  await page.goto('https://danube-webshop.herokuapp.com/');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('robert@moresby.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('@!#KLjwsWe4@');
  await page.getByRole('button', { name: 'Sign In' }).click();
});