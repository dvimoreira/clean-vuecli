import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { LayoutPlugin } from 'bootstrap-vue'

// Import and mounted components customns
import allComponents from './components'

Vue.config.productionTip = false

for (var item of allComponents) {
  Vue.component(item.name, item.component)
}

Vue.use(Buefy)
Vue.use(LayoutPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
