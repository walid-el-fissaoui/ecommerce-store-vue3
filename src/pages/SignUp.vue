<template>
  <div class="main-container">
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-4/12 mt-12">
        <h1 class="font-black text-3xl text-center">
          Store<span class="text-custom-color-1">.</span>
        </h1>
        <p class="text-center text-custom-color-3 my-4">
          Please complete to create your account.
        </p>
        <form
          class="w-full flex flex-wrap justify-center items-center"
          @submit.prevent="signUp"
        >
          <input
            class="w-full mb-4 py-4 px-2 border-b"
            type="text"
            name="name"
            placeholder="Name"
            v-model="name"
          />
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
          <input
            class="w-full mb-4 py-4 px-2 border-b"
            type="password"
            name="password-confirmation"
            placeholder="Confirm password"
            v-model="passwordConfirmation"
          />
          <input
            class="w-full mb-4 btn btn-black cursor-pointer text-center block"
            type="submit"
            value="Sign Up"
          />
          <router-link class="w-full text-center" to="/sign-in"
            >Already have an account? Sign in.</router-link
          >
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
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const passwordConfirmation = ref("");
    function signUp() {
      const data = {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: passwordConfirmation.value,
      };
      axios
        .post("http://127.0.0.1:8000/api/register", data)
        .then((response) => {
          console.log(response);
          store.commit("setUserToken", { user_token: response.data.api_token });
          store.commit("setUser", { user: response.data.user });
          if(response.status === 200) {
            router.push('/');
          }
        })
        .catch((errors) => console.log(errors));
    }
    return {signUp,name,email,password,passwordConfirmation}
  }
};
</script>

<style>
</style>