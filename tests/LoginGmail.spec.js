const { test, expect } = require('@playwright/test');


test('GmailLogin', async ({ page }) => {

    await page.goto('https://www.google.com/');
    //await page.click("a[aria-label='Gmail']");
    //  await page.getByRole('link', { name: 'Gmail' }).click();
    await page.getByRole('link', { name: 'Gmail' }).click();
    await expect(page).toHaveURL("https://workspace.google.com/intl/en-US/gmail/");
    await page.waitForURL('**/gmail/**');
    await page.waitForLoadState('networkidle');




    await page.getByRole('link', { name: 'Sign in' }).click();
    await expect(page).toHaveURL("https://workspace.google.com/intl/en-US/gmail/");
    await page.waitForLoadState('networkidle');


    const useAnotherAccount = page.getByRole('button', { name: /Use another account/i });
    if (await useAnotherAccount.isVisible()) {
        await useAnotherAccount.click();
        await page.waitForTimeout(2000); // Allow animation



        const emailInput = page.locator('input[type="email"], input[name="identifier"]').first();
        await emailInput.waitFor({ state: 'visible', timeout: 15000 });

        // 6. Fill email
        await emailInput.fill('usep67705@gmail.com');

        await page.getByRole('button', { name: 'Next' }).click();

        8.// Wait for password field (optional)
        const passwordInput = page.locator('input[type="password"]').first();
        await passwordInput.waitFor({ state: 'visible', timeout: 15000 });
        await passwordInput.fill('Neofetch@135');
        await page.getByRole('button', { name: 'Next' }).click();



    }

    //  const emailInput = page.getByLabel('Email or phone');
    //  await emailInput.waitFor({ state: 'visible', timeout: 10000 });

    //  await emailInput.fill('usep67705@gmail.com');
    //  await page.getByRole('button', { name: 'Next' }).click();


});
