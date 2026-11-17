import {test, expect} from '../fixtures/pageFixtures'
import { Homepage } from '../pages/HomePage';
import {ENV} from '../utils/envConfig'

test.beforeEach(async({homePage})=>{
 await homePage.navigateTo(ENV.BASE_URL);
})


test('verify usere should be able to logout when click on logout link on My Account page.@web @smoke @regression',
     async({homePage,loginPage, myAccountPage,logoutPage})=>{

    await homePage.clickOnMyAccountBtn();
    await homePage.clicOnLoginButton();
    await loginPage.login(ENV.APP_EMAIL, ENV.APP_PASSWORD);
    await myAccountPage.clickOnLogOutLink();
    expect(await logoutPage.isLogOutExists()).toBe(true);
    

})