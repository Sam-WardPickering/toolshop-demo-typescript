import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { getSeriousViolations, logNonBlockingViolations } from '../helpers/accessibility';

test.describe('Public page accessibility', () => {
    test('Login page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/auth/login');

        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });


    test('Product page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/');

        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });


    test('Contact page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/');

        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });
});