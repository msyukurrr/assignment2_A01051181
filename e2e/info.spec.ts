import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000/";
let urlInfo = 'http://localhost:3000/info';

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(urlInfo)

        await expect(page).toHaveTitle('Attractions');
    })

})

test('The meta tag', async ({ page }) => { 
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto(urlInfo)
    
    const metaDescriptionOne = page.locator('meta[name="description"]')
    await expect(metaDescriptionOne).toHaveAttribute("content", "Explore Indonesia")

})

test('The link tag', async ({ page }) => {
    await page.goto(urlInfo)

    const linkTag = page.locator('link[rel="icon"]');
    await expect(linkTag).toHaveAttribute('href', '/indo.png')
})

test.describe('Main area', () => {
    test('Header Tags', async({ page }) => {
        await page.goto(urlInfo)

        await expect(page.locator('div > h1')).toHaveCount(1);
    })

    test('Count number of paragraphs under first content area', async({ page }) => {
        await page.goto(urlInfo)

        await expect(page.locator('div > p')).toHaveCount(198);
    })

    test('Count number of h2 headers in first content area', async({ page }) => {
        await page.goto(urlInfo)

        await expect(page.locator('div > h2')).toHaveCount(0);
    })

    test('Count number of h3 headers in first content area', async({ page }) => {
        await page.goto(urlInfo)

        await expect(page.locator('div > h3')).toHaveCount(0);
    })
})
