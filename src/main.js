import Vue from "vue"
import router from './router'
import store from './store'
import {i18n} from './plugins/i18n'
import FlagIcon from 'vue-flag-icon'

// styles
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/main.css"

// components
import App from "./App.vue"

Vue.config.productionTip = false;

Vue.use(element);
Vue.use(FlagIcon);

new Vue({
  router,
  store,
  i18n,
  "render": h => h(App),
}).$mount("#app");
