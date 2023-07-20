import { ContactPage } from "./../pageObjects/contact.po";
import { Page, expect, test } from "@playwright/test";
import { testData as td } from "../other/test-data";

export class ContactFlow {
	readonly cp: ContactPage;

	constructor(page: Page) {
		this.cp = new ContactPage(page);
	}

	/**
	 * click on the form header to load the form faster \
	 * fill in data \
	 * hover over the send message button
	 */
	async fillInForm(): Promise<void> {
		// done to load the form faster
		await this.cp.getFormHeader().click();

		await test.step("fill in first name and last name", async () => {
			await this.cp.getFormFirstNameEl().fill(td.contactUser.firstName);
			await this.cp.getFormLastNameEl().fill(td.contactUser.lastName);
		});

		await test.step("fill in email and phone number", async () => {
			await this.cp.getFormEmailEl().fill(td.contactUser.email);
			await this.cp.getFormPhoneEl().fill(td.contactUser.phone);
		});

		await test.step("fill in organization and country", async () => {
			await this.cp.getFormOrganizationEl().fill(td.contactUser.organization);
			await this.cp.getFormCountryEl().selectOption(td.contactUser.country);
		});

		await test.step("fill in How did you hear about us", async () => {
			await this.cp.getFormHearAboutEl().fill(td.contactUser.hearAbout);
		});

		await test.step("fill in the message", async () => {
			await this.cp.getFormMessageBoxEl().fill(td.contactUser.message);
		});

		await test.step("check the marketing and offers checkbox", async () => {
			await this.cp.getFormMarketingCheckbox().check();
		});

		await test.step("hover over the send message", async () => {
			await this.cp.getFormSendMessageEl().hover();
		});
	}
}
