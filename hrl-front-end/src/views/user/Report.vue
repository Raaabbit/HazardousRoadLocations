<template>
    <div class="page">
        <!-- 功能介绍 -->
        <div class="m-discribe">
            您可以在这里向我们提出反馈，我们会尽快进行处理并回复
        </div>
        <div class="m-func">
            <el-form>
                <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
                v-model="message">
                </el-input>
                <div class="btn-group">
                    <el-button type="primary" plain>清空</el-button>
                    <el-button type="primary">提交</el-button>
                </div>
            </el-form>
            <!-- 收到的回复 -->
            <div class="answer-list">
                <div v-for="item in answerList" :key="item.time">
                    <p class="msg">消息：{{item.report}}</p>
                    <p class="res">官方回复：{{item.answer}}</p>
                    <p class="res-time">回复时间：{{item.time}}</p>
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
    .m-func
        width 960px
        margin 30px auto
        .btn-group
            overflow hidden
            margin-top 20px
            button
                float right 
                width 120px
                margin 0 10px
        .answer-list
            margin-top 30px
            border 2px solid #DCDFE6
            border-width 2px 0
            div
                padding 20px
                .msg
                    font-size 16px
                    color #303133
                .res
                    margin 10px 30px 0
                    margin-left 30px
                    font-size 14px
                    color #606266
                .res-time
                    text-align right 
                    font-size 12px
                    color #909399

            div+div
                border-top 1px solid #EBEEF5
</style>

<script>
export default {
    data(){
        return {
            message:"",
            answerList:[
                {
                    report:"地图不够清晰，标注点不够精确",
                    answer:"我们会进一步优化算法，感谢您的使用",
                    time:"2019-4-9 12:00"
                },
                {
                    report:"项目启动，对于国外数据，如何保持地图标注准确？",
                    answer:"对于国内的地图，采取百度地图的API；对于国外数据可以采用百度全球位置服务或者谷歌地图API",
                    time:"2019-4-1 10:05"
                }
            ]
        }
    }
}
</script>
