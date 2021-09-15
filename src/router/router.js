import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import Shop from "../pages/Shop.vue"
import Product from "../pages/Product.vue"
import SignIn from "../pages/SignIn.vue"
const routes = [
    {path: '/', component: Home},
    {path: '/shop', component: Shop},
    {path: '/products/:id', component: Product},
    {path: '/sign-in', component: SignIn},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;