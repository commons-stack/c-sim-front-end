import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { appConfig } from '../main.config'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ?? appConfig.title
  next()
})
