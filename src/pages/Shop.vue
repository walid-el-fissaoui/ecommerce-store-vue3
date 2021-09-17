<template>
  <main class="shop">
    <div class="breadcrumbs">
      <div class="main-container py-10">
        <div class="flex">
          <div class="breadcrumbs-content">
            <h1>Shop</h1>
            <div class="breadcrumbs-links">
              <a href="/index.html">Home</a>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shop-container">
      <div class="main-container py-24">
        <div class="flex flex-wrap">
          <div class="shop-sidebar">
            <div class="sidebar-search">
              <form>
                <input type="text" placeholder="Search..." />
                <button>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                      fill="#b7b7b7"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <div class="sidebar-accordion">
              <div class="panel">
                <div class="panel-header">
                  <button>categories</button>
                </div>
                <div class="panel-body">
                  <ul>
                    <li v-for="category in categories" :key="category.id">
                      <a @click="filterByCategory(category.id)"
                        >{{ category.name
                        }}<span> ({{ category.count }}) </span></a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="panel">
                <div class="panel-header">
                  <button>branding</button>
                </div>
                <div class="panel-body">
                  <ul>
                    <li v-for="brand in brands" :key="brand.id">
                      <a @click="filterByBrand(brand.id)"
                        >{{ brand.name }}<span> ({{ brand.count }}) </span></a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="shop-products">
            <div class="products-container">
              <product-card v-for="product in products.data" :key="product.id">
                <template #image>
                  <img
                    :src="product.image !== null ? product.image.url : ' '"
                    alt="product-image"
                  />
                </template>
                <template #title>
                  {{ product.title }} {{ product.id }}
                </template>
                <template #price>
                  {{ product.price }}
                </template>
                <template #colors>
                  <li
                    v-for="(color, index) in product.colors"
                    :key="index"
                    class="color"
                    :style="'background-color:' + color.hex_code"
                  ></li>
                </template>
              </product-card>
            </div>
            <div class="pagination-controls">
              <ul>
                <li
                  v-if="page !== 1"
                  @click="changePage(page - 1)"
                >
                  <i class="fas fa-chevron-left mr-2"></i>Prev
                </li>
                <li
                  v-for="num in totalPages"
                  :key="num"
                  class="number"
                  :class="[
                    num == page ? 'active' : '',
                    num !== 1 &&
                    num !== totalPages &&
                    num !== page &&
                    num !== page - 1 &&
                    num !== page + 1
                      ? 'hidden'
                      : 'flex',
                    num === page - 1 && num !== 1 && num !== 2 ? 'prev' : '',
                    num === page + 1 &&
                    num !== totalPages &&
                    num !== totalPages - 1
                      ? 'next'
                      : '',
                  ]"
                  @click="changePage(num)"
                >
                  <span>
                    {{ num }}
                  </span>
                </li>
                <li
                  v-if="page !== totalPages"
                  @click="changePage(page + 1)"
                >
                  Next<i class="fas fa-chevron-right ml-2"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProductCard from "../components/products/ProductCard.vue";
import { onMounted, ref } from "vue";
import axios from "../plugins/axios";
export default {
  components: { ProductCard },
  setup() {
    const page = ref(0);
    const products = ref({});
    // const categories = ref(data.categories);
    // const brands = ref(data.brands);
    const totalPages = ref(0);

    // function filterByCategory(id) {
    //   products.value = data.products[page.value].data;
    //   products.value = products.value.filter((item) => item.category === id);
    // }
    //   function filterByBrand(id) {
    //   products.value = data.products[page.value].data;
    //   products.value = products.value.filter((item) => item.brand === id);
    // }
    function changePage(num) {
      axios
        .get("products", { params: { page: num } })
        .then((response) => {
          products.value = response.data;
          page.value = num;
        })
        .catch((errors) => console.log(errors));
    }
    onMounted(() => {
      axios
        .get("products")
        .then((response) => {
          products.value = response.data;
          totalPages.value = response.data.meta.last_page;
          page.value = response.data.meta.current_page;
        })
        .catch((errors) => console.log(errors));
    });
    return { products, page, totalPages, changePage };
  },
};
</script>

