<template>
    <div class="page">
        <!-- 功能介绍 -->
        <div class="m-discribe">
            我们已经录入了部分城市的事故高发点信息，您可以在这里进行查看
        </div>
        
        <div class="m-func">
            <el-form class="m-func-form">
                <el-form-item label="选择国家">
                    <el-select v-model="countrySelected" @change="countryChange">
                        <el-option v-for="item in countryList" :key="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                
                <el-form-item label="选择城市">
                    <el-select v-model="citySelected" @change="cityChange">
                        <el-option v-for="item in cityList" :key="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <div class="btn-group">
                    <el-button type="primary" plain @click="search">查 询</el-button>
                    <el-button type="primary" plain @click="exportRes">导 出</el-button>
                </div> 
            </el-form>
            <!-- 占位图片或地图 -->
            <div class="m-func-map">
                <div id="main-map">

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
        display flex
        justify-content space-between
        width 960px
        margin 30px auto
        .m-func-form
            width 300px
            height 500px
            .btn-group
                display flex
                justify-content space-around
            button
                width 100px
        .m-func-map
            width 630px
            height 500px
            #main-map
                height 100%
                background-image url("../../assets/tips.gif")
</style>

<script>
export default {
    data(){
        return {
            map:"",
            form:"",
            countrySelected:"",
            citySelected:"",
            countryList:[],
            cityList:[],
            mapData:[]
        }
    },
    created(){
        this.$axios({
            method:"post",
            url:"/countrylist/"
        }).then((res)=>{
            this.countryList = res.data.countryList;
        }).catch((err)=>{
            console.log(err);
        })
    },
    methods:{
        search(){
            this.$axios({
                method:"post",
                url:"/bplist/",
                data:{
                    country:this.countrySelected,
                    city:this.citySelected
                }
            }).then((res)=>{
                this.mapData = JSON.parse(res.data.info)
                this.map = new BMap.Map("main-map");
                let points = [];
                let pointData = this.mapData
                for (let i in pointData) {
                    let point = new BMap.Point(pointData[i].bp_lon,pointData[i].bp_lat);
                    points.push(point);
                }
                this.map.centerAndZoom(points[0], 12);
                for (let j in points) {
                    let marker = new BMap.Marker(points[j]);
                    this.map.addOverlay(marker);
                }
            }).catch((err)=>{
                console.log(err);
            })
        },
        exportRes(){
            let expData = new Blob([JSON.stringify(this.mapData)],{type:'application/json'});
            let aTag = document.createElement('a');
            aTag.download = 'res.json';
            aTag.href = URL.createObjectURL(expData);
            aTag.click();
            URL.revokeObjectURL(expData);
        },
        countryChange(){
            this.$axios({
                method:"post",
                url:"/citylist/",
                data:{
                    country:this.countrySelected
                }
            }).then((res)=>{
                this.cityList = res.data.cityList
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
}
</script>
