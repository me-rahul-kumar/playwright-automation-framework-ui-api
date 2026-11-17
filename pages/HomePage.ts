import {Page, Locator} from '@playwright/test'
import { ENV } from '../utils/envConfig';

export class Homepage{

    private readonly page: Page;

    private readonly myAccountLink: Locator;
    private readonly loginButton: Locator;
    private readonly logoImg:Locator;
   

    constructor(page: Page)
    {
    
        this.page=page;
        this.myAccountLink=page.locator("//span[text()='My Account']");
        this.logoImg=page.locator("//img[@title='TheTestingAcademy eCommerce']");

        
        this.loginButton=page.getByRole('link', { name: 'Login' });
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async navigateToHomePage():Promise<void>
    {
        await this.page.goto(ENV.BASE_URL);
    }

    async clickOnMyAccountBtn():Promise<void>
    {
        await this.myAccountLink.click();

    }

    async clicOnLoginButton(): Promise<void>
    {
        await this.loginButton.click();    
    }

    async isLogVisisble():Promise<boolean>
    {
        return this.logoImg.isVisible();
    }

    async getTitle():Promise<string>
    {
        return await this.page.title();
    }

    async navigateToLoginPage():Promise<void>
    {
        await this.clickOnMyAccountBtn();
        await this.clicOnLoginButton();
    }
}

