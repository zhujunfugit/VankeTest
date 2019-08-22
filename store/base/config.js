/*
  自定义字典
*/
export const dectcConfig = {
  /*
    优先级
  */
  priority: [
    {
      code: 0,
      value: "默认"
    },
    {
      code: 1,
      value: "低"
    },
    {
      code: 2,
      value: "中"
    },
    {
      code: 3,
      value: "高"
    }
  ],
  /*
    需求审核状态
  */
  approvalStatus: [
    {
      code: 0,
      value: "待申请"
    },
    {
      code: 1,
      value: "申请中"
    },
    {
      code: 2,
      value: "申请通过"
    },
    {
      code: 3,
      value: "驳回"
    },
    {
      code: 4,
      value: "申请失败"
    },
    {
      code: 5,
      value: "待设定"
    }
  ],
  /*
    招聘状态
  */
  recruitStatus: [
    //{
        //code: 0,
        //value: "保存"
      //},
    {
      code: 1,
      value: "招聘中"
    },
    {
      code: 2,
      value: "已满足"
    },
    {
      code: 3,
      value: "暂停"
    }
  ],
  /*
    需求类型
  */
  requestType: [
    {
      code: 0,
      value: "新增"
    },
    {
      code: 1,
      value: "替补"
    }
  ],
  /*
    推荐状态
  */
  rcmdStts: [
    {
      code: 10,
      value: "简历筛选"
    },
    {
      code: -11,
      value: "筛选前放弃"
    },
    {
      code: -12,
      value: "简历筛选不通过"
    },
    {
      code: 19,
      value: "预约面试时间"
    },
    {
      code: 20,
      value: "初试反馈"
    },
    {
      code: 24,
      value: "复试反馈"
    },
    {
      code: 25,
      value: "最终反馈"
    },
    {
      code: -21,
      value: "放弃面试"
    },
    {
      code: -22,
      value: "面试不通过"
    },
    //{
      //code: -23,
      //value: "未按时面试"
    //},
    // {
    //   code: 24,
    //   value: "入场信息反馈"
    // },
    // {
    //   code: 25,
    //   value: "入场信息审核"
    // },
    // {
    //   code: 26,
    //   value: "入场信息审核不通过"
    // },
    {
      code: 27,
      value: "入场信息待确认"
    },
    {
      code: -28,
      value: "放弃入场"
    },
    {
      code: 30,
      value: "待入场"
    },
    {
      code: 40,
      value: "已入场"
    },
    {
      code: -41,
      value: "已离场"
    },
    {
      code: -42,
      value: "流程结束"
    }
  ],
  /*
    附件状态
  */
  attachStts: [
    {
      code: 0,
      value: "待审核"
    },
    {
      code: 1,
      value: "审核通过"
    },
    {
      code: 2,
      value: "驳回"
    }
  ],
  /*
    立项状态
  */
  itemStts: [
    {
      code: 0,
      value: "废弃"
    },
    {
      code: 1,
      value: "正常"
    }
  ],
  userStts: [
    {
      code: 0,
      value: "停用"
    },
    {
      code: 1,
      value: "正常"
    }
  ],
  // 结算状态
  settlementStts: [
    {
      code: 1,
      value: "未结算"
    },
    {
      code: 2,
      value: "退回"
    },
    {
      code: 3,
      value: "结算中"
    },
    {
      code: 4,
      value: "已结算"
    },
    // {
    //   code: 5,
    //   value: "已生成"
    // },
  ],
  // 费用调整类型
  costAdjustType: [
    {
      id: "1",
      name: "费用增加"
    },
    {
      id: "2",
      name: "费用扣减"
    }
  ],
  // 团建费结算状态
  teamBuildStts: [
    {
      code: 1,
      value: "未结算"
    },
    {
      code: 2,
      value: "退回"
    },
    {
      code: 3,
      value: "结算中"
    },
    {
      code: 4,
      value: "已结算"
    },
  ],
  //团建流程状态
  partyBuildStts: [
    {
      code: -1,
      value: '已删除'
    },
    {
      code: 0,
      value: '流程撤销'
    },
    {
      code: 1,
      value: '草稿'
    },
    {
      code: 2,
      value: '申请待审批'
    },
    {
      code: 3,
      value: '申请驳回'
    },
    {
      code: 4,
      value: '申请通过'
    },
    {
      code: 5,
      value: '核销待审批'
    },
    {
      code: 6,
      value: '核销驳回'
    },
    {
      code: 7,
      value: '核销通过'
    },
    {
      code: 8,
      value: '结算中'
    },
    {
      code: 9,
      value: '已结算'
    },
  ]
};
