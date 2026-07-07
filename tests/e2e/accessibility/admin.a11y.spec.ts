import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { getSeriousViolations, logNonBlockingViolations } from '../helpers/accessibility';
import { LoginPage } from '../pages';
import { users } from '../../test-data/users';

const admin = users.admin;

test.describe('Admin pages accessibility', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto('/auth/login');
        await loginPage.loginUser(admin.email, admin.password);
    });

    test('Admin Dashboard page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/admin/dashboard');

       const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['meta-refresh'])
        .analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    });


    test('Admin Brands page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/admin/brands');

       const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['meta-refresh'])
        .analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    
    });


    test('Admin Categories page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/admin/categories');

       const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['meta-refresh'])
        .analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    
    });


    test('Admin Products page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/admin/products');

       const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['meta-refresh'])
        .analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    
    });


    test('Admin Orders page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/admin/orders');

       const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['meta-refresh'])
        .analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    
    });


    test('Admin Users page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/admin/users');

       const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['meta-refresh'])
        .analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    
    });


    test('Admin Messages page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/admin/messages');

       const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['meta-refresh'])
        .analyze();

        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    
    });


    test('Admin Settings page has no critical or serious accessibility violations', async ({ page }) => {
        await page.goto('/admin/settings');

       const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['meta-refresh'])
        .analyze();
        
        logNonBlockingViolations(accessibilityScanResults);

        expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
    
    });
})