<template>
  <div class="slider">
    <div class="main-container py-5">
      <div class="slide">
        <div class="slide-info">
          <h6>summer collection</h6>
          <h2>fall - winter collections 2030</h2>
          <p>
            A specialist label creating luxury essentials. Ethically crafted
            with an unwavering commitment to exceptional quality.
          </p>
          <a href="" class="btn btn-black"
            >shop now <span class="arrow-right"></span
          ></a>
        </div>
        <div class="slide-image">
          <img src="../assets/images/slide-1.png" alt="" />
        </div>
      </div>
    </div>
    <div class="slider-navs">
      <span class="prev-arrow"></span>
      <span class="next-arrow"></span>
    </div>
  </div>
  <products-filtered />
</template>

<script>
import ProductsFiltered from "../components/products/ProductsFiltered.vue"
export default {
  components: {ProductsFiltered}
};
</script>

<style>
.slider {
  height: 600px;
  @apply flex items-center w-full relative overflow-y-hidden bg-custom-color-4;
}
@screen md {
  .slider {
    height: 801px;
    @apply bg-yellow-300;
  }
}
.slider .slide {
  @apply flex items-center justify-between;
}
.slider .slide .slide-info {
  @apply w-full;
}
@screen md {
  .slider .slide .slide-info {
    @apply w-4/12;
  }
}
.slider .slide .slide-info h6 {
  @apply text-sm text-custom-color-1 mb-7 font-semibold uppercase;
}
.slider .slide .slide-info h2 {
  @apply text-5xl text-black font-semibold capitalize mb-7;
}
.slider .slide .slide-info p {
  @apply text-base mb-9 text-custom-color-2;
}
.slider .slide .slide-image {
  @apply hidden;
}
@screen md {
  .slider .slide .slide-image {
    @apply block w-5/12;
  }
}
.slider .slider-navs {
  @apply hidden w-full h-full absolute top-1/2 -translate-y-1/2 justify-between px-6;
}
@screen xl {
  .slider .slider-navs {
    @apply flex;
  }
}
.slider .slider-navs span::before {
  font-family: "Font Awesome 5 Free";
  @apply text-3xl font-bold cursor-pointer;
}
.slider .slider-navs span.prev-arrow::before {
  content: "\f30a";
}
.slider .slider-navs span.next-arrow::before {
  content: "\f30b";
}
</style>