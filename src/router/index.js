import { createRouter, createWebHistory } from 'vue-router'

import { useAuthenticationStore } from '@/stores/authentication'

import ApplicationForms from '../components/ApplicationForms.vue'
import ThankApply from '../views/ThankApply.vue'
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
    path: '/thank-you-for-applying',
    name: 'thank',
    component: ThankApply
  },
  {
    path: '/applications',
    name: 'applications',
    component: ApplicationsView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: LoginView,
        meta: {
          bannedAuth: true
        }
      },
      {
        path: 'register',
        name: 'auth.register',
        component: RegisterView,
        meta: {
          bannedAuth: true
        }
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
        meta: {
          requiresAuth: true
        }
      },
      {
        path: ':id/edit',
        name: 'application.edit',
        component: ApplicationForms,
        props: true,
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

router.beforeEach((to) => {
  const { isLoggedIn } = useAuthenticationStore()
  if (!isLoggedIn() && to.meta.requiresAuth) return false
})

export default router
