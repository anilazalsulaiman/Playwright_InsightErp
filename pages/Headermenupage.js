import { headermenu } from '../locators/Headermenu.js';
import GeneralUtilities from '../utils/GeneralUtilities.js'

class Headermenupage {
  constructor(page) {
    this.page = page;
    this.utils = new GeneralUtilities();

    // APPS Menu
    this.hover_apps = page.locator(headermenu.Apps.hover_apps);

    // TIMESHEET
    this.click_apps_timesheet = page.locator(headermenu.Timesheet.click_apps_timesheet);
    this.assert_TimesheetPage_title = page.locator(headermenu.Timesheet.assert_TimesheetPage_title);

    // LEAVE
    this.hover_apps_Leaves = page.locator(headermenu.Leave.hover_apps_Leaves);
    this.click_apps_Leaves_ApplyLeave = page.locator(headermenu.Leave.click_apps_Leaves_ApplyLeave);
    this.assert_ApplyLeave_Page_title = page.locator(headermenu.Leave.assert_ApplyLeave_Page_title);

    this.click_apps_Leaves_MyLeaveHistory = page.locator(headermenu.Leave.click_apps_Leaves_MyLeaveHistory);
    this.assert_MyleaveHistory_Page_title = page.locator(headermenu.Leave.assert_MyleaveHistory_Page_title);

    this.click_apps_Leaves_ForMyApproval = page.locator(headermenu.Leave.click_apps_Leaves_ForMyApproval);
    this.assert_ForMyApproval_Page_title = page.locator(headermenu.Leave.assert_ForMyApproval_Page_title);

    // GROUP CHANGE
    this.click_apps_groupchange = page.locator(headermenu.GroupChange.click_apps_groupchange);
    this.assert_groupchange_Page_title = page.locator(headermenu.GroupChange.assert_groupchange_Page_title);

    // MY BILLS
    this.hover_apps_mybills = page.locator(headermenu.MyBills.hover_apps_mybills);

      // CREATE NEW REQUEST
    this.click_apps_mybills_CreateNewRequest = page.locator(headermenu.MyBills.click_apps_mybills_CreateNewRequest);
    this.assert_createNewRequest_Page_title = page.locator(headermenu.MyBills.assert_createNewRequest_Page_title);

      // MY BILLS HISTORY
    this.click_apps_mybills_MyBillsHistory = page.locator(headermenu.MyBills.click_apps_mybills_MyBillsHistory);
    this.assert_MyBillsHistory_Page_title = page.locator(headermenu.MyBills.assert_MyBillsHistory_Page_title);

      // BU APPROVAL
    this.click_apps_mybills_BuApproval = page.locator(headermenu.MyBills.click_apps_mybills_BuApproval);
    this.assert_BuApproval_Page_title = page.locator(headermenu.MyBills.assert_BuApproval_Page_title);

      // BU HISTORY
    this.click_apps_mybills_BuHistory = page.locator(headermenu.MyBills.click_apps_mybills_BuHistory);
    this.assert_BuHistory_Page_title = page.locator(headermenu.MyBills.assert_BuHistory_Page_title);

      // CATEGORY
    this.click_apps_mybills_Category = page.locator(headermenu.MyBills.click_apps_mybills_Category);
    this.assert_Category_Page_title = page.locator(headermenu.MyBills.assert_Category_Page_title);

      // DEPT APPROVAL
    this.click_apps_mybills_DeptApproval = page.locator(headermenu.MyBills.click_apps_mybills_DeptApproval);
    this.assert_DeptApproval_Page_title = page.locator(headermenu.MyBills.assert_DeptApproval_Page_title);

      // DEPT HISTORY
    this.click_apps_mybills_DeptHistory = page.locator(headermenu.MyBills.click_apps_mybills_DeptHistory);
    this.assert_DeptHistory_Page_title = page.locator(headermenu.MyBills.assert_DeptHistory_Page_title);

      // FIN APPROVAL
    this.click_apps_mybills_Finapproval = page.locator(headermenu.MyBills.click_apps_mybills_Finapproval);
    this.assert_Finapproval_Page_title = page.locator(headermenu.MyBills.assert_Finapproval_Page_title);

      // FIN HISTORY
    this.click_apps_mybills_FinHistory = page.locator(headermenu.MyBills.click_apps_mybills_FinHistory);
    this.assert_FinHistory_Page_title = page.locator(headermenu.MyBills.assert_FinHistory_Page_title);

    // GOALS & REVIEWS
    this.hover_apps_GandR = page.locator(headermenu.GoalsReviews.hover_apps_GandR);

    // INITIATION
    this.click_apps_GandR_initiation = page.locator(headermenu.GoalsReviews.click_apps_GandR_initiation);
    this.assert_GandR_initiation_Page_title = page.locator(headermenu.GoalsReviews.assert_GandR_initiation_Page_title);

    // MY GOALS
    this.click_apps_GandR_MyGoals = page.locator(headermenu.GoalsReviews.click_apps_GandR_MyGoals);
    this.assert_GandR_MyGoals_Page_title = page.locator(headermenu.GoalsReviews.assert_GandR_MyGoals_Page_title);

    // RATING PENDING
    this.click_apps_GandR_RatingPending = page.locator(headermenu.GoalsReviews.click_apps_GandR_RatingPending);
    this.assert_GandR_RatingPending_Page_title_BeforeInitiation = page.locator(headermenu.GoalsReviews.assert_GandR_RatingPending_Page_title_BeforeInitiation);
    this.assert_GandR_RatingPending_Page_title__AfterInitiation = page.locator(headermenu.GoalsReviews.assert_GandR_RatingPending_Page_title__AfterInitiation);

    // ADD CUSTOM GOALS
    this.click_apps_GandR_AddCustomGoals = page.locator(headermenu.GoalsReviews.click_apps_GandR_AddCustomGoals);
    this.assert_GandR_AddCustomGoals_Page_title = page.locator(headermenu.GoalsReviews.assert_GandR_AddCustomGoals_Page_title);
  }

