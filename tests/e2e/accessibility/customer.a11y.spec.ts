import { test , expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { getSeriousViolations, logNonBlockingViolations } from '../helpers/accessibility';
import { LoginPage } from '../pages';
import { users } from '../../test-data/users';

const customer = users.customer1;

test.describe('Customer pages accessibility', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto('/auth/login');
        await loginPage.loginUser(customer.email, customer.password);
    });

    test('Customer Account page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/account');

        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });


    test('Customer Favorites page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/account/favorites');

        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });


    test('Customer Profile page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/account/profile');

        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });


    test('Customer Invoice page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/account/invoices');

        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });

    
    test('Customer Messages page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/account/messages');

        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });
});