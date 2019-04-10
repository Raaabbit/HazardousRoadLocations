<template>
    <div class="page">
        <div class="m-discribe">
            亲爱的管理员，您可以添加经过认证的城市道路黑点信息供普通用户使用
        </div>
        <div class="m-func">
            <el-card>
                <el-form class="m-form">
                <el-form-item label="国家名称">
                    <el-input v-model="countryName"></el-input>
                </el-form-item>
                <el-form-item label="城市名称">
                    <el-input v-model="cityName"></el-input>
                </el-form-item>
                <div>
                    <label for="bpFile">选择道路信息文件</label>
                    <input type="file" name="bpFile" id="bpFile" accept=".json">
                    <span id="bpFileName">尚未上传文件</span>
                </div>
                <div class="btn-group">
                    <el-button >取 消</el-button>
                    <el-button type="primary">添 加</el-button>
                </div>
            </el-form>
            </el-card>
            
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
        .m-form
            width 600px
            margin auto
        label 
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
        label:hover
            border-color #99D3F5
        #bpFile
            position absolute
            opacity 0
            width 0
            height 0
        #bpFileName
            display inline-block
            height 30px
            font 14px/30px "sans-serif"
            padding 4px 12px
            width 130px
            color #888e96
        .btn-group
            display flex
            justify-content space-between
            width 240px
            margin 10px auto
            button 
                width 100px
</style>
<script>
export default {
    data(){
        return {
            countryName:"",
            cityName:"",
            fileList:[]
        }
    },
    methods:{

    },
    created(){
        // 发请求，判断是否有要回复的消息
    }
}
</script>
