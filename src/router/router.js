import { createRouter, createWebHistory } from "vue-router"
import PageLayout from "../pages/PageLayout.vue"
import Home from "../pages/Home.vue"
import Shop from "../pages/Shop.vue"
import Product from "../pages/Product.vue"
import SignIn from "../pages/SignIn.vue"
import SignUp from "../pages/SignUp.vue"
import Settings from "../pages/Settings.vue"
import Dashboard from "../pages/admin/Dashboard.vue"
import Users from "../pages/admin/Users.vue"
import Products from "../pages/admin/Products.vue"
import AddProduct from "../pages/admin/AddProduct.vue"
const routes = [
    {
        path: '/',
        component: PageLayout,
        children: [
            { path: '/', component: Home },
            { path: '/products', component: Shop },
            { path: '/products/:id',name: 'product-details', component: Product },
            { path: '/settings/:id',name: 'user-settings', component: Settings }
        ]
    },
    {path: '/sign-in', component: SignIn},
    {path: '/sign-up', component: SignUp},
    {
        path: '/dashboard',
        component: Dashboard,
        children: [
            { path: 'users', component: Users},
            { path: 'products', component: Products},
            { path: 'products/add', component: AddProduct},
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;