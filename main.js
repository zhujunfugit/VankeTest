// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import ElementUI from "element-ui";
import VueQuillEditor from "vue-quill-editor";
import axios from "axios";

axios.defaults.headers.common["token"] = "43904E2B10A4E1F655C6B63ACA61E261";
axios.defaults.headers["Accept"] = "*/*";

import "font-awesome/css/font-awesome.min.css";
import "element-ui/lib/theme-chalk/index.css";
import "@/app.less";
import "@/filter/index";
import "@/assets/styles/base.less";

import { formatDate } from "@/common/date.js";
import fromValidate from "@/common/fromValidate.js";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueQuillEditor);
Vue.prototype.$http = axios;
Vue.prototype.$fromValidate = fromValidate;
import router from "./router";
import store from "./store";
import App from "./App";
import CustomPagination from "./components/base/customPagination";
Vue.component("custom-pagination", CustomPagination);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
