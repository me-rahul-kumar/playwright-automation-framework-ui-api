import { Page, Locator } from '@playwright/test'

export class MyAccount {
    private readonly page: Page;
    private readonly myAccountHeading: Locator;
    private readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.myAccountHeading = page.locator("//h2[normalize-space()='My Account']");
        this.logoutLink = page.locator("//a[text()='Logout' and @class='list-group-item']");
    }

    async isMyAccountExists(): Promise<boolean> {
        try {
            return await this.myAccountHeading.isVisible();
        }
        catch (error) {
            console.log(`Error checking My Account Page : ${error}`);
            return false;
        }
    }

    async clickOnLogOutLink(): Promise<void> {
        await this.logoutLink.click();
    }

    async isMyAccountHeadingVisible(): Promise<boolean> {
        return await this.myAccountHeading.isVisible();
    }

    

}