<template>
    <div id="blog-editor">
        <div class="editor-head">
            <el-input v-model="title" placeholder="请输入文章标题"></el-input>
            <el-input v-model="description" placeholder="请输入文章概述"></el-input>
            <el-select v-model="categoryId" placeholder="请选择类别">
                <el-option v-for="option in categories" :key="option.categoryId"
                           :label="option.categoryName" :title="option.categoryName" :value="option.categoryId">
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
    import {editor, categories, blogData, putBlog} from "../../method/base";

    export default {
        name: "editor.vue",
        components: {MarkdownPro},
        data() {
            return {
                title: '',
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
                //如果有id值，说明此次动作是更新
                if (this.$route.query.blogId) {
                    formData.append("blogId", this.$route.query.blogId);
                    putBlog(formData).then(res => {
                        return res.json();
                    }).then(json => {
                        console.log(json);
                    });
                }
                editor(formData).then(res => {
                    return res.json();
                }).then(json => {
                    console.log(json);
                }).catch(() => {
                    this.$router.push({path: '/error'});
                });
            }
        },
        created() {
            //获取需修改的文章数据
            if (this.$route.query.blogId) {
                blogData(Number.parseInt(this.$route.query.blogId)).then(res => {
                    return res.json();
                }).then(json => {
                    //得到数据后设置默认值
                    this.title = json.title;
                    this.description = json.description;
                    this.content = json.content;
                    this.categoryId = json.categoryId;
                });
            }
            categories(0).then(res => {
                return res.json();
            }).then(json => {
                this.categories = json.list;
                console.log(this.categories);
            }).catch(() => {
                this.$router.push({path: '/error'});
            });
            //初始化左侧导航栏
            this.$emit('navigation', '2-2');
        }
    }
</script>

<style scoped>
    .markdown {
        text-align: left;
    }

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
