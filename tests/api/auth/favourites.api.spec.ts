import { test, expect } from '@playwright/test';

interface LoginResponse {
    access_token: string;
    token_type: string;
};

test('GET /favorites - retrieves all favourites', async ({ request }) => {
      const loginResponse = await request.post('/users/login', {
            data: {
                email: 'customer@practicesoftwaretesting.com',
                password: 'welcome01',
            },
        });
    
        expect(loginResponse.status()).toBe(200);
    
        const responseBody: LoginResponse = await loginResponse.json();
});
