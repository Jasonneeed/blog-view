<template>
    <div id="app">
        <nav-index/>
        <blog-simple/>
        <nav-right/>
    </div>
</template>

<script>
    import NavIndex from "@/components/nav-index";
    import NavRight from "@/components/nav-right";
    import BlogSimple from "@/components/blog-simple";
    export default {
        name: 'App',
        components: {
            BlogSimple,
            NavRight,
            NavIndex
        }
    }
</script>

<style>
    html{
        height: 100%;
    }
    body{
        margin: 0;
        height: 100%;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
    }
</style>
