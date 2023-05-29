import { createRouter, createWebHistory } from 'vue-router'
import useAuthUser from "@/composables/useAuthUser";
import ApplicationForms from '../components/ApplicationForms.vue'
import ApplicationsView from '../views/ApplicationsView.vue'
import ApplicationView from '../views/ApplicationView.vue'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'
import EmailConfirmation from '../views/EmailConfirmation.vue'

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
    meta: {
      requiresAuth: true,
    },
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
    name: "Logout",
    path: "/logout",
    beforeEnter: async () => {
      const { logout } = useAuthUser();
      await logout();
      return { name: "form" };
    },
  },
  {
    name: "EmailConfirmation",
    path: "/email-confirmation",
    component: EmailConfirmation,
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
          requiresAuth: true,
        },
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
  const { isLoggedIn } = useAuthUser();
  if (
    !isLoggedIn() &&
    to.meta.requiresAuth &&
    !Object.keys(to.query).includes("fromEmail")
  ) {
    return { name: "Login" };
  }
});

export default router
