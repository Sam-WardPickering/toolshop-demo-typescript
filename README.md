# Toolshop Demo – TypeScript

Automated test suite for the [Practice Software Testing](https://practicesoftwaretesting.com) Toolshop app, built with Playwright and TypeScript.

## What's in here

API tests covering the core Toolshop endpoints — auth, products, cart, and more. The suite also includes SQL injection tests against the API layer to verify the app handles malicious input safely.

E2E tests are planned as the suite grows, which will bring in API mocking, accessibility testing with axe-core, and visual regression testing with Applitools.

## Stack

- Playwright (TypeScript)
- GitHub Actions for CI
- Applitools (planned — visual regression)
- axe-core (planned — accessibility)

## Running the tests

Install dependencies:

```bash
npm install
```

Run the full suite:

```bash
npx playwright test
```

Run with visible output:

```bash
npx playwright test --reporter=line
```

## Project structure