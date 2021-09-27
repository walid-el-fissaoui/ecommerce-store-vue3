<template>
  <div class="top-bar">
    <div class="main-container py-3">
      <div class="top-bar-container">
        <p>Free shipping, 30-day return or refund guarantee.</p>
        <div class="auth-box">
          <div v-if="!userToken">
            <router-link to="/sign-in">sign in</router-link>
            <span> / </span>
            <router-link to="/sign-up">sign up</router-link>
          </div>
          <div v-else>
            <a class="cursor-pointer" @click="logout">logout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../plugins/axios";
export default {
  computed: {
    userToken() {
      return this.$store.state.auth.user_token
    }
  },
  methods: {
    logout() {
      const config = {
        headers: {
          'Accept': 'application/json',
          Authorization: `Bearer ${this.userToken}`
        }
      }
      axios
        .post("logout",{token: this.userToken},config)
        .then(
          () => {
            this.$store.commit("setUserToken",{user_token: null});
            this.$store.commit("setUser",{user: null});
          }
        )
        .catch(errors => console.log(errors));
    }
  }
};
</script>

<style>
.top-bar {
  @apply bg-black text-white;
}
.top-bar .top-bar-container {
  @apply text-center text-sm;
}
@screen lg {
  .top-bar .top-bar-container {
    @apply flex justify-between items-center text-left;
  }
}
.top-bar .top-bar-container .auth-box {
  @apply uppercase hidden;
}
@screen lg {
  .top-bar .top-bar-container .auth-box {
    @apply block;
  }
}
</style>