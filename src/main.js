import Vue from 'vue'
import App from './App'
//引入uview组件
import uView from "uview-ui";

Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
