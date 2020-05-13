<template>
    <el-container>
        <el-header>
            <nav-index v-bind:active-index="activeIndex"></nav-index>
        </el-header>
    </el-container>
</template>

<script>
    import NavIndex from "../components/nav-index";
    export default {
        name: "record",
        components: {NavIndex},
        data(){
            return {
                activeIndex: '4'
            }
        }
    }
</script>

<style scoped>

</style>
