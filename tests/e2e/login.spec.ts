import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('Existing user successfully logs in (happy path)', async ({ page }) => {
    await page.goto('/auth/login');

    const loginPage = new LoginPage(page);

    // await loginPage.loginUser('admin@practicesoftwaretesting.com', )
});