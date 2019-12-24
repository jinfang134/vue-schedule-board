import Vue from 'vue'
import App from './App.vue'
import SchedulerBoard from '../../index.js'

// import SchedulerBoard from 'vue-schedule-board'

Vue.config.productionTip = false

Vue.use(SchedulerBoard)

new Vue({
  render: h => h(App),
}).$mount('#app')
