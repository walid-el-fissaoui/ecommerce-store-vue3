<template>
  <header>
    <div class="top-bar">
      <div class="main-container py-3">
        <div class="top-bar-container">
          <p>Free shipping, 30-day return or refund guarantee.</p>
          <div class="auth-box">
            <a href="">sign in</a>
            <span> / </span>
            <a href="">sign up</a>
          </div>
        </div>
      </div>
    </div>
    <nav class="bg-white">
      <div class="navbar-container main-container py-5">
        <div class="sidebar-toggle-box">
          <label class="lg:hidden" for="sidebar-toggler">
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                fill="#323232"
              />
            </svg>
          </label>
          <input class="hidden" type="checkbox" id="sidebar-toggler" />
          <a href="/" class="navbar-logo"
            >Store<span class="text-custom-color-1">.</span></a
          >
        </div>
        <ul class="navbar-navs">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/Shop">Shop</router-link></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <ul class="navbar-icons">
          <li class="navbar-icons-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                fill="#323232"
              />
            </svg>
          </li>
          <li class="navbar-icons-item">
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
          </li>
          <li class="navbar-icons-item">
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
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header .top-bar {
  @apply bg-black text-white;
}
header .top-bar .top-bar-container {
  @apply text-center text-sm;
}
@screen lg {
  header .top-bar .top-bar-container {
    @apply flex justify-between items-center text-left;
  }
}
header .top-bar .top-bar-container .auth-box {
  @apply uppercase hidden;
}
@screen lg {
  header .top-bar .top-bar-container .auth-box {
    @apply block;
  }
}
header nav .navbar-container {
  @apply flex justify-between items-center;
}
header nav .navbar-container .sidebar-toggle-box {
  @apply flex items-center w-36;
}
header nav .navbar-container .sidebar-toggle-box .navbar-logo {
  @apply font-black text-2xl ml-4;
}
@screen lg {
  header nav .navbar-container .sidebar-toggle-box .navbar-logo {
    @apply ml-0 text-4xl;
  }
}
header nav .navbar-container .navbar-navs {
  @apply hidden;
}
@screen lg {
  header nav .navbar-container .navbar-navs {
    @apply flex justify-between items-center text-base w-6/12;
  }
}
header nav .navbar-container .navbar-icons {
  @apply flex justify-end items-center w-36;
}
header nav .navbar-container .navbar-icons .navbar-icons-item {
  @apply flex justify-end cursor-pointer w-1/3;
}
</style>