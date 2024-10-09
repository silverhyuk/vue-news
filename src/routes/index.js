import { createWebHistory, createRouter } from 'vue-router'
import UserView from '@/views/UserView.vue'
import ItemView from '@/views/ItemView.vue'
import CreateListView from '@/views/CreateListView.js'

const routes = [
    {
        path: '/',
        redirect: '/news'
    },
    {
        path: '/news',
        name: 'news',
        component: CreateListView('NewsView')
    },
    {
        path: '/ask',
        name: 'ask',
        component: CreateListView('AskView')
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: CreateListView('JobsView')
    },
    {
        path: '/user/:id',
        name: 'user',
        component: UserView
    },
    {
        path: '/item/:id',
        name: 'item',
        component: ItemView
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;