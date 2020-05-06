<template>
    <div id="admin-category">
        <el-table :data="pageResult.categories" border >
            <el-table-column prop="categoryId" label="id">
            </el-table-column>
            <el-table-column prop="categoryName" label="类别"></el-table-column>
            <el-table-column prop="categoryDescription" label="概述"></el-table-column>
            <el-table-column prop="status" label="当前状态"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column fixed="right" lalle="操作">
                <template slot-scope="scope">
                    <el-button @click="update(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="delete(scope.row)" type="danger" size ="small">删除</el-button>
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
        name: "category",
        data(){
            return {
                pageResult:{},
                currentPage:1
            }
        }
    }
</script>

<style scoped>

</style>
