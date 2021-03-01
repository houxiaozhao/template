// Vue
import Vue from 'vue'
import i18n from './i18n'
import App from './App'
// 核心插件
import d2Admin from '@/plugin/d2admin'

import dataV from '@jiaminghi/data-view'

// store
import store from '@/store/index'
import filters from '@/filters'
import directives from '@/directives'
// 菜单和路由设置
import router from './router'
import { menuHeader, menuAside } from '@/menu'
import { frameInRoutes } from '@/router/routes'
import '@/assets/main.css'
import Print from '@/libs/print'
// 过滤器
Object.keys(filters).forEach(name => {
  Vue.filter(name, filters[name])
})
// 指令
Object.keys(directives).forEach(name => {
  Vue.directive(name, directives[name])
})
Vue.use(Print) // 注册
Vue.use(dataV)
Vue.use(d2Admin)

Vue.prototype.$EventBus = new Vue()
Vue.prototype.VUE_APP_API = process.env.VUE_APP_API

AMap.plugin('AMap.MoveAnimation')
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  created () {
    // 处理路由 得到每一级的路由设置
    this.$store.commit('d2admin/page/init', frameInRoutes)
    // 设置顶栏菜单
    this.$store.commit('d2admin/menu/headerSet', menuHeader)
    // 设置侧边栏菜单
    this.$store.commit('d2admin/menu/asideSet', menuAside)
    // 初始化菜单搜索功能
    this.$store.commit('d2admin/search/init', menuHeader)
  },
  mounted () {
    // 展示系统信息
    this.$store.commit('d2admin/releases/versionShow')
    // 用户登录后从数据库加载一系列的设置
    this.$store.dispatch('d2admin/account/load')
    // 获取并记录用户 UA
    this.$store.commit('d2admin/ua/get')
    // 初始化全屏监听
    this.$store.dispatch('d2admin/fullscreen/listen')
  }
}).$mount('#app')
