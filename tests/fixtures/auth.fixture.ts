import { test as base } from '@playwright/test';

interface AuthFixtures {
    token: string;
}

export const test = base.extend<AuthFixtures>({
  token: async ({ request }, use) => {
    const response = await request.post('/users/login', {
      data: {
        email: 'customer3@practicesoftwaretesting.com',
        password: 'pass123',
      },
    });

    const body = await response.json();
    await use(body.access_token);
  },
});

export { expect } from '@playwright/test';