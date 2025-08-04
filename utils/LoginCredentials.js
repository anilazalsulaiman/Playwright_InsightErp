import dotenv from 'dotenv';
dotenv.config();

export const roles = {
    Qa:{
        username: process.env.QA_USERNAME, 
        password: process.env.QA_PASSWORD
    }
   
};