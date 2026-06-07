import { Page, expect } from '@playwright/test';

/**
 * Logs a user in through the real login form, then waits until the
 * Dashboard is shown. Call this at the start of any test that needs
 * an authenticated session.
 *
 * Because your AuthContext accepts any non-empty email/password and
 * stores a fake token, we can use dummy credentials here.
 */
export async function login(page: Page) {
  await page.goto('/login');
  await page.getByPlaceholder('Email').fill('test@example.com');
  await page.getByPlaceholder('Password').fill('password123');
  await page.getByRole('button', { name: 'Submit' }).click();

  // Wait until the Dashboard "Welcome back" heading is visible, so callers
  // can assume they are fully logged in once this function returns.
  await expect(page.getByRole('heading', { name: /welcome back/i })).toBeVisible();
}