<style>
.shop .breadcrumbs {
  @apply bg-custom-color-5;
}
.shop .breadcrumbs .breadcrumbs-content h1 {
  @apply text-2xl font-bold mb-2;
}
.shop .breadcrumbs .breadcrumbs-content .breadcrumbs-links a {
  @apply text-sm mr-4 relative;
}
.shop .breadcrumbs .breadcrumbs-content .breadcrumbs-links a::after {
  font-family: "Font Awesome 5 Free";
  content: "\f054";
  transform: translateY(-50%);
  top: 60%;
  right: -14px;
  @apply text-xs font-bold absolute;
}
.shop .breadcrumbs .breadcrumbs-content .breadcrumbs-links span {
  @apply text-custom-color-3;
}
.shop .shop-container .shop-sidebar {
  @apply w-full px-4;
}
@screen lg {
  .shop .shop-container .shop-sidebar {
    @apply w-3/12;
  }
}
.shop .shop-container .shop-sidebar .sidebar-search {
  @apply mb-11;
}
.shop .shop-container .shop-sidebar .sidebar-search form {
  @apply relative w-full;
}
.shop .shop-container .shop-sidebar .sidebar-search form input {
  @apply w-full border border-custom-color-7 py-2 pl-3;
}
.shop .shop-container .shop-sidebar .sidebar-search form button {
  transform: translateY(-50%);
  @apply absolute top-1/2 right-2 text-custom-color-3 placeholder-custom-color-3;
}
.shop .shop-container .shop-sidebar .sidebar-accordion .panel {
  @apply mb-6;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel:not(:last-of-type) {
  border-bottom: 1px solid;
  @apply border-custom-color-7;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-header
  button {
  @apply font-bold text-base text-black uppercase w-full flex justify-between;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-header
  button::after {
  font-family: "Font Awesome 5 Free";
  content: "\f078";
  @apply text-lg font-bold;
}
.shop .shop-container .shop-sidebar .sidebar-accordion .panel .panel-body {
  @apply pt-3 pb-5;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-body
  ul
  li {
  @apply py-2;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-body
  ul
  li
  a {
  @apply text-custom-color-3 capitalize font-normal hover:text-black block cursor-pointer;
}
.shop .shop-container .shop-products {
  @apply w-full px-4;
}
@screen lg {
  .shop .shop-container .shop-products {
    @apply w-9/12;
  }
}
.shop .shop-container .shop-products .products-container {
  @apply flex flex-wrap justify-center w-full;
}
.shop .shop-container .shop-products .products-container .product-card {
  @apply w-full text-center px-8 mb-10;
}
@screen sm {
  .shop .shop-container .shop-products .products-container .product-card {
    @apply w-6/12;
  }
}
@screen xl {
  .shop .shop-container .shop-products .products-container .product-card {
    @apply w-4/12 px-4;
  }
}
.shop .shop-container .shop-products .pagination-controls ul {
  @apply flex justify-center items-center;
}
.shop .shop-container .shop-products .pagination-controls ul li span {
  width: 30px;
  height: 30px;
}
.shop
  .shop-container
  .shop-products
  .pagination-controls
  ul
  li.number.next::after,
.shop
  .shop-container
  .shop-products
  .pagination-controls
  ul
  li.number.prev::before {
  content: "...";
  width: 30px;
  @apply text-center font-bold;
}
.shop .shop-container .shop-products .pagination-controls ul li:hover span,
.shop .shop-container .shop-products .pagination-controls ul li.active span {
  @apply border-2 border-black rounded-full;
}
.shop .shop-container .shop-products .pagination-controls ul li:not(.number),
.shop .shop-container .shop-products .pagination-controls ul li span {
  @apply flex items-center justify-center cursor-pointer font-bold mx-1;
}
.shop .shop-container .shop-products .pagination-controls ul li:not(.number) {
  @apply p-2;
}
.shop .shop-container .shop-products .pagination-controls ul li.number {
  @apply items-center justify-center;
}
</style>