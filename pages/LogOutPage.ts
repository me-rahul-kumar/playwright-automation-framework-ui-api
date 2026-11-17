import {Page, Locator} from '@playwright/test'

export class LogoutPage
{
    private readonly page:Page;
    private readonly logOutHeading: Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.logOutHeading=page.locator("//h1[text()='Account Logout']");
    }

    async isLogOutExists():Promise<boolean>
    {
        try
        {
            return this.logOutHeading.isVisible();
        }
        catch(error)
        {
            console.log(`Error with checking Logout Page ${error}`);
            return false;
        }

    }

    async isAccountLogOutHeadingVisible():Promise<boolean>
    {
        return await this.logOutHeading.isVisible();
    }
}