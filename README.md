# Playwright QA Automation Framework

Production-ready test automation framework built with **Playwright + TypeScript**, using the **Page Object Model**, multi-browser execution, CI/CD via GitHub Actions, and rich HTML/Allure reporting.

## ✨ Features

- **Page Object Model (POM)** — clean separation between test logic and page structure
- **Custom fixtures** — page objects auto-injected into tests, no manual instantiation
- **Multi-browser & mobile** — Chromium, Firefox, WebKit, and mobile viewport emulation
- **Parallel execution** — fast test runs, configurable workers
- **Retries & auto-healing on CI** — flaky test tolerance in CI environments
- **Reporting** — HTML report (built-in), Allure report (rich, shareable), JUnit XML (CI integrations)
- **Traces, screenshots & video on failure** — fast debugging without re-running
- **GitHub Actions CI/CD** — runs on push, PR, nightly schedule, and manual trigger
- **Environment-based config** — `.env` support for different environments (dev/staging/prod)
- **Tagging system** — `@smoke`, `@regression`, `@api` for selective test runs

## 📁 Project Structure

```
qa-framework/
├── pages/              # Page Objects
│   ├── BasePage.ts     # Shared actions (click, fill, wait, assertions...)
│   ├── LoginPage.ts
│   └── HomePage.ts
├── tests/              # Test specs
│   ├── login.spec.ts
│   └── example.spec.ts
├── utils/
│   ├── fixtures.ts     # Custom test fixtures (auto page-object injection)
│   └── testData.ts     # Centralized test data
├── .github/workflows/
│   └── playwright.yml  # CI/CD pipeline
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Install browsers
npx playwright install --with-deps

# 3. Copy env file and adjust values
cp .env.example .env

# 4. Run tests
npm test
```

## 🧪 Running Tests

```bash
npm test                  # run all tests, all browsers
npm run test:headed       # run with visible browser
npm run test:ui           # interactive UI mode (great for debugging)
npm run test:chromium     # single browser only
npx playwright test --grep @smoke     # run only smoke-tagged tests
npx playwright test tests/login.spec.ts   # run a single file
```

## 📊 Reports

```bash
npm run report             # open built-in HTML report
npm run allure:generate    # build Allure report from results
npm run allure:open        # open Allure report in browser
```

## 🔧 Adding a New Page Object

1. Create `pages/YourPage.ts` extending `BasePage`
2. Define locators in the constructor
3. Add page-specific action methods
4. Register it in `utils/fixtures.ts` if you want it auto-injected into tests

## 🔐 CI/CD Secrets

Set these in your GitHub repo under **Settings → Secrets and variables → Actions**:

- `BASE_URL`
- `TEST_USERNAME`
- `TEST_PASSWORD`

## 📝 Notes

This is a starter framework — selectors in `LoginPage.ts` / `HomePage.ts` use placeholder `data-testid` attributes and need to be adjusted to match your real application under test.

---
Built as a reusable starting point for freelance/consulting QA automation projects.
