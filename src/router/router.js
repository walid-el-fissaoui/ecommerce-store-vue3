import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import Shop from "../pages/Shop.vue"
const routes = [
    {path: '/', component: Home},
    {path: '/shop', component: Shop},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;