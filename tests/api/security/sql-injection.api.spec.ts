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
                    password: 'welcome02',
                },
            });

            expect(response.status()).toBe(401);

            const responseBody = await response.json();
            expect(responseBody.error).toBe('Unauthorized');
        });
    };

    for (const payload of sqlInjectionPayloads) {
        test(`Password input - SQL injection payload: ${payload}`, async ({ request }) => {
            // Deliberately a throwaway/non-existent account — these tests always fail
            // to log in by design, so reusing a real account here risks locking it out
            // for every other test in the suite.
            const response = await request.post('/users/login', {
                data: {
                    email: 'sql-injection-throwaway@practicesoftwaretesting.com',
                    password: payload,
                },
            });

            expect(response.status()).toBe(401);

            const responseBody = await response.json();
            expect(responseBody.error).toBe('Unauthorized');
        });
    };

});

test.describe('GET /products/search', () => {
    for (const payload of sqlInjectionPayloads) {
        test(`GET /products/search - SQL injection payload: ${payload}`, async ({ request }) => {
            const response = await request.get(`/products/search?q=${encodeURIComponent(payload)}`);

            expect(response.status()).toBe(200);

            const responseBody = await response.json();
            expect(responseBody.data).toEqual([]);
            expect(responseBody.total).toBe(0);
        });
    };
});