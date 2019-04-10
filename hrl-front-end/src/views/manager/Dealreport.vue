<template>
    <div class="page">
        <div class="m-discribe">
            亲爱的管理员，请及时回答用户的疑问；恶意评论请直接删除
        </div>
        <div class="m-tips" v-if="msgList.length == 0">
            暂时没有待审核的消息
        </div>
        <div class="msg-list" v-else-if="msgList.length > 0">
            <div v-for="(item,index) in msgList" :key="index">
                <p class="msg">来自用户{{item.username}}的消息：{{item.msg}}</p>
                <div class="answer-editer">    
                    <el-input class="answer-input" placeholder="请输入回复"></el-input>
                    <el-button type="primary" plain>回复</el-button>
                    <el-button type="danger" plain>删除</el-button> 
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
.page
    .m-discribe
        height 325px
        background  #010101 url('../../assets/map-banner.jpg') no-repeat center
        background-size 2000px 420px
        color #fff
        text-align center
        font-size 18px
        line-height 300px
    .m-tips
        text-align center
        font-size 20px
        line-height 180px
        color #909399
    .msg-list
        width 960px
        margin 30px auto
        border 2px solid #DCDFE6
        border-width 2px 0
        >div
            padding 20px
            .msg
                font-size 16px
                color #303133
        div+div
            border-top 1px solid #EBEEF5
        .answer-editer
            display flex
            justify-content space-between
            width 100%
            margin 10px 0
            font-size 14px
            button
                margin-left 30px
</style>
<script>
export default {
    data(){
        return {
            msgList:[
                {
                    username:"测试人员1",
                    msg:"请问BSI系统是如何绘制地图的？地图精确吗？"
                },
                {
                    username:"测试人员2",
                    msg:"请问BSI系统绘制的地图精确吗？可以用来导航吗"
                }
            ]
        }
    },
    methods:{

    },
    created(){
        // 发请求，判断是否有要回复的消息
    }
}
</script>
