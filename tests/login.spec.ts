import { test, expect } from '@playwright/test';

// A "describe" block groups related tests under one heading in the report.
test.describe('Login', () => {
  // Test 1: a happy-path login should land the user on the Dashboard.
  test('logs in and redirects to the dashboard', async ({ page }) => {
    // Go to the login page. Thanks to `baseURL` in the config we use a short path.
    await page.goto('/login');

    // Fill the form. We locate inputs by their placeholder text (no labels exist).
    await page.getByPlaceholder('Email').fill('test@example.com');
    await page.getByPlaceholder('Password').fill('password123');

    // Click the submit button, located by its accessible role + visible text.
    await page.getByRole('button', { name: 'Submit' }).click();

    // After login, AuthContext stores a token and navigates to "/" (Dashboard).
    // The Dashboard renders a "Welcome back" heading — assert it is visible.
    await expect(page.getByRole('heading', { name: /welcome back/i })).toBeVisible();

    // The URL should now be the root, not /login.
    await expect(page).toHaveURL('http://localhost:5173/');
  });

  // Test 2: visiting a protected page without a token redirects to /login.
  test('redirects to /login when not authenticated', async ({ page }) => {
    // Try to open the Projects page directly, with no token in localStorage.
    await page.goto('/projects');

    // ProtectedRoute should bounce us to /login.
    await expect(page).toHaveURL(/.*\/login/);

    // The login heading should be visible to confirm we're on the login page.
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  });
});
