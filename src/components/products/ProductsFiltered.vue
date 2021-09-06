<template>
  <div class="main-container py-28">
    <div class="filter-controls">
      <ul>
        <li class="filter" :class="isActive === 1 ? 'active' : ''" @click="activate(1)">New Arrivals</li>
        <li class="filter" :class="isActive === 2 ? 'active' : ''" @click="activate(2)">Best Sales</li>
        <li class="filter" :class="isActive === 3 ? 'active' : ''" @click="activate(3)">Top Rated</li>
      </ul>
    </div>
    <div class="products-container">
      <new-arrival-products v-if="isActive === 1" />
      <best-sales-products  v-if="isActive === 2" />
      <top-rated-products   v-if="isActive === 3" />
    </div>
  </div>
</template>

<script>
import NewArrivalProducts from "./NewArrivalProducts.vue";
import BestSalesProducts from "./BestSalesProducts.vue";
import TopRatedProducts from "./TopRatedProducts.vue";
import {ref} from "vue";
export default {
  components: { NewArrivalProducts,BestSalesProducts,TopRatedProducts },
  setup() {
    const isActive = ref(1);
    function activate(index) {
      isActive.value = index;
    }
    return {isActive,activate}
  }
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
</style>