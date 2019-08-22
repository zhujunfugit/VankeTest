import router from "../router";
import axios from "axios";
import { isAuth } from "@/common/errors";
import action from "@/store/base/actions";
import store from "@/store/index";
import profile from "./config";

function discInfo() {
  if (store.state.base.positionData.length === 0) {
    return Promise.resolve()
      .then(() => {
        return action.dictionaryList(store);
      })
      .then(() => {
        return action.deptList(store);
      })
      .then(() => {
        return action.roleList(store);
      })
      .then(() => {
        return action.supplierList(store);
      })
      .then(() => {
        return action.customDect(store);
      })
      .then(() => {
        return action.detailPerson(store);
      })
      .then(() => {
        return action.getHomeMenu(store);
      })
      .then(() => {
        return action.getJobData(store);
      })
      .then(() => {
        return action.getAllJobData(store);
      })
      .then(() => {
        return action.getRqmtJobData(store);
      })
      .then(() => {
        return action.getPostTypeList(store);
      })
      .then(() => {
        return action.workplace(store);
      })
      .then(() => {
        if (
          store.state.base.userDetail.role_id == 2 ||
          store.state.base.userDetail.role_id == 5 ||
          store.state.base.userDetail.role_id == 6
        ) {
          // action.requireWorkplace(store);
          // console.log('pm 面试官 能力中心 discInfo');
          return action.getInterviewProjectList(store);
        }
        return null;
      });
  } else {
    return Promise.resolve();
  }
}
router.beforeEach((to, from, next) => {
  if (profile.IDM) {
    // if (to.path == '/error') {
    //   next();
    //   return;
    // }
    // 调用接口查看是否登陆，是否有权限, 如果是重定向先复制token
    if (from.path === "/") {
      const index = window.location.href.indexOf("osms-token=");
      if (index > -1) {
        const token = decodeURIComponent(
          window.location.href.substring(index + 11)
        );
        localStorage.setItem("osms-token", token);
      }
    }
    if (!localStorage.getItem("osms-token")) {
      // 没有token
      if (to.path == "/error") {
        next();
        return;
      }
      if (Number(store.state.base.userDetail.role_id || -1) > 0) {
        if (store.state.base.userDetail.role_id == 1) {
          if (to.path != "/login") {
            next("/login");
          } else {
            next();
          }
        } else {
          // const encode= encodeURIComponent(window.location.href);
          // const href = `http://10.98.75.201:8090/osms-api/auth/authRequest.do?url=${encode}`;
          window.location.href = profile.BASE_URL;
        }
        // return;
      } else {
        if (to.path == "/login") {
          next();
        } else {
          // const encode= encodeURIComponent(window.location.href);
          // const href = `http://10.98.75.201:8090/osms-api/auth/authRequest.do?url=${encode}`;
          // alert('router未登陆',href);
          window.location.href = profile.BASE_URL;
        }
      }
      return;
    }
    if (Number(store.state.base.userDetail.role_id || -1) < 0) {
      if (to.path == "/error") {
        next();
        return;
      }
      action
        .detailPerson(store)
        .then(res => {
          if (res.code == "0000") {
            // 正常用户
            discInfo().then(() => {
              if (res.data.role_id == 1) {
                // 管理员
                if (to.path == "/login") {
                  next("/user/list");
                } else {
                  let isNext = false;
                  for (let item of router.options.routes) {
                    if (item.path == to.path && to.path.indexOf("/user") == 0) {
                      isNext = true;
                    }
                  }
                  if (isNext) {
                    next();
                  } else {
                    next("/user/list");
                  }
                }
              } else if (
                res.data.role_id == 2 ||
                res.data.role_id == 5 ||
                res.data.role_id == 6
              ) {
                // PM 或 面试官
                let isNext = false;
                for (let item of router.options.routes) {
                  if (
                    item.path == to.path &&
                    to.path.indexOf("/interviewer") == 0
                  ) {
                    isNext = true;
                  }
                }
                if (isNext) {
                  next();
                } else {
                  next("/interviewer/index");
                }
              } else if (res.data.role_id == 3) {
                let isNext = false;
                for (let item of router.options.routes) {
                  if (item.path == to.path && to.path.indexOf("/hr") == 0) {
                    isNext = true;
                  }
                }
                if (isNext) {
                  next();
                } else {
                  next("/hr/index");
                }
              } else {
                // 跳到我的错误页
                // const href = `http://10.98.75.10:8090/osms-api/auth/authRequestTest.do?url=${window.location.href}`;
                // alert('登陆没有角色'+href);
                window.location.href = profile.BASE_URL;
                next("/error?errorMsg=" + res.msg);
              }
            });
          } else if (res.code == "9002") {
            // 没授权 跳到授权页
            next("/error?errorMsg=" + res.msg);
          } else if (res.code == "9001") {
            // 未登陆 登陆页
            localStorage.removeItem("osms-token");
            if (to.path == "/login") {
              next();
            } else {
              // const encode= encodeURIComponent(window.location.href);
              // const href = `http://10.98.75.201:8090/osms-api/auth/authRequest.do?url=${encode}`;
              // alert('router未登陆',href);
              window.location.href = profile.BASE_URL;
            }
          }
        })
        .catch(() => {
          next();
        });
    } else {
      discInfo().then(() => {
        if (store.state.base.userDetail.role_id == 1) {
          if (to.path == "/login") {
            next("/user/list");
          } else {
            let isNext = false;
            for (let item of router.options.routes) {
              if (item.path == to.path && to.path.indexOf("/user") == 0) {
                isNext = true;
              }
            }
            if (isNext) {
              next();
            } else {
              next("/user/list");
            }
            //next();
          }
        } else if (
          store.state.base.userDetail.role_id == 2 ||
          store.state.base.userDetail.role_id == 5 ||
          store.state.base.userDetail.role_id == 6
        ) {
          let isNext = false;
          for (let item of router.options.routes) {
            if (item.path == to.path && to.path.indexOf("/interviewer") == 0) {
              isNext = true;
            }
          }
          if (isNext) {
            next();
          } else {
            next("/interviewer/index");
          }
        } else if (store.state.base.userDetail.role_id == 3) {
          let isNext = false;
          for (let item of router.options.routes) {
            if (item.path == to.path && to.path.indexOf("/hr") == 0) {
              isNext = true;
            }
          }
          if (isNext) {
            next();
          } else {
            next("/hr/index");
          }
        }
      });
    }
  } else {
    if (to.path == "/login" || to.path == "/") {
      action
        .detailPerson(store)
        .then(res => {
          if (
            res.data.role_id == 2 ||
            res.data.role_id == 5 ||
            res.data.role_id == 6
          ) {
            // 面试官
            next("/interviewer/index");
          } else if (res.data.role_id == 3) {
            // HR
            next("/hr/index");
          } else if (res.data.role_id == 1) {
            // guan li y
            next("/user/list");
          }
        })
        .catch(() => {});
      next();
    } else if (store.state.base.positionData.length === 0) {
      Promise.resolve()
        .then(() => {
          return action.dictionaryList(store);
        })
        .then(() => {
          return action.deptList(store);
        })
        .then(() => {
          return action.roleList(store);
        })
        .then(() => {
          return action.supplierList(store);
        })
        .then(() => {
          return action.customDect(store);
        })
        .then(() => {
          return action.detailPerson(store);
        })
        .then(() => {
          return action.getJobData(store);
        })
        .then(() => {
          return action.getAllJobData(store);
        })
        .then(() => {
          return action.getRqmtJobData(store);
        })
        .then(() => {
          return action.getPostTypeList(store);
        })
        .then(() => {
          return action.workplace(store);
        })
        .then(() => {
          if (
            store.state.base.userDetail.role_id == 2 ||
            store.state.base.userDetail.role_id == 5 ||
            store.state.base.userDetail.role_id == 6
          ) {
            // action.requireWorkplace(store);
            // console.log('pm 面试官 能力中心');
            return action.getInterviewProjectList(store);
          }
          return null;
        })
        .finally(() => {
          next();
        });
    } else {
      next();
    }
  }
  //}
  // 初始化数据
  // next();
});

