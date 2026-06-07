import { test, expect } from '@playwright/test';
import { login } from './helpers';

test.describe('Dashboard', () => {
  // `beforeEach` runs before every test in this block, so each test starts
  // already logged in and sitting on the Dashboard.
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('shows the welcome heading and quick-link cards', async ({ page }) => {
    // The welcome heading confirms we're on the Dashboard.
    await expect(page.getByRole('heading', { name: /welcome back/i })).toBeVisible();

    // The three navigation cards have these headings. We use `exact: true`
    // so "Tasks" does not also match the "Recent Tasks" heading below.
    await expect(page.getByRole('heading', { name: 'Projects', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Tasks', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Analytics', exact: true })).toBeVisible();
  });

  test('shows the Recent Tasks section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Recent Tasks' })).toBeVisible();
  });

  test('navigates to Projects when the Projects card is clicked', async ({ page }) => {
    // There are TWO "Projects" links: the sidebar nav and this card. The card's
    // full accessible name includes its description, so it uniquely targets the card.
    await page.getByRole('link', { name: 'Projects Manage your projects' }).click();

    // Clicking should take us to the /projects route.
    await expect(page).toHaveURL(/.*\/projects/);
  });

  test('logs the user out', async ({ page }) => {
    await page.getByRole('button', { name: 'Logout' }).click();

    // After logout the token is cleared, so the app should redirect to /login.
    await expect(page).toHaveURL(/.*\/login/);
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  });
});
