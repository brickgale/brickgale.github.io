import type { RouteRecordRaw } from 'vue-router'
import Main from '@/app/pages/main/index.vue'
import About from '@/app/pages/about/index.vue'
import AboutProfile from '@/app/pages/about/profile/index.vue'
import AboutSkills from '@/app/pages/about/skills/index.vue'
import AboutMisc from '@/app/pages/about/misc/index.vue'
import Projects from '@/app/pages/projects/index.vue'
import Blog from '@/app/pages/blog/index.vue'
// import NotFound from '../components/NotFound.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/brickgale',
  },
  {
    path: '/brickgale',
    component: Main,
    children: [
      {
        path: '',
        name: 'home',
        redirect: '/brickgale/about',
      },
      {
        path: 'projects',
        name: 'projects',
        component: Projects,
      },
      {
        path: 'blog',
        name: 'blog',
        component: Blog,
      },
      {
        path: 'about',
        component: About,
        children: [
          {
            path: '',
            name: 'about',
            component: AboutProfile,
          },
          {
            path: 'skills',
            name: 'about-skills',
            component: AboutSkills,
          },
          {
            path: 'misc',
            name: 'about-misc',
            component: AboutMisc,
          },
        ],
      },
    ],
  },
]

export default routes
