import { test, expect } from '@playwright/test';

test('Add item to wishlist', async ({page}) => {

    await page.goto('https://www.ikea.bg');

    await page.click('a:has-text("Продукти")');
    await page.click('a:has-text("Градина")');
    await page.click('a:has-text("Барбекю")');
    await page.click('a:has-text("Прибори за барбекю")');
    await page.click('text=GRILLTIDER');
    await page.click('button:has-text("Добави към списъка с любими")');

    const wishlistNotification = await page.locator('text=Артикулът е добавен в списъка с любими продукти');
    await expect(wishlistNotification).toBeVisible();
});