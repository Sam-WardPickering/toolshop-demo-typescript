import { test as base } from '@playwright/test';

interface AuthFixtures {
    token: string;
}

export const test = base.extend<AuthFixtures>({
  token: async ({ request }, use) => {
    const response = await request.post('/users/login', {
      data: {
        email: 'customer@practicesoftwaretesting.com',
        password: 'welcome01',
      },
    });

    const body = await response.json();
    await use(body.access_token);
  },
});

export { expect } from '@playwright/test';