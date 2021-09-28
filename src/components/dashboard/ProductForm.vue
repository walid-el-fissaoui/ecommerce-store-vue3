<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex justify-between items-center">
        <div class="relative px-4">
          <h3 class="font-semibold text-xl text-custom-color-2">Products</h3>
        </div>
      </div>
    </div>
    <div>
      <form class="flex items-center flex-wrap w-full p-4" @submit.prevent>
        <div class="w-full xl:w-6/12 my-2 px-2">
          <input type="text" class="h-10 border rounded px-4 py-2 w-full bg-gray-50" placeholder="Name" name="title" v-model="product.title" @keyup.delete="handleEmptyInputs">
        </div>
        <div class="w-full xl:w-6/12 my-2 px-2">
          <input type="number" class="h-10 border rounded px-4 py-2 w-full bg-gray-50" placeholder="Price" name="price" v-model="product.price" @keyup.delete="handleEmptyInputs">
        </div>
        <div class="w-full my-2 px-2">
          <textarea class="h-20 border rounded px-4 py-2 w-full bg-gray-50" style="resize: none;" placeholder="Description" name="description" v-model="product.description" @keyup.delete="handleEmptyInputs"></textarea>
        </div>
        <div class="w-full 2xl:w-4/12 my-2 px-2 flex items-center">
          <label>Sex :</label>
          <ul class="flex items-center sex-list">
            <li class="flex items-center" :class="(product.sex.includes(1)) ? 'active' : ''"><button class="w-4 h-4 mx-2 border rounded-full" @click="handleSexSelectButtons(1)"></button> <span>Men</span></li>
            <li class="flex items-center" :class="(product.sex.includes(2)) ? 'active' : ''"><button class="w-4 h-4 mx-2 border rounded-full" @click="handleSexSelectButtons(2)"></button> <span>Women</span></li>
          </ul>
        </div>
        <div class="w-full 2xl:w-4/12 px-2 my-2 flex items-center">
          <label class="mr-4">Categories :</label>
          <select class="h-10 border mt-1 rounded px-4 py-2 flex-grow bg-gray-50" v-model="product.category">
            <option v-for="category in categories" :key="category.id" :value="category.id">{{category.title}}</option>
          </select>
        </div>
        <div class="w-full 2xl:w-4/12 px-2 my-2 flex items-center">
          <label class="mr-4">Brands :</label>
          <select class="h-10 border mt-1 rounded px-4 py-2 flex-grow bg-gray-50" v-model="product.brand">
            <option v-for="brand in brands" :key="brand.id" :value="brand.id">{{brand.title}}</option>
          </select>
        </div>
        <div class="w-full flex justify-end items-center my-2">
          <input class="btn btn-black justify-center rounded mx-2 cursor-pointer" type="submit" value="create" @click="createNewProduct">
          <input class="btn btn-white justify-center bg-gray-200 text-custom-color-9 rounded mx-2 cursor-pointer" type="submit" value="update">
        </div>
      </form>
      <ItemForm></ItemForm>
      <ItemsTable></ItemsTable>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "../../plugins/axios"
import ItemForm from "./ItemForm.vue";
import ItemsTable from "./ItemsTable.vue";
export default {
  components: {ItemForm,ItemsTable},
  setup() {
    const categories = ref({});
    const brands = ref({});
    const product = ref({
      title: null,
      price: null,
      description: null,
      sex: [],
      category: null,
      brand: null
    });

    function handleSexSelectButtons(index) {
      if(!product.value.sex.includes(index)) {
        product.value.sex.push(index);
      }
      else {
        product.value.sex = product.value.sex.filter((sex) => sex !== index)
      }
    }
    function handleEmptyInputs(e) {
        if(e.target.value === '') {
          product.value[e.target.name] = null;
        }
    }

    function createNewProduct() {
      const data = {
        title: product.value.title,
        description: product.value.description,
        price: product.value.price,
        brand_id: product.value.brand,
        category_id: product.value.category,
        sex: product.value.sex
      }
      axios
        .post("products/create",data)
        .then((response) => {
          console.log(response.data)
        })
        .catch(errors => console.log(errors));
    }

    onMounted(() => {
      axios
        .get("categories")
        .then((response) => {
          categories.value = response.data.map((category) => {
            return {
              id: category.id,
              title: category.title
            }
          })
        })
        .catch(errors => console.log(errors))
      axios
        .get("brands")
        .then((response) => {
          brands.value = response.data.map((brand) => {
            return {
              id: brand.id,
              title: brand.title
            }
          })
        })
        .catch(errors => console.log(errors))
    })
    return {categories,brands,product,handleSexSelectButtons,handleEmptyInputs,createNewProduct}
  }
}
</script>

<style>
.sex-list li.active button {
  @apply border-custom-color-2 bg-red-500;
}
</style>