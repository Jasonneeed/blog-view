<template>
    <div id="blog-editor">
        <MarkdownPro v-model="content"></MarkdownPro>
        <div class="editor-button">
            <el-button @click="saveBlog" type="primary">保存</el-button>
            <el-button type="info">取消</el-button>
        </div>
    </div>
</template>

<script>
    import MarkdownPro from "../markdown/pro";

    export default {
        name: "editor.vue",
        components: {MarkdownPro},
        data() {
            return {
                content: ''
            }
        },
        methods: {
            saveBlog: function () {
                console.log("saveBlog");
                console.log(this.content);
            }
        }
    }
</script>

<style scoped>

    .markdown.border {
        width: 100%;
        margin: 50px 0 0 0;
        height: 450px !important;
    }

    .editor-button {
        margin: 10px 0 0 0;
        text-align: right;
    }
</style>
