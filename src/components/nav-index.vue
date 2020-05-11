<template>
    <div id="nav-top">
        <el-menu :default-active='activeIndex' class="el-menu-demo" @select="handleSelect" mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">分类</el-menu-item>
            <el-menu-item index="3">标签</el-menu-item>
            <el-menu-item index="4">记录</el-menu-item>
            <el-menu-item index="5"><a href="https://github.com/Jasonneeed">Github</a></el-menu-item>
            <el-input class="search-input" placeholder="请输入内容" clearable maxlength="16"
                      @keyup.enter.native="search" prefix-icon="el-icon-search" v-model="keyWord"></el-input>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "nav-index",
        props: {
            activeIndex: {
                type: String
            }
        },
        data() {
            return {
                keyWord: ''
            }
        },
        methods: {
            search() {
                this.$router.push({name: 'search', params: {keyWord: this.keyWord}})
            },
            handleSelect(index) {
                if (index !== this.activeIndex) {
                    switch (index) {
                        case '2':
                            this.$router.push('/category');
                            break;
                        case '3':
                            this.$router.push('/tag');
                            break;
                        case '4':
                            this.$router.push('/record');
                            break;
                        case '5':
                            break;
                        default:
                            this.$router.push('/');
                            break;
                    }
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
