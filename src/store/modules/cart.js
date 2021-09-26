import {ref} from "vue";
import axios from "../../plugins/axios"
const state = () => ({
  cart: [1, 3, 5],
  items: [
    { id: 1, quantity: 3, colors: [1, 2, 3], sizes: [1, 3] },
    { id: 2, quantity: 5, colors: [1, 2], sizes: [1, 3] },
    { id: 3, quantity: 6, colors: [1, 2], sizes: [1, 3] },
    { id: 5, quantity: 3, colors: [1, 2], sizes: [1, 3] },
  ]
});
const getters = {
  getCartProducts: (state) => {
    const products = ref({});
    const items = state.items;
    const colors = ref({});
    const sizes = ref({});
    axios
      .get("sizes/search", { params: { ids: [...new Set(items.map(({ sizes }) => { return sizes }).flat())] } })
      .then((response) => {
        sizes.value = response.data;
      })
      .catch(errors => console.log(errors))
    axios
      .get("colors/search", { params: { ids: [...new Set(items.map(({ colors }) => { return colors }).flat())] } })
      .then((response) => {
        colors.value = response.data
      })
      .catch(errors => console.log(errors))
    axios
      .get("search/cart", { params: { ids: items.map(({ id }) => { return id; }) } })
      .then((response) => {
        products.value = response.data;
        products.value = products.value.map((product) => {
          return {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: items.find((item) => item.id == product.id).quantity,
            colors: items.find((item) => item.id == product.id).colors.map((color) => {
              const element = colors.value.find((x) => x.id === color);
              return {
                id: element.id,
                color_hex: element.color_hex
              }
            }),
            sizes: items.find((item) => item.id == product.id).sizes.map((size) => {
              const element = sizes.value.find((x) => x.id === size);
              return {
                id: element.id,
                title: element.title
              }
            })
          }
        });
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
  checkout({commit,state},payload) {
    console.log(payload.products)
    console.log(state.items);
    commit('setCartItem',{items: []})
    console.log(state.items);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
}