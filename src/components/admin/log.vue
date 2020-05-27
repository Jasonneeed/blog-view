<template>
    <div id="admin-log">
        <el-table :data="pageResult.list" border >
            <el-table-column prop="categoryId" label="id">
            </el-table-column>
            <el-table-column prop="categoryName" label="类别"></el-table-column>
            <el-table-column prop="categoryDescription" label="概述"></el-table-column>
            <el-table-column prop="status" label="当前状态"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column fixed="right" label="操作">
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

    import {initPage} from "../../method/base";

    export default {
        name: "log",
        data(){
            return {
                pageResult:{},
                currentPage:1
            }
        },
        methods:{
            handlePage: function (page) {
                this.$router.push({path: this.$route.path, query: {page: page}});
                this.getData(page)
            },
            getData(page){
                //todo
                console.log(page);
            },
            update(obj){
                //todo
                console.log(obj);
            },
            delete(obj){
                //todo
                console.log(obj);
            }
        },
        created() {
            let page = initPage(this.$route.query.page);
            this.getData(page);
            this.$emit('navigation', '5');
        }
    }
</script>

<style scoped>

</style>
