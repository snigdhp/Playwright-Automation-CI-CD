const { test, expect } = require('@playwright/test');


test ('GmailLogin', async ({page})=>{

     await page.goto('https://www.google.com/');
     //await page.click("a[aria-label='Gmail']");
     await page.getByRole('link', { name: 'Gmail' }).click();
     await expect(page).toHaveURL("https://workspace.google.com/intl/en-US/gmail/");


     
     await page.getByRole('link', { name: 'Sign in' }).click();
     await expect(page).toHaveURL("https://workspace.google.com/intl/en-US/gmail/");
     test.setTimeout(120_000)
     await page.getByLabel("Email or phone", "usep67705@gmail.com");
     await page.locator('//*[@id="identifierNext"]/div/button/span').click();
    //  await page.getByRole('button', { name: 'Next' }).click();
      
});
