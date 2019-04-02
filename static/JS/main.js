window.onload = function(){
    // 点击按钮，上传文件并进行分析
    var formData = new FormData();
    $('#roadFile').on('change',function (event) {
        $('#road-file-name').text(event.target.files[0].name);
    });
    $('#timeFile').on('change',function (event) {
        $('#time-file-name').text(event.target.files[0].name);
    });
    // 上传
    $('#submit-btn').on('click',function(event){
        event.preventDefault();
        var roadfile = $("#roadFile")[0].files[0];
        var timefile = $("#timeFile")[0].files[0];

        formData.append('roadfile',roadfile);
        formData.append('timefile',timefile);

        $.ajax({
            type:"POST",
            url:"/upload/",
            data:formData,
            processData:false,
            contentType:false
        }).done((res)=>{
            // 得到分析结果，生成地图
            var resJson = JSON.parse(res);
            // 在 sessionStorage 缓存分析结果
            sessionStorage.setItem('hazardous-road-locations', JSON.stringify(resJson));
            // 百度地图API功能
            var map = new BMap.Map("main-map");
            var points = [];
            for (item in resJson){
                var point = new BMap.Point(resJson[item].bp_lon,resJson[item].bp_lat);
                points.push(point);
            }
            map.centerAndZoom(points[0], 13);
            map.enableScrollWheelZoom(true);
            for(var i = 0; i<points.length; i++){
                var marker = new BMap.Marker(points[i]);
                map.addOverlay(marker);
            }

        }).fail((err)=>{
            alert("分析失败，请检查上传文件是否正确");
            console.log(err);
        })
    });

    // 导出
    $('#export-btn').on('click',function (event) {
        event.preventDefault();
        if(sessionStorage.getItem('hazardous-road-locations')){
            var expData = new Blob([sessionStorage.getItem('hazardous-road-locations')],{type:'application/json'});
            var aTag = document.createElement('a');
            aTag.download = 'res.json';
            aTag.href = URL.createObjectURL(expData);
            aTag.click();
            URL.revokeObjectURL(expData);
        }else{
            alert("请先正确进行分析");
        }
    })
};