<template>
    <div id="index">
        <nav-index></nav-index>
        <div id="blog-description">
            <div class="blog-description-box" v-for="blog in pageResult.list" :key="blog.blogId">
                <div class="blog-simple-top">
                    <router-link :to="'/blog/'+blog.blogId"><p :title="blog.title">{{blog.title}}</p></router-link>
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
                <el-pagination :page-size="pageResult.pageSize" :current-page="pageResult.currentPage"
                               :hide-on-single-page="true" layout="prev, pager, next, jumper" @current-change="getData"
                               :total="pageResult.totalCount">
                </el-pagination>
            </div>
        </div>
        <nav-right></nav-right>
    </div>
</template>

<script>

    import NavIndex from "@/components/nav-index";
    import NavRight from "@/components/nav-right";
    import {indexData} from "@/method/base";

    export default {
        name: "blog-simple",
        components: {NavIndex, NavRight},
        data() {
            return {
                pageResult: {},
            }
        },
        methods: {
            getData:function() {
                console.log(this.pageResult.currentPage);
            }
        },
        created: function () {
            let page;
            if (this.$route.query.page) {
                page = this.$route.query.page;
            }else{
                page = 0;
            }
            indexData(page).then(res => {
                return res.json();
            }).then(json => {
                this.pageResult = json;
            })
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: inherit;
    }

    #blog-description {
        float: left;
        margin: 0 0 0 20px;
        min-width: 300px;
        width: 70%;
    }

    .blog-description-box {
        border-radius: 3px;
        margin: 10px 0 0 0;
        padding: 10px 20px 0 20px;
        box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
        cursor: default;
    }

    .blog-simple-top {
        overflow: hidden;
        margin: 0 0 10px 0;
    }

    .blog-simple-top p {
        float: left;
        left: 30px;
        margin: 0;
        max-width: 40%;
        font-weight: bolder;
        font-size: 20px;
        cursor: pointer;
    }

    .blog-simple-top p:hover {
        color: #409eff;
    }

    .blog-simple-top span {
        float: right;
        right: 20px;
        font-size: medium;
    }

    .blog-simple-content {
        text-align: left;
        cursor: text;
        margin: 0 0 15px 0;
    }

    .blog-simple-content p {
        max-width: 95%;
    }

    p {
        display: inline-block;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .blog-simple-footer {
        overflow: hidden;
        text-align: left;
        color: #808993;
    }

    .blog-simple-footer span {
        margin: 0 10px 0 0;
    }

    .blog-simple-footer p {
        float: right;
        cursor: default;
        margin: 0 0 10px 0;
        color: #545c64;
        max-width: 200px;
    }

    .blog-simple-footer p:hover {
        cursor: pointer;
        color: #409eff;
    }

    .blog-page {
        margin-top: 20px;
    }
</style>
