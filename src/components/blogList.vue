<template>
    <div>
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

    </div>
</template>

<script>
    export default {
        name: "blogList",
        props: {
            pageResult: {
                type: Object,
                default: function () {
                    return {
                        list: {
                            type: Array
                        }
                    }
                }
            },
            currentPage: {
                type: Number,
                default: 0
            }
        },
        methods: {
            getData: function () {
                this.$emit('get-data', this.currentPage);
            },
            readBlog: function (title, blogId) {
                this.$router.push({name: 'blog', params: {title: title, blogId: blogId}})
            }
        }
    }
</script>

<style scoped>

</style>
