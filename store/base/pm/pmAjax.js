import { post, get, put, download } from "@/store/api";
import axios from "axios";
import Dictionary from "@/store/base/state.js";
export default {
  //根据code查询value
  getObjByCode: (val, type) => {
    let obj = {
      "1": "workplaceData", //地点
      "2": "approvalStatus", //审核
      "3": "recruitStatus", //招聘
      "4": "positionData", //技能
      "5": "levelData" //级别
    };
    return Dictionary[obj[type]].filter(item => {
      return item.code == val;
    });
  },
  /*  获取需求列表 */
  getNeedList: req => {
    return post("/osms-api/pm/rqmt/list", req).then(res => {
      return res;
    });
  },
  /* 根据id获取需求详情 */
  getNeedById: req => {
    return get("/osms-api/pm/rqmt/detail/" + req).then(res => {
      return res;
    });
  },
  /* 根据id获取删除需求 */
  delNeedById: req => {
    return get("/osms-api/pm/rqmt/delete/" + req).then(res => {
      return res;
    });
  },
  /* 根据id获取修改需求 */
  updateNeedById: req => {
    return post("/osms-api/pm/rqmt/update", req).then(res => {
      return res;
    });
  },
  /* 根据id申请需求 */
  applyNeedById: req => {
    return get("/osms-api/pm/rqmt/apply/" + req).then(res => {
      return res;
    });
  },
  /* 驳回 根据id重新需求 */
  againNeedById: req => {
    return post("/osms-api/pm/rqmt/prcs", req).then(res => {
      return res;
    });
  },
  /* 新增需求 */
  addNewNeed: req => {
    return post("/osms-api/pm/rqmt/add", req).then(res => {
      return res;
    });
  },
  /*查询立项列表*/
  getProjectList: req => {
    return post("/osms-api/pm/rqmt/item/list", req).then(res => {
      return res;
    });
  },
  /* 根据id获取立项列详情 */
  getProjectById: req => {
    return get("/osms-api/pm/item/data/" + req).then(res => {
      return res;
    });
  },
  /* 获取推荐列表 */
  getRcmdList: req => {
    return post("/osms-api/pm/rcmd/list", req).then(res => {
      return res;
    });
  },
  remdListExcel:req=>{
    return post("/osms-api/pm/rcmd/list/export", req).then(res => {
        return res;
      });
  },
  /**获取用户简历详情 */
  getStaffdetail:req=>{
    return get(`/osms-api/pm/rcmd/staffdetail/${req}`).then(res => {
        return res;
      });
  },
  /*  处理推荐 */
  dealRcmd: req => {
    return post("/osms-api/pm/rcmd/prcs", req).then(res => {
      return res;
    });
  },
  /**
   * 获取绩效列表
   */
  getPerformanceList: req => {
    return post("/osms-api/pm/performance/list", req).then(res => {
      return res;
    })
  },
   /** 团建费更新 POST /pm/edit/excel 功能调整discard?
   */
  // updatePartyBuildingCost(req) {
  //   return post("/osms-api/pm/edit/excel", req).then(res => {
  //     return res;
  //   });
  // },
  /**
   * 团建费新增   功能调整discard?
   */
  // addPartyBuildingCost(req) {
  //   return post("/osms-api/pm/add/excel", req).then(res => {
  //     return res;
  //   });
  // },
  /**查看单条团建费人员详情 /tb/search/bulid  功能调整discard? */
  // pm/query/staff  /pm/search/bulid
  // getPartyBuildingPersonList(req) {
  //   return post(`/osms-api/pm/search/bulid`, req).then(res => {
  //     return res;
  //   });
  // },
  /** pm 团建费列表 tb/query/bulidlist  功能调整discard? */
  // getPartyBuildingList(req) { 
  //   return post(`/osms-api/pm/query/bulidlist`, req).then(res => {
  //     return res;
  //   });
  // },
  /**新增 获取团建费人员列表模板 pm/query/staff1  功能调整discard? */
  // getAddPartyBuildingPerson(req) {
  //   return post("/osms-api/pm/query/staff1", req).then(res => {
  //     return res;
  //   })
  // },
  /**编辑 获取团建费人员列表模板 pm/query/staff   功能调整discard? */
  // getEditPartyBuildingPerson(req) {
  //   return post("/osms-api/pm/query/staff", req).then(res => {
  //     return res;
  //   })
  // },
  /**结算列表查询 1026byxh  POST /pm/settlement/getSettlementsByPm*/
  getSettlementList(req) {
    return post("/osms-api/pm/settlement/getSettlementsByPm", req).then(res => {
      return res;
    })
  },
  /**
   * pm/setttlement byxh 获取结算人员详细列表 settlement/getSettlementDetailByPm
   */
  getSettlementPersonList(data) {
    return post("/osms-api/pm/settlement/getSettlementDetailByPm", data).then(res => {
      return res;
    })
  },  
  /** 费用详情人员列表 byxh settlement/getTbUserList*/
  getPayPersonList (data) {
    return post("/osms-api/pm/settlement/getTbUserList", data).then(res => {
      return res;
    })
  },
  /** pm 查询项目列表 */ 
  getPmProjectList(data) {
    return get("/osms-api/pm/query/proname").then(res => {
      return res
    })
  },
  /** 考勤列表 */
  getAttendanceList() {
    return get("/osms-api/pm/work/attendance").then(res => res)
  },
  /** 人员信息列表 */
  staffBaseInfoList(req) {
    return post("/osms-api/pm/staffBaseInfo/list", req).then(res => res)
  },
  /** PM设置代管人员 */
  setEscrow(req) {
    return post("/osms-api/pm/rqmt/interviewer/set", req).then(res => res)
  },
  /** PM 结算 导出报表 pm/settlement/export download blob*/
  exportSettlement(req) {
    return download("/osms-api/pm/settlement/export", req, {responseType: 'blob'}).then(res => res)
  },
  
  
  /** 按项目 查询团建详情人员 */ 
  getTeamBuildByProject(req) {
    return post("/osms-api/pm/query/proid/detail", req).then(res => {
      return res;
    })
  },
  /** 项目经理 可用团建额度 /pm/query/team/amt */ 
  getTeamAmt() {
    return get("/osms-api/pm/query/team/amt").then(res => {
      return res;
    })
  },
  /** 根据推荐ID查询个人的面试记录信息 */
  getInterviewRecord(req) {
    return get(`/osms-api/pm/rcmd/interviewRecord/${req}`).then(res => {
      return res;
    })
  },
  /**推荐处理，保存 */
  saveRecord(req) {
    return put("/osms-api/pm/rcmd/save",req).then(res => {
      return res;
    })
  },
  /** 根据推荐ID查询可供选择的级别 */
  getSkillLv(req) {
    return get(`/osms-api/pm/rcmd/skillCodes/${req}`).then(res => {
      return res;
    })
  },

  /** 团建保存草稿/提交申请 http://10.98.75.200/osms-api/pm/league/apply*/
  saveOrSubmitApply(req) {
    return post(`/osms-api/pm/league/apply`, req).then(res => {
      return res;
    })
  },

  /** 团建 核销提交  /osms-api/pm/league/hx/apply */
  submitVarify(req) {
    return post(`/osms-api/pm/league/hx/apply`, req).then(res => {
      return res;
    })
  },
  // 团建 明细 团建信息/edit/qry/building
  getTeamBuildData(req) {
    return post(`/osms-api/pm/edit/qry/building`, req).then(res => {
      return res;
    })
  },
  // 团建 type A 撤回  B 撤销 osms-api/pm/league/operate?lbId=1321&type=a
  withdrawOrRevoke({lbId, type}) {
    return get(`/osms-api/pm/league/operate?lbId=${lbId}&type=${type}`).then(res => {
      return res;
    })
  },
  // 团建 删除 /osms-api/pm/delete/building/ddd
  teamBuildDelete(id) {
    return get(`/osms-api/pm/delete/building/${id}`).then(res => {
      return res;
    })
  },  
  /*  团建审核 /pm/league/flow?lbId=id*/
  getApprovalProcessData(id) {
    return get(`/osms-api/pm/league/flow?lbId=${id}`).then(res => {
      return res;
    })
  },  
  /*  pm 团建编辑 新增时，人员列表模板查询 /league/staff/list?proId=${this.proId}&lbTime=${this.teamBuildDate}*/
  queryPerosnTemplate({proId, lbTime,lbId}) {
    return get(`/osms-api/pm/league/staff/list?proId=${proId}&lbTime=${lbTime}&lbId=${lbId}`).then(res => {
      return res;
    })
  },
  /** 查询 可以查看团建的项目 pm/league/projects*/
  queryBuildProjects() {
    return get(`/osms-api/pm/league/projects`).then(res => {
      return res;
    })
  },

};
