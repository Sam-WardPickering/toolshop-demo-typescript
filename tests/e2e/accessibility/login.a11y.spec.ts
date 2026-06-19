import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Login page has no critical or serious accessibility violations', async ({ page }) => {
  await page.goto('/auth/login');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  const seriousViolations = accessibilityScanResults.violations.filter(
    (violation) => violation.impact === 'critical' || violation.impact === 'serious'
  );

  const otherViolations = accessibilityScanResults.violations.filter(
    (violation) => violation.impact !== 'critical' && violation.impact !== 'serious'
  );

  if (otherViolations.length > 0) {
    console.log(`${otherViolations.length} non-blocking accessibility violation(s) found:`);

    otherViolations.forEach((violation) => {
      console.log(`- [${violation.impact}] ${violation.id}: ${violation.help}`);
    });
  }
  
  expect(seriousViolations).toEqual([]);
});