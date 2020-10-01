import Home from '@/views/home/Home.vue'
import Test from '@/views/Test.vue'
import Example from '@/views/examples/Examples.vue'

const mapMeta = metaObject => route => {
  const currentMeta = route.meta || {}
  route.meta = {
    ...currentMeta,
    ...metaObject,
  }
  return route
}

// routes.map(mapMeta(metaObject))
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/examples',
    name: 'Examples',
    component: Example,
    meta: {
      title: 'Examples',
    },
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      title: 'Test',
    },
  },
].map(mapMeta({ prop: true }))
