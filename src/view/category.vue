<template>
    <el-container id="category-show">
        <el-header>
            <nav-index></nav-index>
        </el-header>
        <el-main>
            <div class="index-left">
                <blog-list v-on:get-data="getData" v-bind:page-result="pageResult"
                           v-bind:current-page="currentPage"></blog-list>
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
    import BlogList from "../components/blogList";
    import {initPage, categoryData} from "../method/base";

    export default {
        name: "category",
        components: {Footer, NavRight, NavIndex,BlogList},
        data() {
            return {
                pageResult: {},
                currentPage: 0,
                category: {}
            }
        },
        methods: {
            handlePage: function (page) {
                this.$router.push({path: this.$route.path, query: {page: page}});
                this.getData(page);
            },
            getData: function (page) {
                let category = this.$route.params.category;
                categoryData(category, page).then(res => {
                    return res.json();
                }).then(json => {
                    this.pageResult = json;
                    this.$nextTick(() => {
                        this.currentPage = this.pageResult.currentPage;
                    });
                }).catch(() => {
                    this.$router.push({path: '/error'});
                })
            }
        },
        created: function () {
            let page = initPage(this.$route.query.page);
            this.getData(page);
            this.title = this.$route.params.category;
        }
    }
</script>

<style scoped>
    @import "../style/common.css";


    p {
        display: inline-block;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
