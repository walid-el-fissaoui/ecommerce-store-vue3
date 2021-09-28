<template>
    <div
    class="
      relative
      flex flex-col
      min-w-0
      break-words
      bg-white
      w-full
      mb-6
      shadow-lg
      rounded
    "
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex justify-between items-center">
        <div class="relative px-4">
          <h3 class="font-semibold text-xl text-custom-color-2">Products</h3>
        </div>
        <div>
          <button class="rounded-full text-custom-color-3 border w-8 h-8">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <table class="items-center w-full border-collapse">
        <thead>
          <tr>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Name</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Price</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Sex</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Quantity</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Orders</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Added</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products.data" :key="product.id">
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">{{product.title}}</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">{{product.price}}$</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">
              <span v-for="(sex,index) in product.sexes" :key="index">{{ (index > 0) ? ' / ' + sex : sex}}</span>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">{{product.quantity.reduce((prev,curr) => prev + curr)}}</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">{{product.orders}}</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">{{product.added}}</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">
              <button 
              class="rounded-full text-custom-color-3 border w-8 h-8"
              >
              <i class="fas fa-pen"></i>
              </button>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">
              <button 
              class="rounded-full text-white bg-red-400 w-8 h-8"
              >
              <i class="far fa-times-circle"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="w-full">
          <div class="bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 border-l-0 border-r-0 whitespace-nowrap w-full flex justify-between items-center">
            <div class="py-4 px-6 text-xs uppercase font-semibold text-left">Total : {{productsCount}}</div>
            <div class="py-4 px-6 text-xs uppercase font-semibold text-left">
              <div class="pagination-controls" v-if="totalPages > 1">
              <ul>
                <li
                  v-if="page !== 1 && totalPages > 2"
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
                  v-if="page !== totalPages && totalPages > 2"
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
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "../../plugins/axios"
export default {
  setup() {
    const page = ref(0);
    const totalPages = ref(0);
    const productsCount = ref(0);
    const products = ref({});
    const requestParams = ref({});
    function changePage(num) {
      requestParams.value = Object.assign(requestParams.value,{per_page: 12});
      requestParams.value = Object.assign(requestParams.value,{page: num});
      axios
        .get("products", { params: requestParams.value })
        .then((response) => {
          products.value = response.data;
          page.value = num;
        })
        .catch((errors) => console.log(errors));
    }
    onMounted(() => {
      axios.get("products",{params: {per_page: 12}})
          .then((response) => {
            products.value = response.data;
            totalPages.value = response.data.meta.last_page;
            page.value = response.data.meta.current_page;
            productsCount.value = response.data.meta.total;
          })
          .catch(errors => console.log(errors));
    })
    return {products,page,totalPages,productsCount,changePage}
  }
}
</script>

<style>
.pagination-controls ul {
  @apply flex justify-center items-center;
}
.pagination-controls ul li span {
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
.pagination-controls ul li:hover span,
.pagination-controls ul li.active span {
  @apply border-2 border-custom-color-9 rounded-full;
}
.pagination-controls ul li:not(.number),
.pagination-controls ul li span {
  @apply flex items-center justify-center cursor-pointer font-bold mx-1;
}
.pagination-controls ul li:not(.number) {
  @apply p-2;
}
.pagination-controls ul li.number {
  @apply items-center justify-center;
}
</style>