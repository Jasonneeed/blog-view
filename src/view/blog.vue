<template>
    <div id="blog-show">
        <nav-index/>
        <div>
            <h1 style="text-align:center">{{blog.title}}</h1>
            <markdown-preview :value="blog.content" :isPreview='true'></markdown-preview>
        </div>
    </div>
</template>

<script>
    import MarkdownPreview from 'vue-meditor';
    import {blogData} from '../method/base';
    import NavIndex from "../components/nav-index";

    export default {
        name: "blog",
        components: {NavIndex, MarkdownPreview},
        data() {
            return {
                blog: {}
            }
        },
        created: function () {
            let blogId = this.$route.params.blogId;
            blogData(blogId).then(res => {
                return res.json();
            }).then(json => {
                this.blog = json;
                    document.title = this.blog.title;
                console.log(this.blog);
            });
        }
    }
</script>

<style scoped>
    .markdown.border {
        margin: 0 20px 0 20px;
        border: none;
        height: fit-content !important;
    }
    .markdown-preview ul li:after{
        background: white !important;
    }
</style>
