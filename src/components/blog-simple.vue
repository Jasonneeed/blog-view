<template>
    <div id="blog-description">
        <div class="blog-description-box" v-for="blog in pageResult.blogs" :key="blog.blogId">
            <div class="blog-simple-top">
                <p :title="blog.title" @click="readBlog(blog.blogId)">{{blog.title}}</p>
                <span>{{blog.createTime}}</span>
            </div>
            <div class="blog-simple-content">
                <p>{{blog.description}}</p>
            </div>
            <div class="blog-simple-footer">
                <span :title="'有'+blog.read+'个人看过这篇文章'"><i class="el-icon-view" ></i> <span>({{blog.read}})</span></span>
                <span :title="'有'+blog.read+'个人觉得很nice'"><i class="el-icon-view" ></i> <span>({{blog.read}})</span></span>
                <p>{{blog.title}}</p>
            </div>
        </div>
        <div class="blog-page">
            <el-pagination :page-size="pageResult.pageSize" :current-page="pageResult.currentPage"
                           :hide-on-single-page="true" layout="prev, pager, next, jumper" @current-change="getData"
                           :total="pageResult.total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blog-simple",
        data() {
            return {
                pageResult: {
                    blogs: [
                        {
                            'blogId': 1,
                            'title': '第一篇文章',
                            'read': 32,
                            'description': 'sfasdfadsf',
                            'createTime': '2020-2-3'
                        },
                        {
                            'blogId': 2,
                            'title': '第二篇文章aaaaaaasddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                            'read': 322,
                            'description': 'sfafdafssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                            'createTime': '2020-3-22'
                        }
                    ],
                    currentPage: 2,
                    total: 32,
                    pageSize: 8
                }
            }
        },
        methods: {
            getData(page) {
                alert(page);
            },
            readBlog(arg){
                alert(arg);
            },
            getCategory(arg){
                alert(arg);
            }
        }
    }
</script>

<style scoped>
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
        color: #42b983;
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
        color: #42b983;
    }
    .blog-page{
        margin-top: 20px;
    }
</style>
