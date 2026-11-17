import {test, expect, Locator, Page} from '@playwright/test'

export class ForgottonPasswordPage {

    private readonly page:Page;
    private readonly forgotYourPasswordPageHeading:Locator;

constructor(page:Page)
{
    this.page=page;
    this.forgotYourPasswordPageHeading=page.locator("//h1");
}

async isPageHeadingVisible():Promise<boolean>
{
    return this.forgotYourPasswordPageHeading.isVisible();
}

}