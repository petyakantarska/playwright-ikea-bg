import {test, expect } from '@playwright/test';

test('Search for a product and verify results', async ({ page }) => {

    await page.goto('https://www.ikea.bg');

    await page.fill('input[name="query"]', 'диван');
    await page.press('input[name="query"]', 'Enter');

    //await page.waitForNavigation({ waitUntil: 'load', timeout: 60000 });

    await page.waitForSelector('.at-search-results', {timeout: 60000});

    const productResults = await page.locator('.at-product-tile');
    const count = await productResults.count();
    expect(count).toBeGreaterThan(0);
});