<template>
    <el-container id="tag-show">
        <el-header>
            <nav-index></nav-index>
        </el-header>
        <el-main>
            <div class="index-left">

            </div>
            <nav-right></nav-right>
        </el-main>
        <Footer/>
    </el-container>
</template>

<script>
    import NavRight from "../components/nav-right";
    import NavIndex from "../components/nav-index";
    import Footer from "../components/footer";

    export default {
        name: "search",
        components: {Footer, NavIndex, NavRight}
    }
</script>

<style scoped>

</style>
