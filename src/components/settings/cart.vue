<template>
<h1 v-for="item in products" :key="item.id">{{item.quantity}}</h1>
  <Productcard v-for="num in 3" :key="num">
    <template #product-image>
      <img src="https://via.placeholder.com/360x360.png/00ee11?text=animals+repellendus" alt="product-image" />
    </template>
    <template #product-title>
      lorem ipsums
    </template>
    <template #product-price>
      12.2$
    </template>
    <template #product-quantity>
      4
    </template>
    <template #product-colors>
      <li style="background-color: red"></li>
      <li style="background-color: green"></li>
      <li style="background-color: yellow"></li>
    </template>
  </Productcard>
  <div class="flex justify-between items-center">
    <button class="btn btn-black">Checkout</button>
    <p>Total: <span class="font-bold">$300</span></p>
  </div>
</template>

<script>
// import { onMounted, ref } from '@vue/runtime-core';
// import {useStore} from "vuex";
// import axios from "../../plugins/axios";
// import Productcard from "../products/ProductCartCard.vue" ;
// export default {
//   components: {Productcard},
//   setup() {
//     const store = useStore();
//     const products = ref({});
//     onMounted(()=> {
//       const itemsIds = store.state.cart.items.map(({id}) => {return id})
//       axios
//         .get("cart",{params: {ids: itemsIds}})
//         .then((response) => {
//           products.value = response.data
//           products.value = products.value.map((item) => {
//             const product = store.state.cart.items.find((element) => element.id === item.id)
//             return {
//               id: item.id,
//               title: item.title,
//               price: item.price,
//               image: item.image,
//               quantity: product.quantity,
//               colors: product.colors,
//               sizes: product.sizes
//             }
//           })
//         })
//         .catch(errors => console.log(errors))
//     })
//     return {products}
//   }
// };
import {ref} from "vue";
import {useStore} from "vuex";
import Productcard from "../products/ProductCartCard.vue" ;
export default {
  components: {Productcard},
  setup() {
    const store = useStore();
    const products = ref(store.getters.cartProducts);
    return {products}
  }
}
</script>

<style>
</style>