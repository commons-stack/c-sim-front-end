import Home from '@/views/home/Home.vue'
import Intro from '@/views/intro/Intro.vue'
import Level01 from '@/views/level0/Level0-1.vue'
import Level02 from '@/views/level0/Level0-2.vue'
import Level11 from '@/views/level1/Level1-1.vue'
import Level12 from '@/views/level1/Level1-2.vue'
import Level13 from '@/views/level1/Level1-3.vue'
import Level14 from '@/views/level1/Level1-4.vue'
import Level21 from '@/views/level2/Level2-1.vue'
import Level22 from '@/views/level2/Level2-2.vue'
import Level31 from '@/views/level3/Level3-1.vue'
import Level32 from '@/views/level3/Level3-2.vue'
import Level41 from '@/views/level4/Level4-1.vue'
import Level42 from '@/views/level4/Level4-2.vue'
import Level51 from '@/views/level5/Level5-1.vue'
import Level52 from '@/views/level5/Level5-2.vue'
import Level61 from '@/views/level6/Level6-1.vue'
import Level71 from '@/views/level7/Level7-1.vue'
import Outcome from '@/views/outcome/Outcome.vue'
import Results from '@/views/results/Results.vue'
import Submit from '@/views/submit/Submit.vue'

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/intro',
    component: Intro,
  },
  {
    path: '/level/0/1',
    component: Level01,
  },
  {
    path: '/level/0/2',
    component: Level02,
  },
  {
    path: '/level/1/1',
    component: Level11,
    meta: {
      title: 'Hatchers',
    },
  },
  {
    path: '/level/1/2',
    component: Level12,
    meta: {
      title: 'Hatchers',
    },
  },
  {
    path: '/level/1/3',
    component: Level13,
    meta: {
      title: 'Hatchers',
    },
  },
  {
    path: '/level/1/4',
    component: Level14,
    meta: {
      title: 'Hatchers',
    },
  },
  {
    path: '/level/2/1',
    component: Level21,
    meta: {
      title: 'Initial Proposals',
    },
  },
  {
    path: '/level/2/2',
    component: Level22,
    meta: {
      title: 'Initial Proposals',
    },
  },
  {
    path: '/level/3/1',
    component: Level31,
    meta: {
      title: 'Hatch Tribute',
    },
  },
  {
    path: '/level/3/2',
    component: Level32,
    meta: {
      title: 'Hatch Tribute',
    },
  },
  {
    path: '/level/4/1',
    component: Level41,
    meta: {
      title: 'Max Spending',
    },
  },
  {
    path: '/level/4/2',
    component: Level42,
    meta: {
      title: 'Max Spending',
    },
  },
  {
    path: '/level/5/1',
    component: Level51,
    meta: {
      title: 'Voting Speed',
    },
  },
  {
    path: '/level/5/2',
    component: Level52,
    meta: {
      title: 'Voting Speed',
    },
  },
  {
    path: '/level/6/1',
    component: Level61,
    meta: {
      title: 'Exit Tribute',
    },
  },
  {
    path: '/level/7/1',
    component: Level71,
    meta: {
      title: 'Run cadCAD',
    },
  },
  {
    path: '/results',
    component: Results,
    meta: {
      title: 'Results',
    },
  },
  {
    path: '/submit',
    component: Submit,
    meta: {
      title: 'Run cadCAD',
    },
  },
  {
    path: '/outcome',
    component: Outcome,
    meta: {
      title: 'Outcome',
    },
  },
]
