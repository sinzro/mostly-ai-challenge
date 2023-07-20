import { testData as td } from "../support/other/test-data";
import { test } from "../support/fixtures/pw-fixtures";

test.describe("main e2e", () => {
	test.beforeEach(async ({ page }) => {
		await test.step("go to baseUrl and click refuse privacy btn", async () => {
			// use cookies to bypass the privacy popup
			await page.context().addCookies(td.mostlyAiCookies);
			await page.goto("/");
		});
	});

	test("bookmarks are visible on the main page", async ({ bf }) => {
		await test.step("the main bookmarks are visible on the main page", async () => {
			await bf.mainBookmarksAreVisible();
		});
	});

	test("search for inexistent term", async ({ bf }) => {
		await test.step("search and check the results for an inexistent term", async () => {
			await bf.searchForInexistentTerm(td.inexistentSearchTerm);
		});
	});

	test("fill in contact form", async ({ bf, cf }) => {
		await test.step("go to contact and fill in form", async () => {
			await bf.goToContactPage();
			await cf.fillInForm();
		});
	});
});
