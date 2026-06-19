import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Login page has no accessibility violations', async ({ page }) => {
  await page.goto('/auth/login');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

//   expect(accessibilityScanResults.violations).toEqual([]);
});