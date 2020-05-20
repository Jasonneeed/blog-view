<template>
    <el-container id="categories">
        <el-header>
            <nav-index v-bind:active-index="activeIndex"></nav-index>
        </el-header>
        <el-main>
            <div class="index-left">
                <p class="category_title" v-for=" category in pageResult.list" :key="category.categoryId"
                   v-on:click="cate(category.categoryName)" :title="category.categoryName">{{category.categoryName}}</p>
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
    import {initPage, categories} from "../method/base";

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
            handlePage: function (page) {
                this.$router.push({path: this.$route.path, query: {page: page}});
            },
            getData(page) {
                categories(page).then(res => {
                    return res.json();
                }).then(json => {
                    this.pageResult = json;
                    this.$nextTick(() => {
                        this.currentPage = this.pageResult.currentPage;
                    });
                    console.log(this.pageResult);
                }).catch(() => {
                    this.$router.push({path: '/error'});
                });
            },
            cate(name) {
                this.$router.push({name: 'category', params: {title: name, category: name}});
            }
        },
        created() {
            let page = this.$route.query.page;
            this.currentPage = initPage(page);
            this.getData(this.currentPage);
        }
    }
</script>

<style scoped>
    @import "../style/common.css";

    .category_title {
        font-size: 20px;
        margin-left: 20px;
        color: rgba(7, 7, 14, 0.67);
        width: fit-content;
        max-width: 75%;
        cursor: pointer;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .category_title:hover {
        color: #409eff;
    }
</style>
