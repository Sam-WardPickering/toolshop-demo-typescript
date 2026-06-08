import { test, expect } from '@playwright/test';

test('POST /users/login - valid credentials returns token', async ({ request}) => {
    const response = await request.post('/users/login', {
        data: {
            email: 'customer@practicesoftwaretesting.com',
            password: 'welcome01',
        },
    });

    expect(response.status()).toBe(200);
});