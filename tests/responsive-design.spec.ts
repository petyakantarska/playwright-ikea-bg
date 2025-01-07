import { test, expect } from '@playwright/test';

test('Responsive design for mobile view', async ({page}) => {
    await page.setViewportSize({width: 375, height: 812});

    await page.goto('https://www.ikea.bg');

    const navBar = await page.locator('.custom-html');
    await expect(navBar).toBeVisible();

    const menuItems = await page.locator('.at-section');
    await expect(menuItems.first()).toBeVisible();

    const footerItems = await page.locator('.at-footer');
    await expect(footerItems).toBeVisible();
});