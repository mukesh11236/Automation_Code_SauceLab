import { BasePage } from "./basePage";

export class ProductsPage extends BasePage {
    private pageTitle = ".title";
    private firstAddToCart = "button[data-test='add-to-cart-sauce-labs-backpack']";
    private cartIcon = ".shopping_cart_link";
    private menuButton = "#react-burger-menu-btn";
    private logoutLink = "#logout_sidebar_link";

    async getTitleText() {
        return this.page.locator(this.pageTitle).innerText();
    }

    async addFirstProductToCart() {
        await this.click(this.firstAddToCart);
    }

    async goToCart() {
        await this.click(this.cartIcon);
    }

    async logout() {
        await this.click(this.menuButton);
        await this.click(this.logoutLink);
    }
}
