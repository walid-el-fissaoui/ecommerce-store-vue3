<template>
  <div class="main-container py-28">
    <div class="filter-controls">
      <ul>
        <li
          class="filter"
          :class="isActive === 1 ? 'active' : ''"
          @click="activate(1)"
        >
          New Arrivals
        </li>
        <li
          class="filter"
          :class="isActive === 2 ? 'active' : ''"
          @click="activate(2)"
        >
          Best Sales
        </li>
        <li
          class="filter"
          :class="isActive === 3 ? 'active' : ''"
          @click="activate(3)"
        >
          Top Rated
        </li>
      </ul>
    </div>
    <div class="products-container">
      <transition-group name="list">
        <product-card v-for="product in products" :key="product.id">
          <template #image>
            <img :src="product.image" alt="product-image" />
          </template>
          <template #title>
            {{ product.title }} {{product.id}}
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
      </transition-group>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import data from "../../assets/dummy data/FilteredProducts.js";
import { ref } from "vue";
export default {
  components: { ProductCard },
  setup() {
    const isActive = ref(1);
    const products = ref(data.filter((item) => item.group === (isActive.value == 1 ? 'new' : isActive.value == 2 ? 'best' : 'top')));
    function activate(index) {
      isActive.value = index;
      products.value = data;
      products.value = products.value.filter((item) => item.group === (index == 1 ? 'new' : index == 2 ? 'best' : 'top'));
    }
    return { isActive, activate, products };
  },
};
</script>

<style>
.filter-controls {
  @apply flex w-8/12 mx-auto mb-10;
}
.filter-controls ul {
  @apply flex flex-wrap justify-center w-full text-center;
}
.filter-controls ul li.filter {
  @apply w-full text-2xl py-2 font-bold capitalize text-custom-color-3 cursor-pointer;
}
@screen md {
  .filter-controls ul li.filter {
    @apply w-6/12;
  }
}
@screen lg {
  .filter-controls ul li.filter {
    @apply w-4/12;
  }
}
.filter-controls ul li.filter.active {
  @apply text-black;
}
.products-container {
  @apply flex flex-wrap justify-center w-full;
}
.products-container .product-card {
  @apply w-full text-center px-8 mb-10;
}
@screen sm {
  .products-container .product-card {
    @apply w-6/12;
  }
}
@screen md {
  .products-container .product-card {
    @apply w-6/12;
  }
}
@screen lg {
  .products-container .product-card {
    @apply w-4/12 px-4;
  }
}
@screen xl {
  .products-container .product-card {
    @apply w-3/12;
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>