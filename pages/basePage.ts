import { Page, expect } from "@playwright/test";

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async getTitle() {
    return this.page.title();
  }

  async isVisible(locator: string) {
    return this.page.locator(locator).isVisible();
  }

  async click(locator: string) {
    await this.page.click(locator);
  }

  async type(locator: string, text: string) {
    await this.page.fill(locator, text);
  }

  async assertText(locator: string, expected: string) {
    await expect(this.page.locator(locator)).toHaveText(expected);
  }
}
