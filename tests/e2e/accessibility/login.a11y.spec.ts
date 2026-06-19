import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Login page has no critical or serious accessibility violations', async ({ page }) => {
  await page.goto('/auth/login');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  const seriousViolations = accessibilityScanResults.violations.filter(
    (violation) => violation.impact === 'critical' || violation.impact === 'serious'
  );

  expect(seriousViolations).toEqual([]);
});