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
                <p class="msg">来自用户{{item.username}}的消息：{{item.report}}</p>
                <div class="answer-editer">    
                    <el-input class="answer-input" placeholder="请输入回复" v-model="item.answer"></el-input>
                    <el-button type="primary" plain @click="dealReport(index)">回复</el-button>
                    <el-button type="danger" plain @click="deleteReport(index)">删除</el-button> 
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
            managerName:JSON.parse(localStorage.getItem('hrl-login-info')).username,
            msgList:[]
        }
    },
    methods:{
        setMsgList(){
            this.$axios({
                method:"post",
                url:"/reportlist/",
                data:{
                    username:this.managerName
                }
            }).then((res)=>{
                let data = res.data;
                if (data.code == 1) {
                    this.msgList = data.messageList;
                }
            }).catch((err)=>{
                console.log(err);
            })
        },
        dealReport(index){
            this.$axios({
                method:"post",
                url:"/answer/",
                data:{
                    user:this.msgList[index].user,
                    report:this.msgList[index].report,
                    manager:this.managerName,
                    answer:this.msgList[index].answer
                }
            }).then((res)=>{
                let data = res.data;
                if (data.code == 1) {
                    alert(data.info)
                }
                this.setMsgList()
            }).catch((err)=>{
                console.log(err);
            })
            
        },
        deleteReport(index){
            this.$axios({
                method:"post",
                url:"/deletemsg/",
                data:{
                    user:this.msgList[index].user,
                    report:this.msgList[index].report
                }
            }).then((res)=>{
                let data = res.data;
                if (data.code == 1) {
                    alert(data.info)
                }
                this.setMsgList()
            }).catch((err)=>{
                console.log(err);
            })
            
        }
    },
    created(){
        // 发请求，判断是否有要回复的消息
        this.setMsgList()
    }
}
</script>
