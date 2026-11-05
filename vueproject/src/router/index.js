import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '@/views/RegistrationView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/register',
        name: 'RegistrationView',
        component: RegistrationView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router