import { createStore } from 'vuex'
import auth from './modules/authentication'

const store = createStore({
    modules: {
        auth
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