import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { users } from '../test-data/users';

test('Existing user successfully logs in (happy path)', async ({ page }) => {
    await page.goto('/auth/login');

    const loginPage = new LoginPage(page);

    await loginPage.loginUser(users.admin.email, users.admin.password);

    await expect(page).toHaveURL(/dashboard/);
});