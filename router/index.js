import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Login from "@/views/Login.vue";
const Layout = resolve => {
  require(["@/views/Layout.vue"], resolve);
};
const auth = resolve => {
  require(["@/views/auth.vue"], resolve);
};

const MSG = {
  ProjectList: resolve => {
    require(["@/views/Interviewer/ProjectList.vue"], resolve);
  },
  AlreadyInout: resolve => {
    require(["@/views/Interviewer/AlreadyInout.vue"], resolve);
  },
  History: resolve => {
    require(["@/views/Interviewer/History.vue"], resolve);
  },
  NeedList: resolve => {
    require(["@/views/Interviewer/NeedList.vue"], resolve);
  },
  Template: resolve => {
    require(["@/views/Interviewer/templateList.vue"], resolve);
  },
  Index: resolve => {
    require(["@/views/Interviewer/index.vue"], resolve);
  },
  ViewAppointment: resolve => {
    require(["@/views/Interviewer/ViewAppointment.vue"], resolve);
  },
  ViewResult: resolve => {
    require(["@/views/Interviewer/ViewResult.vue"], resolve);
  },
  ResumeFilter: resolve => {
    require(["@/views/Interviewer/ResumeFilter.vue"], resolve);
  },
  MyInterview: resolve => {
    require(["@/views/Interviewer/MyInterview.vue"], resolve);
  },
  leave: resolve => {
    require(["@/views/Interviewer/leave.vue"], resolve);
  },
  teamBuildCost: resolve => {
    require(["@/views/Interviewer/teamBuildCost.vue"], resolve);
  },
  Performance: resolve => {
    require(["@/views/Interviewer/Performance.vue"], resolve);
  },
  Personnel: resolve => {
    require(["@/views/Interviewer/Personnel.vue"], resolve);
  },
  settlementShow: resolve => {
    require(["@/views/Interviewer/settlementShow.vue"], resolve);
  },
  pmSettlementDetail: resolve => {
    require(["@/views/Interviewer/pmSettlementDetail.vue"], resolve);
  },
  Attendance: resolve => {
    require(["@/views/Interviewer/Attendance.vue"], resolve);
  },
  cooperative: resolve => {
    require(["@/views/Interviewer/cooperative.vue"], resolve);
  },
  teamBuildContent: resolve => {
    require(["@/views/Interviewer/teamBuildContent.vue"], resolve);
  },
  teamBuildContentShow: resolve => {
    require(["@/views/Interviewer/teamBuildContentShow.vue"], resolve);
  },
  teamBuildUseDetail: resolve => {
    require(["@/views/Interviewer/teamBuildUseDetail.vue"], resolve);
  },
  expenseDetailed: resolve => {
    require([
      "@/views/Interviewer/ExpenseDetailed/expenseDetailed.vue"
    ], resolve);
  }
};

