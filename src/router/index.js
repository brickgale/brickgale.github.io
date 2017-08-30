import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import About from '../components/About.vue'
import AboutSkills from '../components/About/Skills.vue'
import AboutProfile from '../components/About/Profile.vue'
import AboutMisc from '../components/About/Misc.vue'
import Projects from '../components/Projects.vue'
import Blog from '../components/Blog.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(Router)

export default new Router({
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
	      	name: 'about',
	      	component: About,
          children: [
            {
              path: '',
              name: 'about-profile',
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
