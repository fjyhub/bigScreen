import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import compoments from './components/index'
import '@/utils/echarts-theme.js' // echarts主题
import '@/static/style/index.less'
import '@/static/style/flex.less'
import '@/static/style/mp.less'
import '@/static/style/element.less'
import '@/static/style/animate.less'
import dataV from '@jiaminghi/data-view'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css'

Vue.config.productionTip = false
Vue.use(compoments)
  .use(dataV)
  .use(ElementUI)
  .use(animated)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
