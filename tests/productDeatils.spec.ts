import {test, expect} from '../fixtures/pageFixtures'

test('Test Product Details', async ({productDetails})=>{

    const testPD=await productDetails.testProductDetails();
    console.log(testPD);


})