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
        <button @click="decrement(item.id,item.quantity)">
          <i class="fas fa-minus"></i>
        </button>
        <span>{{item.quantity}}</span>
        <button @click="increment(item.id)">
          <i class="fas fa-plus"></i>
        </button>
      </template>
      <template #product-color>
        <span :style="'background-color:' + item.color"></span>
      </template>
      <template #product-size>
          {{item.size}}
      </template>
      <template #product-cancel>
        <button @click="removeFromCart(item.id)">
          <i class="far fa-times-circle"></i>
        </button>
      </template>
    </Productcard>
    <div class="flex justify-between items-center">
      <button class="btn btn-black" @click="checkout">Checkout</button>
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
        },0).toFixed(2)
      }
      else {
        return 0;
      }
    });

    function increment(id) {
      products.value.find(element => element.id === id).quantity++
    }

    function decrement(id,quantity) {
      if(quantity > 1)
      products.value.find(element => element.id === id).quantity--
    }

    function removeFromCart(id) {
      products.value = products.value.filter(element => element.id !== id)
    }

    function checkout() {
      // console.log("checkout");
      store.dispatch('checkout',{products: products.value})
    }
    return{products,totalPrice,loading,increment,decrement,removeFromCart,checkout}
  },
};
</script>

<style>
</style>