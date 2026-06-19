import { test, expect } from '@playwright/test';
import { LoginPage } from './pages';
import { users } from '../test-data/users';

test('Existing user successfully logs in (happy path)', async ({ page }) => {
    await page.goto('/auth/login');

    const loginPage = new LoginPage(page);

    await loginPage.loginUser(users.admin.email, users.admin.password);

    await expect(page).toHaveURL(/dashboard/);
});

test('Existing user cannot login with incorrect email', async ({ page }) => {
    await page.goto('/auth/login');

    const loginPage = new LoginPage(page);

    await loginPage.loginUser('incorrectemail@email.com', users.admin.password);

    await expect(loginPage.loginErrorMsgBox).toHaveText('Invalid email or password');
    await expect(page).toHaveURL(/login/);
});