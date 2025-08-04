import dotenv from 'dotenv';
dotenv.config();

const baseUrl = process.env.BASE_URL.replace('/login/index_oldtest/', '');

export const HeaderExpectedValues = {
    // URLs
  urls: {
    applyLeave: `${baseUrl}/apps/leaves/apply/`,
    timesheet: `${baseUrl}/apps/timesheet/`,
    myLeaves: `${baseUrl}/apps/leaves/`,
    forApproval: `${baseUrl}/apps/leaves/requests/`,
    groupChange: `${baseUrl}/apps/groupchange/`,
    createNewRequest: `${baseUrl}/apps/Reim/createnew/`,
    myBillsHistory: `${baseUrl}/apps/Reim/createnew/billshistory/`,
    buApproval: `${baseUrl}/apps/Reim/Buapprove/Buapprove/`,
    buHistory: `${baseUrl}/apps/Reim/Buapprove/Buhistory/`,
    category: `${baseUrl}/apps/Reim/admin/`,
    deptApproval: `${baseUrl}/apps/Reim/deptapprove/Deptapprove/`,
    deptHistory: `${baseUrl}/apps/Reim/deptapprove/Depthistory/`,
    finApproval: `${baseUrl}/apps/Reim/finapproval/Finapproval/`,
    finHistory: `${baseUrl}/apps/Reim/finapproval/Financehistory/`,
  },

    // APPS
  hm_AppsText: 'Apps',

    // TIMESHEET
  hm_TimesheetText: 'Time Sheet',
  timesheetLandingTitle: 'My TimeSheet',

    // LEAVES
  hm_leavesText: 'Leaves',
  applyLeaveTitle: 'Leave Application',
  myLeavesTitle: 'My Leaves',
  forApprovalTitle: 'Leave Applications',

   // ======================== GROUP CHANGE ========================
  hm_GroupChangeText: 'Group',
  groupChangeLandingTitle: 'Group Change Request',

  // ======================== MY BILLS ========================
  hm_MyBillsText: 'My Bills',
  createNewRequestTitle: 'Create Bill',
  myBillsHistoryTitle: 'My Bills History',
  buApprovalTitle: 'BU APPROVALS',
  buHistoryTitle: 'BU HISTORY',
  categoryTitle: 'Reimbursement Master',
  deptApprovalTitle: 'DEPARTMENT APPROVALS',
  deptHistoryTitle: 'DEPARTMENT HISTORY',
  finApprovalTitle: 'FINANCE APPROVALS',
  finHistoryTitle: 'FINANCE HISTORY'

};