import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { getSeriousViolations, logNonBlockingViolations } from '../helpers/accessibility';
import { LoginPage } from '../pages';
import { users } from '../../test-data/users';

test('Admin Dashboard page has no critical or serious accessibility violations', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/auth/login');

    await loginPage.loginUser(users.admin.email, users.admin.password);

    await page.goto('/admin/dashboard');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    logNonBlockingViolations(accessibilityScanResults);

    expect(getSeriousViolations(accessibilityScanResults)).toEqual([]);
  
});