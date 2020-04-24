<template>
    <div id="nav-right">
        <div class="nav-right-box">
            <h5>热门标签</h5>
            <div v-for="hot in boxData.hotBlogs" :key="hot.blogId">
                <router-link :to="'blog/'+hot.blogId">
                    <p :title="hot.title">{{hot.title}}</p>
                </router-link>
            </div>
        </div>
        <div class="nav-right-box">
            <h5>最新的</h5>
            <div v-for="last in boxData.newBlogs" :key="last.blogId">
                <router-link :to="'blog/'+last.blogId">
                    <p :title="last.title">{{last.title}}</p>
                </router-link>
            </div>
        </div>
        <div class="nav-right-box">
            <h5>标签</h5>
            <div class="tag-div">
                <el-button v-for="tag in boxData.tags" :key="tag.tagId" size="mini"
                           :title="tag.tagName" @click="goTag(tag.tagId)" round>{{tag.tagName}} ({{tag.count}})
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {boxData} from "@/method/base";

    export default {
        name: "nav-right",
        data() {
            return {
                boxData: {}
            }
        },
        methods: {
            goTag(path) {
                this.$router.push('tag/' + path);
            }
        },
        mounted: function () {
            boxData().then(res => {
                return res.json();
            }).then(json => {
                this.boxData = json;
            });
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
        color: inherit;
    }
    #nav-right {
        float: right;
        cursor: default;
        overflow: hidden;
        text-align: center
    }

    .nav-right-box {
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
        padding-top: 5px;
        width: 260px;
        height: fit-content;
        margin: 10px 20px 0 15px;
    }

    .nav-right-box div {
        text-align: center;
    }

    p {
        overflow: hidden;
        max-width: 200px;
        margin-left: 30px;
        padding-bottom: 5px;
        cursor: pointer;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-bottom: 1px solid #eeeeee;
        color: rgba(0, 0, 0, 0.6);
    }

    p:hover {
        color: #409eff;
    }

    .tag-div {
        margin: 0 10px 10px 18px;
        text-align: left;
    }

    .el-button {
        margin-right: 1px;
        margin-bottom: 5px;
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
