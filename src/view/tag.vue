<template>
    <el-container id="tag-show">
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
    import {categories, initPage} from "../method/base";

    export default {
        name: "tag",
        components: {NavRight, NavIndex, Footer},
        data() {
            return {
                pageResult: {},
                currentPage: 0
            }
        },
        methods: {
            handlePage: function (page) {
                this.$router.push({path: this.$route.path, query: {page: page}});
                this.getData(page);
            },
            getData: function (page) {
                categories(page).then(res => {
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
        }
    }
</script>

<style scoped>

</style>