// HR目录下的路由规则
const HR = {
  settlementShow: resolve => {
    require(["@/views/Interviewer/settlementShow.vue"], resolve);
  },
  expenseDetailed: resolve => {
    require([
      "@/views/Interviewer/ExpenseDetailed/expenseDetailed.vue"
    ], resolve);
  },
  travelExpendedList: resolve => {
    require([
      "@/views/Interviewer/TravelExpended/travelExpendedList.vue"
    ], resolve);
  },
  invoiceList: resolve => {
    require(["@/views/Interviewer/Invoice/invoiceList.vue"], resolve);
  },
  reimbursementList: resolve => {
    require([
      "@/views/Interviewer/Reimbursement/reimbursementList.vue"
    ], resolve);
  },
  teamBuildCost: resolve => {
    require(["@/views/Interviewer/teamBuildCost.vue"], resolve);
  },
  newItem: resolve => {
    require(["@/views/Hr/newItem.vue"], resolve);
  },
  items: resolve => {
    require(["@/views/Hr/items.vue"], resolve);
  },
  list: resolve => {
    require(["@/views/Hr/list.vue"], resolve);
  },
  waitVerify: resolve => {
    require(["@/views/Hr/waitVerify.vue"], resolve);
  },
  resources: resolve => {
    require(["@/views/Hr/resources.vue"], resolve);
  },
  myInterview: resolve => {
    require(["@/views/Hr/myInterview.vue"], resolve);
  },
  statistics: resolve => {
    require(["@/views/Hr/statistics.vue"], resolve);
  },
  Index: resolve => {
    require(["@/views/Hr/index.vue"], resolve);
  },
  contractSet: resolve => {
    require(["@/views/Hr/contractSet.vue"], resolve);
  },
  addOrEditContract: resolve => {
    require(["@/views/Hr/addOrEditContract.vue"], resolve);
  },
  contractChange: resolve => {
    require(["@/views/Hr/contractChange.vue"], resolve);
  },
  rateMaintenance: resolve => {
    require(["@/views/Hr/rateMaintenance.vue"], resolve);
  },
  levelMaintenance: resolve => {
    require(["@/views/Hr/levelMaintenance.vue"], resolve);
  },
  levelMaintenanceAdd: resolve => {
    require(["@/views/Hr/levelMaintenanceAdd.vue"], resolve);
  },
  performance: resolve => {
    require(["@/views/Hr/performance.vue"], resolve);
  },
  performanceAdd: resolve => {
    require(["@/views/Hr/performanceAdd.vue"], resolve);
  },
  settlement: resolve => {
    require(["@/views/Interviewer/Settlement/settlement.vue"], resolve);
  },
  cooperative: resolve => {
    require(["@/views/Hr/cooperative.vue"], resolve);
  },
  personnel: resolve => {
    require(["@/views/Hr/personnel.vue"], resolve);
  },
  personnelEdit: resolve => {
    require(["@/views/Hr/personnelEdit.vue"], resolve);
  },
  settlementDetail: resolve => {
    require(["@/views/Hr/settlementDetail.vue"], resolve);
  },
  editPersonExpenses: resolve => {
    require(["@/views/Hr/editPersonExpenses.vue"], resolve);
  },
  teamBuildManage: resolve => {
    require(["@/views/Hr/teamBuildManage.vue"], resolve);
  },
  teamBuildUseDetail: resolve => {
    require(["@/views/Hr/teamBuildUseDetail.vue"], resolve);
  },
  attendance: resolve => {
    require(["@/views/Hr/attendance.vue"], resolve);
  },
  probationaryNoPassStaff: resolve => {
    require(["@/views/Hr/probationaryNoPassStaff.vue"], resolve);
  },
  serviceCity: resolve => {
    require(["@/views/Hr/serviceCity.vue"], resolve);
  },
  editContract: resolve => {
    require(["@/views/Hr/editContract.vue"], resolve);
  },
  partyBuild: resolve => {
    require(["@/views/Hr/partyBuild.vue"], resolve);
  },
  approvePartyBuilding: resolve => {
    require(["@/views/Hr/approvePartyBuilding.vue"], resolve);
  },
  partyBuildingDetail: resolve => {
    require(["@/views/Hr/partyBuildingDetail.vue"], resolve);
  },
  leaderMaintenance: resolve => {
    require(["@/views/Hr/leaderMaintenance.vue"], resolve);
  },
  invoiceList: resolve => {
    require(["@/views/Hr/Invoice/invoiceList.vue"], resolve);
  },
  staffEntry: resolve => {
    require(["@/views/Interviewer/StaffEntry/staffEntry.vue"], resolve);
  }
};

const USER = {
  userList: resolve => {
    require(["@/views/User/userList.vue"], resolve);
  },
  templateList: resolve => {
    require(["@/views/User/templateList.vue"], resolve);
  },
  profile: resolve => {
    require(["@/views/User/profileList.vue"], resolve);
  },
  supplierList: resolve => {
    require(["@/views/User/supplierList.vue"], resolve);
  },
  departmentList: resolve => {
    require(["@/views/User/departmentList.vue"], resolve);
  },
  projectList: resolve => {
    require(["@/views/User/projectList.vue"], resolve);
  }
};

