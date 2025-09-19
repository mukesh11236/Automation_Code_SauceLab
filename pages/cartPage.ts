import { BasePage } from "./basePage";

export class CartPage extends BasePage {
  private cartItem = ".cart_item";

  async isProductInCart() {
    return this.page.locator(this.cartItem).isVisible();
  }
}
