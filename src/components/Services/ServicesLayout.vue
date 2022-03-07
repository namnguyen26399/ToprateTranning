<template>
    <div class="-mt-28 relative sm:mt-10 md:mt-10 lg:mt-10">
        <Heading></Heading>
        <Content></Content>
        <Star></Star>
    </div>
</template>

<script>
import Heading from "./Heading.vue";
import Content from "./Content.vue";
import Star from "./Star.vue";
export default {
    components: {
        Heading,
        Content,
        Star
    },
};
</script>

<style>
</style>