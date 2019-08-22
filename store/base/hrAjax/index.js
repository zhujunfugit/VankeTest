import * as api from "@/store/api";
export default {
  /*
  hr/item 新建立项
*/
  newItem: body => {
    return api.post("/osms-api/hr/item/add", body).then(res => {
      let resulf = {
        success: false,
        msg: ""
      };
      if (res.code == "0000") {
        resulf = {
          success: true,
          msg: res.msg
        };
      } else {
        resulf = {
          success: false,
          msg: res.msg
        };
      }
      return resulf;
    });
  },
  /*
  hr/items 立项列表
*/
  itemList: body => {
    return api.post("/osms-api/hr/item_rqmt/list", body).then(res => {
      let resulf = {
        success: false,
        msg: "",
        data: {}
      };
      if (res.code == "0000") {
        resulf = {
          success: true,
          msg: res.msg,
          data: res.data
        };
      } else {
        resulf = {
          success: false,
          msg: res.msg
        };
      }
      return resulf;
    });
  },

  /*
  hr/items 废弃立项
*/

  discard: id => {
    return api.get(`/osms-api/hr/item/discard/${id}`).then(res => {
      let resulf = {
        success: false,
        msg: "",
        data: {}
      };
      if (res.code == "0000") {
        resulf = {
          success: true,
          msg: res.msg,
          data: res.data
        };
      } else {
        resulf = {
          success: false,
          msg: res.msg
        };
      }
      return resulf;
    });
  },
  /**
   * 需求审核->列表
   */

  demandVerify: body => {
    return api.post("/osms-api/hr/rqmt/list", body).then(res => {
      let resulf = {
        success: false,
        msg: "",
        data: {}
      };
      if (res.code == "0000") {
        resulf = {
          success: true,
          msg: res.msg,
          data: res.data
        };
      } else {
        resulf = {
          success: false,
          msg: res.msg
        };
      }
      return resulf;
    });
  },
  /**
   * 需求审核->驳回
   */
  rejectConfirm: body => {
    return api.post("/osms-api/hr/rqmt/reject", body).then(res => {
      let resulf = {
        success: false,
        msg: ""
      };
      if (res.code == "0000") {
        resulf = {
          success: true,
          msg: res.msg
        };
      } else {
        resulf = {
          success: false,
          msg: res.msg
        };
      }
      return resulf;
    });
  },
  /**
   * 需求审核->通过
   */
  verifyConfirm: body => {
    return api.post("/osms-api/hr/rqmt/verify", body).then(res => {
      let resulf = {
        success: false,
        msg: ""
      };
      if (res.code == "0000") {
        resulf = {
          success: true,
          msg: res.msg
        };
      } else {
        resulf = {
          success: false,
          msg: res.msg
        };
      }
      return resulf;
    });
  },
  /**
   * 需求管理->列表
   */
  reqmanager: body => {
    return api.post("/osms-api/hr/rqmt/list", body).then(res => {
      let resulf = {
        success: false,
        msg: "",
        data: {}
      };
      if (res.code == "0000") {
        resulf = {
          success: true,
          msg: res.msg,
          data: res.data
        };
      } else {
        resulf = {
          success: false,
          msg: res.msg
        };
      }
      return resulf;
    });
  },
  /**
   * 需求管理->编辑
   */
  verifyEditreq: body => {
    return api.post("/osms-api/hr/rqmt/editreq", body).then(res => {
      let resulf = {
        success: false,
        msg: "",
        data: {}
      };
      if (res.code == "0000") {
        resulf = {
          success: true,
          msg: res.msg,
          data: res.data
        };
      } else {
        resulf = {
          success: false,
          msg: res.msg
        };
      }
      return resulf;
    });
  },
  /**
   * 需求管理->暂停恢复
   */
  verifyChangestt: body => {
    return api.post("/osms-api/hr/rqmt/changestt", body).then(res => {
      return res;
    });
  },
  /**
   * 查看统计列表
   */
  getStalist: body => {
    return api.post("/osms-api/hr/rcmd/statistics", body).then(res => {
      let resulf = {
        success: false,
        msg: "",
        data: {}
      };
      if (res.code == "0000") {
        resulf = {
          success: true,
          msg: res.msg,
          data: res.data
        };
      } else {
        resulf = {
          success: false,
          msg: res.msg
        };
      }
      return resulf;
    });
  },
  /* 
    统计列表导出 */
  staListExcel: body => {
    return api.post("/osms-api/sp/rcmd/statistics/download", body).then(res => {
      let resulf = {
        success: false,
        msg: "",
        data: {}
      };
      if (res.code == "0000") {
        resulf = {
          success: true,
          msg: res.msg,
          data: res.data
        };
      } else {
        resulf = {
          success: false,
          msg: res.msg
        };
      }
      return resulf;
    });
  },
  /*推荐记录 */
  getRcmdList: req => {
    return api.post("/osms-api/hr/rcmd/list", req).then(res => {
      return res;
    });
  },

  /*查询需求数目合计、简历数 */
  getNeedsAndResumesTotal: req => {
    return api.post("/osms-api/hr/rqmt/reqResCount", req).then(res => {
      return res;
    });
  },

  /*推荐记录导出 */
  rcmdListExcel: body => {
    return api.post("/osms-api/hr/rcmd/list/export", body).then(res => {
      let resulf = {
        success: false,
        msg: "",
        data: {}
      };
      if (res.code == "0000") {
        resulf = {
          success: true,
          msg: res.msg,
          data: res.data
        };
      } else {
        resulf = {
          success: false,
          msg: res.msg
        };
      }
      return resulf;
    });
  },
  /* 根据id获取删除需求 */
  delNeedById: req => {
    return api.get("/osms-api/hr/rqmt/delete/" + req).then(res => {
      return res;
    });
  },
  /*查询立项列表*/
  getProjectList: req => {
    return api.post("/osms-api/hr/rqmt/item/list", req).then(res => {
      return res;
    });
  },
  /* 新增需求 */
  addNewNeed: req => {
    return api.post("/osms-api/hr/rqmt/add", req).then(res => {
      return res;
    });
  },
  /**
   * 获取绩效列表
   */
  getPerformanceList: req => {
    return api.post("/osms-api/hr/performance/list", req).then(res => {
      return res;
    });
  },
  /** 新增绩效前查询所有被考核人的姓名，id */
  getAllUser() {
    return api.get("/osms-api/hr/performance/getAllUser").then(res => res);
  },
  /** 新增绩效前查询被考核人的关联信息 */
  getUserRelationInfo(req) {
    return api
      .post("/osms-api/hr/performance/getUserRelationInfo", req)
      .then(res => res);
  },
  /** 新增绩效前查询所有评价人信息 */
  getAllAppraiser() {
    return api
      .post("/osms-api/hr/performance/getAllAppraiser")
      .then(res => res);
  },
  /* 新增绩效 */
  addPerformance: req => {
    return api.post("/osms-api/hr/performance/add", req).then(res => {
      return res;
    });
  },
  /* 绩效编辑 */
  performanceUpdate: req => {
    return api.post("/osms-api/hr/performance/update", req).then(res => {
      return res;
    });
  },
  /* 根据需求id查询需求合作范围及合同 */
  getSupplierContract: req => {
    return api.get("/osms-api/hr/rqmt/spcontract/" + req).then(res => {
      return res;
    });
  },
  /**
   * hr/settlement byxh 查询结算 hr/settlement/getSettlementList
   */
  getSettlementList(data) {
    return api
      .post("/osms-api/hr/settlement/getSettlementList", data)
      .then(res => {
        return res;
      });
  },
  /**
   * hr/settlement byxh 生成结算 hr/settlement/createSettlement
   */
  createSettlement(data) {
    return api
      .post("/osms-api/hr/settlement/createSettlement", data)
      .then(res => {
        return res;
      });
  },
  /**
   *  byxh 删除结算 /hr/settlement/delSettlementInfo
   */
  delSettlementInfo(data) {
    return api
      .post("/osms-api/hr/settlement/delSettlementInfo", data)
      .then(res => {
        return res;
      });
  },
  /**
   * hr/setttlement byxh 获取结算人员详细列表 /hr/settlement/getSettlementDetail 1031
   */
  getSettlementDetail(data) {
    return api
      .post("/osms-api/hr/settlement/getSettlementDetail", data)
      .then(res => {
        return res;
      });
  },
  /** 保存编辑费用结算 byxh hr/settlement/updateSettlementInfoAdjust */
  updateSettlementInfoAdjust(data) {
    return api
      .post("/osms-api/hr/settlement/updateSettlementInfoAdjust", data)
      .then(res => {
        return res;
      });
  },
  /**查询费用结算 费用调整接口 byxh*/
  getPayAdjustList(data) {
    return api.post("/osms-api/hr/settlement/adjust", data).then(res => {
      return res;
    });
  },
  /** 费用调整 详情人员列表 byxh  hr/settlement/getTbUserList*/
  getPayPersonList(data) {
    return api.post("/osms-api/hr/settlement/getTbUserList", data).then(res => {
      return res;
    });
  },
  /**hr 获取团建列表 byxh 1025 by person hr/query/adno*/
  getTeambuildList(data) {
    return api.post("/osms-api/hr/query/adno", data).then(res => {
      return res;
    });
  },
  /** 获取团建费记录详情 byperson 查看 byxh 1025  hr/query/adno/detail*/
  getTeamBuildPersonDetail(req) {
    return api.post("/osms-api/hr/query/adno/detail", req).then(res => {
      return res;
    });
  },
  /**团建费活动使用情况列表 /hr/query/proid by project   功能调整discard? */
  // getTeamBuildUseList(req) {
  //   return api.post("/osms-api/hr/query/proid", req).then(res => {
  //     return res;
  //   })
  // },
  /**团建费- 获取项目列表 by project detail POST /hr/query/proid/detail */
  getTeamBuildProjectList(req) {
    return api.post("/osms-api/hr/query/proid/detail", req).then(res => {
      return res;
    });
  },
  /** 按项目 查询团建详情人员  功能调整discard? */

  // getTeamBuildByProject(req) {
  //   return api.post("/osms-api/hr/query/proid/detail", req).then(res => {
  //     return res;
  //   })
  // },

  /** 考勤列表 */
  getAttendanceList() {
    return api.get("/osms-api/hr/work/attendance").then(res => res);
  },
  /** 人员信息列表 */
  staffBaseInfoList(req) {
    return api.post("/osms-api/hr/staffBaseInfo/list", req).then(res => res);
  },
  /** 人员信息查询 */
  staffBaseInfoQuery(adNo) {
    return api.get("osms-api/hr/staffBaseInfo/query/" + adNo).then(res => {
      if (res.code == "0000") {
        return Promise.resolve(res.data || {});
      } else {
        return Promise.reject(res.msg);
      }
    });
  },
  /** 人员信息编辑 */
  staffBaseInfoEdit(req) {
    return api.post("/osms-api/hr/staffBaseInfo/edit", req).then(res => res);
  },
  /** 结算管理  编辑人员 确认 settlement/updateSettlementInfoAdjustDetail */
  updateSettlementInfoAdjustDetail(req) {
    return api
      .post("/osms-api/hr/settlement/updateSettlementInfoAdjustDetail", req)
      .then(res => {
        return res;
      });
  },
  /** 服务城市变更 */
  serviceCityEidt(req) {
    return api.post("osms-api/hr/serviceCity/edit", req).then(res => res);
  },

  /**查看单条团建费人员详情 /hr/search/bulid    团建维护 */
  getPartyBuildingPersonList(req) {
    return api.post(`/osms-api/hr/search/bulid`, req).then(res => {
      return res;
    });
  },

  /** hr 团建费列表 hr/query/bulidlist*/
  getPartyBuildingList(req) {
    return api.post(`/osms-api/hr/query/bulidlist`, req).then(res => {
      return res;
    });
  },
  /** 团建费更新 POST /pm/edit/excel
   */
  updatePartyBuildingCost(req) {
    return api.post("/osms-api/hr/edit/excel", req).then(res => {
      return res;
    });
  },

  /**
   * 团建费新增  hr/add/excel
   */
  addPartyBuildingCost(req) {
    return api.post("/osms-api/hr/add/excel", req).then(res => {
      return res;
    });
  },

  /**编辑 获取团建费人员列表模板 hr/query/staff */
  getEditPartyBuildingPerson(req) {
    return api.post("/osms-api/hr/query/staff", req).then(res => {
      return res;
    });
  },

  /**新增 获取团建费人员列表模板 hr/query/staff1 */
  getAddPartyBuildingPerson(req) {
    return api.post("/osms-api/hr/query/staff1", req).then(res => {
      return res;
    });
  },

  /**hr带设定需求列表 - -驳回 hr/rqmt/reject */
  rejectDemand(req) {
    return api.post("/osms-api/hr/rqmt/reject", req).then(res => {
      return res;
    });
  },
  /**hr 合同编辑 -获取费率列表  /hr/contract/getContractFeeList */
  getContractFeeList(req) {
    return api
      .post("/osms-api/hr/contract/getContractFeeList", req)
      .then(res => {
        return res;
      });
  },

  /**hr 合同编辑 -删除费率  /hr/contract/delContractFee */
  delContractFee(req) {
    return api.post("/osms-api/hr/contract/delContractFee", req).then(res => {
      return res;
    });
  },

  /**hr 合同编辑 -新增费率  /hr/contract/addContractFee */
  addContractFee(req) {
    return api.post("/osms-api/hr/contract/addContractFee", req).then(res => {
      return res;
    });
  },

  /**hr 合同编辑 -更新费率 /hr/contract/updateContractFeeDetail */
  updateContractFee(req) {
    return api
      .post("/osms-api/hr/contract/updateContractFeeDetail", req)
      .then(res => {
        return res;
      });
  },
  /** 根据推荐ID查询个人的面试记录信息 */
  getInterviewRecord(req) {
    return api.get(`/osms-api/hr/rcmd/interviewRecord/${req}`).then(res => {
      return res;
    });
  },
  /**推荐处理，保存 */
  saveRecord(req) {
    return api.put("/osms-api/hr/rcmd/save", req).then(res => {
      return res;
    });
  },
  /*  处理推荐,提交 */
  dealRcmd: req => {
    return api.post("/osms-api/hr/rcmd/prcs", req).then(res => {
      return res;
    });
  },
  /** 根据推荐ID查询可供选择的级别 */
  getSkillLv(req) {
    return api.get(`/osms-api/hr/rcmd/skillCodes/${req}`).then(res => {
      return res;
    });
  },
  /*  获取需求，合作范围 */
  getContractList: req => {
    return api.get(`/osms-api/hr/contract/spcontracts/${req}`).then(res => {
      return res;
    });
  },
  /* 获取需求，合作范围【新】 */
  getNewContractList: req => {
    return api
      .get(`/osms-api/hr/contract/spcontracts/${req.servicescope}/${req.reqid}`)
      .then(res => {
        return res;
      });
  },
  /*  获取人员结算日期 如果刚入场，结算与入场选最迟/settlement/getEndMonth/{adNo} */
  getEndMonth: adNo => {
    return api.get(`/osms-api/hr/settlement/getEndMonth/${adNo}`).then(res => {
      return res;
    });
  },
  /*  结算详情页， 更新考勤*/
  updateAttendance: req => {
    return api.post(`/osms-api/hr/settlement/reSettlement`, req).then(res => {
      return res;
    });
  },
  /*  直属上级维护 -修改上级 /staff/setLeader*/
  setLeader: req => {
    return api.post(`/osms-api/hr/staff/setLeader`, req).then(res => {
      return res;
    });
  },
  /*  直属上级维护 - 人员数据列表 /staff/getLeaderList*/
  getLeaderList: req => {
    return api.post(`/osms-api/hr/staff/getLeaderList`, req).then(res => {
      return res;
    });
  },
  /*  hr 需求列表 - 推送人员数据列表  /hr/rqmt/rcmd/list*/
  getPushPersonList: req => {
    return api.post(`/osms-api/hr/rqmt/rcmd/list`, req).then(res => {
      return res;
    });
  }
};
