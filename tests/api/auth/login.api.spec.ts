import { test, expect } from '@playwright/test';

test('POST /users/login - valid credentials returns token', async ({ request}) => {
    const response = await request.post('/users/login', {
        data: {
            email: 'customer@practicesoftwaretesting.com',
            password: 'welcome01',
        },
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.access_token).toBeDefined();
    expect(responseBody.token_type).toBe('bearer');
});