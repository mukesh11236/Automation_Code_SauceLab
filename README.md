Playwright POM Framework (TypeScript) for SauceDemo:

This project is an end-to-end automation framework for SauceDemo using Playwright + TypeScript with Page Object Model (POM).

📂 Project Structuresauce-pom/
├── playwright.config.ts        # Playwright config (reports, screenshots, videos)
├── package.json
├── tsconfig.json
├── tests/
│ ├── loginTest.spec.ts # Valid login test
│ ├── invalidLoginTest.spec.ts # Invalid login test
│ ├── addToCartTest.spec.ts # Add product to cart test
│ └── logoutTest.spec.ts # Logout test
├── pages/
│   ├── basePage.ts
│   ├── loginPage.ts
│   ├── productsPage.ts
│   ├── cartPage.ts
│   └── application.ts          # Central object manager
└── README.md

Setup Instructions:
1. Clone the Repositorygit clone <your-repo-url> cd sauce-pom

2. Install Dependencies:
                                npm install

3. Install Playwright Browsers:
                                npx playwright install

Running Tests:
Run all tests (headless, default browser = Chromium):
                                npx playwright test

Run in headed mode:
                                npx plawright test --headed


Reports:

Reports are generated in the reports/ folder : To open the HTML report :
                                                                            npx playwright show-report reports
Screenshots & VideosScreenshots are captured on failure.
Videos are recorded only for failed tests.
Both are saved in the test-results/ folder.
Example:

test-results/
└── login.test.ts-2025-09-12-12-45-00/
    ├── test-failure.png
    └── video.webm

Automated Test Cases:

1. loginTest.spec.ts – Valid Login:
Navigate to SauceDemo
Login with standard_user / secret_sauce
Verify landing on Products page

2. invalidLogin.spec.ts – Invalid Login
Navigate to SauceDemo
Attempt login with wrong credentials
Verify error message is shown

3. addToCart.spec.ts – Add Product to Cart
Login as valid user
Add a product to cart
Verify product appears in cart

4. logout.spec.ts – Logout
Login as valid user
Perform logout
Verify user is redirected back to login page

Framework Highlights:
BasePage: shared actions (click, type, navigate, assertText)
POM Structure: LoginPage, ProductsPage, CartPage
Application.ts: centralized page manager → no need to create page objects in every test
Reports, screenshots, videos: automatically handled via config

Next Steps (Optional Enhancements)Add fixtures for automatic Application initialization.
Add environment config files (dev, qa, prod) for baseURL & credentials.
Add GitHub Actions CI/CD pipeline to run tests on push/PR.
playwright.config.tsimport { defineConfig, devices } from "@playwright/test";


playwright.config.ts:

import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  timeout: 30 * 1000,
  retries: 1,
  reporter: [["html", { outputFolder: "reports", open: "never" }]],
  use: {
    baseURL: "[https://www.saucedemo.com](https://www.saucedemo.com)",
    headless: true,
    screenshot: "only-on-failure", // Take screenshots only on failure
    video: "retain-on-failure",    // Save video only if test fails
    trace: "retain-on-failure",    // Keep trace for debugging
  },
  projects: [
    {
      name: "Chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "WebKit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  outputDir: "test-results/", // Where artifacts like screenshots/videos are stored
});
