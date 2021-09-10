<template>
  <main class="product-details">
    <div class="breadcrumbs">
      <div class="main-container py-10">
        <div class="flex">
          <div class="breadcrumbs-content">
            <h1>Lorem, ipsum.</h1>
            <div class="breadcrumbs-links">
              <a href="/index.html">Home</a>
              <a href="/index.html">Shop</a>
              <span>Lorem, ipsum.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-details-container">
      <div class="main-container py-10">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-6/12">
            <div class="mx-auto xl:mx-0" style="max-width: 500px">
              <img
                class="w-full"
                :src="product.images[currentImage].src"
                alt=""
              />
              <div class="product-gallery">
                <img
                  v-for="image in product.images"
                  :key="image.id"
                  :src="image.src"
                  alt="product image"
                  @click="switchImage(image.id)"
                />
                <!-- <img src="../assets/images/product-image-2.jpg" />
                <img src="../assets/images/product-image-3.jpg" /> -->
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 mt-5 lg:mt-0">
            <div class="mx-auto lg:ml-20 xl:mx-0" style="max-width: 500px">
              <h2
                class="font-bold text-2xl text-custom-color-2 capitalize mb-2"
              >
                {{ product.title }}
              </h2>
              <ul class="flex mb-4">
                <li>
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
                <li>
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
                <li>
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
                <li>
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
                <li>
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
              <p class="font-bold text-2xl text-custom-color-2 capitalize mb-2">
                ${{ totalPrice }}
              </p>
              <p class="product-description">
                {{ product.description }}
              </p>
              <div class="characteristic">
                <label>Category :</label>
                <p class="font-light capitalize">{{product.category}}</p>
              </div>
              <div class="characteristic">
                <label>Sex :</label>
                <p class="font-light capitalize">{{product.sex}}</p>
              </div>
              <div class="characteristic">
                <label>Size :</label>
                <div class="sizes-list">
                  <div v-for="size in product.sizes" :key="size" class="size-checkbox">
                    <input type="radio" name="check-size" :id="'check-size-' + size" />
                    <label :for="'check-size-' + size">{{size}}</label>
                  </div>
                </div>
                <div></div>
              </div>
              <div class="characteristic">
                <label>Color :</label>
                <ul class="colors-list">
                  <li v-for="(color,index) in product.colors" :key="index" :class="(index == currentColor) ? 'active bg-' + color : 'bg-' + color" @click="switchColor(index)"></li>
                </ul>
              </div>
              <div class="characteristic">
                <label>Quanity</label>
                <div class="quantity-controls">
                  <button
                    @click="decrementQuantity"
                    :class="quantity == 1 ? 'cursor-not-allowed' : ''"
                  >
                    -
                  </button>
                  <span>{{ quantity }}</span>
                  <button
                    @click="incrementQuantity"
                    :class="quantity == 10 ? 'cursor-not-allowed' : ''"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="flex mt-8">
                <button class="btn btn-black rounded px-4 h-10 w-auto mr-4">
                  buy now
                </button>
                <button class="btn btn-white rounded px-4 h-10 w-auto">
                  <svg
                    class="mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
                      fill="#000000"
                    />
                  </svg>
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const product = ref({
      id: "#0",
      images: [
        {
          id: 1,
          src: "/img/product-image-1.7450203f.jpg",
        },
        {
          id: 2,
          src: "/img/product-image-2.a4770d63.jpg",
        },
        {
          id: 3,
          src: "/img/product-image-1.7450203f.jpg",
        },
        {
          id: 4,
          src: "/img/product-image-3.3aa7e844.jpg",
        },
      ],
      title: "Lorem, ipsum.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate molestias expedita ut voluptatibus corporis aperiam blanditiis nisi, sit repudiandae in praesentium facilis ex ad optio asperiores voluptatum, eaque ab aspernatur?",
      price: 13.3,
      colors: ["blue-400", "red-400", "green-400"],
      rating: "3",
      category: "bags",
      sex: "men",
      sizes: ["s","lg","xl"]
    });
    const currentImage = ref(0);
    const currentColor = ref(0);
    const quantity = ref(1);
    const totalPrice = ref(product.value.price);
    function switchImage(id) {
      currentImage.value = id - 1;
    }
    function incrementQuantity() {
      if (quantity.value < 10) {
        quantity.value++;
        totalPrice.value = (product.value.price * quantity.value).toFixed(2);
      }
    }
    function decrementQuantity() {
      if (quantity.value > 1) {
        quantity.value--;
        totalPrice.value = (product.value.price * quantity.value).toFixed(2);
      }
    }
    function switchColor(id) {
      currentColor.value = id;
    }
    return {
      product,
      currentImage,
      quantity,
      totalPrice,
      currentColor,
      switchImage,
      incrementQuantity,
      decrementQuantity,
      switchColor
    };
  },
};
</script>