  async isHeaderAppVisible() {
    return await this.hover_apps.isVisible();
  }

  async mouseHover_header_apps() {
    await this.hover_apps.hover();
  }


  // TIMESHEET
  async getValue_of_header_apps_timesheet() {
    await this.utils.hoveronApps(this.hover_apps);
    return await this.utils.getText(this.click_apps_timesheet)
  }

  async get_LandingPageValue_Timesheet() {
    await this.utils.hoveronApps(this.hover_apps);
    await this.click_apps_timesheet.click();
    return await this.utils.getText(this.assert_TimesheetPage_title)
  }

  // LEAVES
  async getValue_of_header_apps_Leaves() {
    await this.utils.hoveronAppsSubmenu (this.hover_apps, this.hover_apps_Leaves);
    return await this.utils.getText(this.hover_apps_Leaves)
  }

  async get_LandingPageValue_Leaves_ApplyLeave() {
    await this.utils.hoveronAppsSubmenu(this.hover_apps, this.hover_apps_Leaves);
    await this.click_apps_Leaves_ApplyLeave.click();
    return await this.utils.getText(this.assert_ApplyLeave_Page_title)
  }

  async get_LandingPageValue_Leaves_MyLeaveHistory() {
    await this.utils.hoveronAppsSubmenu(this.hover_apps, this.hover_apps_Leaves);
    await this.click_apps_Leaves_MyLeaveHistory.click();
    return await this.utils.getText(this.assert_MyleaveHistory_Page_title)
  }

  async get_LandingPageValue_Leaves_ForMyApproval() {
    await this.utils.hoveronAppsSubmenu(this.hover_apps, this.hover_apps_Leaves);
    await this.click_apps_Leaves_ForMyApproval.click();
    return await this.utils.getText(this.assert_ForMyApproval_Page_title)
  }

   // GROUP CHANGE
  async getValue_of_header_apps_GroupChange() {
    await this.utils.hoveronApps(this.hover_apps);
    return await this.utils.getText(this.click_apps_groupchange);
  }

  async get_LandingPageValue_GroupChange() {
    await this.utils.hoveronApps(this.hover_apps);
    await this.click_apps_groupchange.click();
    return await this.utils.getText(this.assert_groupchange_Page_title);
  }

  // MY BILLS
  async getValue_of_header_apps_MyBills() {
    await this.utils.hoveronAppsSubmenu(this.hover_apps, this.hover_apps_mybills);
    return await this.utils.getText(this.hover_apps_mybills);
  }

  async get_LandingPageValue_MyBills_CreateNewRequest() {
    await this.utils.hoveronAppsSubmenu(this.hover_apps, this.hover_apps_mybills);
    await this.click_apps_mybills_CreateNewRequest.click();
    return await this.utils.getText(this.assert_createNewRequest_Page_title);
  }

  async get_LandingPageValue_MyBills_myBillsHistory() {
    await this.utils.hoveronAppsSubmenu(this.hover_apps, this.hover_apps_mybills);
    await this.click_apps_mybills_MyBillsHistory.click();
    return await this.utils.getText(this.assert_MyBillsHistory_Page_title);
  }

  async get_LandingPageValue_MyBills_BuApproval() {
    await this.utils.hoveronAppsSubmenu(this.hover_apps, this.hover_apps_mybills);
    await this.click_apps_mybills_BuApproval.click();
    return await this.utils.getText(this.assert_BuApproval_Page_title);
  }

  async get_LandingPageValue_MyBills_BuHistory() {
    await this.utils.hoveronAppsSubmenu(this.hover_apps, this.hover_apps_mybills);
    await this.click_apps_mybills_BuHistory.click();
    return await this.utils.getText(this.assert_BuHistory_Page_title);
  }

  async get_LandingPageValue_MyBills_category() {
    await this.utils.hoveronAppsSubmenu(this.hover_apps, this.hover_apps_mybills);
    await this.click_apps_mybills_Category.click();
    return await this.utils.getText(this.assert_Category_Page_title);
  }

  async get_LandingPageValue_MyBills_DepartmentApproval() {
    await this.utils.hoveronAppsSubmenu(this.hover_apps, this.hover_apps_mybills);
    await this.click_apps_mybills_DeptApproval.click();
    return await this.utils.getText(this.assert_DeptApproval_Page_title);
  }

  async get_LandingPageValue_MyBills_DepartmentHistory() {
    await this.utils.hoveronAppsSubmenu(this.hover_apps, this.hover_apps_mybills);
    await this.click_apps_mybills_DeptHistory.click();
    return await this.utils.getText(this.assert_DeptHistory_Page_title);
  }

  async get_LandingPageValue_MyBills_FinanceApproval() {
    await this.utils.hoveronAppsSubmenu(this.hover_apps, this.hover_apps_mybills);
    await this.click_apps_mybills_Finapproval.click();
    return await this.utils.getText(this.assert_Finapproval_Page_title);
  }

  async get_LandingPageValue_MyBills_FinanceHistory() {
    await this.utils.hoveronAppsSubmenu(this.hover_apps, this.hover_apps_mybills);
    await this.click_apps_mybills_FinHistory.click();
    return await this.utils.getText(this.assert_FinHistory_Page_title);
  }
}

export { Headermenupage };
