<template>
<!-- <h1 >{{item.quantity}}</h1> -->
  <Productcard v-for="item in products" :key="item.id">
    <template #product-image>
      <img :src="item.image" alt="product-image" />
    </template>
    <template #product-title>
      {{item.title}}
    </template>
    <template #product-price>
      {{item.price}}$
    </template>
    <template #product-quantity>
      {{item.quantity}}
    </template>
    <template #product-colors>
      <li v-for="color in item.colors" :key="color.id" style="background-color: red">{{color.color_hex}}</li>
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

// import {ref} from "vue";
// // import {useStore} from "vuex";
// import axios from "../../plugins/axios";
// import Productcard from "../products/ProductCartCard.vue" ;
// export default {
//   components: {Productcard},
//   setup() {
//     // const store = useStore();
//     const products = ref({});
//     const data = {
//         items: [1,2,3],
//         colors: [1,2,3],
//         sizes: [1,2,3]
//     }
//     axios.get("cart", {params: data})
//       .then((response) => {
//         console.log(response)
//       })
//       .catch(errors => console.log(errors))
//     return {products}
//   }
// }
</script>

<style>
</style>