<template>
    <GlobalHeader />
    <router-view></router-view>
    <GlobalFooter />
</template>

<script>
import GlobalHeader from "../components/global/GlobalHeader.vue"
import GlobalFooter from "../components/global/GlobalFooter.vue"
export default {
    components: {GlobalHeader,GlobalFooter}
};
</script>

<style>
</style>