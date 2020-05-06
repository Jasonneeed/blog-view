<template>
    <div id="blog-editor">
        <div class="editor-head">
            <el-input v-model="title" placeholder="请输入文章标题"></el-input>
            <el-input v-model="description" placeholder="请输入文章概述"></el-input>
            <el-select v-model="categoryId" placeholder="请选择类别">
                <el-option v-for="option in categories" :key="option.categoryId"
                           :label="option.categoryName" :value="option.categoryId">
                </el-option>
            </el-select>
        </div>
        <MarkdownPro v-model="content"></MarkdownPro>
        <div class="editor-button">
            <el-button @click="saveBlog" type="primary">保存</el-button>
            <el-button type="info">取消</el-button>
        </div>
    </div>
</template>

<script>
    import MarkdownPro from "../markdown/pro";
    import {editor, categories} from "../../method/base";

    export default {
        name: "editor.vue",
        components: {MarkdownPro},
        data() {
            return {
                title:'',
                description: '',
                content: '',
                categoryId: '',
                categories: {}
            }
        },
        methods: {
            saveBlog: function () {
                let formData = new FormData();
                formData.append("title", this.title);
                formData.append("content", this.content);
                formData.append("description", this.description);
                formData.append("categoryId", this.categoryId);
                editor(formData).then(res=>{
                    return res.json();
                }).then(json=>{
                    console.log(json);
                });
            }
        },
        created() {
            categories().then(res=>{
                return res.json();
            }).then(json=>{
                this.categories = json.data;
                console.log(this.categories);
            });
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
