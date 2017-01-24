import Vue from 'vue' // 导入vue
import VueRouter from 'vue-router' // 导入vue 路由
import vueResource from 'vue-resource' // 导入vue http请求模块
import Vuex from 'vuex' // 导入vue状态管理模块

// 引入静态资源
require('./assets/css/animate.css')
require('./assets/css/style.css')

// 引入组件
import App from './App'
import BasicInfo from './components/BasicInfo'
import ForecastInfo from './components/ForecastInfo'

// 定义vue路由/http请求/状态管理
Vue.use(VueRouter)
Vue.use(vueResource)
Vue.use(Vuex)

// Vuex默认数据
const store = new Vuex.Store({
  state: {
    defUrl: 'https://free-api.heweather.com/v5',
    key: 'd88adc07ebae43c481b1462ad4a5c086',
    forecast: null,
    now: null,
    hourly: null,
    suggestion: null,
    basic: null,
    city: null
  },
  mutations: {},
  getters: {},
  actions: {}
})

// Vue路由数据
const routes = [
  {
    path: '/',
    name: 'index',
    component: App,
    redirect: '/forecastInfo',
    children: [
      {
        path: 'basicInfo',
        component: BasicInfo
      }, {
        path: 'forecastInfo',
        component: ForecastInfo
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const routerApp = new Vue({
  router,
  store
}).$mount('#app')

// 导出路由
export default routerApp
