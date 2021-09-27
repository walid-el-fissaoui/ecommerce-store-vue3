<template>
  <div class="flex justify-between items-center bg-custom-color-5 mb-2">
    <slot name="product-image"></slot>
    <div class="w-2/12">
      <h2 class="font-bold">
        <slot name="product-title"></slot>
      </h2>
    </div>
    <div class="w-1/12 colors">
        <slot name="product-color"></slot>
    </div>
    <div class="w-1/12 sizes">
      <span><slot name="product-size"></slot></span>
    </div>
    <div class="w-1/12 quantity">
      <slot name="product-quantity"></slot>
    </div>
    <div class="w-1/12">
      <h2 class="font-bold text-center">
        <slot name="product-price"></slot>
      </h2>
    </div>
    <div class="w-2/12 text-xl text-center">
      <slot name="product-cancel"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
img {
  @apply w-2/12;
}
.colors span {
  @apply block mx-auto w-4 h-4 mb-2 rounded-full;
}
.sizes span {
  @apply inline-block capitalize mr-2 mb-2 border rounded py-1 px-4;
}
.quantity {
  @apply flex justify-between text-custom-color-3;
}
.quantity span {
  @apply text-black;
}
</style>