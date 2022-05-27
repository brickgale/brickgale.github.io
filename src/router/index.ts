import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/components/pages/main/index.vue'
import About from '@/components/pages/about/index.vue'
import AboutProfile from '@/components/pages/about/profile/index.vue'
import AboutSkills from '@/components/pages/about/skills/index.vue'
import AboutMisc from '@/components/pages/about/misc/index.vue'
import Projects from '@/components/pages/projects/index.vue'
import Blog from '@/components/pages/blog/index.vue'
// import NotFound from '../components/NotFound.vue'

const routes = [
    {
        path: '/',
        redirect: '/brickgale'
    },
    {
        name: 'home',
        path: '/brickgale',
        component: Main,
        children: [
            {
                path: '',
                redirect: '/brickgale/about'
            },
            {
                path: 'projects',
                name: 'projects',
                component: Projects
            },
            {
                path: 'blog',
                name: 'blog',
                component: Blog
            },
            {
                path: 'about',
                component: About,
                children: [
                    {
                        path: '',
                        name: 'about',
                        component: AboutProfile
                    },
                    {
                        path: 'skills',
                        name: 'about-skills',
                        component: AboutSkills
                    },
                    {
                        path: 'misc',
                        name: 'about-misc',
                        component: AboutMisc
                    }
                ]
            }   
        ]
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})
