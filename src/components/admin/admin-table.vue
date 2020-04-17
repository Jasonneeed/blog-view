<template>
    <div id="admin-content">
        <div class="admin-table">
            <el-table :data="pageResult.tableDatas" border style="width: 100%">
                <el-table-column v-for="column in pageResult.columns" :key="column.key"
                                 :prop="column.key" :label="column.value">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="200px">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="primary" size="small">修改</el-button>
                        <el-button @click="delOperation(scope.row)" type="danger" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div>
            <el-pagination :page-size="pageResult.pageSize" layout="prev, pager, next, jumper"
                           :hide-on-single-page="true" @current-change="requestData"
                           :current-page="pageResult.currentPage" :total="pageResult.totalPage">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "admin-table",
        data() {
            return {
                pageResult: {
                    columns: [
                        {key: 'name', value: '名字'},
                        {key: 'createTime', value: '时间'}
                    ],
                    tableDatas: [
                        {name: 'Jason', createTime: '2001年2月2日'},
                        {name: 'Rothschild', createTime: '2004年3月3日'}
                    ],
                    pageSize: 8,
                    currentPage: 1,
                    totalPage: 9,
                    type: "blog"
                }
            }
        },
        methods: {
            handleClick(arg) {
                alert(arg.name)
            },
            delOperation(arg) {
                this.$confirm(arg.name + '记录删除后不可恢复，是否继续？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '操作成功'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消删除'
                    });
                });
            },
            requestData(val) {
                if (this.pageResult.type === "blog") {
                    console.log(val);
                }
            }
        },
        mounted: {

        }
    }
</script>

<style scoped>
    #admin-content {

    }

    .admin-table {
        text-align: center;
    }
</style>
