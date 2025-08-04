import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/Loginpage.js';
import { Headermenupage } from '../pages/Headermenupage.js';
import { roles } from '../utils/LoginCredentials.js';
import { HeaderExpectedValues } from '../assertions/HeadermenuAssertion.js';
import dotenv from 'dotenv';

dotenv.config();

let timesheetMainPassed = false;
let leavesMainPassed = false;

test.beforeEach(async ({ page }) => {
  const login = new Loginpage(page);
  await login.navigateToLogin(process.env.BASE_URL);
  await login.performLogin(roles.Qa.username, roles.Qa.password);
});

//APPS Menu
test('Verify_MouseHover_Header_Apps_visibilityCheck', async ({ page }) => {
  const header = new Headermenupage(page);
  const actual = await header.hover_apps.textContent();
  expect(actual.trim()).toBe(HeaderExpectedValues.hm_AppsText);
  timesheetMainPassed = true;
});

// TIMESHEET
test.describe.serial('Timesheet Tests', () =>{
  test('mouseHover_Header_Apps_visibilityCheck_of_Timesheet', async ({ page }) => {
  const header = new Headermenupage(page);
  const actual = await header.getValue_of_header_apps_timesheet();
  expect(actual.trim()).toBe(HeaderExpectedValues.hm_TimesheetText);
  timesheetMainPassed = true;
});

test('verify_redirection_AND_LandingPageValue_Timesheet', async ({ page }) => {
  if (!timesheetMainPassed) {
    test.skip('Skipping because Timesheet main test failed');
  }

  const header = new Headermenupage(page);
  const actualText = await header.get_LandingPageValue_Timesheet();
  expect(actualText.trim()).toBe(HeaderExpectedValues.timesheetLandingTitle);
  await expect(page).toHaveURL(HeaderExpectedValues.urls.timesheet);
});
})


