import { test as base } from '@playwright/test'
import { ENV } from '../utils/envConfig'
import { Homepage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage';
import { MyAccount } from '../pages/MyAccount'
import { LogoutPage } from '../pages/LogOutPage';
import { ForgottonPasswordPage } from '../pages/ForgottonPasswordPage';



const APP_URL = ENV.BASE_URL;

type PageFixtures = {

   homePage: Homepage,
   loginPage: LoginPage,
   myAccountPage: MyAccount;
   logoutPage: LogoutPage;
   forgottonPasswordPage:ForgottonPasswordPage;
};

export const test = base.extend<PageFixtures>({

   homePage: async ({ page }, use) => {

      //await page.goto(APP_URL);
      await use(new Homepage(page))
   },

   loginPage: async ({ page }, use) => {

      await use(new LoginPage(page));
   },
   myAccountPage: async ({ page }, use) => {

      await use(new MyAccount(page));
   },

   logoutPage: async ({ page }, use) => {
      await use(new LogoutPage(page));
   },

   forgottonPasswordPage: async({page},use)=>{
      await use(new ForgottonPasswordPage(page));
   }
})

export { expect } from '@playwright/test'

