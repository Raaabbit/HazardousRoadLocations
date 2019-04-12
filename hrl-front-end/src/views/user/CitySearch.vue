<template>
    <div class="page">
        <!-- 功能介绍 -->
        <div class="m-discribe">
            我们已经录入了部分城市的事故高发点信息，您可以在这里进行查看
        </div>
        
        <div class="m-func">
            <el-form class="m-func-form">
                <el-form-item label="选择国家">
                    <el-select v-model="countrySelected">
                        <el-option v-for="item in countryList" :key="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                
                <el-form-item label="选择城市">
                    <el-select v-model="citySelected">
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
                <div class="img-tip" v-if="mapData.length == 0">
                </div>
                <div id="main-map" v-else-if="mapData.length > 0">

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
            // background #E4E7ED
            .img-tip
                height 100%
                background-image url("../../assets/tips.gif")
            #main-map
                height 100%
</style>

<script>
export default {
    data(){
        return {
            map:"",
            form:"",
            countrySelected:"",
            citySelected:"",
            countryList:["America"],
            cityList:["Alameda","Contra Costa","Fresno"],
            mapData:{
                "Alameda":[{"bp_num": 1.0, "bp_lon": -122.1390599, "bp_lat": 37.68806989, "bp_r": 378.4},{"bp_num": 2.0, "bp_lon": -122.2759599, "bp_lat": 37.80864997, "bp_r": 309.0},{"bp_num": 3.0, "bp_lon": -122.2190689, "bp_lat": 37.77437882, "bp_r": 301.4},{"bp_num": 4.0, "bp_lon": -121.9732154, "bp_lat": 37.54055684, "bp_r": 263.2},{"bp_num": 5.0, "bp_lon": -122.0692214, "bp_lat": 37.60409978, "bp_r": 200.0}],
                "Contra Costa":[{"bp_num": 1.0, "bp_lon": -122.0460109, "bp_lat": 37.9709652, "bp_r": 302.1},{"bp_num": 2.0, "bp_lon": -122.32918, "bp_lat": 37.96006996, "bp_r": 240.8},{"bp_num": 3.0, "bp_lon": -122.0674258, "bp_lat": 37.89729622, "bp_r": 210.2}],
                "Fresno":[{"bp_num": 1.0, "bp_lon": -119.7814995, "bp_lat": 36.7515649, "bp_r": 277.9},{"bp_num": 2.0, "bp_lon": -119.80829, "bp_lat": 36.75038, "bp_r": 240.8}]
            }
        }
    },
    methods:{
        search(){
            this.map = new BMap.Map("main-map");
            let points = [];
            let pointData = this.mapData[this.citySelected]
            for (let i in pointData) {
                let point = new BMap.Point(pointData[i].bp_lon,pointData[i].bp_lat);
                points.push(point);
            }
            this.map.centerAndZoom(points[0], 13);
            for (let j in points) {
                let marker = new BMap.Marker(points[j]);
                this.map.addOverlay(marker);
            }
        },
        exportRes(){
            let expData = new Blob([JSON.stringify(this.mapData)],{type:'application/json'});
            let aTag = document.createElement('a');
            aTag.download = 'res.json';
            aTag.href = URL.createObjectURL(expData);
            aTag.click();
            URL.revokeObjectURL(expData);
        }
    }
}
</script>
