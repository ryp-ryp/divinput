import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Message } from 'element-ui'
import axios from 'axios'
import cors from 'cors'
// 挂载到$message上
Vue.prototype.$message = Message
// Vue.prototype.$bus = new Vue()
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(cors)
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){                 //在初始化阶段前
    Vue.prototype.$bus = this   //配置全局总线，bus有总线的意思
  }
}).$mount('#app')
