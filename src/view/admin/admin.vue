<template>
    <div id="admin-show">
        <el-container>
            <el-aside width="200px">
                <admin-nav-left :active-index="activeIndex"/>
            </el-aside>
            <el-container>
                <el-header>
                    <p>这是头</p>
                </el-header>
                <el-main class="admin-body">
                    <router-view @navigation="resetNav"></router-view>
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
        data() {
            return {
                activeIndex: ''
            }
        },
        methods: {
            resetNav(index) {
                this.activeIndex = index;
            }
        },
        created() {
            // let token = localStorage.getItem('token');
            console.log('这是路由'+this.$route.meta.authentication);
            // if (token === undefined || token === null) {
            //     this.$router.push('/tmcaibudao/login');
            // }
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

    .admin-body {
        text-align: center;
    }

</style>
