import {expect} from '@playwright/test';
import {login} from '../locators/Login.js';

class Loginpage {

  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator(login.usernameTextbox);
    this.passwordInput = page.locator(login.passwordTextbox);
    this.loginButton = page.locator(login.submitButton);
    this.dashboardElement_ViewProfile_btn = page.locator("//button[normalize-space()='View Profile']");
  }

  async navigateToLogin(url) {
    await this.page.goto(url);
  }


  async performLogin(username, password) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click();
  }

  async assertLoginSuccess() {
  await expect(this.dashboardElement_ViewProfile_btn).toBeVisible();
  await expect(this.dashboardElement_ViewProfile_btn).toHaveText('View Profile');
  }

// Dashboard methods= Not using anywhere in the test file, but keeping for future use
  async isDashboard_ViewProfileButtonVisible() {
    return await this.dashboardElement_ViewProfile.isVisible();
  }
  async getDashboard_ViewProfileButtonText() {
    return await this.dashboardElement_ViewProfile.textContent();
  }
}
export { Loginpage };
//module.exports = { Loginpage };