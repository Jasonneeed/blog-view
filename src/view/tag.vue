<template>
    <div id="tag-show">
        <nav-index/>
        <p>tag weizhi</p>
        <nav-right/>
    </div>
</template>

<script>
    import NavIndex from "../components/nav-index";
    import NavRight from "../components/nav-right";

    export default {
        name: "tag",
        components: {NavRight, NavIndex}
    }
</script>

<style scoped>

</style>
