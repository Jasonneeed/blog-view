<template>
    <div id="nav-top">
        <el-menu default-active='1' class="el-menu-demo" @select="handleSelect" mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">处理中心</el-menu-item>
            <el-menu-item index="3"><a href="https://github.com/Jasonneeed">Github</a></el-menu-item>
            <el-menu-item index="4">记录</el-menu-item>
            <el-input class="search-input" placeholder="请输入内容" clearable maxlength="16"
                      @keyup.enter.native="search" prefix-icon="el-icon-search" v-model="searchKey"></el-input>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "nav-index",
        data() {
            return {
                searchKey: ''
            }
        },
        methods: {
            search() {
                this.$router.push({path:'/search',query:{key:this.searchKey}})
            },
            handleSelect(activeIndex) {
                console.log(typeof (activeIndex));
                switch (activeIndex) {
                    case '2':
                        this.$router.push('/central');
                        break;
                    case '3':
                        break;
                    case '4':
                        this.$router.push('/record');
                        break;
                    default:
                        this.$router.push('/');
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    #nav-top {
        margin-left: 10px;
        margin-right: 10px;
        padding: 10px;
    }

    .search-input {
        width: 260px;
        min-width: 200px;
        float: right;
        top: 10px;
    }

    a {
        text-decoration: none;
    }
</style>
