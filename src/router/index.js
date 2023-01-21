import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EditView from '@/views/EditView.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditView
    },
    {
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: NotFound,
		},
  ]
})

export default router
