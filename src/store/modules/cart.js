import {ref} from "vue";
import axios from "../../plugins/axios"
const state = () => ({
  items: [
    { id: 1, quantity: 3},
    { id: 15, quantity: 5},
    { id: 24, quantity: 6},
    { id: 11, quantity: 3},
  ]
});
const getters = {
  getCartProducts: (state) => {
    const products = ref({});
    axios
        .get("items",{params: {ids: state.items.map(({id}) => { return id; })}})
        .then((response) => {
          products.value = response.data;
        })
        .catch(errors => console.log(errors));
    return products;
  }
};
const mutations = {
  setCartItem(state, payload) {
    state.items = payload.items
  },
};
const actions = {
  checkout({commit},payload) {
    commit('setCartItem',{items: []});
    const data = {
      user_id: 5,
      items: payload.products.map((product) => {
        return {
          item_id: product.id,
          quantity: product.quantity
        }
      })
    };
    axios
      .post("orders",data)
      .then((response) => {
        console.log(response.data)
      })
      .catch(errors => console.log(errors))
  }
};
export default {
  state,
  getters,
  mutations,
  actions
}