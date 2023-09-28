import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import About from '../components/About.vue'
import Header from '../components/Header.vue'

const routes = [
    {name: 'Login', path: '/Login', component: Login},
    {name: 'Home', path: '/', components: {
        default: Home,
        topNav: Header
    }},
    {name: 'About', path: '/About', components: {
        default: About,
        topNav: Header
    }},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;