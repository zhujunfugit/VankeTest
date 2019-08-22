import * as api from "../api";
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
  INTERVIEWPROJECTLIST,
  INTERVIEWDEPARTMENTLIST,
  POSTTYPELIST
  // REQUIREWORKPLACE,
} from "../types/base";
import { createDictCode, creactDictName } from "@/common/dict";
import { dectcConfig } from "./config";
import md5 from "js-md5";

export default {
  /*
    用户登陆
  */
  userLogin: ({ commit }, req) => {
    const body = {
      account: req.account,
      random: req.random,
      encpswd: req.encpswd,
      verifyCode: req.identifyCode
    };
    return api.post("/osms-api/index/login", body).then(res => {
      const hasData = !!res.data;
      commit(USERDETAIL, {
        userDetail: hasData ? res.data : {}
      });
      if (res.code == "1000") {
        const data = res.data ? res.data : {};
        return Promise.resolve(data);
      } else {
        return Promise.reject(res);
      }
    });
  },
  /*
    字典表dictionary
  */
  dictionaryList: ({ commit }) => {
    return api.get("/osms-api/common/dict").then(res => {
      if (res.code === "9001") {
        return Promise.reject();
      }
      const hasData = !!res.data;
      const arrData = hasData ? res.data : [];
      let eduArr = [];
      let positionArr = [];
      let levelArr = [];
      let workplaceArr = [];
      let serviceCity = [];
      let expTimeArr = [];
      let rjctRsnReasonArr = [];
      let rjctPickReasonArr = [];
      let quitReasonArr = [];
      let settlementAdjustMatter = [];
      let serviceScopeList = [];
      arrData.map(item => {
        if (item.dictType === "0") {
          serviceCity = item.dictItems || [];
        } else if (item.dictType === "1") {
          workplaceArr = item.dictItems || [];
        } else if (item.dictType === "2") {
          positionArr = item.dictItems || [];
        } else if (item.dictType === "3") {
          levelArr = item.dictItems || [];
        } else if (item.dictType === "4") {
          eduArr = item.dictItems || [];
        } else if (item.dictType === "5") {
          expTimeArr = item.dictItems || [];
        } else if (item.dictType === "6") {
          rjctRsnReasonArr = item.dictItems || [];
        } else if (item.dictType === "7") {
          rjctPickReasonArr = item.dictItems || [];
        } else if (item.dictType === "8") {
          quitReasonArr = item.dictItems || [];
        } else if (item.dictType === "10") {
          settlementAdjustMatter = item.dictItems || [];
        } else if (item.dictType === "11") {
          // 服务范围
          serviceScopeList = item.dictItems || [];
        }
        return null;
      });
      createDictCode("place", workplaceArr);
      // createDictCode("position", positionArr);
      // createDictCode("level", levelArr);
      createDictCode("edu", eduArr);
      createDictCode("expTime", expTimeArr);
      createDictCode("rjctRsnReason", rjctRsnReasonArr);
      createDictCode("rjctPickReason", rjctPickReasonArr);
      createDictCode("quitReason", quitReasonArr);
      createDictCode("settlementAdjustMatter", settlementAdjustMatter);
      createDictCode("serviceScopeList", serviceScopeList);
      commit(WORKPLACELIST, {
        workplaceData: workplaceArr
      });
      commit(SERVICECITY, {
        serviceCity: serviceCity
      });
      // commit(POSITIONLIST, {
      //   positionData: positionArr
      // });
      // commit(LEVELLIST, {
      //   levelData: levelArr
      // });
      commit(EDULIST, {
        eduData: eduArr
      });
      commit(EXPENTRYTIMELIST, {
        expEntryTimeData: expTimeArr
      });
      commit(RJCTRSNREASON, {
        rjctRsnReason: rjctRsnReasonArr
      });
      commit(RJCTPICKREASON, {
        rjctPickReason: rjctPickReasonArr
      });
      commit(QUITREASON, {
        quitReason: quitReasonArr
      });
      commit(ADJUSTMATTER, {
        settlementAdjustMatter: settlementAdjustMatter
      });
      commit(SERVICESCOPE, {
        serviceScopeList: serviceScopeList
      });
      /*
          生成字典表
        */
    });
  },

  /*
    部门列表
  */
  deptList: ({ commit }) => {
    return api.get("/osms-api/common/department").then(res => {
      const hasData = !!res.data;
      commit(DPTLIST, {
        deptData: hasData ? res.data : []
      });
      // 抽取项目
      let projectData = [];
      const proArr = hasData ? res.data : [];
      for (let i = 0; i < proArr.length; i++) {
        if (proArr[i].projects.length > 0) {
          proArr[i].projects.map(item => {
            item.deptId = proArr[i].id;
          });
        }
        projectData = [...projectData, ...proArr[i].projects];
      }
      commit(PROJECT, {
        projectData: projectData
      });
      const data = res.data ? res.data : [];
      creactDictName("dept", data);
    });
  },

  /*
    角色列表
  */
  roleList: ({ commit }) => {
    return api.get("/osms-api/common/role").then(res => {
      const hasData = !!res.data;
      commit(ROLELIST, {
        roleData: hasData ? res.data : []
      });
      const data = hasData ? res.data : [];
      creactDictName("role", data);
    });
  },

  /*
    供应商查询
  */
  supplierList: ({ commit, state }) => {
    //  hr/contract/spcontracts(王学涛接口，待又对应的合同信息)
    // common/supplier (之前的供应商接口,无合同信息)
    // let url= '';
    // if (state.base.userDetail.role_id == 3){
    //   url = "/osms-api/hr/contract/spcontracts";
    // }else{
    let url = "/osms-api/common/supplier";
    // }
    return api.get(url).then(res => {
      const hasData = !!res.data;
      commit(SUPPLIERLIST, {
        supplierData: hasData ? res.data : []
      });
      const data = hasData ? res.data : [];
      creactDictName("supplier", data);
    });
  },
  /*
    自定义字典表
  */
  customDect: ({ commit }) => {
    commit(COSTOMDECT, {
      dectConfig: dectcConfig
    });
    createDictCode("priority", dectcConfig.priority);
    createDictCode("approvalStatus", dectcConfig.approvalStatus);
    createDictCode("recruitStatus", dectcConfig.recruitStatus);
    createDictCode("requestType", dectcConfig.requestType);
    createDictCode("rcmdStts", dectcConfig.rcmdStts);
    createDictCode("attachStts", dectcConfig.attachStts);
    createDictCode("itemStts", dectcConfig.itemStts);
    createDictCode("userStts", dectcConfig.userStts);
    createDictCode("settlementStts", dectcConfig.settlementStts);
    creactDictName("costAdjustType", dectcConfig.costAdjustType);
    createDictCode("teamBuildStts", dectcConfig.teamBuildStts);
    createDictCode("partyBuildStts", dectcConfig.partyBuildStts);
    return new Promise((resolve, reject) => {
      resolve();
    });
  },

  /*
    所有模板
  */
  allTemplate: ({ commit }) => {
    return api.get("/osms-api/pm/tplt/select").then(res => {
      const hasData = !!res.data;
      commit(ALLTEMPLATE, {
        allTemplate: hasData ? res.data : []
      });
    });
  },

  /*
    用户列表    
  */
  userList: ({ commit }, req) => {
    const body = {
      pageNum: req.currentNum,
      pageSize: req.pagesize,
      account: req.account,
      role_id: req.role_id
    };
    return api.post("/osms-api/sys/user/list", body).then(res => {
      const hasData = !!res.data;
      const data = hasData ? res.data : [];
      return Promise.resolve(data);
    });
  },

  /*
    新增用户
  */
  addUser: ({ commit }, req) => {
    const body = {
      email: req.email,
      account: req.account,
      name: req.name,
      tel: req.tel,
      pswd: md5(req.account + req.pswd).toUpperCase(),
      stts: req.stts,
      role_id: req.role_id,
      departmentid: req.departmentid,
      supplierid: req.supplierid,
      role_ids: req.role_ids,
      dptList: req.dptList
    };
    return api.post("/osms-api/sys/user/add", body).then(res => {
      return new Promise((resolve, reject) => {
        if (res.code === "0000") {
          resolve();
        } else {
          reject(res.msg);
        }
      });
    });
  },

  /*
    删除用户
  */
  deleteUser: ({ commit }, id) => {
    return api.post(`/osms-api/sys/user/delete/${id}`).then(res => {
      return new Promise((resolve, reject) => {
        if (res.code === "0000") {
          resolve();
        } else {
          reject(res.msg);
        }
      });
    });
  },

  /*
    用户详情
  */
  detailUser: ({ commit }, id) => {
    return api.get(`/osms-api/sys/user/detail/${id}`).then(res => {
      return new Promise((resolve, reject) => {
        const hasData = !!res.data;
        const data = hasData ? res.data : {};
        if (res.code === "0000") {
          resolve(data);
        } else {
          reject();
        }
      });
    });
  },

  /*
    修改用户
  */
  updateUser: ({ commit }, req) => {
    const body = {
      email: req.email,
      account: req.account,
      name: req.name,
      tel: req.tel,
      pswd: req.pswd ? md5(req.account + req.pswd).toUpperCase() : "",
      stts: req.stts,
      role_id: req.role_id,
      departmentid: req.departmentid,
      supplierid: req.supplierid,
      id: req.id,
      role_ids: req.role_ids,
      dptList: req.dptList
    };
    return api.put("/osms-api/sys/user/update", body).then(res => {
      if (res.code === "0000") {
        return new Promise((resolve, reject) => {
          resolve();
        });
      } else {
        return new Promise((resolve, reject) => {
          reject(res.msg);
        });
      }
    });
  },

  /*
    获取个人信息
  */
  detailPerson: ({ commit }) => {
    return api.get("/osms-api/common/user/detail").then(res => {
      return new Promise((resolve, reject) => {
        const hasData = !!res.data;
        const data = hasData ? res.data : {};
        commit(USERDETAIL, {
          userDetail: data
        });
        if (res.code == "0000" || res.code == "9001" || res.code == "9002") {
          resolve(res);
        } else {
          reject();
        }
      });
    });
  },

  /*
    获取导航信息
  */
  getHomeMenu: ({ commit }) => {
    return api.get("/osms-api/common/menu").then(res => {
      return new Promise((resolve, reject) => {
        const hasData = !!res.data;
        const data = hasData ? res.data : {};
        commit(HOMEMENU, {
          homeMenu: data
        });
        if (res.code == "0000" || res.code == "9001" || res.code == "9002") {
          resolve(res);
        } else {
          reject();
        }
      });
    });
  },

  /*
    修改个人资料
  */
  updatePerson: ({ commit }, req) => {
    let pswd = md5(req.account + req.newPwd).toUpperCase();
    let old_pswd = md5(req.account + req.oldPwd).toUpperCase();
    // 密码为空，传空字符
    if (!req.oldPwd || !req.newPwd) {
      pswd = "";
      old_pswd = "";
    }
    const body = {
      pswd: pswd,
      tel: req.tel,
      old_pswd: old_pswd,
      verifyCode: req.verifyCode
    };
    return api.put("/osms-api/common/user/update", body).then(res => {
      // if (res.code === "0000") {
      //   return new Promise((resolve, reject) => {
      //     resolve(res.msg);
      //   });
      // } else {
      //   return new Promise((resolve, reject) => {
      //     reject(res.msg);
      //   });
      // }
      return res;
    });
  },
  /*
    全局模板列表
  */
  listTemplate({ commit }, req) {
    const body = {
      name: req.name,
      page_num: req.currentNum,
      page_size: req.pagesize,
      tmp_type: req.tmp_type
    };
    return api.post("/osms-api/sys/tplt/list", body).then(res => {
      const hasData = !!res.data;
      const data = hasData ? res.data : {};
      return new Promise((resolve, reject) => {
        resolve(data);
      });
    });
  },

  /*
    全局增加模版
  */
  addTemplate: ({ commit }, req) => {
    const body = {
      name: req.name,
      content: req.content,
      skill_code: req.skill_code,
      skill_level_code: req.skill_level_code,
      tmp_type: req.tmp_type
    };
    return api.post("/osms-api/sys/tplt/add", body).then(res => {
      if (res.code === "0000") {
        return new Promise((resolve, reject) => {
          resolve(res);
        });
      } else {
        return new Promise((resolve, reject) => {
          reject(res);
        });
      }
    });
  },

  /*
    全局模板详情
  */
  detailTemplate: ({ commit }, id) => {
    return api.get(`/osms-api/sys/tplt/detail/${id}`).then(res => {
      const hasData = !!res.data;
      const data = hasData ? res.data : {};
      if (res.code === "0000") {
        return new Promise((resolve, reject) => {
          resolve(data);
        });
      } else {
        return new Promise((resolve, reject) => {
          reject(res);
        });
      }
    });
  },

  /*
    全局修改模板
  */
  updateTemplate: ({ commit }, req) => {
    const body = {
      name: req.name,
      content: req.content,
      id: req.id,
      skill_code: req.skill_code,
      skill_level_code: req.skill_level_code,
      tmp_type: req.tmp_type
    };
    return api.put("/osms-api/sys/tplt/update", body).then(res => {
      if (res.code === "0000") {
        return new Promise((resolve, reject) => {
          resolve(res);
        });
      } else {
        return new Promise((resolve, reject) => {
          reject(res);
        });
      }
    });
  },

  /*
    全局删除模版
  */
  removeTemplate: ({ commit }, id) => {
    return api.get(`/osms-api/sys/tplt/delete/${id}`).then(res => {
      if (res.code === "0000") {
        return new Promise((resolve, reject) => {
          resolve(res);
        });
      } else {
        return new Promise((resolve, reject) => {
          reject(res);
        });
      }
    });
  },

  /*
    PM模板管理
  */
  /*
    PM模板列表
  */
  listTemplatePM({ commit }, req) {
    const body = {
      name: req.name,
      page_num: req.currentNum,
      page_size: req.pagesize
    };
    return api.post("/osms-api/pm/tplt/list", body).then(res => {
      const hasData = !!res.data;
      const data = hasData ? res.data : {};
      return new Promise((resolve, reject) => {
        resolve(data);
      });
    });
  },

  /*
    PM增加模版
  */
  addTemplatePM: ({ commit }, req) => {
    const body = {
      name: req.name,
      content: req.content
    };
    return api.post("/osms-api/pm/tplt/add", body).then(res => {
      if (res.code === "0000") {
        return new Promise((resolve, reject) => {
          resolve();
        });
      } else {
        return new Promise((resolve, reject) => {
          reject();
        });
      }
    });
  },

  /*
    PM模板详情
  */
  detailTemplatePM: ({ commit }, id) => {
    return api.get(`/osms-api/pm/tplt/detail/${id}`).then(res => {
      const hasData = !!res.data;
      const data = hasData ? res.data : {};
      if (res.code === "0000") {
        return new Promise((resolve, reject) => {
          resolve(data);
        });
      } else {
        return new Promise((resolve, reject) => {
          reject();
        });
      }
    });
  },

  /*
    PM修改模板
  */
  updateTemplatePM: ({ commit }, req) => {
    const body = {
      name: req.name,
      content: req.content,
      id: req.id
    };
    return api.put("/osms-api/pm/tplt/update", body).then(res => {
      if (res.code === "0000") {
        return new Promise((resolve, reject) => {
          resolve();
        });
      } else {
        return new Promise((resolve, reject) => {
          reject();
        });
      }
    });
  },

  /*
    PM删除模版
  */
  removeTemplatePM: ({ commit }, id) => {
    return api.get(`/osms-api/pm/tplt/delete/${id}`).then(res => {
      if (res.code === "0000") {
        return new Promise((resolve, reject) => {
          resolve();
        });
      } else {
        return new Promise((resolve, reject) => {
          reject();
        });
      }
    });
  },

  downloadFile({ commit }, id) {
    return api.get(`/osms-api/common/file/download/${id}`).then(res => {
      if (res.code == "0000") {
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    });
  },
  /*
    获取验证码
  */
  getVerificationCode({ commit }) {
    return api.get("/osms-api/index/verifyCode").then(res => {
      if (res.code == "0000") {
        const data = res.data ? res.data : "";
        return Promise.resolve(data);
      } else {
        return Promise.reject(res.msg);
      }
    });
  },
  // IMD 从定向
  // imdReplace( { commit } ) {
  //   return api.get()
  // }
  // test
  test({ commit }, body) {
    var formData = new FormData(event.body);
    return api.post("/osms-api/auth/authResponse.do", formData);
  },
  /*
    获取技能级别
  */
  getJobData({ commit }) {
    return api.get("/osms-api/common/job_data").then(res => {
      const data = res.data ? res.data : [];
      commit(POSITIONLIST, {
        positionData: data
      });
      creactDictName("position", data);
    });
  },
  /*
    获取全部的技能级别
  */
  getAllJobData({ commit }) {
    return api.get("/osms-api/common/job_data_all").then(res => {
      const data = res.data ? res.data : [];
      commit(ALLJOBDATA, {
        allJobData: data
      });
    });
  },

  /*
    获取全部的技能级别(包含城市)
  */
  getRqmtJobData({ commit }) {
    return api.get("/osms-api/common/rqmt/job_data").then(res => {
      const data = res.data ? res.data : [];
      commit(RQMTJOBDATA, {
        rqmtJobData: data
      });
    });
  },

  /*
    用户切换到IDM
  */
  checkIDM({ commit }) {},
  /*
      用户切换到供应商
   */
  checkSupplier({ commit }) {},
  async userSearch({ commit }, name) {
    return api.get(`/osms-api/common/vanke/user_search/${name}`).then(res => {
      if (res.code === "0000") {
        const data = res.data ? res.data : "";
        return Promise.resolve(data);
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /*
    部门列表
  */
  departmentList({ commit }, req) {
    const body = {
      id: req.id,
      name: req.name,
      pagenum: req.currentNum,
      pagesize: req.pagesize
    };
    return api.post("/osms-api/sys/department/list", body).then(res => {
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
    项目列表
  */
  projectList({ commit }, req) {
    const body = {
      did: req.did,
      name: req.name,
      pagenum: req.currentNum,
      pagesize: req.pagesize
    };
    return api.post("/osms-api/sys/project/list", body).then(res => {
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
    项目详情
  */
  projectDetailData({ commit }, id) {
    return api.get(`/osms-api/sys/project/get/${id}`).then(res => {
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
    新增项目
  */
  addProject({ commit }, req) {
    const body = {
      did: req.did,
      disOrder: req.disOrder,
      name: req.name
    };
    return api.post("/osms-api/sys/project/add", body).then(res => {
      if (res.code === "0000") {
        return Promise.resolve();
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /*
    更新项目
  */
  updateProject({ commit }, req) {
    const body = {
      id: req.id,
      did: req.did,
      disOrder: req.disOrder,
      name: req.name
    };
    return api.put("/osms-api/sys/project/update", body).then(res => {
      if (res.code === "0000") {
        return Promise.resolve();
      } else {
        return Promise.reject(res.msg);
      }
    });
  },

  /*
    删除项目
  */
  deleteProject({ commit }, id) {
    return api.deleteR(`/osms-api/sys/project/delete/${id}`).then(res => {
      if (res.code === "0000") {
        return Promise.resolve();
      } else {
        return Promise.reject(res.msg);
      }
    });
  },
  /** */
  /*
    pm项目查询
  */
  pmProjectList: ({ commit }) => {
    return api.get("/osms-api/pm/query/proname").then(res => {
      const hasData = !!res.data;
      let data = res.data;
      if (hasData) {
        data = res.data.map(item => {
          return {
            id: item.projectId,
            name: item.projectName
          };
        });
      }
      commit(PMPROJECTlIST, {
        pmProjectList: hasData ? data : []
      });
    });
  },
  /**
   * 服务城市和工作地点联动数据
   */
  workplace: ({ commit }) => {
    // return api.get("/osms-api/common/workplace").then(res => {
    return api.get("/osms-api/common/city/cascade/place").then(res => {
      const hasData = !!res.data;
      commit(WORKPLACE, {
        workplace: hasData ? res.data : []
      });
      const data = hasData ? res.data : [];
      creactDictName("workplace", data);
    });
  },
  /* 根据技能级别查找相应的服务城市信息 */
  getServiceCity: ({ commit }, req) => {
    return api.post("/osms-api/common/service/citys", req).then(res => {
      return res;
    });
  },
  /*
    pm 面试流程管理，部门 所属部门 + 面试官权限的项目部门； 可查看的项目 自己管理的项目 + 设置了面试官权限的项目
  */
  getInterviewProjectList({ commit }) {
    return api.post(`/osms-api/pm/project/list`).then(res => {
      let data = res.data ? res.data : [];
      commit(INTERVIEWDEPARTMENTLIST, {
        interviewDepartmentList: data || []
      });
      let projectList = [];
      data.forEach(dptItem => {
        if (dptItem.projects && dptItem.projects.length) {
          dptItem.projects.forEach(item => {
            item.deptId = dptItem.id;
          });
          projectList = [...projectList, ...dptItem.projects];
        }
      });
      commit(INTERVIEWPROJECTLIST, {
        interviewProjectList: projectList
      });
      // creactDictName('interviewProjectList', data);
    });
  },

  /**
   * pm 需求管理- 服务城市和工作地点联动数据
   */
  // requireWorkplace: ({commit}) => {
  //   return api.get("/osms-api/common/city/cascade/place").then(res => {
  //     const hasData = !!res.data;
  //     commit(REQUIREWORKPLACE, {
  //       requireWorkplace: hasData ? res.data : []
  //     });
  //     const data = hasData ? res.data : [];
  //     creactDictName("requireWorkplace", data);
  //   })
  // },

  /*  获取招聘流程，简历 操作记录/common/recruit/process/record   pm  hr 公用*/
  getProcessRecord({ commit }, id) {
    return api
      .get(`/osms-api/common/recruit/process/record/${id}`)
      .then(res => {
        return res;
      });
  },
  /*
    获取岗位类型
  */
  getPostTypeList({ commit }) {
    return api.get("/osms-api/common/post_type").then(res => {
      const data = res.data ? res.data : [];
      commit(POSTTYPELIST, {
        postTypeList: data
      });
      creactDictName("postTypeList", data);
    });
  },

  /*
    通过岗位类型，获取技能级别服务城市数据   common/post_type/job_data/01
  */
  getSkillDataByPostType({ commit }, post_type) {
    return api
      .get(`/osms-api/common/post_type/job_data/${post_type}`)
      .then(res => {
        return res;
      });
  },
  /**团建费活动使用情况列表 /pm/query/proid by project， new  common/query/buildings */
  getTeamBuildUseList({ commit }, req) {
    // return post("/osms-api/pm/query/proid", req).then(res => {
    return api.post("/osms-api/common/query/buildings", req).then(res => {
      return res;
    });
  },
  /*  查看团建明细 */
  getBuildingDetail({ commit }, req) {
    return api
      .post(`/osms-api/common/query/buildings/detail`, req)
      .then(res => {
        return res;
      });
  },
  /*  团建审核 */
  approvaBuilding({ commit }, req) {
    return api
      .post(`/osms-api/common/building/apply/approval`, req)
      .then(res => {
        return res;
      });
  },

  /*  团建审核 common/building/export   {id, status}*/
  buildingDetailExport({ commit }, req) {
    return api
      .download("/osms-api/common/building/export", req, {
        responseType: "blob"
      })
      .then(res => res);
  },
  /*  团建费人员使用情况 --导出 common/export/excel*/
  buildingPersonDetailExport({ commit }, req) {
    return api
      .download("/osms-api/common/export/excel", req, { responseType: "blob" })
      .then(res => res);
  },

  /*  团建费人员使用情况 common/query/adno  */
  getTeambuildList({ commit }, req) {
    return api.post("/osms-api/common/query/adno", req).then(res => res);
  },
  /*  团建费人员-查看明细 common/query/adno/detail  */
  getTeamBuildPersonDetail({ commit }, req) {
    return api.post("/osms-api/common/query/adno/detail", req).then(res => res);
  },
  /** 更新store.state.base.userDetal电话号码 */
  updateTel({ commit, state }, req) {
    commit(USERDETAIL, {
      userDetail: { ...state.userDetail, ...req }
    });
  },
  /*  通过项目查 所属部门 osms-api/common/getDeptByProId  */
  getDeptByProId({ commit }, req) {
    return api
      .post(`/osms-api/common/getDeptByProId/?proId=${req}`)
      .then(res => res);
  }
};
