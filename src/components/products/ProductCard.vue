<template>
  <div class="product-card">
    <div class="card-header">
      <slot name="image"></slot>
    </div>
    <div class="card-content">
      <div class="product-add-cart">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
            fill="#323232"
          />
        </svg>
      </div>
      <h3 class="product-title">
        <slot name="title"></slot>
      </h3>
      <div class="product-like">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
            fill="#323232"
          />
        </svg>
      </div>
      <ul class="product-rating-list">
        <li class="star">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
              fill="#323232"
            />
          </svg>
        </li>
        <li class="star">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
              fill="#323232"
            />
          </svg>
        </li>
        <li class="star">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
              fill="#323232"
            />
          </svg>
        </li>
        <li class="star">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
              fill="#323232"
            />
          </svg>
        </li>
        <li class="star">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
              fill="#323232"
            />
          </svg>
        </li>
      </ul>
      <span class="product-price">
        <slot name="price"></slot>
      </span>
      <ul class="product-available-colors">
        <slot name="colors"></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.product-card .card-header {
  width: 260px;
  @apply h-64 mx-auto overflow-hidden;
}
.product-card .card-header img {
  @apply w-full h-full object-cover;
}
.product-card .card-content {
  width: 260px;
  @apply pt-6 flex flex-wrap px-2 mx-auto;
}
.product-card .card-content .product-title {
  @apply w-full order-1 text-left mb-2 font-semibold;
}
.product-card .card-content .product-like {
  @apply w-6/12 order-2 hidden;
}
.product-card .card-content .product-like svg {
  @apply ml-auto;
}
.product-card .card-content .product-add-cart {
  @apply w-6/12 order-1 hidden mb-2;
}
.product-card .card-content .product-rating-list {
  @apply w-full order-3 flex mb-2;
}
.product-card .card-content .product-price {
  @apply w-6/12 flex-grow block text-left order-4 font-bold text-lg;
}
.product-card .card-content .product-available-colors {
  @apply w-3/12 order-5 items-center justify-between hidden;
}
.product-card .card-content .product-available-colors .color {
  @apply rounded-full w-4 h-4;
}
.product-card:hover .card-content .product-title {
  @apply hidden;
}
.product-card:hover .card-content .product-add-cart,
.product-card:hover .card-content .product-like {
  @apply block;
}
.product-card:hover .card-content .product-available-colors {
  @apply flex;
}
</style>