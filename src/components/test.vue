<template>
    <div>
        <p @click="myclick">{{d}}</p>
    </div>
</template>

<script>
    export default {
        name: "test.vue",
        props: {
            d: {
                type:String,
                default:'这是子组件的值'
            }
        },
        methods:{
            myclick:function () {
                this.$emit('my-click');
            }
        }
    }
</script>

<style scoped>

</style>
