import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
//import {config} from './config'

const axiosConfig = {
    timeout: 3000,
};

Vue.config.productionTip = false;
Vue.prototype.$http = axios.create(axiosConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');