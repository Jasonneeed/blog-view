<template>
    <div id="admin-show">
        <el-container>
            <el-aside width="300px">
                <admin-nav-left/>
            </el-aside>
            <el-container>
                <el-header>
                    <p>这是头</p>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import AdminNavLeft from "../../components/admin/admin-nav-left";

    export default {
        name: "admin",
        components: {AdminNavLeft}
    }
</script>

<style scoped>
    #admin-nav {
        position: absolute;
    }

    #admin-content {
        display: inline;
        position: absolute;
        left: 300px;
        padding-bottom: 20px;
    }


</style>
