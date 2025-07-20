# 🚀 NASA Open MCT Cypress Tests

Automated end-to-end tests using **Cypress** for [NASA Open MCT](https://github.com/nasa/openmct) — a modern, web-based platform developed by NASA (National Aeronautics and Space Administration) for visualizing mission operations data from actual space missions.

This project is part of my portfolio and demonstrates Cypress testing for complex front-end applications in the context of spaceflight software.

---

👉 **Check out the generated Allure report here:**  
📈 [**View Allure Report**](https://mirgb.github.io/nasa-open-mct-cypress-tests/)

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

`git clone https://github.com/MiRGB/nasa-open-mct-cypress-tests.git`  
`cd nasa-open-mct-cypress-tests`  
`npm install`

---

## 🚀 Running the Tests

**Before running tests:**  
You must clone and run the NASA Open MCT repository locally on `http://localhost:8080/`. You can do this by:

`git clone https://github.com/nasa/openmct.git`  
`cd openmct`  
`npm install`  
`npm run start`  
(Make sure this server is running while you execute the tests)

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

## 🧰 npm Scripts

- `npm run test` — run Cypress tests with Allure enabled  
- `npm run test:allure` — run tests and automatically generate Allure report  
- `npm run allure:report` — generate Allure report from results  
- `npm run allure:open` — open generated Allure report in browser

---

## 📂 Project Structure & Configuration Files

- `cypress/support/e2e.js`  
  Global support file with commands import, error handling for ResizeObserver, and Allure plugin import.

- `cypress.config.js`  
  Main Cypress config with test runner options and Allure integration setup.

- `package.json`  
  Defines project metadata, scripts, and dev dependencies (`cypress`, `allure-cypress`, `cypress-downloadfile`).

---

## 🧾 Generating and Viewing Allure Reports

The Allure report is **automatically generated** after each test run using the script:

`npm run test:allure`

This script:  
- runs the tests (`cypress run`),  
- generates the report in the `./allure-report` folder,  
- **does not open the report in the browser automatically** – you can open it manually whenever you want.

### ✅ To manually open the report:

`npm run allure:open`

### 🛠️ Alternatively, using the Allure CLI directly:

`allure generate ./allure-results -o ./allure-report` — generates the report  
`allure open ./allure-report` — opens the report in your browser

> 💡 Make sure you have the **Allure CLI** installed globally.  
> On Windows, installation via Scoop is recommended:  
> `scoop install allure`

---

## 📚 Resources

- [NASA Open MCT GitHub](https://github.com/nasa/openmct)  
- [Cypress Documentation](https://docs.cypress.io)  
- [Allure Cypress](https://www.npmjs.com/package/allure-cypress)  
- [cypress-downloadfile Plugin](https://github.com/NoriSte/cypress-downloadfile)  
- [Allure Framework](https://docs.qameta.io/allure/)

---

## 🚀 About the project

I worked on automated tests for NASA Open MCT — NASA's modern platform for space data visualization, used by the agency and the scientific community worldwide.

This project is my independent educational initiative aimed at developing practical skills in web application testing.

---

## 📄 License

⚠️ This project is not open source. All rights reserved.  
For review purposes only. See the [LICENSE](./LICENSE) file for full terms.
