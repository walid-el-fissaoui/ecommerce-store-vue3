<template>
  <div class="main-container">
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-4/12 mt-12">
        <h1 class="font-black text-3xl text-center">
          Store<span class="text-custom-color-1">.</span>
        </h1>
        <p class="text-center text-custom-color-3 my-4">
          Welcome! Please log into your account.
        </p>
        <form
          class="w-full flex flex-wrap justify-center items-center"
          @submit.prevent="signIn"
        >
          <input
            class="w-full mb-4 py-4 px-2 border-b"
            type="email"
            name="email"
            placeholder="Email"
            v-model="email"
          />
          <input
            class="w-full mb-4 py-4 px-2 border-b"
            type="password"
            name="password"
            placeholder="Password"
            v-model="password"
          />
          <div class="w-full flex justify-between mt-4">
            <input
              class="w-auto mb-4 btn btn-black cursor-pointer"
              type="submit"
              value="Sign In"
            />
            <router-link class="w-auto mb-4 btn btn-white" to="/sign-up"
              >Sign up</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    function signIn() {
      const credentials = {
        email: email.value,
        password: password.value,
      };
      axios
        .post("login", credentials)
        .then((response) => {
          store.commit("setUserToken", { user_token: response.data.api_token });
          store.commit("setUser", { user: response.data.user });
          if(response.status === 200) {
            router.push('/');
          }
        })
        .catch((errors) => console.log(errors));
    }
    return {
      signIn,
      email,
      password,
    };
  },
};
</script>

<style></style>
