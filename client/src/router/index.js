import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/',
			name: 'painting',
			meta: {
			    isNeedAuth: true,
			    title: '人气推荐'
			},
			component: resolve => require(['@/components/HelloWorld.vue'], resolve),
    },
		{
			path: '/login',
			name: 'login',
			meta: {
			    isNeedAuth: true,
			    title: '人气推荐'
			},
			component: resolve => require(['@/components/login.vue'], resolve),
		},
		{
			path: '/register',
			name: 'register',
			meta: {
			    isNeedAuth: true,
			    title: '人气推荐'
			},
			component: resolve => require(['@/components/register.vue'], resolve),
		},
  ]
})
