import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from '@/stores';
import { TableData, LoginView, FormData, Detail } from '@/views';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', name: "data", component: TableData },
        { path: '/login', component: LoginView },
        {path: "/create", name: "create-data", component: FormData},
        {path: "/detail/:id", name: "detail", component: Detail, props: true},
        {path: "/:id/edit", name: "edit", component: FormData, props: true}
    ]
});

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
});
