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

    
});