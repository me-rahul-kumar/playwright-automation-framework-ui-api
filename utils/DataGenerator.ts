import { faker } from "@faker-js/faker";

export class RandomDataUtil {

    static getEmail():string
    {
        return faker.internet.email();
    }

    static getPassword(length:Number=10):string
    {
        return faker.internet.password()
    }

}