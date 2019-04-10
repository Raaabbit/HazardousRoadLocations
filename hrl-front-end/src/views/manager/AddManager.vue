<template>
    <div class="page">
        <div class="m-discribe">
            亲爱的管理员，您有权升级普通用户为管理员或者邀请他人成为管理员，请慎重操作
        </div>
        <div class="m-func">
            <el-tabs type="border-card" stretch>
                <el-tab-pane label="普通用户升级">
                    <el-form :model="upgradeForm" class="modal-form" label-width="90px" label-position="left">
                        <el-form-item label="输入用户名">
                            <el-input v-model="upgradeForm.username" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="btn-group">
                        <el-button >取 消</el-button>
                        <el-button type="primary">添 加</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="添加新管理员">
                    <el-form :model="addManagerForm" class="modal-form" label-width="90px" label-position="left">
                        <el-form-item label="输入用户名">
                            <el-input v-model="addManagerForm.username" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="输入密码">
                            <el-input v-model="addManagerForm.password" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码">
                            <el-input v-model="addManagerForm.passwordConfirm" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="btn-group">
                        <el-button >取 消</el-button>
                        <el-button type="primary">添 加</el-button>
                    </div>
                </el-tab-pane>
            </el-tabs>
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
            display flex
            justify-content space-between
            width 240px
            margin auto
            button 
                width 100px
</style>
<script>
export default {
    data(){
        return {
            upgradeForm:{
                username:""
            },
            addManagerForm:{
                username:"",
                password:"",
                passwordConfirm:""
            }
        }
    },
    methods:{

    }
}
</script>
