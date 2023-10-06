import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').textContent()).toContain('Welcome');
});

test('has link on page', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: "What's next?" })).toContainText(
    "What's next?"
  );
});
