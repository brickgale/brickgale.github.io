import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import About from '../components/About.vue'
import AboutSkills from '../components/about/Skills.vue'
import AboutProfile from '../components/about/Profile.vue'
import AboutMisc from '../components/about/Misc.vue'
import Projects from '../components/Projects.vue'
import Blog from '../components/Blog.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
  	{
  		path: '/',
  		redirect: '/brickgale'
  	},
    {
      path: '/brickgale',
      component: Main,
      children: [
        {
          path: '',
          redirect: '/brickgale/about'
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
      ]
    },
    {
      path: '/not-found',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/not-found'
    },
  ]
})
