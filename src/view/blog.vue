<template>
    <div id="blog-show">
        <nav-index/>
        <div>
            <h1 style="text-align:center">{{blog.title}}</h1>
            <Markdown :value="blog.content" :is-preview="true"></Markdown>
        </div>
    </div>
</template>

<script>
    import {blogData} from '../method/base';
    import NavIndex from "../components/nav-index";
    import Markdown from "../components/markdown/simple";

    export default {
        name: "blog",
        components: {Markdown, NavIndex},
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
                this.title = this.blog.title;
                console.log(this.blog);
            });
        }
    }
</script>

<style>
    @import "../style/common.css";
    .markdown.border {
        margin: 0 20px 0 20px;
        border: none !important;
        height: fit-content !important;
    }

    .markdown-preview ul li:after {
        display: none !important;
    }
</style>
