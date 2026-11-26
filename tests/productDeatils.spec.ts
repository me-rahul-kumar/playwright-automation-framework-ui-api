import {test, expect} from '../fixtures/pageFixtures'

test('Test Product Details', async ({productDetails})=>{

    const testPD=await productDetails.testProductDetails();
    console.log(testPD);

    console.log(`Executed Environments: ${process.env.APP_ENV}`)


})