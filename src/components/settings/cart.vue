<template>
  <div v-if="!loading">
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
      <template #product-sizes>
        <li v-for="size in item.sizes" :key="size.id">{{size.title}}</li>
      </template>
    </Productcard>
    <div class="flex justify-between items-center">
      <button class="btn btn-black">Checkout</button>
      <p>Total: <span class="font-bold">{{totalPrice}}$</span></p>
    </div>
  </div>
</template>

<script>
import {computed,ref} from "vue";
import {useStore} from "vuex";
import Productcard from "../products/ProductCartCard.vue";
export default {
  components: {
    Productcard,
  },
  setup() {
    const store = useStore();
    const products = ref(store.getters.getCartProducts);
    const loading = computed(() => {
      if(Array.isArray(products.value)) {
        return false;
      }
      else {
        return true
      }
    });
    const totalPrice = computed(()=>{
      if(loading.value === false) {
        return products.value.reduce((total,product) => {
          return total + product.price * product.quantity;
        },0)
      }
      else {
        return 0;
      }
    });
  
    function get() {
      console.log(totalPrice.value);
    }
    return {products,totalPrice,loading,get}
  },
};
</script>

<style>
</style>