import { test, expect } from '@playwright/test';

test('Navigate to different categories', async ({page}) =>{

    await page.goto('https://www.ikea.bg');

    await page.click('a:has-text("Продукти")');
    await page.click('a:has-text("Легла")');
    await page.click('a:has-text("Единични легла")');

    const categoryTitle2 = await page.locator('h2:has-text("Единични легла")');
    await expect(categoryTitle2).toBeVisible();
});