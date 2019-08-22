import { get, post } from '../api';

export default {
  recruitment: ({ commit }, id) => {
    return get(`/osms-api/hr/checkcnt/${id}`)
      .then((res) => {
        if (res.code == '0000') {
          const data = res.data ? res.data : {};
          return Promise.resolve(data);
        } else {
          return Promise.reject(res.msg);
        }
      })
  },
  projectDetailPm: ({ commit }, id) => {
    return get(`/osms-api/pm/item/data/${id}`).then(res => {
      const data = res.data ? res.data : {};
      if (res.code == "0000") {
        return Promise.resolve(data);
      } else {
        return Promise.reject();
      }
    });
  },

    /**
   * 合作伙伴 -- 获取列表
   */
  getCooperativeListPm: ({ commit }, req) => {
    return post("osms-api/pm/teamPartner/list", req)
      .then(res => {
        if (res.code === '0000') {
          return Promise.resolve(res.data || {})
        } else {
          return Promise.reject(res.msg)
        }
      })
  },

  /**
   * 合作伙伴 -- 编辑
   */
  editCooperativePm: ({ commit }, req) => {
    return post("osms-api/pm/teamPartner/edit", req)
      .then(res => {
        if (res.code === '0000') {
          return Promise.resolve(res.msg)
        } else {
          return Promise.reject(res.msg)
        }
      })
  },

  /**
   * 获取项目名称
   */
  getProjectNameListPm: ({ commit }) => {
    return get("osms-api/pm/query/proname")
      .then(res => {
        if (res.code === '0000') {
          return Promise.resolve(res.data || [])
        } else {
          return Promise.reject(res.msg)
        }
      })
  },
}