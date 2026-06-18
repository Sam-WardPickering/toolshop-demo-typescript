import { test, expect } from '@playwright/test';

const sqlInjectionPayloads = [
    "' OR '1'='1",
    "'; DROP TABLE users; --",
    "admin'--",
    "' UNION SELECT * FROM users--",
];

test.describe('Login Email field - SQL injection', () => {
    for (const payload of sqlInjectionPayloads) {
        test(`POST /users/login - SQL injection payload: ${payload}`, async ({ request }) => {
            const response = await request.post('/users/login', {
                data: {
                    email: payload,
                    password: 'welcome01',
                },
            });

            expect(response.status()).toBe(401);

            const responseBody = await response.json();
            expect(responseBody.error).toBe('Unauthorized');
        });
    };
});




