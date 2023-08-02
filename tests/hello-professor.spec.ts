import { test, expect } from '@playwright/test';

test('Post Deployment Test', async ({ page }) => {
  // Arrange: Set up the initial state and environment for the test
  await page.goto('https://your-live-site-url.com/'); // Replace with your live site URL

  // Act: Perform the action or operations that need to be tested
  await page.click('text=Hello Professor!');

  // Assert: Verify the outcome and expected behavior of the test
  const pageUrl = page.url();
  const pageTitle = await page.title();
  const headingElement = await page.$('h1');
  const headingText = await headingElement.innerText();

  // Assertions
  expect(pageUrl).toBe('http://localhost:3001/'); // Replace with your live site URL
  expect(pageTitle).toBe('Hello Professor');
  expect(headingText).toBe('Hello Professor!');
});
