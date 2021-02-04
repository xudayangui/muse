import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: () => import('@/layouts/index'),
		redirect: '/home',
		children: [
			{
				path: '/home',
				name: 'Home',
				component: Home,
				meta: { title: '首页', keepAlive: true },
			},
			{
				path: '/draw',
				name: 'Draw',
				component: () => import('../views/draw/index'),
				meta: { title: '开奖', keepAlive: true },
			},
			{
				path: '/find',
				name: 'Find',
				component: () => import('../views/find/index'),
				meta: { title: '快速游戏', keepAlive: true },
			},
			{
				path: '/exciting',
				name: 'Exciting',
				component: () => import('../views/exciting/index'),
				meta: { title: '活动', keepAlive: true },
			},
			{
				path: '/about',
				name: 'About',
				component: () => import('../views/about/index'),
				meta: { title: '我的', keepAlive: true },
			}
		]
	}
]

const router = new VueRouter({
  routes
})

export default router