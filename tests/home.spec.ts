import {test, expect} from '../fixtures/pageFixtures'
import {ENV} from '../utils/envConfig'

test.beforeEach(async ({homePage})=>
{
    await homePage.navigateTo(ENV.BASE_URL);
})

test('Logo Visiblility @web @smoke @regression', async({homePage})=>{

    expect(await homePage.isLogVisisble()).toBe(true);

})

test('Verify home page title @regression @web', async ({homePage})=>{

    expect(await homePage.getTitle()).toBe('Your Store');
})