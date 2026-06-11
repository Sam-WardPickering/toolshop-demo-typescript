import { test, expect } from '@playwright/test';

interface LoginResponse {
    access_token: string;
    token_type: string;
};

interface Product {
   
}

test('GET /favorites - retrieves all favourites', async ({ request }) => {
      const loginResponse = await request.post('/users/login', {
            data: {
                email: 'customer@practicesoftwaretesting.com',
                password: 'welcome01',
            },
        });
    
        expect(loginResponse.status()).toBe(200);
    
        const responseBody: LoginResponse = await loginResponse.json();
        expect(responseBody.access_token).toBeDefined();

        const token = responseBody.access_token;

        const favorites = await request.get('/favorites', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        expect(favorites.status()).toBe(200);
        console.log(await favorites.json());
});
