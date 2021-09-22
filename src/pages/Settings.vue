<template>
  <main class="settings">
    <div class="breadcrumbs">
      <div class="main-container py-10">
        <div class="flex">
          <div class="breadcrumbs-content">
            <h1>Settings</h1>
            <div class="breadcrumbs-links">
              <router-link to="/">Home</router-link>
              <span>Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="settings-container">
      <div class="main-container py-24">
        <div class="flex justify-between items-start">
          <div class="w-3/12 settings-sidebar">
            <ul>
              <li class="active">personnel information</li>
              <li>cart</li>
              <li>favorites</li>
              <li>purchases</li>
            </ul>
          </div>
          <div class="w-8/12 settings-content">
            <div v-if="false" class="personnel-information-content">
            </div>
            <div v-if="true" class="cart-content">
              <cart></cart>
            </div>
            <div v-if="false" class="favorites-content"></div>
            <div v-if="false" class="purchases-content"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import cart from "../components/settings/cart.vue"
export default {
  components: {cart}
};
</script>

<style>
.settings .settings-container .settings-sidebar ul li {
  @apply text-custom-color-3 capitalize font-normal py-4 cursor-pointer relative pl-6;
}
.settings .settings-container .settings-sidebar ul li:hover,
.settings .settings-container .settings-sidebar ul li.active {
  @apply text-black font-bold;
}
.settings .settings-container .settings-sidebar ul li::before {
  font-family: "Font Awesome 5 Free";
  transform: translateY(-50%);
  @apply font-bold text-lg absolute left-0 top-1/2;
}
.settings .settings-container .settings-sidebar ul li:nth-of-type(1)::before {
  content: "\f2bd";
}
.settings .settings-container .settings-sidebar ul li:nth-of-type(2)::before {
  content: "\f07a";
}
.settings .settings-container .settings-sidebar ul li:nth-of-type(3)::before {
  content: "\f004";
}
.settings .settings-container .settings-sidebar ul li:nth-of-type(4)::before {
  content: "\f543";
}
.settings
  .settings-container
  .settings-content
  .personnel-information-content
  form {
  max-width: 800px;
}
.settings
  .settings-container
  .settings-content
  .personnel-information-content
  form
  input[type="text"],
.settings
  .settings-container
  .settings-content
  .personnel-information-content
  textarea {
  @apply border py-2 px-4 rounded mr-2 mb-2;
}
.settings
  .settings-container
  .settings-content
  .personnel-information-content
  form
  input[type="text"] {
  @apply w-5/12;
}
.settings
  .settings-container
  .settings-content
  .personnel-information-content
  textarea {
  @apply w-10/12 resize-none;
}
</style>