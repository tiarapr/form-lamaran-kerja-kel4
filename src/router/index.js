import { createRouter, createWebHistory } from 'vue-router'
import ApplicationForms from '../components/ApplicationForms.vue'
import ApplicationsView from '../views/ApplicationsView.vue'
import ApplicationView from '../views/ApplicationView.vue'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'

const routes = [
  {
    path: '/',
    alias: '/form',
    name: 'form',
    component: ApplicationForms
  },
  {
    path: '/applications',
    name: 'applications',
    component: ApplicationsView,
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: LoginView
      },
      {
        path: 'register',
        name: 'auth.register',
        component: RegisterView
      }
    ]
  },
  {
    path: '/application',
    children: [
      {
        path: ':id',
        name: 'application.detail',
        component: ApplicationView,
        props: true,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
