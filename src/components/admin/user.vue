<template>
    <div id="admin-user">
        <el-table :data="pageResult.users" border>
            <el-table-column prop="userId" label="id">
            </el-table-column>
            <el-table-column prop="username" lable="用户名"></el-table-column>
            <el-table-column prop="nickname" label="昵称"></el-table-column>
            <el-table-column prop="status" label="当前状态"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column prop="email" label="邮箱"></el-table-column>
            <el-table-column prop="phone" label="手机号"></el-table-column>
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
    export default {
        name: "user",
        data(){
            return {
                pageResult: {},
                currentPage: 1
            }
        }
    }
</script>

<style scoped>

</style>
