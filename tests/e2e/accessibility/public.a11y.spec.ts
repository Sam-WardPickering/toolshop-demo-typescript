import { test, expect } from '@playwright/test';
import { runAxeScan, getSeriousViolations, logNonBlockingViolations } from '../helpers/accessibility';

test.describe('Public page accessibility', () => {
    test('Login page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/auth/login');

        const accessibilityScanResults = await runAxeScan(page, ['select-name']);

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });


    test('Product page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/');

        const accessibilityScanResults = await runAxeScan(page, ['select-name']);

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });


    test('Contact page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/contact');

        const accessibilityScanResults = await runAxeScan(page, ['select-name']);

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });


    test('Category: Hand Tools page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/category/hand-tools');

        const accessibilityScanResults = await runAxeScan(page, ['select-name']);

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });


    test('Category: Power Tools page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/category/power-tools');

        const accessibilityScanResults = await runAxeScan(page, ['select-name']);

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });


    test('Category: Other page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/category/other');

        const accessibilityScanResults = await runAxeScan(page, ['select-name']);

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });


    test('Category: Special Tools page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/category/special-tools');

        const accessibilityScanResults = await runAxeScan(page, ['select-name']);

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });


    test('Rentals page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/rentals');

        const accessibilityScanResults = await runAxeScan(page, ['select-name']);
        
        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });

});