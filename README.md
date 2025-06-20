# 🚀 NASA Open MCT Cypress Tests

Automated end-to-end tests using **Cypress** for [NASA Open MCT](https://github.com/nasa/openmct) — a modern web-based platform for mission operations data visualization.

This project is part of my portfolio and demonstrates Cypress testing for complex front-end applications.

---

👉 **Check out the generated Allure report here:**  
*(Link will be added once deployed on GitHub Pages)*

---

## 🧪 Technologies Used

- ✅ **Cypress** – fast, reliable testing for anything that runs in a browser (v14.4.1)  
- 📥 **cypress-downloadfile** – plugin for verifying file downloads in tests  
- 🎯 **allure-cypress** – Allure reporting plugin integrated for detailed test reports

---

## ⚙️ Cypress Configuration

Key settings from `cypress.config.js`:

- `baseUrl: "http://localhost:8080/"`
- `viewportWidth: 1920`, `viewportHeight: 1080`
- `chromeWebSecurity: false`
- `retries: { runMode: 1, openMode: 1 }`
- `waitForAnimations: true`
- `testIsolation: false`
- `redirectionLimit: 2`
- `watchForFileChanges: true`

Event listeners configured to:

- Ignore `ResizeObserver loop completed with undelivered notifications` errors to avoid test interruption.
- Integrate Allure reporter to generate rich test reports automatically.

---

## 🔧 Installation

Clone the repository and install dependencies:

`git clone https://github.com/MiRGB/NASA_OpenMCT_Cypress_tests.git`  
`cd NASA_OpenMCT_Cypress_tests`  
`npm install`

---

## 🚀 Running the Tests

**Before running tests:**  
You must clone and run the NASA Open MCT repository locally on `http://localhost:8080/`. You can do this by:

`git clone https://github.com/nasa/openmct.git`  
`cd openmct`  
`npm install`  
`npm run start`

Then, in a separate terminal, run the tests from this repository:

1. Run Cypress tests in interactive mode:  
   `npx cypress open`

2. Or run tests headlessly:  
   `npm run test`

3. To generate Allure reports, make sure **Allure CLI** is installed globally on your system.  
   (See “Additional Notes” section for installation details.)

4. Generate the Allure report from test results:  
   `allure generate ./allure-results -o ./allure-report`

5. Open the generated Allure report in your default browser:  
   `allure open ./allure-report`

---

## 📂 Project Structure & Configuration Files

- `cypress/support/e2e.js`  
  Global support file with commands import, error handling for ResizeObserver, and Allure plugin import.

- `cypress.config.js`  
  Main Cypress config with test runner options and Allure integration setup.

- `package.json`  
  Defines project metadata, scripts, and dev dependencies (`cypress`, `allure-cypress`, `cypress-downloadfile`).

---

## 🛠️ Additional Notes & Allure Report Usage

- **Allure CLI** must be installed globally to generate and open test reports.  
  On Windows, you can install it via Scoop:  
  `scoop install allure`

- Tests are configured to retry once in case of failure, which helps with flaky tests.

- Chrome web security is disabled (`chromeWebSecurity: false`) to facilitate cross-origin testing scenarios.

- `testIsolation: false` disables automatic test isolation, useful when tests depend on each other.

### Generating and Viewing Allure Reports

Common commands to generate and open Allure reports:

`allure generate ./allure-results -o ./allure-report` — generate the report from results folder  
`allure open ./allure-report` — open the generated report in your default browser

You can also use the provided npm scripts to automate these actions:

`npm run allure:report` — generate the report  
`npm run allure:open` — open the report

---

## 📚 Resources

- [NASA Open MCT GitHub](https://github.com/nasa/openmct)  
- [Cypress Documentation](https://docs.cypress.io)  
- [Allure Cypress](https://www.npmjs.com/package/allure-cypress)  
- [cypress-downloadfile Plugin](https://github.com/NoriSte/cypress-downloadfile)

---

## 🚀 About the project

I worked on automated tests for NASA Open MCT — NASA's modern platform for space data visualization, used by the agency and the scientific community worldwide.

This project is my independent educational initiative aimed at developing practical skills in web application testing.
 