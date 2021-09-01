<template>
  <footer>
    <div class="main-container pt-16">
      <div class="footer-box">
        <div class="about">
          <a href="/" class="footer-logo"
            >Store<span class="text-custom-color-1">.</span></a
          >
          <p class="about-description">
            The customer is at the heart of our unique business model, which
            includes design.
          </p>
        </div>
        <div class="links">
          <h6>Links</h6>
          <ul class="links-list">
            <li class="link"><a href="">Home</a></li>
            <li class="link"><a href="">Shop</a></li>
            <li class="link"><a href="">About Us</a></li>
            <li class="link"><a href="">Contact Us</a></li>
          </ul>
        </div>
        <div class="newsletter">
          <h6>Newsletter</h6>
          <p class="newsletter-description">
            Be the first to know about new arrivals, look books, sales & promos!
          </p>
          <form>
            <input type="text" placeholder="Your Email" />
          </form>
        </div>
      </div>
      <div class="copyrights">
        <p>
          Copyright © 2021 all rights reserved | Created by
          <a href=""><i class="fab fa-github"></i> walid-el-fissaoui</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  @apply bg-black text-white;
}
footer .footer-box {
  @apply flex flex-wrap justify-center;
}
@screen lg {
  footer .footer-box {
    @apply justify-between;
  }
}
footer .footer-box .about {
  @apply w-full;
}
@screen lg {
  footer .footer-box .about {
    @apply w-4/12;
  }
}
footer .footer-box .about .footer-logo {
  @apply block font-bold text-4xl mb-8 text-center;
}
@screen lg {
  footer .footer-box .about .footer-logo {
    @apply text-left;
  }
}
footer .footer-box .about .about-description {
  @apply text-custom-color-3 text-sm text-center;
}
@screen lg {
  footer .footer-box .about .about-description {
    @apply text-left;
  }
}
footer .footer-box .links {
  @apply w-full mt-10;
}
@screen lg {
  footer .footer-box .links {
    @apply w-2/12 mt-0;
  }
}
footer .footer-box .links h6 {
  @apply uppercase tracking-widest mb-5 text-center;
}
@screen lg {
  footer .footer-box .links h6 {
    @apply text-left;
  }
}
footer .footer-box .links ul {
  @apply flex justify-between;
}
@screen lg {
  footer .footer-box .links ul {
    @apply flex-col;
  }
}
footer .footer-box .links ul .link {
  @apply text-custom-color-3 py-2 capitalize;
}
footer .footer-box .newsletter {
  @apply w-full text-center mt-10;
}
@screen md {
  footer .footer-box .newsletter {
    @apply w-6/12;
  }
}
@screen lg {
  footer .footer-box .newsletter {
    @apply w-2/12 mt-0 text-left;
  }
}
footer .newsletter h6 {
  @apply uppercase relative tracking-widest mb-5;
}
footer .newsletter .newsletter-description {
  @apply text-custom-color-3 text-sm mb-4;
}
footer .newsletter form {
  @apply relative w-8/12 mx-auto;
}
footer .newsletter input {
  @apply w-full bg-transparent text-custom-color-2 placeholder-custom-color-2 py-4 border-b-2 border-white;
}
@screen md {
  footer .newsletter form {
    @apply w-full;
  }
}
footer .newsletter form::after {
  font-family: "Font Awesome 5 Free";
  content: "\f0e0";
  transform: translateY(-50%);
  @apply absolute top-1/2 right-2 text-custom-color-3 font-bold text-base;
}
footer .copyrights {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  @apply text-center py-5 mt-10 text-sm text-custom-color-3;
}
footer .copyrights i {
  @apply text-xl;
}
</style>