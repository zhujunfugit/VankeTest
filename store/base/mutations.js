import {
  DPTLIST,
  PROJECT,
  EDULIST,
  POSITIONLIST,
  LEVELLIST,
  SUPPLIERLIST,
  WORKPLACELIST,
  SERVICECITY,
  EXPENTRYTIMELIST,
  ROLELIST,
  COSTOMDECT,
  ALLTEMPLATE,
  USERDETAIL,
  HOMEMENU,
  RJCTRSNREASON,
  RJCTPICKREASON,
  QUITREASON,
  PMPROJECTlIST,
  ADJUSTMATTER,
  SERVICESCOPE,
  WORKPLACE,
  ALLJOBDATA,
  RQMTJOBDATA,
  SAVESETTLEMENTSEARCHDATA,
  INTERVIEWPROJECTLIST,
  INTERVIEWDEPARTMENTLIST,
  POSTTYPELIST
  // REQUIREWORKPLACE,
} from "../types/base";

export default {
  [USERDETAIL](state, { userDetail }) {
    state.userDetail = userDetail;
  },
  [HOMEMENU](state, { homeMenu }) {
    state.homeMenu = homeMenu;
  },
  [DPTLIST](state, { deptData }) {
    state.deptData = deptData;
  },
  [PROJECT](state, { projectData }) {
    state.projectData = projectData;
  },
  [EDULIST](state, { eduData }) {
    state.eduData = eduData;
  },
  [POSITIONLIST](state, { positionData }) {
    state.positionData = positionData;
  },
  [LEVELLIST](state, { levelData }) {
    state.levelData = levelData;
  },
  [SUPPLIERLIST](state, { supplierData }) {
    state.supplierData = supplierData;
  },
  [WORKPLACELIST](state, { workplaceData }) {
    state.workplaceData = workplaceData;
  },
  [SERVICECITY](state, { serviceCity }) {
    state.serviceCity = serviceCity;
  },
  [EXPENTRYTIMELIST](state, { expEntryTimeData }) {
    state.expEntryTimeData = expEntryTimeData;
  },
  [ROLELIST](state, { roleData }) {
    state.roleData = roleData;
  },
  [RJCTRSNREASON](state, { rjctRsnReason }) {
    state.rjctRsnReason = rjctRsnReason;
  },
  [RJCTPICKREASON](state, { rjctPickReason }) {
    state.rjctPickReason = rjctPickReason;
  },
  [QUITREASON](state, { quitReason }) {
    state.quitReason = quitReason;
  },
  [COSTOMDECT](state, { dectConfig }) {
    state.priority = dectConfig.priority;
    state.approvalStatus = dectConfig.approvalStatus;
    state.recruitStatus = dectConfig.recruitStatus;
    state.requestType = dectConfig.requestType;
    state.rcmdStts = dectConfig.rcmdStts;
    state.attachStts = dectConfig.attachStts;
    state.itemStts = dectConfig.itemStts;
    state.userStts = dectConfig.userStts;
    state.settlementStts = dectConfig.settlementStts;
    state.costAdjustType = dectConfig.costAdjustType;
    state.teamBuildStts = dectConfig.teamBuildStts;
    state.partyBuildStts = dectConfig.partyBuildStts;
  },
  [ALLTEMPLATE](state, { allTemplate }) {
    state.allTemplate = allTemplate;
  },
  [PMPROJECTlIST](state, { pmProjectList }) {
    state.pmProjectList = pmProjectList;
  },
  [ADJUSTMATTER](state, { settlementAdjustMatter }) {
    state.settlementAdjustMatter = settlementAdjustMatter;
  },
  [SERVICESCOPE](state, { serviceScopeList }) {
    state.serviceScopeList = serviceScopeList;
  },
  [WORKPLACE](state, { workplace }) {
    state.workplace = workplace;
  },
  [ALLJOBDATA](state, { allJobData }) {
    state.allJobData = allJobData;
  },
  [RQMTJOBDATA](state, { rqmtJobData }) {
    state.rqmtJobData = rqmtJobData;
  },
  [SAVESETTLEMENTSEARCHDATA](state, { searchData }) {
    state.searchData = searchData;
  },
  [INTERVIEWPROJECTLIST](state, { interviewProjectList }) {
    state.interviewProjectList = interviewProjectList;
  },
  [INTERVIEWDEPARTMENTLIST](state, { interviewDepartmentList }) {
    state.interviewDepartmentList = interviewDepartmentList;
  },
  // [REQUIREWORKPLACE](state, { requireWorkplace }) {
  //   state.requireWorkplace = requireWorkplace;
  // },
  [POSTTYPELIST](state, { postTypeList }) {
    state.postTypeList = postTypeList;
  }
};
