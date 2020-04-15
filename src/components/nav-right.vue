<template>
    <div id="nav-right">
        <div class="nav-right-box">
            <h5>热门标签</h5>
            <div v-for="hot in hotBlogs" :key="hot.blogId">
                <p :title="hot.title">{{hot.title}}</p>
            </div>
        </div>
        <div class="nav-right-box">
            <h5>最新的</h5>
            <div v-for="last in newBlogs" :key="last.blogId">
                <p :title="last.title">{{last.title}}</p>
            </div>
        </div>
        <div class="nav-right-box">
            <h5>标签</h5>
            <div class="tag-div">
                <el-button v-for="tag in tags" :key="tag.tagId" size="mini"
                           :title="tag.name" @click="goTag(tag.tagId)" round>{{tag.name}}
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "nav-right",
        data() {
            return {
                hotBlogs: [
                    {'blogId': 1, 'title': '这是最火的wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'},
                    {'blogId': 2, 'title': '这是第二个'}
                ],
                newBlogs: [
                    {'blogId': 1, 'title': '这是最最最最最最最最最最最最最最最新的'},
                    {'blogId': 2, 'title': '下面没了'}
                ],
                tags: [
                    {'tagId': 1, 'name': 'diyige'},
                    {'tagId': 2, 'name': '第一个'},
                    {'tagId': 3, 'name': 'sprisssssssssssssssssssssssng'},
                    {'tagId': 4, 'name': 'spring'},
                    {'tagId': 5, 'name': 'spg'},
                    {'tagId': 6, 'name': 'spg'},
                    {'tagId': 7, 'name': 'spring'},
                ]
            }
        },
        methods: {
            goTag(path) {
                alert(path);
            }
        }
    }
</script>

<style scoped>
    #nav-right {
        float: right;
        cursor: default;
        overflow: hidden;
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
