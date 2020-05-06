<template>
    <div id="admin-blog">
        <el-table :data="pageResult.list" border>
            <el-table-column prop="blogId" label="id"></el-table-column>
            <el-table-column prop="username" label="作者"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="description" label="概述"></el-table-column>
            <el-table-column prop="categoryName" label="所属类别"></el-table-column>
            <el-table-column prop="enabledComment" label="评论权限"></el-table-column>
            <el-table-column prop="status" label="当前状态"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column prop="updateTime" label="更新时间"></el-table-column>
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <el-button @click="update(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="delete(scope.row)" type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination :page-size="pageResult.pageSize" :current-page="currentPage"
                       :hide-on-single-page="true" layout="prev, pager, next, jumper"
                       @current-change="handlePage"
                       :total="pageResult.totalCount">
        </el-pagination>
    </div>
</template>

<script>
    import {adminBlogData, initPage} from "../../method/base";

    export default {
        name: "blog",
        data() {
            return {
                pageResult: {},
                currentPage: 1
            }
        },
        methods: {
            handlePage: function (page) {
                this.$router.push({path: this.$route.path, query: {page: page}});
                this.getData(page)
            },
            getData: function (page) {
                adminBlogData(page).then(res => {
                    return res.json();
                }).then(json => {
                    this.pageResult = json;
                    this.$nextTick(() => {
                        this.currentPage = this.pageResult.currentPage;
                        console.log(this.pageResult);
                    });
                }).catch(() => {
                    this.$router.push({path:'/error'});
                })
            }
        },
        created() {
            let page = initPage(this.$route.query.page);
            this.getData(page);
        }
    }
</script>

<style scoped>

</style>
