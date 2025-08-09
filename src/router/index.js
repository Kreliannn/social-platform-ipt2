import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/guest',
            name: 'guest',
            component: import('@/layouts/GuestLayout.vue'),
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: import('@/views/guest/LoginView.vue'),
                },
                {
                    path: 'register',
                    name: 'register',
                    component: import('@/views/guest/RegisterView.vue'),
                },
            ],
        },
        {
            path: '/',
            name: 'dashboard',
            component: import('@/layouts/AppLayout.vue'),
            children: [
                {
                    path: '/',
                    name: 'feed',
                    component: import('@/views/authenticated/FeedView.vue'),
                },
                {
                    path: 'communities',
                    name: 'communities',
                    component: import('@/views/authenticated/CommunitiesView.vue'),
                },
                   {
                    path: 'assignment',
                    name: 'assignment',
                    component: import('@/views/authenticated/Assignment.view.vue'),
                },
                {
                    path: 'chat',
                    name: 'chat',
                    component: import('@/views/authenticated/Chat.view.vue'),
                },
                  {
                    path: 'profile',
                    name: 'profile',
                    component: import('@/views/authenticated/Profile.view.vue'),
                },
            ],
        },

        {
            path: '/page-not-found',
            name: 'page.not.found',
            component: import('@/views/errors/NoPageFound.vue'),
        },
    ],
})

export default router
