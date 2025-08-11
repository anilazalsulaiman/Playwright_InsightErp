import {test, expect} from '@playwright/test';
import { Loginpage } from '../pages/Loginpage.js';
import dotenv from 'dotenv';
import {roles} from '../utils/LoginCredentials.js';

dotenv.config();

//let login;

test.beforeEach(async({page}) =>{
    const login= new Loginpage(page);
    await login.navigateToLogin(process.env.BASE_URL);
    await login.performLogin(roles.Qa.username, roles.Qa.password); 
})

test('Perform Login', async ( {page} ) => {
    const login = new Loginpage(page);
    await login.assertLoginSuccess();
    //await expect(login.isDashboard_ViewProfileButtonVisible()).toBeTruthy();
    //await expect(login.getDashboard_ViewProfileButtonText()).toBe('View Profile');
})

