import { test, expect } from '@playwright/test';

const sqlInjectionPayloads = [
    "' OR '1'='1",
    "'; DROP TABLE users; --",
    "admin'--",
    "' UNION SELECT * FROM users--",
];

test.describe('POST /users/login', () => {
    for (const payload of sqlInjectionPayloads) {
        test(`Email input - SQL injection payload: ${payload}`, async ({ request }) => {
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

    for (const payload of sqlInjectionPayloads) {
        test(`Password input - SQL injection payload: ${payload}`, async ({ request }) => {
            const response = await request.post('/users/login', {
                data: {
                    email: 'customer2@practicesoftwaretesting.com',
                    password: payload,
                },
            });

            expect(response.status()).toBe(401);

            const responseBody = await response.json();
            expect(responseBody.error).toBe('Unauthorized');
        });
    };
    
});







