import { test, expect } from '../fixtures/pageFixtures'
import { RandomDataUtil } from '../utils/DataGenerator';
import { ENV } from '../utils/envConfig'
import { faker } from '@faker-js/faker'


test.describe('Log In Module', async()=>{



test.beforeEach(async ({ homePage }) => {

    await homePage.navigateToHomePage();
})

test('Valid Login with registered email and password @regression @web @smoke @regression', async ({ homePage, loginPage, myAccountPage }) => {

    await homePage.clickOnMyAccountBtn()
    await homePage.clicOnLoginButton();
    await loginPage.setEmail(ENV.APP_EMAIL);
    await loginPage.setPassword(ENV.APP_PASSWORD);
    await loginPage.clickOnLoginButton();
    expect(await myAccountPage.isMyAccountExists()).toBe(true);
})

test(`Valid Login using "Enter" key @regression`, async ({ homePage, loginPage, myAccountPage }) => {

    await homePage.navigateToLoginPage();
    await loginPage.loginWithEnterClick(ENV.APP_EMAIL, ENV.APP_PASSWORD);
    expect(await myAccountPage.isMyAccountHeadingVisible()).toBe(true);
})

test(`Password masking toggle (Show/Hide) @regression`, async ({ homePage, loginPage, myAccountPage }) => {

    await homePage.navigateToLoginPage();
    await loginPage.setPassword(ENV.APP_PASSWORD);
    expect(await loginPage.isTypedPasswordMasked()).toBe(true);
})

test(`"Forgot Password" link navigation`, async ({ homePage, loginPage, forgottonPasswordPage }) => {

    await homePage.navigateToLoginPage();
    await loginPage.clickOnForgottenPasswardLink();
    expect(await forgottonPasswordPage.isPageHeadingVisible(), "Forgotten Password page heading should be visible").toBe(true);
})

test("Invalid Password with valid email @regression @web", async ({ homePage, loginPage }) => {

    await homePage.navigateToLoginPage();
    await loginPage.login(ENV.APP_EMAIL, RandomDataUtil.getPassword());
    expect(await loginPage.isloginInvalidCredentialsWarningMsgVisible()).toBe(true);
})

test("Unregistered or Invalid Email and password @regression @web", async ({ homePage, loginPage }) => {

    await homePage.navigateToLoginPage();
    await loginPage.login(RandomDataUtil.getEmail(), RandomDataUtil.getPassword());
    expect(await loginPage.isloginInvalidCredentialsWarningMsgVisible()).toBe(true);
})


test("Blank Email and Blank Password @regression @web", async ({ homePage, loginPage }) => {

    await homePage.navigateToLoginPage();
    expect(await loginPage.isloginInvalidCredentialsWarningMsgVisible()).toBe(true);
})



test("Valid Email with Blank Password @regression @web", async ({ homePage, loginPage }) => {

    await homePage.navigateToLoginPage();
    await loginPage.setEmail(ENV.APP_EMAIL);
    await loginPage.clickOnLoginButton();
    expect(await loginPage.isloginInvalidCredentialsWarningMsgVisible()).toBe(true);
})



test("Blank Email with Valid Password @regression @web", async ({ homePage, loginPage }) => {

    await homePage.navigateToLoginPage();
    await loginPage.setPassword(ENV.APP_PASSWORD);
    await loginPage.clickOnLoginButton();
    expect(await loginPage.isloginInvalidCredentialsWarningMsgVisible()).toBe(true);
})

test("Invalid Email Format with Valid Password @regression @web", async ({ homePage, loginPage }) => {

    await homePage.navigateToLoginPage();

    //// Method 1: Remove the '@' symbol from a real Faker email
    const missingAtSymbolEmail = faker.internet.email().replace('@', '');
    await loginPage.login(missingAtSymbolEmail, ENV.APP_PASSWORD);
    await loginPage.clickOnLoginButton();
    expect(await loginPage.isloginInvalidCredentialsWarningMsgVisible()).toBe(true);
})

test("Case-sensitivity check on Password @regression @web", async ({ homePage, loginPage }) => {

    await homePage.navigateToLoginPage();
    let password = ENV.APP_PASSWORD.toUpperCase();
    console.log(password);
    await loginPage.login(ENV.APP_EMAIL, password);
    await loginPage.clickOnLoginButton();
    expect(await loginPage.isloginInvalidCredentialsWarningMsgVisible()).toBe(true);
})

//SQL Injection / XSS attempt in input fields

test("SQL Injection or XSS attempt in input fields @regression @web", async ({ homePage, loginPage }) => {

    await homePage.navigateToLoginPage();

    let email = `' OR '1'='1`;
    let password = `test123`

    await loginPage.login(email, password);
    await loginPage.clickOnLoginButton();
    expect(await loginPage.isloginInvalidCredentialsWarningMsgVisible()).toBe(true);
})



test(`Browser "Back" button after Logout  @regression @web`, async ({ page, homePage, loginPage,myAccountPage }) => {

    await homePage.navigateToLoginPage();
    await loginPage.login(ENV.APP_EMAIL, ENV.APP_PASSWORD);
    await myAccountPage.clickOnLogOutLink();
    await page.goBack();
    expect(await myAccountPage.isMyAccountExists(),"User should be on My Account Page").toBe(true);
})

})