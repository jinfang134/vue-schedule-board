import Vue from 'vue'
import App from './App.vue'
import SchedulerBoard from '../../index.js'
// import SchedulerBoard from 'vue-schedule-board'

// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(SchedulerBoard)

new Vue({
  render: h => h(App),
}).$mount('#app')
