import { test, expect } from '@playwright/test'

let urlHome = 'http://localhost:3000/';
let urlInfo = 'http://localhost:3000/info';

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(urlHome)

        await expect(page).toHaveTitle('Explore Indonesia');
    })

    test('The meta tag', async ({ page }) => { 
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto(urlHome)
        
        const metaDescriptionOne = page.locator('meta[name="author"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "MDIA 2109")

        const metaDescriptionTwo = page.locator('meta[property="title"]');
        await expect(metaDescriptionTwo).toHaveAttribute('content', 'Assignment #2 - Home Page')

        const metaDescriptionThree = page.locator('meta[property="description"]');
        await expect(metaDescriptionThree).toHaveAttribute('content', 'Exploring Cities in Indonesia')
    })

    test('The link tag', async ({ page }) => {
        await page.goto(urlHome)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/indo.png')
    })
})


test.describe('Main area', () => {
    test('Header Tag', async({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('h1')).toContainText('EXPLORE INDONESIA');
    })

    test('Paragraph Tag', async({ page }) => { 
        await page.goto(urlHome)

        const paragraphText = page.getByRole('paragraph');
        await expect(paragraphText).toContainText('Indonesia is a Southeast Asian country comprised of more than 17,000 islands, with a population of over 270 million people. The country capital is Jakarta, and it has a diverse culture, language, and religion. Indonesia economy is largely based on agriculture, mining, and tourism. The country is home to various natural attractions, including beaches, mountains, and rainforests, as well as numerous traditional arts and crafts. Indonesia has a rich history and has been influenced by various cultures, including Indian, Chinese, and European. ')
    })  

    test('Check it out Button', async({ page }) => { 
        await page.goto(urlHome)

        await page.getByRole('button', { name: 'Check it out!' }).click();
    })

})

