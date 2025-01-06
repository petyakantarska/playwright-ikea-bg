import { test, expect } from '@playwright/test';

test('Add an item to the cart', async ({page}) => {

    await page.goto('https://www.ikea.bg');

    const searchBox = page.locator('input[name="query"]');
    await searchBox.fill('стол');
    await searchBox.press('Enter');

    const product = page.locator('.at-product-tile-container').first();
    await product.click();

    const addTocartButton = page.locator('button:has-text("Добави в кошницата")');
    await addTocartButton.click();

    const cartIcon = page.locator('a[title="Cart"]');
    await cartIcon.click();
    const cartItem = page.locator('.product');
    await expect(cartItem).toBeVisible();

});