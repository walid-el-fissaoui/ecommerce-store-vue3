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
            <ul class="sidebar-filter">
              <li :class="isFiltered ? 'active' : ''" @click="filterProducts">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 17V19H9V17H3ZM3 5V7H13V5H3ZM13 21V19H21V17H13V15H11V21H13ZM7 9V11H3V13H7V15H9V9H7ZM21 13V11H11V13H21ZM15 9H17V7H21V5H17V3H15V9Z"
                  />
                </svg>
                <h3>filter</h3>
              </li>
              <li v-if="isFiltered" class="justify-end active" @click="clearFilters">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 8C9.85 8 7.45 8.99 5.6 10.6L2 7V16H11L7.38 12.38C8.77 11.22 10.54 10.5 12.5 10.5C16.04 10.5 19.05 12.81 20.1 16L22.47 15.22C21.08 11.03 17.15 8 12.5 8Z"
                  />
                </svg>
                <h3>all</h3>
              </li>
            </ul>
            <div class="sidebar-accordion">
              <div class="panel">
                <div class="panel-header">
                  <button>categories</button>
                </div>
                <div class="panel-body">
                  <ul class="categories-list">
                    <li
                      v-for="category in categories"
                      :key="category.id"
                      :class="filters.categories.includes(category.id) ? 'active' : ''"
                    >
                      <a @click="toggleFilter('categories',category.id)">
                        {{ category.title }}
                        <span> ({{ category.products_count }}) </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="panel">
                <div class="panel-header">
                  <button>branding</button>
                </div>
                <div class="panel-body">
                  <ul class="categories-list">
                    <li v-for="brand in brands" :key="brand.id" :class="filters.brands.includes(brand.id) ? 'active' : ''">
                      <a @click="toggleFilter('brands',brand.id)"
                        >{{ brand.title }}
                        <span> ({{ brand.products_count }}) </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="panel">
                <div class="panel-header">
                  <button>sex</button>
                </div>
                <div class="panel-body">
                  <ul class="categories-list">
                    <li :class="filters.sex.includes(0) ? 'active' : ''" ><a @click="toggleFilter('sex',0)">Men</a></li>
                    <li :class="filters.sex.includes(1) ? 'active' : ''" ><a @click="toggleFilter('sex',1)">Women</a></li>
                  </ul>
                </div>
              </div>
              <div class="panel">
                <div class="panel-header">
                  <button>Colors</button>
                </div>
                <div class="panel-body">
                  <ul class="colors-list">
                    <li v-for="color in colors" :key="color.id" :class="filters.colors.includes(color.id) ? 'active' : ''">
                      <a @click="toggleFilter('colors',color.id)" :style="'background-color :' + color.color_hex"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="panel">
                <div class="panel-header">
                  <button>Sizes</button>
                </div>
                <div class="panel-body">
                  <ul class="sizes-list">
                    <li v-for="size in sizes" :key="size.id" :class="filters.sizes.includes(size.id) ? 'active' : ''">
                      <a @click="toggleFilter('sizes',size.id)">
                        {{ size.title }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="panel">
                <div class="panel-header">
                  <button>Price</button>
                </div>
                <div class="panel-body">
                  <div class="filter-price">
                    <div class="price-select-box">
                      <label for="min-price">Min</label>
                      <input
                        type="number"
                        min="0"
                        name="min-price"
                        id="min-price"
                        @keyup.delete="handlePriceInput"
                        v-model="filters.prices.min"
                      />
                    </div>
                    <div class="price-select-box">
                      <label for="max-price">Max</label>
                      <input
                        type="number"
                        min="0"
                        name="max-price"
                        id="max-price"
                        @keyup.delete="handlePriceInput"
                        v-model="filters.prices.max"
                      />
                    </div>
                  </div>
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
                <li v-if="page !== 1" @click="changePage(page - 1)">
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
                <li v-if="page !== totalPages" @click="changePage(page + 1)">
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
import { computed, onMounted, ref } from "vue";
import axios from "../plugins/axios";
export default {
  components: { ProductCard },
  setup() {
    const page = ref(0);
    const products = ref({});
    const totalPages = ref(0);
    const categories = ref({});
    const brands = ref({});
    const colors = ref({});
    const sizes = ref({});
    const filters = ref({
      categories: [],
      brands: [],
      sex: [],
      colors: [],
      sizes: [],
      prices: { min: null, max: null },
    });
    const queryFilters = ref({});
    const isFiltered = computed(() => {
      if(filters.value.categories.length === 0 && filters.value.brands.length === 0 && filters.value.colors.length === 0 && filters.value.sizes.length === 0 && filters.value.sex.length === 0 && filters.value.prices.min === null && filters.value.prices.max === null) {
        return false
      }
      return true;
    });
    function handlePriceInput(e) {
      if(e.target.id === 'max-price'){
        if(e.target.value === '') {
          filters.value.prices.max = null;
        }
      }
      else {
        if(e.target.value === '') {
          filters.value.prices.min = null;
        }
      }
    }
    function changePage(num) {
      axios
        .get("products", { params: { page: num } })
        .then((response) => {
          products.value = response.data;
          page.value = num;
        })
        .catch((errors) => console.log(errors));
    }
    function toggleFilter(filter,item) {
      switch (filter) {
        case 'categories':
          if(filters.value.categories.includes(item)) {
            filters.value.categories = filters.value.categories.filter((x) => x != item);
          }
          else 
          {
            filters.value.categories.push(item);
          }
          break;
        case 'brands':
          if(filters.value.brands.includes(item)) {
            filters.value.brands = filters.value.brands.filter((x) => x != item);
          }
          else 
          {
            filters.value.brands.push(item);
          }
          break;
        case 'sex':
          if(filters.value.sex.includes(item)) {
            filters.value.sex = filters.value.sex.filter((x) => x != item);
          }
          else 
          {
            filters.value.sex.push(item);
          }
          break;
        case 'colors':
          if(filters.value.colors.includes(item)) {
            filters.value.colors = filters.value.colors.filter((x) => x != item);
          }
          else 
          {
            filters.value.colors.push(item);
          }
          break;
        case 'sizes':
          if(filters.value.sizes.includes(item)) {
            filters.value.sizes = filters.value.sizes.filter((x) => x != item);
          }
          else 
          {
            filters.value.sizes.push(item);
          }
          break;
      }
    }
    function clearFilters() {
      Object.keys(filters.value).forEach(function(key) {
        if(Array.isArray(filters.value[key])) {
          filters.value[key] = [];
        }
        else {
          filters.value[key].min = null;
          filters.value[key].max = null;
        }
      });
      queryFilters.value = {};
    }
    function filterProducts() {
        queryFilters.value = Object.assign(queryFilters.value,{categories: filters.value['categories']})
        queryFilters.value = Object.assign(queryFilters.value,{brands: filters.value['brands']})
        queryFilters.value = Object.assign(queryFilters.value,{colors: filters.value['colors']})
        queryFilters.value = Object.assign(queryFilters.value,{sizes: filters.value['sizes']})
        queryFilters.value = Object.assign(queryFilters.value,{sex: filters.value['sex']})
        if(filters.value['prices'].min)
        queryFilters.value = Object.assign(queryFilters.value,{min_price: filters.value['prices'].min})
        if(filters.value['prices'].max)
        queryFilters.value = Object.assign(queryFilters.value,{max_price: filters.value['prices'].max})
        queryFilters.value = Object.assign(queryFilters.value,{per_page: 12})
      axios
        .get('search',{params : queryFilters.value})
        .then((response) => {
          products.value = response.data;
          totalPages.value = response.data.meta.last_page;
          page.value = response.data.meta.current_page;
        })
        .catch(errors => console.log(errors))
    }
    onMounted(() => {
      axios
        .get("products",{params: {per_page : 12}})
        .then((response) => {
          products.value = response.data;
          totalPages.value = response.data.meta.last_page;
          page.value = response.data.meta.current_page;
        })
        .catch((errors) => console.log(errors));
      axios
        .get("categories")
        .then((response) => {
          categories.value = response.data;
        })
        .catch((errors) => console.log(errors));
      axios
        .get("brands")
        .then((response) => {
          brands.value = response.data;
        })
        .catch((errors) => console.log(errors));
      axios
        .get("colors")
        .then((response) => {
          colors.value = response.data;
        })
        .catch((errors) => console.log(errors));
      axios
        .get("sizes")
        .then((response) => {
          sizes.value = response.data;
        })
        .catch((errors) => console.log(errors));
    });
    return {
      products,
      page,
      totalPages,
      categories,
      brands,
      colors,
      sizes,
      filters,
      isFiltered,
      handlePriceInput,
      changePage,
      toggleFilter,
      clearFilters,
      filterProducts
    };
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
.shop .shop-container .shop-sidebar .sidebar-filter {
  @apply flex w-full justify-between mb-6;
}
.shop .shop-container .shop-sidebar .sidebar-filter li {
  @apply flex w-6/12 cursor-pointer;
}
.shop .shop-container .shop-sidebar .sidebar-filter li svg {
  fill: rgba(183, 183, 183);
}
.shop .shop-container .shop-sidebar .sidebar-filter h3 {
  @apply font-bold text-base text-custom-color-3 uppercase ml-2;
}
.shop .shop-container .shop-sidebar .sidebar-filter li.active h3 {
  @apply text-black;
}
.shop .shop-container .shop-sidebar .sidebar-filter li.active svg {
  fill: #000;
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
  ul.categories-list
  li {
  @apply py-2;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-body
  ul.categories-list
  li
  a {
  @apply text-custom-color-3 capitalize font-normal hover:text-black block cursor-pointer;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-body
  ul.categories-list
  li.active
  a {
  @apply text-black;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-body
  ul.colors-list,
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-body
  ul.sizes-list {
  @apply flex flex-wrap;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-body
  ul.colors-list
  li
  a {
  width: 30px;
  height: 30px;
  @apply block cursor-pointer mr-4 rounded-full;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-body
  ul.colors-list
  li.active
  a {
  @apply border-2 border-white ring-1 ring-custom-color-6;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-body
  ul.sizes-list
  li
  a {
  width: 50px;
  height: 30px;
  @apply flex justify-center items-center mr-4 mb-4 cursor-pointer uppercase border;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-body
  ul.sizes-list
  li.active
  a {
    @apply bg-black text-white;
  }
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-body
  .filter-price {
  @apply flex justify-between items-center;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-body
  .filter-price
  .price-select-box {
  @apply w-5/12 flex justify-between items-center;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-body
  .filter-price
  .price-select-box
  label {
  @apply w-auto mr-4;
}
.shop
  .shop-container
  .shop-sidebar
  .sidebar-accordion
  .panel
  .panel-body
  .filter-price
  .price-select-box
  input {
  @apply border p-1 rounded w-5/12 flex-grow;
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
  min-height: 2035px;
  @apply flex flex-wrap justify-center content-start w-full;
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