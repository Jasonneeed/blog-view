<template>
    <div id="admin-nav">
        <el-row>
            <h3 style="text-align: center"> welcome</h3>
            <el-menu :default-active="activeIndex"
                     background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
                     @open="handleOpen" @close="handleClose" @select="handleData">
                <el-menu-item index="1">
                    <i class="el-icon-document"></i>
                    <span slot="title">文章管理</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-user"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1"><i class="el-icon-user"></i>查看用户数据</el-menu-item>
                        <el-menu-item index="2-2"><i class="el-icon-user"></i>查看用户数据</el-menu-item>
                        <el-menu-item index="2-3"><i class="el-icon-user"></i>查看用户数据</el-menu-item>
                        <el-menu-item index="2-4"><i class="el-icon-user"></i>查看用户数据</el-menu-item>
                        <el-menu-item index="2-5"><i class="el-icon-user"></i>查看用户数据</el-menu-item>
                        <el-menu-item index="2-6"><i class="el-icon-user"></i>查看用户数据</el-menu-item>
                        <el-menu-item index="2-7"><i class="el-icon-user"></i>查看用户数据</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">类别管理</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-aim"></i>
                    <span slot="title">标签管理</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <i class="el-icon-aim"></i>
                    <span slot="title">日志管理</span>
                </el-menu-item>
            </el-menu>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'admin-nav-left',
        props: {
            activeIndex: {
                type: String
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                this.activeIndex = key;
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                this.activeIndex = key;
                console.log(key, keyPath);
            },
            handleData(key) {
                if (this.activeIndex !== key) {
                    switch (key) {
                        case '1':
                            this.$router.push('/tmcaibudao/admin/blog');
                            break;
                        case '3':
                            this.$router.push('/tmcaibudao/admin/category');
                            break;
                        case '4':
                            this.$router.push('/tmcaibudao/admin/tag');
                            break;
                        case '5':
                            this.$router.push('/tmcaibudao/admin/log');
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
</script>
<style scoped>
    #admin-nav {
        width: 200px;
        color: aliceblue;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: #545c64;
    }
    #admin-nav::-webkit-scrollbar{
        display: none;
    }

    .el-menu {
        border-right: none;
        text-align: left;
    }
</style>
