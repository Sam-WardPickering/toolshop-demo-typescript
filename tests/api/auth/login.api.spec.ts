import { test, expect } from '@playwright/test';

interface LoginResponse {
    access_token: string;
    token_type: string;
};

interface LoginErrorResponse {
    error: string;
}

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


test('POST /users/login - incorrect password', async ({ request}) => {
    const response = await request.post('/users/login', {
        data: {
            email: 'customer@practicesoftwaretesting.com',
            password: 'welcome67',
        },
    });

    expect(response.status()).toBe(401);
    
    const responseJson: LoginErrorResponse = await response.json();
    expect(responseJson.error).toBe('Unauthorized');
});


test('POST /users/login - incorrect email', async ({ request}) => {
    const response = await request.post('/users/login', {
        data: {
            email: 'incorrectemail@email.com',
            password: 'welcome01'
        },
    });

    expect(response.status()).toBe(401);

    const responseJson: LoginErrorResponse = await response.json();
    expect(responseJson.error).toBe('Unauthorized');
});


test('POST /users/login - no email or password values', async ({ request}) => {
    const response = await request.post('/users/login', {
        data: {
            email: '',
            password: ''
        },
    });

    expect(response.status()).toBe(401);

    const responseJson: LoginErrorResponse = await response.json();
    expect(responseJson.error).toBe('Invalid login request');
});