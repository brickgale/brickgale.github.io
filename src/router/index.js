import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import About from '../components/About.vue'
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
      name: 'home',
      component: Main,
      children: [
      	{
      		path: '',
	      	name: 'about',
	      	component: About
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
