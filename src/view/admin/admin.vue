<template>
    <div id="admin-show">
        <admin-nav-left></admin-nav-left>
        <div id="admin-content">
            <router-view></router-view>
        </div>
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
        display: inline-block;
        position: absolute;
        left: 0;
    }

    #admin-content {
        display: inline;
        position: absolute;
        left: 300px;
        padding-bottom: 20px;
    }


</style>