const routes = [
  { path: "/login", component: Login },
  {
    path: "/interviewer/index",
    component: Layout,
    children: [{ path: "/", component: MSG.Index }]
  },
  {
    path: "/interviewer/ProjectList",
    component: Layout,
    children: [{ path: "/", component: MSG.ProjectList }]
  },
  {
    path: "/interviewer/History",
    component: Layout,
    children: [{ path: "/", component: MSG.History }]
  },
  {
    path: "/interviewer/NeedList",
    component: Layout,
    children: [{ path: "/", component: MSG.NeedList }]
  },
  {
    path: "/interviewer/ViewAppointment",
    component: Layout,
    children: [{ path: "/", component: MSG.ViewAppointment }]
  },
  {
    path: "/interviewer/ViewResult",
    component: Layout,
    children: [{ path: "/", component: MSG.ViewResult }]
  },
  {
    path: "/interviewer/ResumeFilter",
    component: Layout,
    children: [{ path: "/", component: MSG.ResumeFilter }]
  },
  {
    path: "/interviewer/MyInterview",
    component: Layout,
    children: [{ path: "/", component: MSG.MyInterview }]
  },
  {
    path: "/interviewer/template",
    component: Layout,
    children: [{ path: "/", component: MSG.Template }]
  },
  {
    path: "/interviewer/leave",
    component: Layout,
    children: [{ path: "/", component: MSG.leave }]
  },
  {
    path: "/interviewer/Performance",
    component: Layout,
    children: [{ path: "/", component: MSG.Performance }]
  },
  {
    path: "/interviewer/Personnel",
    component: Layout,
    children: [{ path: "/", component: MSG.Personnel }]
  },
  {
    path: "/interviewer/teamBuildCost",
    component: Layout,
    children: [{ path: "/", component: MSG.teamBuildCost }]
  },
  {
    path: "/interviewer/settlementShow",
    component: Layout,
    children: [{ path: "/", component: MSG.settlementShow }]
  },
  {
    path: "/interviewer/settlementDetail",
    component: Layout,
    children: [{ path: "/", component: MSG.pmSettlementDetail }]
  },
  {
    path: "/interviewer/Attendance",
    component: Layout,
    children: [{ path: "/", component: MSG.Attendance }]
  },
  {
    path: "/interviewer/cooperative",
    component: Layout,
    children: [{ path: "/", component: MSG.cooperative }]
  },
  {
    path: "/interviewer/teamBuildContent",
    component: Layout,
    children: [{ path: "/", component: MSG.teamBuildContent }]
  },
  {
    path: "/interviewer/teamBuildContentShow",
    component: Layout,
    children: [{ path: "/", component: MSG.teamBuildContentShow }]
  },
  {
    path: "/interviewer/teamBuildUseDetail",
    component: Layout,
    children: [{ path: "/", component: MSG.teamBuildUseDetail }]
  },
  {
    path: "/interviewer/expenseDetailed",
    component: Layout,
    children: [{ path: "/", component: MSG.expenseDetailed }]
  },

  {
    path: "/hr/settlementShow",
    component: Layout,
    children: [{ path: "/", component: HR.settlementShow }]
  },
  {
    path: "/hr/expenseDetailed",
    component: Layout,
    children: [{ path: "/", component: HR.expenseDetailed }]
  },
  {
    path: "/hr/travelExpendedList",
    component: Layout,
    children: [{ path: "/", component: HR.travelExpendedList }]
  },
  {
    path: "/hr/invoiceList",
    component: Layout,
    children: [{ path: "/", component: HR.invoiceList }]
  },
  {
    path: "/hr/reimbursementList",
    component: Layout,
    children: [{ path: "/", component: HR.reimbursementList }]
  },
  {
    path: "/hr/teamBuildCost",
    component: Layout,
    children: [{ path: "/", component: HR.teamBuildCost }]
  },
  {
    path: "/hr/staffEntry",
    component: Layout,
    children: [{ path: "/", component: HR.staffEntry }]
  },
  {
    path: "/hr/index",
    component: Layout,
    children: [{ path: "/", component: HR.Index }]
  },
  {
    path: "/hr/newItem",
    component: Layout,
    children: [{ path: "/", component: HR.newItem }]
  },
  {
    path: "/hr/items",
    component: Layout,
    children: [{ path: "/", component: HR.items }]
  },
  {
    path: "/hr/list",
    component: Layout,
    children: [{ path: "/", component: HR.list }]
  },
  {
    path: "/hr/waitVerify",
    component: Layout,
    children: [{ path: "/", component: HR.waitVerify }]
  },
  {
    path: "/hr/resources",
    component: Layout,
    children: [{ path: "/", component: HR.resources }]
  },
  {
    path: "/hr/myInterview",
    component: Layout,
    children: [{ path: "/", component: HR.myInterview }]
  },
  {
    path: "/hr/demandVerify",
    component: Layout,
    children: [{ path: "/", component: HR.demandVerify }]
  },

  {
    path: "/hr/statistics",
    component: Layout,
    children: [{ path: "/", component: HR.statistics }]
  },
  {
    path: "/hr/contractSet",
    component: Layout,
    children: [{ path: "/", component: HR.contractSet }]
  },
  {
    path: "/hr/addOrEditContract",
    component: Layout,
    children: [{ path: "/", component: HR.addOrEditContract }]
  },
  {
    path: "/hr/contractChange",
    component: Layout,
    children: [{ path: "/", component: HR.contractChange }]
  },
  {
    path: "/hr/rateMaintenance",
    component: Layout,
    children: [{ path: "/", component: HR.rateMaintenance }]
  },
  {
    path: "/hr/levelMaintenance",
    component: Layout,
    children: [{ path: "/", component: HR.levelMaintenance }]
  },
  {
    path: "/hr/levelMaintenanceAdd",
    component: Layout,
    children: [{ path: "/", component: HR.levelMaintenanceAdd }]
  },
  {
    path: "/hr/performance",
    component: Layout,
    children: [{ path: "/", component: HR.performance }]
  },
  {
    path: "/hr/performanceAdd",
    component: Layout,
    children: [{ path: "/", component: HR.performanceAdd }]
  },
  {
    path: "/hr/settlement",
    component: Layout,
    children: [{ path: "/", component: HR.settlement }]
  },
  {
    path: "/hr/cooperative",
    component: Layout,
    children: [{ path: "/", component: HR.cooperative }]
  },
  {
    path: "/hr/personnel",
    component: Layout,
    children: [{ path: "/", component: HR.personnel }]
  },
  {
    path: "/hr/personnelEdit",
    component: Layout,
    children: [{ path: "/", component: HR.personnelEdit }]
  },
  {
    path: "/hr/settlementDetail",
    component: Layout,
    children: [{ path: "/", component: HR.settlementDetail }]
  },
  {
    path: "/hr/editPersonExpenses",
    component: Layout,
    children: [{ path: "/", component: HR.editPersonExpenses }]
  },
  {
    path: "/hr/teamBuildManage",
    component: Layout,
    children: [{ path: "/", component: HR.teamBuildManage }]
  },
  {
    path: "/hr/teamBuildUseDetail",
    component: Layout,
    children: [{ path: "/", component: HR.teamBuildUseDetail }]
  },
  {
    path: "/hr/attendance",
    component: Layout,
    children: [{ path: "/", component: HR.attendance }]
  },
  {
    path: "/hr/probationaryNoPassStaff",
    component: Layout,
    children: [{ path: "/", component: HR.probationaryNoPassStaff }]
  },
  {
    path: "/hr/serviceCity",
    component: Layout,
    children: [{ path: "/", component: HR.serviceCity }]
  },
  {
    path: "/hr/editContract",
    component: Layout,
    children: [{ path: "/", component: HR.editContract }]
  },
  {
    path: "/hr/partyBuild",
    component: Layout,
    children: [{ path: "/", component: HR.partyBuild }]
  },
  {
    path: "/hr/approvePartyBuilding",
    component: Layout,
    children: [{ path: "/", component: HR.approvePartyBuilding }]
  },
  {
    path: "/hr/partyBuildingDetail",
    component: Layout,
    children: [{ path: "/", component: HR.partyBuildingDetail }]
  },
  {
    path: "/hr/leaderMaintenance",
    component: Layout,
    children: [{ path: "/", component: HR.leaderMaintenance }]
  },
  {
    path: "/hr/invoiceList",
    component: Layout,
    children: [{ path: "/", component: HR.invoiceList }]
  },
  {
    path: "/hr/settlement",
    component: Layout,
    children: [{ path: "/", component: HR.settlement }]
  },
  {
    path: "/user/list",
    component: Layout,
    children: [{ path: "/", component: USER.userList }]
  },
  {
    path: "/user/template",
    component: Layout,
    children: [{ path: "/", component: USER.templateList }]
  },
  {
    path: "/user/profile",
    component: Layout,
    children: [{ path: "/", component: USER.profile }]
  },
  {
    path: "/user/supplier",
    component: Layout,
    children: [{ path: "/", component: USER.supplierList }]
  },
  {
    path: "/user/department",
    component: Layout,
    children: [{ path: "/", component: USER.departmentList }]
  },
  {
    path: "/user/project",
    component: Layout,
    children: [{ path: "/", component: USER.projectList }]
  },
  { path: "/error", component: auth }
];

const router = new Router({
  routes: routes
});

export default router;
