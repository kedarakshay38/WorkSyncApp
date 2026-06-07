import { test, expect } from '@playwright/test';
import { login } from './helpers';

test.describe('Projects', () => {
  // Every Projects test needs an authenticated session, then navigates to /projects.
  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto('/projects');
  });

  test('shows the page heading and existing projects', async ({ page }) => {
    // The page heading. `exact: true` avoids matching the sidebar "Projects" link.
    await expect(page.getByRole('heading', { name: 'Projects', exact: true })).toBeVisible();

    // A couple of the seeded mock projects should be visible as cards.
    await expect(page.getByRole('heading', { name: 'WorkSync Dashboard' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Mobile App Redesign' })).toBeVisible();
  });

  test('filters projects with the search box', async ({ page }) => {
    // Type into the debounced search box (500ms). We assert the final result;
    // Playwright auto-waits, so the debounce delay is handled transparently.
    await page.getByPlaceholder('Search projects...').fill('Mobile');

    // The matching project stays visible...
    await expect(page.getByRole('heading', { name: 'Mobile App Redesign' })).toBeVisible();

    // ...and a non-matching project disappears from the list.
    await expect(page.getByRole('heading', { name: 'WorkSync Dashboard' })).toBeHidden();
  });

  test('creates a new project through the modal', async ({ page }) => {
    // Open the modal.
    await page.getByRole('button', { name: '+ New Project' }).click();

    // The modal heading confirms it is open.
    await expect(page.getByRole('heading', { name: 'Create Project' })).toBeVisible();

    // Fill the form fields by their placeholders.
    await page.getByPlaceholder('Project Name').fill('My Test Project');
    await page.getByPlaceholder('Description').fill('Created by a Playwright test');

    // Submit. The "Create" button is inside the modal.
    await page.getByRole('button', { name: 'Create' }).click();

    // The modal should close and the new project card should appear in the list.
    await expect(page.getByRole('heading', { name: 'Create Project' })).toBeHidden();
    await expect(page.getByRole('heading', { name: 'My Test Project' })).toBeVisible();
  });
});
