import { createRouter, createWebHistory } from "vue-router"
import PageLayout from "../pages/PageLayout.vue"
import Home from "../pages/Home.vue"
import Shop from "../pages/Shop.vue"
import Product from "../pages/Product.vue"
import SignIn from "../pages/SignIn.vue"
import SignUp from "../pages/SignUp.vue"
const routes = [
    {
        path: '/',
        component: PageLayout,
        children: [
            { path: '/', component: Home },
            { path: '/shop', component: Shop },
            { path: '/products/:id', component: Product }
        ]
    },
    {path: '/sign-in', component: SignIn},
    {path: '/sign-up', component: SignUp},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;