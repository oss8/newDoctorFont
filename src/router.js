import Vue from 'vue'
import Router from 'vue-router'
import {
  MyInfo,
  FrindDetail,
  HealthReport,
  HistoryData,
  MyFriends,
  ItemDetail,
  QRCode,
  SickHistory,
  Modify
} from '@/pages'

Vue.use(Router)

var router = new Router({
  routes: [{
    path: '/',
    name: 'Modify',
    component: SickHistory,
    meta: {
      anonymous: true,
      title: '壹向加盟商'
    }
  }]
})

// 检查是否已登录
// router.beforeEach((to, from, next) => {
//   setDocumentTitle(to.meta.title || '壹向·加盟商')
//   // 路由不需要登录
//   if (to.matched.every(record => record.meta.anonymous)) {
//     next()
//     return
//   }

//   // 已经登录
//   if (router.app.$auth.checkLoggedIn()) {
//     next()
//     return
//   }

//   // 未登录过
//   next({
//     path: '/login',
//     query: {
//       redirect: to.fullPath
//     }
//   })
// })

/**
 * 兼容微信设置页面的title
 */
let setDocumentTitle = function (title) {
  document.title = title
  let ua = navigator.userAgent
  if (/\bMicroMessenger\/([\d\.]+)/.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
    var i = document.createElement('iframe')
    i.src = '/favicon.ico'
    i.style.display = 'none'
    i.onload = function () {
      setTimeout(function () {
        i.remove()
      }, 9)
    }
    document.body.appendChild(i)
  }
}
export default router
