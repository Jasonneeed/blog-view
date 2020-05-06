<template>

    <el-container id="index">
        <el-header>
            <nav-index></nav-index>
        </el-header>
        <el-main>
            <div class="index-left">
                <div class="blog-description-box" v-for="blog in pageResult.list" :key="blog.blogId">
                    <div class="blog-simple-top">
                        <p :title="blog.title" @click="readBlog(blog.title, blog.blogId)">{{blog.title}}</p>
                        <span>{{blog.createTime}}</span>
                    </div>
                    <div class="blog-simple-content">
                        <p>{{blog.description}}</p>
                    </div>
                    <div class="blog-simple-footer">
                    <span :title="'有'+blog.read+'个人看过这篇文章'"><i
                            class="el-icon-view"></i> <span>({{blog.read}})</span></span>
                        <span :title="'有'+blog.read+'个人觉得很nice'"><i
                                class="el-icon-view"></i> <span>({{blog.read}})</span></span>
                        <router-link :to="'category/'+blog.categoryName"><p>{{blog.categoryName}}</p></router-link>
                    </div>
                </div>
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

    import NavIndex from "@/components/nav-index";
    import NavRight from "@/components/nav-right";
    import Footer from "../components/footer";
    import {indexData, initPage} from "@/method/base";

    export default {
        name: "blog-simple",
        components: {NavIndex, NavRight, Footer},
        data() {
            return {
                pageResult: {},
                currentPage: 0,
            }
        },
        methods: {
            handlePage: function (page) {
                this.$router.push({path: '/', query: {page: page}});
                this.getData(page)
            },
            getData: function (page) {
                indexData(page).then(res => {
                    return res.json();
                }).then(json => {
                    this.pageResult = json;
                    this.$nextTick(() => {
                        this.currentPage = this.pageResult.currentPage;
                    });
                }).catch(() => {
                    this.$router.push({path: '/error'});
                })
            },
            readBlog: function (title, blogId) {
                this.$router.push({name: 'blog', params: {title: title, blogId: blogId}})
            }
        },
        created: function () {
            let page = initPage(this.$route.query.page);
            this.getData(page);
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