// LEAVES
test.describe.serial('Leaves Tests', () =>{
test('mouseHover_Header_Apps_visibilityCheck_of_Leaves', async ({ page }) => {
  const header = new Headermenupage(page);
  const actual = await header.getValue_of_header_apps_Leaves();
  expect(actual.trim()).toBe(HeaderExpectedValues.hm_leavesText);
  leavesMainPassed = true;
});

test('verify_redirection_AND_LandingPageValue_ApplyLeaves', async ({ page }) => {
  if (!leavesMainPassed) {
    test.skip('Skipping because Leaves main test failed');
  }

  const header = new Headermenupage(page);
  const actualText = await header.get_LandingPageValue_Leaves_ApplyLeave();
  expect(actualText.trim()).toBe(HeaderExpectedValues.applyLeaveTitle);
  await expect(page).toHaveURL(HeaderExpectedValues.urls.applyLeave);
});

test('verify_redirection_AND_LandingPageValue_MyLeaveHistory', async ({ page }) => {
  if (!leavesMainPassed) {
    test.skip('Skipping because Leaves main test failed');
  }

  const header = new Headermenupage(page);
  const actualText = await header.get_LandingPageValue_Leaves_MyLeaveHistory();
  expect(actualText.trim()).toBe(HeaderExpectedValues.myLeavesTitle);
  await expect(page).toHaveURL(HeaderExpectedValues.urls.myLeaves);
});

test('verify_redirection_AND_LandingPageValue_ForMyApproval', async ({ page }) => {
  if (!leavesMainPassed) {
    test.skip('Skipping because Leaves main test failed');
  }

  const header = new Headermenupage(page);
  const actualText = await header.get_LandingPageValue_Leaves_ForMyApproval();
  expect(actualText.trim()).toBe(HeaderExpectedValues.forApprovalTitle);
  await expect(page).toHaveURL(HeaderExpectedValues.urls.forApproval);
});


// GROUP CHANGE
test.describe.serial('Group Change Tests', () => {
  let groupChangeMainPassed = false;

  test('mouseHover_Header_Apps_visibilityCheck_of_GroupChange', async ({ page }) => {
    const header = new Headermenupage(page);
    const actual = await header.getValue_of_header_apps_GroupChange();
    expect(actual.trim()).toBe(HeaderExpectedValues.hm_GroupChangeText);
    groupChangeMainPassed = true;
  });

  test('verify_redirection_AND_LandingPageValue_GroupChange', async ({ page }) => {
    if (!groupChangeMainPassed) {
      test.skip('Skipping because Group Change main test failed');
    }

    const header = new Headermenupage(page);
    const actualText = await header.get_LandingPageValue_GroupChange();
    expect(actualText.trim()).toBe(HeaderExpectedValues.groupChangeLandingTitle);
    await expect(page).toHaveURL(HeaderExpectedValues.urls.groupChange);
  });
});

// MY BILLS
test.describe.serial.only('My Bills Tests', () => {
  let myBillsMainPassed = false;

  test('mouseHover_Header_Apps_visibilityCheck_of_MyBills', async ({ page }) => {
    const header = new Headermenupage(page);
    const actual = await header.getValue_of_header_apps_MyBills();
    expect(actual.trim()).toBe(HeaderExpectedValues.hm_MyBillsText);
    myBillsMainPassed = true;
  });

  test('verify_redirection_AND_LandingPageValue_MyBills_CreateNewRequest', async ({ page }) => {
    if (!myBillsMainPassed) {
      test.skip('Skipping because My Bills main test failed');
    }
    const header = new Headermenupage(page);
    const actualText = await header.get_LandingPageValue_MyBills_CreateNewRequest();
    expect(actualText.trim()).toBe(HeaderExpectedValues.createNewRequestTitle);
    await expect(page).toHaveURL(HeaderExpectedValues.urls.createNewRequest);
  });

  test('verify_redirection_AND_LandingPageValue_MyBills_MyBillsHistory', async ({ page }) => {
    if (!myBillsMainPassed) {
      test.skip('Skipping because My Bills main test failed');
    }
    const header = new Headermenupage(page);
    const actualText = await header.get_LandingPageValue_MyBills_myBillsHistory();
    expect(actualText.trim()).toBe(HeaderExpectedValues.myBillsHistoryTitle);
    await expect(page).toHaveURL(HeaderExpectedValues.urls.myBillsHistory);
  });

  test('verify_redirection_AND_LandingPageValue_MyBills_BuApproval', async ({ page }) => {
    if (!myBillsMainPassed) {
      test.skip('Skipping because My Bills main test failed');
    }
    const header = new Headermenupage(page);
    const actualText = await header.get_LandingPageValue_MyBills_BuApproval();
    expect(actualText.trim()).toBe(HeaderExpectedValues.buApprovalTitle);
    await expect(page).toHaveURL(HeaderExpectedValues.urls.buApproval);
  });

  test('verify_redirection_AND_LandingPageValue_MyBills_BuHistory', async ({ page }) => {
    if (!myBillsMainPassed) {
      test.skip('Skipping because My Bills main test failed');
    }
    const header = new Headermenupage(page);
    const actualText = await header.get_LandingPageValue_MyBills_BuHistory();
    expect(actualText.trim()).toBe(HeaderExpectedValues.buHistoryTitle);
    await expect(page).toHaveURL(HeaderExpectedValues.urls.buHistory);
  });

  test('verify_redirection_AND_LandingPageValue_MyBills_Category', async ({ page }) => {
    if (!myBillsMainPassed) {
      test.skip('Skipping because My Bills main test failed');
    }
    const header = new Headermenupage(page);
    const actualText = await header.get_LandingPageValue_MyBills_category();
    expect(actualText.trim()).toBe(HeaderExpectedValues.categoryTitle);
    await expect(page).toHaveURL(HeaderExpectedValues.urls.category);
  });

  test('verify_redirection_AND_LandingPageValue_MyBills_DepartmentApproval', async ({ page }) => {
    if (!myBillsMainPassed) {
      test.skip('Skipping because My Bills main test failed');
    }
    const header = new Headermenupage(page);
    const actualText = await header.get_LandingPageValue_MyBills_DepartmentApproval();
    expect(actualText.trim()).toBe(HeaderExpectedValues.deptApprovalTitle);
    await expect(page).toHaveURL(HeaderExpectedValues.urls.deptApproval);
  });

  test('verify_redirection_AND_LandingPageValue_MyBills_DepartmentHistory', async ({ page }) => {
    if (!myBillsMainPassed) {
      test.skip('Skipping because My Bills main test failed');
    }
    const header = new Headermenupage(page);
    const actualText = await header.get_LandingPageValue_MyBills_DepartmentHistory();
    expect(actualText.trim()).toBe(HeaderExpectedValues.deptHistoryTitle);
    await expect(page).toHaveURL(HeaderExpectedValues.urls.deptHistory);
  });

  test('verify_redirection_AND_LandingPageValue_MyBills_FinanceApproval', async ({ page }) => {
    if (!myBillsMainPassed) {
      test.skip('Skipping because My Bills main test failed');
    }
    const header = new Headermenupage(page);
    const actualText = await header.get_LandingPageValue_MyBills_FinanceApproval();
    expect(actualText.trim()).toBe(HeaderExpectedValues.finApprovalTitle);
    await expect(page).toHaveURL(HeaderExpectedValues.urls.finApproval);
  });

  test('verify_redirection_AND_LandingPageValue_MyBills_FinanceHistory', async ({ page }) => {
    if (!myBillsMainPassed) {
      test.skip('Skipping because My Bills main test failed');
    }
    const header = new Headermenupage(page);
    const actualText = await header.get_LandingPageValue_MyBills_FinanceHistory();
    expect(actualText.trim()).toBe(HeaderExpectedValues.finHistoryTitle);
    await expect(page).toHaveURL(HeaderExpectedValues.urls.finHistory);
  });
});


})
