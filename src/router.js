import Vue from 'vue'
import Router from 'vue-router'

// Views
import ViewOverview from '@/views/Overview'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/',
      redirect: '/overview'
    },
    {
      name: 'Overview',
      path: '/overview',
      component: () => import('./views/Overview.vue'),
      meta: {
        title: '概述'
      }
    },
    {
      name: 'Projects',
      path: '/projects',
      component: () => import('./views/Projects.vue'),
      meta: {
        title: '项目'
      }
    },
    {
      name: 'Images',
      path: '/images',
      component: () => import('./views/Images.vue'),
      meta: {
        title: '镜像'
      }
    },
    {
      name: 'Containers',
      path: '/containers',
      component: () => import('./views/Containers.vue'),
      meta: {
        title: '容器'
      }
    }
  ]
})
