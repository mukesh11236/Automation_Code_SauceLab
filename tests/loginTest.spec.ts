import { test, expect } from "@playwright/test";
import { Application } from "../pages/application";

// Test case: Verify that the user can log in with valid credentials
test("Login with valid credentials", async ({ page }) => {
  // Initialize the application object
  const app = new Application(page);

  // Navigate to the login page
  await app.loginPage.navigateTo("/");

  // Log in with valid credentials
  await app.loginPage.login("standard_user", "secret_sauce");

  // Verify that the user is redirected to the products page after login
  await expect(await app.productsPage.getTitleText()).toBe("Products");
});
