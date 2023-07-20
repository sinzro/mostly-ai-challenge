import { Locator, Page } from "@playwright/test";

export class ContactPage {
	private readonly formHeaderEl: Locator;
	private readonly formFirstNameEl: Locator;
	private readonly formLastNameEl: Locator;
	private readonly formEmailEl: Locator;
	private readonly formPhoneEl: Locator;
	private readonly formOrganizationEl: Locator;
	private readonly formCountryEl: Locator;
	private readonly formHearAboutEl: Locator;
	private readonly formMessageBoxEl: Locator;
	private readonly formMarketingCheckboxEl: Locator;
	private readonly formSendMessageEl: Locator;

	constructor(page: Page) {
		this.formHeaderEl = page.getByText("Ask us anything!");

		this.formFirstNameEl = page.locator('[name="firstname"]');
		this.formLastNameEl = page.locator('[name="lastname"]');
		this.formEmailEl = page.locator('[name="email"]');
		this.formPhoneEl = page.locator('[name="mobilephone"]');
		this.formOrganizationEl = page.getByLabel("Your Organization*");
		this.formCountryEl = page.getByLabel("Country/Region*");
		this.formHearAboutEl = page.getByLabel(
			"How did you hear about MOSTLY AI?*",
		);
		this.formMessageBoxEl = page.locator('[name="message"]');
		this.formMarketingCheckboxEl = page.getByLabel(
			"Marketing offers and updates.*",
		);
		this.formSendMessageEl = page.getByRole("button", { name: "SEND MESSAGE" });
	}

	getFormHeader(): Locator {
		return this.formHeaderEl;
	}

	getFormFirstNameEl(): Locator {
		return this.formFirstNameEl;
	}

	getFormLastNameEl(): Locator {
		return this.formLastNameEl;
	}

	getFormEmailEl(): Locator {
		return this.formEmailEl;
	}

	getFormPhoneEl(): Locator {
		return this.formPhoneEl;
	}

	getFormOrganizationEl(): Locator {
		return this.formOrganizationEl;
	}

	getFormCountryEl(): Locator {
		return this.formCountryEl;
	}

	getFormHearAboutEl(): Locator {
		return this.formHearAboutEl;
	}
	getFormMessageBoxEl(): Locator {
		return this.formMessageBoxEl;
	}
	getFormMarketingCheckbox(): Locator {
		return this.formMarketingCheckboxEl;
	}
	getFormSendMessageEl(): Locator {
		return this.formSendMessageEl;
	}
}
