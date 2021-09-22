import axios from "../../plugins/axios";
import {ref} from "vue";
const state = () => ({
    cart: [1,3,5],
    items: [
        {id:1,quantity:3,colors: [1,2],sizes: [1,3]},
        {id:2,quantity:3,colors: [1,2],sizes: [1,3]},
        {id:3,quantity:3,colors: [1,2],sizes: [1,3]},
    ]
});
const getters = {
    cartProducts: (state) => { 
        const products = ref({});
        const itemsIds = state.items.map(({id}) => {return id})
        axios
            .get("cart",{params: {ids: itemsIds}})
            .then((response) => {
                products.value = response.data;
                products.value = products.value.map((item) => {
                    const product = state.items.find((element) => element.id === item.id)
                    return {
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        image: item.image,
                        quantity: product.quantity,
                        colors: product.colors,
                        sizes: product.sizes
                    }
                })
            })
            .catch(errors => console.log(errors))
        return products;
    }
}
const mutations = {
    setCartItem(state,payload) {
        state.cart.push(payload.id)
    },
};
const actions = {

};
export default {
    state,
    getters,
    mutations,
    actions
}