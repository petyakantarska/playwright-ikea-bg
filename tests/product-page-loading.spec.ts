import {test, expect } from '@playwright/test';

test('Open a product page and verify title', async ({ page }) => {

    await page.goto('https://www.ikea.bg/products/vesken-etazherka-za-banya/40307866/');

    const productTitle = await page.locator('.at-main').first();
    await expect(productTitle).toContainText('VESKEN');
});