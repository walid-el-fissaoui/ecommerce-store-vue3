import { createStore } from 'vuex'
import auth from './modules/authentication'
import cart from './modules/cart'

const store = createStore({
    modules: {
        auth,
        cart
    },
    state() {
        return {
            count: 1
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

export default store;