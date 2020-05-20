<template>
    <div id="admin-show">
        <el-container>
            <el-aside width="200px">
                <admin-nav-left v-bind:active-index="activeIndex"/>
            </el-aside>
            <el-container>
                <el-header>
                    <p>这是头</p>
                </el-header>
                <el-main class="admin-body">
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
        components: {AdminNavLeft},
        data(){
            return {
                activeIndex: "1-1"
            }
        }
    }
</script>

<style scoped>

    #admin-content {
        display: inline;
        position: absolute;
        left: 300px;
        padding-bottom: 20px;
    }

    .admin-body{
        position: absolute;
        text-align: center;
    }

</style>
