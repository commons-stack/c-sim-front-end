import Vue from 'vue'
import VueRouter from 'vue-router'
import { appConfig } from '../main.config'
import { store } from '../store/store'
import { routes } from './routes'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ?? appConfig.title
  const is404 = !to.matched.length
  if (is404) {
    store.dispatch('NotificationModule/error', 'Uups, that route does not exist.')
    return next('/')
  }
  next()
})
