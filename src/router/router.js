import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import Shop from "../pages/Shop.vue"
import Product from "../pages/Product.vue"
const routes = [
    {path: '/', component: Home},
    {path: '/shop', component: Shop},
    {path: '/products/:id', component: Product},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;