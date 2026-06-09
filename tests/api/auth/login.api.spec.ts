import { test, expect } from '@playwright/test';

interface LoginResponse {
    access_token: string;
    token_type: string;
};

test('POST /users/login - valid credentials returns token', async ({ request}) => {
    const response = await request.post('/users/login', {
        data: {
            email: 'customer@practicesoftwaretesting.com',
            password: 'welcome01',
        },
    });

    expect(response.status()).toBe(200);

    const responseBody: LoginResponse = await response.json();

    expect(responseBody.access_token).toBeDefined();
    expect(responseBody.token_type).toBe('bearer');
});