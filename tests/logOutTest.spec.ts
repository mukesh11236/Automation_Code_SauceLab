import { test, expect } from "@playwright/test";
import { Application } from "../pages/application";

// Test case: Verify that the user can successfully log out
test("User should be able to logout", async ({ page }) => {
  // Initialize the application object
  const app = new Application(page);

  // Navigate to the login page
  await app.loginPage.navigateTo("/");

  // Log in with valid credentials
  await app.loginPage.login("standard_user", "secret_sauce");

  // Perform the logout action
  await app.productsPage.logout();

  // Verify that the user is redirected to the login page after logout
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});
