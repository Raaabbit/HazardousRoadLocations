import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fileanalysis',
      name: 'fileanalysis',
      component: () => import('./views/user/FileAnalysis.vue')
    },
    {
      path: '/citysearch',
      name: 'citysearch',
      component: () => import('./views/user/CitySearch.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('./views/user/Report.vue')
    },
    {
      path: '/dealreport',
      name: 'dealreport',
      component: () => import('./views/manager/Dealreport.vue')
    },
    {
      path: '/index.html/addbps',
      name: 'addbps',
      component: () => import('./views/manager/AddBps.vue')
    },
    {
      path: '/index.html/addmanager',
      name: 'addmanager',
      component: () => import('./views/manager/AddManager.vue')
    }

  ]
})
