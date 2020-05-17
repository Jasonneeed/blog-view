<template>
    <div id="admin-nav">
        <el-row>
            <h3 style="text-align: center"> welcome</h3>
            <el-menu default-active="1"
                     background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
                     @open="handleOpen" @close="handleClose" >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-user"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1"><i class="el-icon-user"></i>查看用户数据</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-document"></i>
                <span slot="title">日志管理</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">类别管理</span>
                </el-menu-item>
                <el-menu-item>
                    <i class="el-icon-aim"></i>
                    <span slot="title">标签管理</span>
                </el-menu-item>
            </el-menu>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'admin-nav-left',
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style scoped>
    #admin-nav {
        width: 230px;
        height: 100%;
        color: aliceblue;
        position: static !important;
        background-color: #545c64;
    }

    .el-menu{
        border-right: none;
        text-align: left;
    }
</style>