// 拦截器 接口请求前 token处理
axios.interceptors.request.use(
  // config => {
  //   if (config.url != '/osms-api/common/user/detail') {
  //     action.detailPerson(store)
  //       .then(() => {

  //       })
  //   }
  //   return config;
  // },
  // err => {
  //  return Promise.reject(err);
  // }
  config => {
    // if (config.url.indexOf('login') > 1) {
    //   return config;
    // } else {
    //   if (!sessionStorage.getItem('osms-token')) {
    //       router.replace('/login');
    //   } else {
    //       config.headers['token'] = sessionStorage.getItem('osms-token');
    //   }
    // }
    //alert(localStorage.getItem('osms-token'));
    config.headers["osms-token"] = localStorage.getItem("osms-token");
    config.headers["Cache-Control"] = "no-cache";
    config.headers["Pragma"] = "no-cache";
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 拦截器 数据返回前
axios.interceptors.response.use(
  response => {
    // router.replace('http://www.baidu.com')
    if (profile.IDM) {
      if (response.data.code == "9001") {
        // 没登陆
        setTimeout(function() {
          if (router.currentRoute.path == "/login") {
            // router.replace('/login');
          } else if (store.state.base.userDetail.role_id == 1) {
            if (router.currentRoute.path != "/login") {
              router.replace("/login");
            }
          } else {
            // const encode= encodeURIComponent(window.location.href);
            // const href = `http://10.98.75.201:8090/osms-api/auth/authRequest.do?url=${encode}`;
            // alert('接口认证'+href);
            window.location.href = profile.BASE_URL;
          }
        });
      } else if (response.data.code == "9002") {
        // 没授权
        router.replace("/error");
      }
    } else {
      if (!isAuth(response.data.code)) {
        router.replace("/login");
      }
    }

    return response;
  },
  err => {
    return Promise.reject(err);
  }
);
