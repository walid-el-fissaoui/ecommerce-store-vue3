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
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-xl text-custom-color-2">Users</h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <table class="items-center w-full border-collapse ">
        <thead>
          <tr>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Name</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Email</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Country</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">City</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Address</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Registered</th>
            <th class="px-6 bg-custom-color-8 text-custom-color-9 align-middle border border-solid border-custom-color-8 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">{{user.name}}</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">{{user.email}}</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">{{user.country}}</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">{{user.city}}</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">{{user.address}}</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">{{user.registered}}</td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-custom-color-2">
              <button 
              class="rounded-full text-white bg-red-400 w-8 h-8"
              @click="removeUser(user.id)"
              >
              <i class="far fa-times-circle"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "../../plugins/axios"
export default {
  setup() {
    const users = ref({});
    onMounted(() => {
      axios
        .get("users")
        .then((response) => {
          users.value = response.data;
          console.log(users.value)
        })
        .catch(errors => console.log(errors));
    });
    function removeUser(id) {
      axios
        .delete("users/" + id)
        .then((response) => {
          console.log(response)
          users.value = users.value.filter((user) => user.id !== id);
        })
        .catch(errors => console.log(errors));
    }
    return {users,removeUser};
  }
};
</script>

<style>
</style>