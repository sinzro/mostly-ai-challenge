## [mostly.ai challenge](https://mostly.ai/)

This is a challenge on the mostly.ai website.  
[Playwright](https://playwright.dev/) is used to write the tests using [POMs](e2e/support/pageObjects) and [fixtures](e2e/support/fixtures/). Docs are [here](https://playwright.dev/docs/pom) and [here](https://playwright.dev/docs/test-fixtures).  
Logic is stored in [flow classes](e2e/support/flows/).
It has a [default config](e2e/support/other/playwright.default.config.ts) file and an [e2e](e2e/playwright.e2e.config.ts) one.

The tests are running on the Chrome browser. The browser is installed via the **_pree2e_** script, which is done when running **_yarn e2e_** command. If the browser is already installed, the subsequent installations will be skipped.

The privacy popup is skipped by adding cookies.  
After the tests are run, the html report can be found [here](e2e/reports/html/).

## To run the tests:

- have Node.js installed
- have yarn package installed
- clone the repo locally
- install the packages with command - **_yarn_**
- run the e2e tests with command - **_yarn e2e_**

### Package.json scripts

```json
        // install the browsers
        "pree2e": "npx playwright install chromium",

        // run playwright tests with e2e config
        "pw-set-e2e": "playwright test --config=e2e/playwright.e2e.config.ts",
        "e2e": "yarn e2e",

        // run playwright tests and show the html report at the end
        "e2e-run-with-html-reporter": "yarn e2e && yarn e2e-show-html-report",
        "e2e-show-html-reporter": "playwright show-report e2e/reports/html",

        // run tests in debug mode
        "e2e-debug-tests": "yarn e2e --debug",

        // start playwright in ui mode
        "pw-ui": "yarn e2e --ui",

```
