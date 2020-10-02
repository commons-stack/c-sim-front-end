import Home from '@/views/home/Home.vue'
import Intro from '@/views/intro/Intro.vue'
import Level01 from '@/views/level0/Level01.vue'
import Level02 from '@/views/level0/Level02.vue'
import Level11 from '@/views/level1/Level11.vue'
import Level12 from '@/views/level1/Level12.vue'
import Level13 from '@/views/level1/Level13.vue'
import Level21 from '@/views/level2/Level21.vue'
import Level22 from '@/views/level2/Level22.vue'
import Level23 from '@/views/level2/Level23.vue'
import Level31 from '@/views/level3/Level31.vue'
import Level32 from '@/views/level3/Level32.vue'
import Level41 from '@/views/level4/Level41.vue'
import Level42 from '@/views/level4/Level42.vue'
import Level51 from '@/views/level5/Level51.vue'
import Level52 from '@/views/level5/Level52.vue'
import Outcome from '@/views/outcome/Outcome.vue'
import Results from '@/views/results/Results.vue'
import Submit from '@/views/submit/Submit.vue'

// const mapMeta = metaObject => route => {
//   const currentMeta = route.meta || {}
//   route.meta = {
//     ...currentMeta,
//     ...metaObject,
//   }
//   return route
// }

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
    path: '/intro',
    name: 'Intro',
    component: Intro,
    meta: {
      title: 'Introduction',
    },
  },
  {
    path: '/level/0-1',
    name: 'Level01',
    component: Level01,
  },
  {
    path: '/level/0-2',
    name: 'Level02',
    component: Level02,
  },
  {
    path: '/level/1-1',
    name: 'Level11',
    component: Level11,
  },
  {
    path: '/level/1-2',
    name: 'Level12',
    component: Level12,
  },
  {
    path: '/level/1-3',
    name: 'Level13',
    component: Level13,
  },
  {
    path: '/level/2-1',
    name: 'Level21',
    component: Level21,
  },
  {
    path: '/level/2-2',
    name: 'Level22',
    component: Level22,
  },
  {
    path: '/level/2-3',
    name: 'Level23',
    component: Level23,
  },
  {
    path: '/level/3-1',
    name: 'Level31',
    component: Level31,
  },
  {
    path: '/level/3-2',
    name: 'Level32',
    component: Level32,
  },
  {
    path: '/level/4-1',
    name: 'Level41',
    component: Level41,
  },
  {
    path: '/level/4-2',
    name: 'Level42',
    component: Level42,
  },
  {
    path: '/level/5-1',
    name: 'Level51',
    component: Level51,
  },
  {
    path: '/level/5-2',
    name: 'Level52',
    component: Level52,
  },
  {
    path: '/results',
    name: 'Results',
    component: Results,
  },
  {
    path: '/submit',
    name: 'Submit',
    component: Submit,
  },
  {
    path: '/outcome',
    name: 'Outcome',
    component: Outcome,
  },
]
