import { createRouter, createWebHistory } from 'vue-router'
import CrudView from '../views/CrudView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'crud',
      component: CrudView
    },
    {
      path: '/new',
      name: 'add',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddView.vue')
    },
  ]
})

export default router
