import { Page } from "@playwright/test";
import { LoginPage } from "./loginPage";
import { ProductsPage } from "./productsPage";
import { CartPage } from "./cartPage";

export class Application {
  readonly loginPage: LoginPage;
  readonly productsPage: ProductsPage;
  readonly cartPage: CartPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.productsPage = new ProductsPage(page);
    this.cartPage = new CartPage(page);
  }
}
