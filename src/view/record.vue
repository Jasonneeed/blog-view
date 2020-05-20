<template>
    <el-container>
        <el-header>
            <nav-index v-bind:active-index="activeIndex"></nav-index>
        </el-header>
        <el-main>
<!--            <div class="record-list">-->
<!--                <el-timeline :reverse="true" v-infinite-scroll="load" infinite-scroll-disabled="disabled"-->
<!--                             style="overflow: auto">-->
<!--                    <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.time">-->
<!--                        {{activity.content}}-->
<!--                    </el-timeline-item>-->
<!--                </el-timeline>-->
<!--                <p v-if="loading">加载中</p>-->
<!--                <p v-if="noMore">已经到底了</p>-->
<!--            </div>-->
            <p> 很多东西 TODO</p>
        </el-main>
    </el-container>
</template>

<script>
    import NavIndex from "../components/nav-index";

    export default {
        name: "record",
        components: {NavIndex},
        data() {
            return {
                activeIndex: '4',
                offset: 0,
                date: ["232", "32", "33223", "3232", "322"],
                loading: false,
                activities: [{
                    content: 'diyige',
                    time: '2020-3-3 3:32:33'
                }, {
                    content: 'dierge',
                    time: '2020-3-3 3:3:3'
                }]
            }
        },
        computed: {
            noMore() {
                return this.offset >= this.date.length;
            },
            disabled() {
                return this.loading || this.noMore;
            }
        },
        methods: {
            load() {
                this.loading = true;
                setTimeout(() => {
                    this.offset += 1;
                    this.activities.join({
                        content: '这是第' + this.offset + '个',
                        time: '2020-2-12 12:32:32'
                    });
                    this.loading = false;
                }, 3000);
            }
        }
    }
</script>

<style scoped>
    .el-main {
        height: 100%;
    }

    .record-list {
        height: 100%;
    }
</style>
