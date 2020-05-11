<template>
    <el-container id="tags">
        <el-header>
            <nav-index v-bind:active-index="activeIndex"></nav-index>
        </el-header>
        <el-main>
            <div class="index-left">
                <!--todo 增加标签-->
            </div>
            <nav-right></nav-right>
        </el-main>
        <Footer/>
    </el-container>
</template>

<script>
    import NavIndex from "../components/nav-index";
    import NavRight from "../components/nav-right";
    import Footer from "../components/footer";

    export default {
        name: "tags",
        components: {Footer, NavRight, NavIndex},
        data(){
            return {
                activeIndex: '3'
            }
        }
    }
</script>

<style scoped>
    @import "../style/common.css";
</style>
