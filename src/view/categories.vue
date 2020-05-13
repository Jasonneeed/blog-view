<template>
    <el-container id="categories">
        <el-header>
            <nav-index v-bind:active-index="activeIndex"></nav-index>
        </el-header>
        <el-main>
            <div class="index-left">
                <!-- todo 增加分类-->
                <p v-for=" category in pageResult.list" :key="category.categoryId">{{category.categoryName}}</p>
                <div class="blog-page">
                    <el-pagination :page-size="pageResult.pageSize" :current-page="currentPage"
                                   :hide-on-single-page="true" layout="prev, pager, next, jumper"
                                   @current-change="handlePage"
                                   :total="pageResult.totalCount">
                    </el-pagination>
                </div>
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
    import {initPage} from "../method/base";

    export default {
        name: "categories",
        components: {Footer, NavRight, NavIndex},
        data() {
            return {
                activeIndex: '2',
                pageResult: {},
                currentPage: 0
            }
        },
        methods: {
            handlePage:function (page) {
                this.$router.push({path:this.$route.path, query:{page: page}});
            },
            getData(page){
                console.log(page);
            }
        },
        created() {
            let page = this.$route.query.page;
            this.currentPage = initPage(page);
        }
    }
</script>

<style scoped>
    @import "../style/common.css";
</style>
