/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// BASE COMPONENTS
import SchedulerBoard from "./src/components/SchedulerBoard.vue"

/**************************************************************************
 * ENVIRONMENT CONFIGURATIONS
 ***************************************************************************/

SchedulerBoard.install = function (Vue) {
  Vue.component("scheduler-board", SchedulerBoard)
}

// install function executed by Vue.use()
function install(Vue, options) {
  if (install.installed) {
    return
  } else {
    install.installed = true
  }

  // Declare the component
  Vue.component("scheduler-board", SchedulerBoard)
}

// Create module definition for Vue.use()
const plugin = {
  install,
}

// To auto-install when vue is found
/* global window global */
let GlobalVue = null

if (typeof window !== "undefined") {
  GlobalVue = window.Vue
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

// Default export is library as a whole, registered via Vue.use()
export default plugin
