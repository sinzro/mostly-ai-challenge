import { Locator, Page } from "@playwright/test";

export class BasePage {
	// privacy popup
	private readonly privacyPopupEl: Locator;
	private readonly privacyRefuseBtn: Locator;

	private readonly mostlyAiLinkEl: Locator;

	// bookmarks
	private readonly platformEl: Locator;
	private readonly syntheticDataEl: Locator;
	private readonly resourcesEl: Locator;
	private readonly companyEl: Locator;
	private readonly pricingEl: Locator;

	// searchbox
	private readonly searchBtn: Locator;
	private readonly searchBoxEl: Locator;
	private readonly searchResultsEl: Locator;

	private readonly companyContactEl: Locator;

	readonly page: Page;

	constructor(page: Page) {
		this.page = page;

		// privacy popup
		this.privacyPopupEl = page.locator("._brlbs-bar");
		this.privacyRefuseBtn = page.getByRole("button", { name: "DECLINE" });

		this.mostlyAiLinkEl = page.locator("#link-3998-16");

		// bookmarks
		this.platformEl = page.locator("#-mega-dropdown-3763-16");
		this.companyEl = page.locator("#-mega-dropdown-3962-16");
		this.resourcesEl = page.locator("#-mega-menu-3762-16-1689766600910-6");

		this.syntheticDataEl = page.getByRole("link", {
			name: "Synthetic Data",
			exact: true,
		});
		this.pricingEl = page
			.locator('[id="-mega-dropdown-3995-16"]')
			.getByRole("link", { name: "Pricing" });

		// search box
		this.searchBtn = page.getByLabel("Open search");
		this.searchBoxEl = page.getByTitle("Search for:");
		this.searchResultsEl = page
			.locator("#section-27-1315")
			.locator(".ct-section-inner-wrap");

		// contact
		this.companyContactEl = page.locator("#text_block-3984-16");
	}

	getPrivacyPopupEl(): Locator {
		return this.privacyPopupEl;
	}
	getPrivacyRefuseBtn(): Locator {
		return this.privacyRefuseBtn;
	}

	getMostlyAiLinkEl(): Locator {
		return this.mostlyAiLinkEl;
	}

	getPlatformEl(): Locator {
		return this.platformEl;
	}
	getSyntheticDataEl(): Locator {
		return this.syntheticDataEl;
	}
	getResourcesEl(): Locator {
		return this.resourcesEl;
	}
	getCompanyEl(): Locator {
		return this.companyEl;
	}
	getPricingEl(): Locator {
		return this.pricingEl;
	}

	getSearchBtn(): Locator {
		return this.searchBtn;
	}

	getSearchBoxEl(): Locator {
		return this.searchBoxEl;
	}

	getSearchResultsEl(): Locator {
		return this.searchResultsEl;
	}

	getCompanyContactEl(): Locator {
		return this.companyContactEl;
	}
}
