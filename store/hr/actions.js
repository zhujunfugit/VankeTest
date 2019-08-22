import { UNTREATEDNUM } from "../types/hr";

import { get, post, put } from "../api";

export default {
  // 立项下面的需求列表
  demand: ({ commit }, req) => {
    const body = {
      id: req.id,
      pagenum: req.currentNum,
      pagesize: req.pagesize
    };
    return post("/osms-api/hr/item_rqmt/list_req", body).then(res => {
      const hasData = !!res.data;
      const data = hasData ? res.data : {};
      return Promise.resolve(data);
    });
  },

  /*
    资料审核人员列表
  */
  materialApprovalPerson: ({ commit }, req) => {
    const body = {
      opt_flag: "C5", // 类型
      page_num: req.page_num,
      page_size: req.page_size,
      dpt_id: req.dpt_id,
      pro_id: req.pro_id,
      name: req.name,
      supplier_id: req.supplier_id,
      attach_stts: req.attach_stts // 审批状态
    };
    return post("/osms-api/hr/rcmd/list", body).then(res => {
      const hasData = !!res.data;
      const data = hasData ? res.data : {};
      return Promise.resolve(data);
    });
  },

  /*
    入场资料审核
  */
  materialApproval: ({ commit }, req) => {
    const body = {
      recId: req.recId,
      stts: req.stts,
      note: req.note
    };
    return post("/osms-api/hr/rcmd/attachcheck", body).then(res => {
      if (res.code == "0000") {
        Promise.resolve();
      } else {
        Promise.reject();
      }
    });
  },

  /*
    资料列表
  */
  materiaList: ({ commit }, id) => {
    const body = {
      recId: id
    };
    return post("/osms-api/hr/rcmd/attachlist ", body).then(res => {
      let data = [];
      const hasData = !!res.data;
      if (hasData && res.data[0] && res.data[0].rcmAttachList) {
        data = res.data[0].rcmAttachList;
      }
      return Promise.resolve(data);
    });
  },
  /*
    推荐列表
  */
  resourcesList: ({ commit }, req) => {
    const body = {
      opt_flag: req.opt_flag,
      page_num: req.page_num,
      page_size: req.page_size,
      dpt_id: req.dpt_id,
      pro_id: req.pro_id,
      skill_code: req.skill_code,
      skill_lv_code: req.skill_lv_code,
      name: req.name,
      sex: req.sex,
      wk_place_code: req.wk_place_code,
      created_begin: req.created_begin,
      created_end: req.created_end,
      itv_begin: req.itv_begin,
      itv_end: req.itv_end,
      stts: req.stts,
      applyBy: req.applyBy,
      supplier_id: req.supplier_id
    };
    return post("/osms-api/hr/rcmd/list", body).then(res => {
      const hasData = !!res.data;
      const data = hasData ? res.data : [];
      return Promise.resolve(data);
    });
  },

  /*
    需求审批
  */
  approval: ({ commit }, req) => {
    return post("/osms-api/hr/rqmt/verify", req).then(res => {
      const hasData = !!res.data;
      const data = hasData ? res.data : [];
      if (res.code === "0000") {
        return Promise.resolve(res);
      } else {
        return Promise.reject(res);
      }
    });
  },

  /*
    用户信息详情
  */
  userDetail: ({ commit }, id) => {
    const body = {
      rec_id: id
    };
    return post("/osms-api/hr/rqmt/staffdetail", body).then(res => {
      const data = res.data ? res.data : {};
      if (res.code == "0000") {
        return Promise.resolve(data);
      } else {
        return Promise.reject();
      }
    });
  },

  /*
    需求详情
  */
  demandDetial: ({ commit }, id) => {
    const body = {
      req_no: id
    };
    return post("/osms-api/hr/rqmt/detail", body).then(res => {
      const data = res.data ? res.data : {};
      if (res.code == "0000") {
        return Promise.resolve(data);
      } else {
        return Promise.reject();
      }
    });
  },

  /*
    立项详情
  */
  projectDetail: ({ commit }, id) => {
    return get(`/osms-api/hr/item/data/${id}`).then(res => {
      const data = res.data ? res.data : {};
      if (res.code == "0000") {
        return Promise.resolve(data);
      } else {
        return Promise.reject();
      }
    });
  },

  /*
    待处理数量HR
  */
  untreatedNum: ({ commit, rootState }, req) => {
    const role =
      rootState.base.userDetail.role_id == 2 ||
      rootState.base.userDetail.role_id == 6
        ? "pm"
        : rootState.base.userDetail.role_id == 3
        ? "hr"
        : rootState.base.userDetail.role_id == 5
        ? "itv"
        : "";
    return get(`/osms-api/${role}/todo`).then(res => {
      if (res.code === "0000") {
        const hasData = !!res.data;
        commit(UNTREATEDNUM, {
          untreated: hasData ? res.data : {}
        });
        return Promise.resolve(res);
      }
    });
  },

  /*
    文件预览
  */
  filePreview: ({ commit }, id) => {
    return get(`/osms-api/common/file/preview/${id}`).then(res => {
      if (res.code === "0000") {
        const hasData = !!res.data;
        const data = hasData ? res.data : {};
        return Promise.resolve(data);
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /*
   *入场人员申请审核
   */
  materialApprovalPersonHr: ({ commit }, req) => {
    const body = {
      rcmd_id: req.recId,
      opt_flag: req.stts,
      reject_reason: req.note
    };
    return post("/osms-api/hr/rcmd/verify", body).then(res => {
      if (res.code == "0000") {
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    });
  },

  /*
    获取PM人员列表
  */
  pmUserList: ({ commit }, req) => {
    const body = {
      account: "",
      name: "",
      pageNum: 1,
      pageSize: 30
    };
    return post("/osms-api/common/pm/list", body)
      .then(res => {
        const data = res.data ? res.data : {};
        return Promise.resolve(data);
      })
      .catch(res => {
        return Promise.reject(res.msg);
      });
  },

  /**
   * 获取人员费率列表
   */
  getPersonnelRateMaintenanceList: ({ commit }, req) => {
    return post("osms-api/hr/staffFee/list", req).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.data || {});
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /**
   * 获取合同列表
   */
  getContractList: ({ commit }, req) => {
    return post("osms-api/hr/contract/list", req).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.data || {});
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /**
   * 新增合同提交
   */
  addContract: ({ commit }, req) => {
    let url = "";
    req.type == 1
      ? (url = "osms-api/hr/contract/update")
      : (url = "osms-api/hr/contract/add");

    return post(url, req).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.msg);
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /**
   * 合同变更记录查询
   */
  getContractChange: ({ commit }, req) => {
    return post("osms-api/hr/contract/record/list", req).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.data || []);
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /**
   * 合同详情查询
   */
  getContractInfo: ({ commit }, id) => {
    return get(`osms-api/hr/contract/detail/${id}`).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.data || {});
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /**
   * 级别维护列表查询
   */
  getLevelMaintenance: ({ commit }, req) => {
    return post("osms-api/hr/staffjob/list", req).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.data || {});
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /**
   * 级别维护新增查询
   */
  getLevelMaintenanceAdd: ({ commit }, adNo) => {
    return get(`osms-api/hr/staffjob/info/${adNo}`).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.data || {});
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /**
   * 根据姓名获取域账号
   */
  getAdNo: ({ commit }, name) => {
    return get(`osms-api/common/staff/search/${name}`).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.data || []);
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /**
   * 级别维护新增-更新
   */
  upDateLevelMaintenance: ({ comit }, req) => {
    return post("osms-api/hr/staffjob/update", req).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.msg);
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /**
   * 获取项目名称
   */
  getProjectNameList: ({ commit }) => {
    return get("osms-api/common/project").then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.data || []);
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /**
   * 获取所有对应部门下的所有项目
   */
  getAllProjectNameList: ({ commit }) => {
    return get("osms-api/common/department").then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.data || []);
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /**
   * 合作伙伴 -- 获取列表
   */
  getCooperativeList: ({ commit }, req) => {
    return post("osms-api/hr/teamPartner/list", req).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.data || {});
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /**
   * 合作伙伴 -- 编辑
   */
  editCooperative: ({ commit }, req) => {
    return post("osms-api/hr/teamPartner/edit", req).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.msg);
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  // 置顶
  top: ({ commit }, req) => {
    return put("osms-api/hr/rqmt/top", req).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.msg);
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  // 获取试用期未通过人员列表
  getNoPassStaffList: ({ commit }, req) => {
    return post("osms-api/hr/staffBasePayedInfo/list", req).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.data || {});
      } else {
        return Promise.reject(res.msg);
      }
    });
  },
  //团建流程
  getLeague: (_, req) => {
    return get("osms-api/hr/league/flow?lbId=" + req).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.data || {});
      } else {
        return Promise.reject(res.msg);
      }
    });
  },
  //合同批量删除
  contractDelete: (_, req) => {
    return post("osms-api/hr/contract/delete", { id: req }).then(res => {
      if (res.code === "0000") {
        return Promise.resolve(res.data || {});
      } else {
        return Promise.reject(res.msg);
      }
    });
  },
  // 获取列表-报销单列表
  getReimbursementList: (_, req) => {
    return post(`/osms-api/sp/expense/reimbursement/bill/list`, req)
      .then(res => {
        if (res.code === "0000") {
          return Promise.resolve(res.data || {});
        } else {
          return Promise.reject(res.msg);
        }
      })
      .catch(error => Promise.reject(error));
  },
  // 获取列表[结算管理-费用结算-考勤]
  getAttendanceData: (_, req) => {
    return post(`/osms-api/hr/settlement/getServiceFeeDetail`, req)
      .then(res => {
        if (res.code === "0000") {
          return Promise.resolve(res.data || {});
        } else {
          return Promise.reject(res.msg);
        }
      })
      .catch(error => Promise.reject(error));
  },
  // 获取列表[结算管理-差旅报销]
  getExpendedList: (_, req) => {
    return post(`/osms-api/sp/expense/reimbursement/travel/list`, req)
      .then(res => {
        if (res.code === "0000") {
          return Promise.resolve(res.data || {});
        } else {
          return Promise.reject(res.msg);
        }
      })
      .catch(error => Promise.reject(error));
  }
};
