

export const headermenu = {
  Apps: {
    hover_apps: "//p[normalize-space()='Apps']"
  },
  Timesheet: {
    click_apps_timesheet: "(//a[@href='/apps/timesheet/'])[1]",
    assert_TimesheetPage_title: "//h5[normalize-space()='My TimeSheet']"
  },
  Leave: {
    hover_apps_Leaves: "(//p[normalize-space()='Leaves'])[1]",

    // APPLY LEAVE
    click_apps_Leaves_ApplyLeave: "//a[@href='/apps/leaves/apply/']",
    assert_ApplyLeave_Page_title: "//h6[normalize-space()='Leave Application']",

    // MY LEAVE HISTORY
    click_apps_Leaves_MyLeaveHistory: "//a[@href='/apps/leaves/']",
    assert_MyleaveHistory_Page_title: "//h5[normalize-space()='My Leaves']",

    // FOR MY APPROVAL
    click_apps_Leaves_ForMyApproval: "(//a[@href='/apps/leaves/requests/'])[1]",
    assert_ForMyApproval_Page_title: "//h5[normalize-space()='Leave Applications']"
  },

  GroupChange: {
    click_apps_groupchange: "//a[@href='/apps/groupchange/']",
    assert_groupchange_Page_title: "//button[normalize-space()='Group Change Request']"
  },

  MyBills: {
    hover_apps_mybills: "(//p[normalize-space()='My Bills'])[1]",

    // CREATE NEW REQUEST
    click_apps_mybills_CreateNewRequest: "//a[@href='/apps/Reim/createnew/']",
    assert_createNewRequest_Page_title: "//span[normalize-space()='Create Bill']",

    // MY BILLS HISTORY
    click_apps_mybills_MyBillsHistory: "//a[@href='/apps/Reim/createnew/billshistory/']",
    assert_MyBillsHistory_Page_title: "//span[normalize-space()='My Bills History']",

    // BU APPROVAL
    click_apps_mybills_BuApproval: "//a[@href='/apps/Reim/Buapprove/Buapprove/']",
    assert_BuApproval_Page_title: "//span[normalize-space()='BU APPROVALS']",

    // BU HISTORY
    click_apps_mybills_BuHistory: "//a[@href='/apps/Reim/Buapprove/Buhistory/']",
    assert_BuHistory_Page_title: "//span[normalize-space()='BU HISTORY']",

    // CATEGORY
    click_apps_mybills_Category: "//a[@href='/apps/Reim/admin/']",
    assert_Category_Page_title: "//span[normalize-space()='Reimbursement Master']",

    // DEPT APPROVAL
    click_apps_mybills_DeptApproval: "//a[@href='/apps/Reim/deptapprove/Deptapprove/']",
    assert_DeptApproval_Page_title: "//span[normalize-space()='DEPARTMENT APPROVALS']",

    // DEPT HISTORY
    click_apps_mybills_DeptHistory: "//a[@href='/apps/Reim/deptapprove/Depthistory/']",
    assert_DeptHistory_Page_title: "//span[normalize-space()='DEPARTMENT HISTORY']",

    // FIN APPROVAL
    click_apps_mybills_Finapproval: "//a[@href='/apps/Reim/finapproval/Finapproval/']",
    assert_Finapproval_Page_title: "//span[normalize-space()='FINANCE APPROVALS']",

    // FIN HISTORY
    click_apps_mybills_FinHistory: "//a[@href='/apps/Reim/finapproval/Financehistory/']",
    assert_FinHistory_Page_title: "//span[normalize-space()='FINANCE HISTORY']"
  },

  GoalsReviews: {
    // Goals & Reviews Main Menu
    hover_apps_GandR: "(//p[normalize-space()='Goals and Reviews'])[1]",

    // INITIATION
    click_apps_GandR_initiation: "//a[@href='/apps/GandR/admin/initiate/']",
    assert_GandR_initiation_Page_title: "//h6[normalize-space()='Initiate G&R']",

    // MY GOALS
    click_apps_GandR_MyGoals: "//a[@href='/apps/GandR/employee/mygoals/']",
    assert_GandR_MyGoals_Page_title: "//strong[normalize-space()='Current Year Goals']",

    // RATING PENDING
    click_apps_GandR_RatingPending: "//a[@href='/apps/GandR/rm/peruserreport/']",
    assert_GandR_RatingPending_Page_title_BeforeInitiation: "//h6[normalize-space()='No Pending Lists Available']",
    assert_GandR_RatingPending_Page_title__AfterInitiation: "//div[normalize-space()='SUBMIT YOUR RATINGS FOR THIS YEAR']",

    // ADD CUSTOM GOALS
    click_apps_GandR_AddCustomGoals: "//a[@href='/apps/GandR/customgoals/']",
    assert_GandR_AddCustomGoals_Page_title: "//div[@aria-label='Employee ID']"
  }

};
