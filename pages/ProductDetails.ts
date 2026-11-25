import { Page, Locator } from "@playwright/test";

export class ProductDetails
{

    private readonly page:Page;
    private readonly productImage:Locator;

    constructor(page:Page)
    {
        this.page=page
        this.productImage=page.locator("//img[@id='prd-img']");
    }

    async isProductImageVisible():Promise<boolean>
    {
       return this.productImage.isVisible();
    }

    async testProductDetails():Promise<String>
    {
        return "I m on PD page."
    }
    

}