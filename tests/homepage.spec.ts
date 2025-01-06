import { test, expect } from '@playwright/test';

test ('Homepage loads and contains IKEA logo', async ({ page }) => {

    await page.goto('https://www.ikea.bg');

    const logo = await page.locator('img[alt="ИКЕА България"]').first();;
    await expect(logo).toBeVisible();

    const title = await page.title();
    expect(title).toContain('IKEA');
});
