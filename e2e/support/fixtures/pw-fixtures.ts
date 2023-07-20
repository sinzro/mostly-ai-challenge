import { constants } from "../other/constants";
import { BaseFlow } from "../flows/base.flow";

import { expect, test as base, APIResponse } from "@playwright/test";
import { ContactFlow } from "../flows/contact.flow";

type pwFixtures = {
	bf: BaseFlow;
	cf: ContactFlow;
};

export const test = base.extend<pwFixtures>({
	bf: async ({ page, request }, use) => {
		await use(new BaseFlow(page));
	},
	cf: async ({ page, request }, use) => {
		await use(new ContactFlow(page));
	},
});

export { expect } from "@playwright/test";
