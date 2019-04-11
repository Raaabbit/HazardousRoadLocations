<template>
    <div class="page">
        <!-- 功能介绍 -->
        <div class="m-discribe">
            您可以使用本系统进行文件分析，只需要上传路网信息文件和事故时间文件，我们就能为您预测该地区的事故高发点
        </div>
        <!-- 上下结构，包含输入表单和地图控件 -->
        <div class="m-func">
            <div id="main-form">
                <div>
                    <label for="roadFile">选择道路信息文件</label>
                    <span id="road-file-name">尚未上传文件</span>
                </div>
                <div>
                    <label for="timeFile">选择事故时间文件</label>
                    <span id="time-file-name">尚未上传文件</span>
                </div>
                <div>
                    <div id="submit-btn" @click="updateAll">开始分析</div>
                    <div id="export-btn" @click="exportRes">导出结果</div>
                </div>
                <input type="file" name="roadFile" id="roadFile" accept=".csv" @change="updateRoad">
                <input type="file" name="timeFile" id="timeFile" accept=".csv">
            </div>
            <!-- 地图 -->
            <div id="main-map">

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
        display flex
        justify-content space-between
        width 960px
        margin 30px auto
        #main-form
            width 300px
            div
                display flex
                justify-content space-around
                margin-bottom 20px
            #roadFile,#timeFile
                position absolute
                opacity 0
                width 0
                height 0
        
            label,#submit-btn,#export-btn
                display inline-block
                height 30px
                width 120px
                font-size 14px
                line-height 30px
                border 1px solid #D0EEFF
                background #D0EEFF
                border-radius 4px
                padding 4px 12px
                color #1E88C7
                text-align center
                cursor pointer
            
            label:hover,#submit-btn:hover,#export-btn:hover
                border-color #99D3F5
            
        #road-file-name,#time-file-name{
            display inline-block
            height 30px
            font 14px/30px "sans-serif"
            padding 4px 12px
            width 130px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            color #888e96
        }
        #main-map
            width 630px
            height 500px
            background url('../../assets/tips.gif') no-repeat
        
</style>

<script>
export default {
    data(){
        return {
            map:'',
            centerPoint:'',
            roadFileName:'',
            timeFileName:'',
            initData:'',
            finalData:'',
            mapFill:'' 
        }
    },
    methods:{
        updateRoad(){
            
        },
        updateTime(){
            
        },
        updateAll(){
            
        },
        exportRes(){
            
        }
    }
}
</script>
