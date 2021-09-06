<template>
  <product-card v-for="product in products" :key="product.id">
    <template #image>
      <img :src="product.image" alt="product-image" />
    </template>
    <template #title>
      {{ product.title }}
    </template>
    <template #price>
      {{ product.price }}
    </template>
    <template #colors>
      <li
        v-for="(color, index) in product.colors"
        :key="index"
        class="color"
        :class="'bg-' + color"
      ></li>
    </template>
  </product-card>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { ref } from "vue";
export default {
  components: { ProductCard },
  setup() {
    const products = ref([
      {
        id: "#0",
        image: "http://localhost:8080/img/product-image-1.7450203f.jpg",
        title: "Lorem, ipsum Best Sales.",
        price: "$13.3",
        colors: ["blue-400", "red-400", "green-400"],
        rating: "3",
      },
      {
        id: "#1",
        image: "http://localhost:8080/img/product-image-1.7450203f.jpg",
        title: "Lorem, ipsum Best Sales.",
        price: "$12.3",
        colors: ["blue-400", "pink-400", "purple-400"],
        rating: "3",
      },
      {
        id: "#2",
        image: "http://localhost:8080/img/product-image-1.7450203f.jpg",
        title: "Lorem, ipsum Best Sales.",
        price: "$14.3",
        colors: ["yellow-400", "red-400", "green-400"],
        rating: "3",
      },
    ]);
    return { products };
  },
};
</script>

<style>
</style>