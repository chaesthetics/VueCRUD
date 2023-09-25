import { createRouter, createWebHistory } from 'vue-router'
import CrudView from '../views/CrudView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'crud',
      component: CrudView,
      props: true,
    },
    {
      path: '/new',
      name: 'add',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddView.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      props: true,

      component: () => import('../views/AddView.vue')
    },
  ]
})

export default router
