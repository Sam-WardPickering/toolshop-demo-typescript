import { test, expect } from '@playwright/test';

test('POST /users/login - SQL injection in email field', async ({ request }) => {
    const response = await request.post('/users/login', {
        data: {
            email: "' OR '1'='1",
            password: 'welcome01',
        },
    });

    expect(response.status()).toBe(401);
    expect(await (await response.json()).error).toBe('Unauthorized');
})