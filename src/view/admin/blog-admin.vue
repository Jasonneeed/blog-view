<template>
    <div id="admin-blog-show">
        <admin-nav-left></admin-nav-left>
        <admin-table></admin-table>
    </div>
</template>

<script>

    import AdminNavLeft from "@/components/admin/admin-nav-left";
    import AdminTable from "@/components/admin/admin-table";

    export default {
        name: "blog-admin",
        components: {AdminTable, AdminNavLeft}
    }
</script>

<style scoped>

</style>
