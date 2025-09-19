import { test, expect } from "@playwright/test";
import { Application } from "../pages/application";

// Test case: Verify that a product can be added to the cart
test("Add a product to the cart", async ({ page }) => {
  // Initialize the application object
  const app = new Application(page);

  // Navigate to the login page
  await app.loginPage.navigateTo("/");

  // Log in with valid credentials
  await app.loginPage.login("standard_user", "secret_sauce");

  // Add the first product to the cart
  await app.productsPage.addFirstProductToCart();

  // Navigate to the cart page
  await app.productsPage.goToCart();

  // Verify that the product is present in the cart
  expect(await app.cartPage.isProductInCart()).toBeTruthy();
});