<style>
.breadcrumbs {
  @apply bg-custom-color-5;
}
.breadcrumbs .breadcrumbs-content h1 {
  @apply text-2xl font-bold mb-2;
}
.breadcrumbs .breadcrumbs-content .breadcrumbs-links a {
  @apply text-sm mr-4 relative;
}
.breadcrumbs .breadcrumbs-content .breadcrumbs-links a::after {
  font-family: "Font Awesome 5 Free";
  content: "\f054";
  transform: translateY(-50%);
  top: 60%;
  right: -14px;
  @apply text-xs font-bold absolute;
}
.breadcrumbs .breadcrumbs-content .breadcrumbs-links span {
  @apply text-custom-color-3;
}
.product-details .product-details-container .product-gallery {
  @apply w-full flex justify-between mt-5;
}
.product-details .product-details-container .product-gallery img {
  @apply w-1/5 rounded-sm p-1 border cursor-pointer;
}
.product-details .product-details-container .product-description {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @apply font-light text-sm text-black leading-6 mb-4 pb-4;
}
.product-details .product-details-container .characteristic {
  @apply flex mb-4;
}
.product-details .product-details-container .characteristic > label {
  width: 100px;
  @apply font-semibold text-base;
}
.product-details .product-details-container .characteristic .sizes-list {
  @apply flex;
}
.product-details
  .product-details-container
  .characteristic
  .sizes-list
  .size-checkbox {
  @apply mr-4;
}
.product-details
  .product-details-container
  .characteristic
  .sizes-list
  .size-checkbox
  input {
  @apply hidden;
}
.product-details
  .product-details-container
  .characteristic
  .sizes-list
  .size-checkbox
  label {
  @apply font-light relative pl-6 uppercase;
}
.product-details
  .product-details-container
  .characteristic
  .sizes-list
  .size-checkbox
  label::before {
  content: "";
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  @apply rounded-full border inline-block cursor-pointer;
}
.product-details
  .product-details-container
  .characteristic
  .sizes-list
  .size-checkbox
  input:checked
  + label::before {
  @apply bg-custom-color-1;
}
.product-details .product-details-container .characteristic .colors-list {
  @apply flex items-center;
}
.product-details .product-details-container .characteristic .colors-list li {
  width: 15px;
  height: 15px;
  @apply cursor-pointer mr-4 rounded-full;
}
.product-details .product-details-container .characteristic .colors-list li.active {
  @apply  border-2 border-white ring-1 ring-custom-color-6;
}
.product-details .product-details-container .characteristic .quantity-controls {
  @apply flex;
}
.product-details
  .product-details-container
  .characteristic
  .quantity-controls
  > * {
  width: 50px;
  @apply border p-1;
}
.product-details
  .product-details-container
  .characteristic
  .quantity-controls
  button:first-of-type {
  @apply rounded-l;
}
.product-details
  .product-details-container
  .characteristic
  .quantity-controls
  span {
  @apply text-center border-l-0 border-r-0;
}
.product-details
  .product-details-container
  .characteristic
  .quantity-controls
  button:last-of-type {
  @apply rounded-r;
}
</style>