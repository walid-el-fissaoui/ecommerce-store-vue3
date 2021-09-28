<template>
    <UpperBar class="fixed z-10 w-full"></UpperBar>
    <main class="w-full flex">
        <div class="sidebar h-screen fixed top-11 border-r shadow">
            <ul>
                <li>
                    <router-link to="/dashboard/users">
                        <span>Users</span>
                    </router-link>
                </li>
                <li class="active">
                    <router-link to="/dashboard/products">
                        <span>Products</span>
                    </router-link>
                </li>
                <li>
                    <a>
                        <span>Orders</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span>Categories</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span>Brands</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="content mt-11 p-4">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
import UpperBar from "../../components/global/UpperBar.vue";
export default {
    components: {UpperBar}
}
</script>

<style>
.sidebar ul li {
    @apply p-4 cursor-pointer font-bold;
}
.sidebar ul li:not(:last-child) {
    @apply border-b;
}
.sidebar ul li.active {
    @apply text-white bg-black;
}
.sidebar ul li a::before {
    font-family: 'Font Awesome 5 Free';
    @apply mr-2;
}
.sidebar {
    width: 300px;
}
.content {
    margin-left: 300px;
    @apply w-10/12;
}
@media(max-width: 922px) {
    .content {
        margin-left: 100px;
    }
    .sidebar {
        @apply w-auto;
    }
    .sidebar ul li a span {
        @apply hidden;
    }
}
.sidebar ul li:nth-of-type(1) a::before {
    content: '\f0c0';
}
.sidebar ul li:nth-of-type(2) a::before {
    content: '\f291';
}
.sidebar ul li:nth-of-type(3) a::before {
    content: '\f543';
}
.sidebar ul li:nth-of-type(4) a::before {
    content: '\f02c';
}
.sidebar ul li:nth-of-type(5) a::before {
    content: '\f02c';
}
</style>