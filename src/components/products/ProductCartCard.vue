<template>
  <div class="flex justify-between items-center bg-custom-color-5 mb-2">
    <slot name="product-image"></slot>
    <div class="w-2/12">
      <h2 class="font-bold">
        <slot name="product-title"></slot>
      </h2>
    </div>
    <div class="w-1/12 colors">
      <ul>
        <slot name="product-colors"></slot>
      </ul>
    </div>
    <div class="w-1/12 quantity">
      <button>
        <i class="fas fa-minus"></i>
      </button>
      <span><slot name="product-quantity"></slot></span>
      <button>
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <div class="w-1/12">
      <h2 class="font-bold text-center">
        <slot name="product-price"></slot>
      </h2>
    </div>
    <button class="w-2/12 text-xl">
      <i class="far fa-times-circle"></i>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
img {
  @apply w-2/12;
}
.colors {
  @apply flex flex-col items-center;
}
.colors ul li {
  @apply w-4 h-4 mb-2 rounded-full;
}
.quantity {
  @apply flex justify-between text-custom-color-3;
}
.quantity span {
  @apply text-black;
}
</style>