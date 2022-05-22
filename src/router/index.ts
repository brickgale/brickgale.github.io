import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../components/pages/main/index.vue'
import About from '../components/pages/about/index.vue'
// import AboutSkills from '../components/about/Skills.vue'
// import AboutProfile from '../components/about/Profile.vue'
// import AboutMisc from '../components/about/Misc.vue'
import Projects from '../components/pages/projects/index.vue'
import Blog from '../components/pages/blog/index.vue'
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
                name: 'about',
                component: About
            }   
        ]
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})
