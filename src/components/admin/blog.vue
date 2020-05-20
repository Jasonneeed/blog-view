<template>
    <div id="admin-blog">
        <el-table :data="pageResult.list" v-loading="loading" border>
            <el-table-column prop="blogId" label="id"></el-table-column>
            <el-table-column prop="username" label="作者"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="description" label="概述"></el-table-column>
            <el-table-column prop="categoryName" label="所属类别"></el-table-column>
            <el-table-column prop="enabledComment" label="评论权限"></el-table-column>
            <el-table-column prop="status" label="当前状态"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column prop="updateTime" label="更新时间"></el-table-column>
            <el-table-column label-class-name="table-button" fixed="right" label="操作">
                <template slot-scope="scope">
                    <el-button @click="update(scope.row)" type="primary" size="small">编辑</el-button>
                    <el-button @click="del(scope.row)" type="danger" size="small">删除</el-button>
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
    import {adminBlogData, blogDelete, initPage} from "../../method/base";

    export default {
        name: "blog",
        data() {
            return {
                pageResult: {},
                currentPage: 1,
                loading: false
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
                    this.$router.push({path: '/error'});
                })
            },
            del: function (blog) {
                this.$confirm('此操作将永久删除该记录', 'warning', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.loading = true;
                    let formData = new FormData();
                    formData.append("blogId", blog.blogId);
                    blogDelete(formData).then(res => {
                        return res.json();
                    }).then(json => {
                        if (json.code === 200) {
                            this.$message({
                                type: 'success',
                                message: '删除成功'
                            });
                            this.getData(this.currentPage);
                        } else {
                            this.$message({
                                type: 'warning',
                                message: json.message
                            });
                        }
                        this.loading = false;
                    }).catch(res => {
                        console.log(res);
                    });
                });
            },
            update: function (blog) {
                //todo 待更新
                alert(blog.blogId);
            }
        },
        created() {
            let page = initPage(this.$route.query.page);
            this.getData(page);
        }
    }
</script>

<style scoped>
    @import "../../style/table.css";

    .el-pagination {
        text-align: center;
    }

    .table-button {
        text-align: center;
    }

    .el-button + .el-button {
        margin-left: 0;
    }
</style>
