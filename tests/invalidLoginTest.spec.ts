import { test, expect } from "@playwright/test";
import { Application } from "../pages/application";

// Test case: Verify that an error message is displayed when logging in with invalid credentials
test("Login with invalid credentials shows error", async ({ page }) => {
  // Initialize the application object
  const app = new Application(page);

  // Navigate to the login page
  await app.loginPage.navigateTo("/");

  // Attempt to log in with invalid credentials
  await app.loginPage.login("invalid_user", "wrong_password");

  // Retrieve the error message displayed on the login page
  const errorMsg = await app.loginPage.getErrorMessage();

  // Verify that the error message contains the expected text
  expect(errorMsg).toContain("Epic sadface"); // SauceDemo error message
});
