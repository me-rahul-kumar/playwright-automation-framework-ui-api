import {Page, Locator, expect} from '@playwright/test'

export class LoginPage
{
    private readonly page:Page;
    private readonly emailInput:Locator;
    private readonly passwordInput:Locator;
    private readonly loginButton:Locator;
    private readonly forgottenPasswardLink: Locator;
    private readonly loginInvalidCredentialsWarningMsg:Locator;


    constructor(page:Page)
    {
        this.page=page;
        this.emailInput=page.locator('#input-email');
        this.passwordInput=page.locator('#input-password');
        this.loginButton = page.locator('input.btn.btn-primary');
        this.forgottenPasswardLink=page.locator("//input[@id='input-password']/following-sibling::a");
        this.loginInvalidCredentialsWarningMsg=page.locator("//div[@class='alert alert-danger alert-dismissible']");
    }

    async setEmail(email:string):Promise<void>
    {
        await this.emailInput.fill(email);
    }

    async setPassword(password:string): Promise<void>
    {
        await this.passwordInput.fill(password);
    }

    async clickOnLoginButton():Promise<void>
    {
        await this.loginButton.click();
    }

    async login(email:string, password:string):Promise<void>
    {
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickOnLoginButton();
    }

   async loginWithEnterClick(email:string, password:string):Promise<void>
   {
        await this.setEmail(email);
        await this.setPassword(password);
        //await this.passwordInput.press('Enter'); 
        //await this.page.waitForTimeout(5000);
        
        await Promise.all([
            await this.page.keyboard.press('Enter'),
            await this.page.waitForURL("https://awesomeqa.com/ui/index.php?route=account/account")
        ])
    }

    async isTypedPasswordMasked():Promise<boolean>
    {
        let type=await this.passwordInput.getAttribute('type');
        return type ==='password';
    }

    async clickOnForgottenPasswardLink():Promise<void>
    {
        await this.forgottenPasswardLink.click();
    }

    async isloginInvalidCredentialsWarningMsgVisible():Promise<boolean>
    {
        return await this.loginInvalidCredentialsWarningMsg.isVisible();
    }


}