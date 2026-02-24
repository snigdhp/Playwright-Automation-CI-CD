const { test, expect } = require('@playwright/test');


test ('GmailLogin', async ({page})=>{

     await page.goto('https://www.google.com/');
     //await page.click("a[aria-label='Gmail']");
     await page.getByRole('link', { name: 'Gmail' }).click();
     await expect(page).toHaveURL("https://workspace.google.com/intl/en-US/gmail/");


})


