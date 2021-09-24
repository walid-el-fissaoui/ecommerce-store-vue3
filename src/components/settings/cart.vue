<template>
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
      <li v-for="color in item.colors" :key="color.id" :style="'background-color:' + color.color_hex"></li>
    </template>
  </Productcard>
  <div class="flex justify-between items-center">
    <button class="btn btn-black">Checkout</button>
    <p>Total: <span class="font-bold">$300</span></p>
  </div>
</template>

<script>
import {useStore} from "vuex";
import Productcard from "../products/ProductCartCard.vue";
export default {
  components: {
    Productcard,
  },
  setup() {
    const store = useStore();
    const products = store.getters.getCartProducts;
    return {products}
  },
};
</script>

<style>
</style>