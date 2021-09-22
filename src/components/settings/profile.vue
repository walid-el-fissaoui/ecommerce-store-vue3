<template>
    <form class="flex flex-wrap justify-start" @submit.prevent>
    <input type="text" placeholder="First name" />
    <input type="text" placeholder="Last name" />
    <input type="text" placeholder="Country" />
    <input type="text" placeholder="City" />
    <input type="text" placeholder="Postal code" />
    <textarea placeholder="Address"></textarea>
    <input
        type="submit"
        class="btn btn-black cursor-pointer"
        value="save changes"
    />
    </form>
</template>

<script>
export default {

}
</script>

<style>

</style>