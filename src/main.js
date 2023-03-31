import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import uView from 'uview-ui'

Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'
App.mpType = 'app'

const app = new Vue({
  ...App
})
// console.log(app)
app.$mount()
