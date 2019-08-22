/*
  base state
 */

export default {
  userDetail: {}, // 用户信息
  homeMenu: {}, // 导航菜单
  deptData: [], // 部门别表
  projectData: [], // 项目列表
  eduData: [], // 学历列表
  positionData: [], // 经过合同过滤的技能级别数据
  allJobData: [], //没有经过合同过滤的技能级别数据(全量)
  rqmtJobData: [], // 经过合同过滤的技能级别数据(包含城市)
  levelData: [], // 级别
  supplierData: [], // 供应商
  serviceCity: [], // 服务城市
  workplaceData: [], // 工作地点
  rjctRsnReason: [], // 面试驳回原因
  rjctPickReason: [], // 筛选驳回原因
  quitReason: [], //离职类型
  expEntryTimeData: [], // 期望工作时间
  roleData: [], // 角色列表
  priority: [], // 优先级
  approvalStatus: [], // 需求审核状态
  recruitStatus: [], // 招聘状态
  requestType: [], // 需求类型
  rcmdStts: [], // 推荐状态
  attachStts: [], // 附件状态
  itemStts: [], // 立项状态
  userStts: [], // 用户状态
  allTemplate: [], // 所有模板
  // quarters: [{ name: "一季度", id: "1" }, { name: "二季度", id: "2" }, { name: "三季度", id: "3" }, { name: "四季度", id: "4" }], //季度下拉框
  // months: [{ name: "1月", id: "1" }, { name: "2月", id: "2" }, { name: "3月", id: "3" }, { name: "4月", id: "4" }, { name: "5月", id: "5" }, { name: "6月", id: "6" }, { name: "7月", id: "7" }, { name: "8月", id: "8" }, { name: "9月", id: "9" }, { name: "10月", id: "10" }, { name: "11月", id: "11" }, { name: "12月", id: "12" }], //月份下拉框
  settlementStts: [], // 费用结算状态
  pmProjectList: [], // pm的项目列表
  costAdjustType: [], // 结算-费用调整类型
  settlementAdjustMatter: [], // 结算-费用调整 事项字典
  serviceScopeList: [], // 服务范围 字典
  workplace: [], //服务城市与办公地点的联动数据
  teamBuildStts: [], // 团建费结算状态
  partyBuildStts: [], //团建流程状态
  // 结算维护查询条件缓存
  searchData: {},
  // 面试流程，可见项目数组
  interviewProjectList: [],
  INTERVIEWDEPARTMENTLIST: [],
  // PM 需求管理 服务城市-工作地点list
  // requireWorkplace: [],
  // 岗位类型
  postTypeList: []
};
