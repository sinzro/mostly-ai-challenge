import { Page, expect, test } from "@playwright/test";
import { BasePage } from "../pageObjects/base.po";
import { testData as td } from "../other/test-data";

export class BaseFlow {
	readonly bp: BasePage;

	constructor(page: Page) {
		this.bp = new BasePage(page);
	}

	/**
	 * Check that the 5 main bookmarks are visible
	 */
	async mainBookmarksAreVisible(): Promise<void> {
		await test.step("platform bookmark is visible", async () => {
			await expect(this.bp.getPlatformEl()).toBeVisible();
		});

		await test.step("syntethic bookmark data is visible", async () => {
			await expect(this.bp.getSyntheticDataEl()).toBeVisible();
		});

		await test.step("company bookmark is visible", async () => {
			await expect(this.bp.getCompanyEl()).toBeVisible();
		});

		await test.step("company bookmark is visible", async () => {
			await expect(this.bp.getCompanyEl()).toBeVisible();
		});

		await test.step("pricing bookmark is visible", async () => {
			await expect(this.bp.getPricingEl()).toBeVisible();
		});
	}

	/**
	 * click on the search button and fill in the search term
	 */
	async searchForSpecificTerm(term: string): Promise<void> {
		await test.step("search for term", async () => {
			// prevent race conditions
			await Promise.all([
				this.bp.getSearchBoxEl().fill(term),
				this.bp.getSearchBtn().click(),
			]);

			await Promise.all([
				this.bp.getSearchResultsEl().waitFor(),
				this.bp.page.keyboard.press("Enter"),
			]);
		});
	}

	/**
	 * search for an inexistent term \
	 * check that the results are in the correct format
	 */
	async searchForInexistentTerm(term: string): Promise<void> {
		await this.searchForSpecificTerm(term);

		await test.step("check that the term was not found", async () => {
			expect(await this.bp.getSearchResultsEl().allInnerTexts()).toContain(
				`${td.searchError}\n\n${term}`,
			);
		});
	}

	/**
	 * go to contact via company bookmark -> contact element
	 */
	async goToContactPage(): Promise<void> {
		await this.bp.getCompanyEl().click();
		await this.bp.getCompanyContactEl().click();
	}
}
