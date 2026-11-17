import dotenv from 'dotenv'
import path from 'path'

//get environment name
const environment=process.env.ENV || 'qa';

// Load respective env file
dotenv.config({path: path.resolve(process.cwd(), `${environment}.env`)});

export const ENV={

    BASE_URL: process.env.WEB_APP_URL!,
    APP_ENV:process.env.APP_ENV!,
    APP_EMAIL: process.env.APP_EMAIL!,
    APP_PASSWORD: process.env.APP_PASSWORD!
};