import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  private usernameInput = "#user-name";
  private passwordInput = "#password";
  private loginButton = "#login-button";
  private errorMessage = "h3[data-test='error']";

  async login(username: string, password: string) {
    await this.type(this.usernameInput, username);
    await this.type(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async getErrorMessage() {
    return this.page.locator(this.errorMessage).innerText();
  }
}
