<template>
  <div class="page">
    <div class="m-banner">
      <h1 class="main-title">路网黑点</h1>
      <p>基于时空序列以及聚类算法的精确路网事故高发地点判断</p>
    </div>
    <article class="m-discribe">
      <section class="section1">
        <img src="../assets/home-img1.png" alt="" srcset="">
        <p>BSI是一个基于交通大数据的事故高发点（黑点）识别系统，该系统的目的在于识别给定路网中的黑点，为提高道路交通安全的实际举措提供可靠依据 。BSI系统的特色在于将事故的一些非统计学特征应用到了事故预测之中,它会使用预测出的数据进行黑点识别，并将识别的结果进行可视化展示。</p>
      </section>
      <section class="section2">
        <img src="../assets/home-img2.png" alt="" srcset="">
        <p>系统提供了识别城市黑点的功能，用户选定城市后，系统利用数据库中交通大数据对该城市的分析结果，将黑点展示给用户。系统也提供了识别结果的下载功能，以便用户离线使用。系统支持模拟路网黑点识别功能。系统定义了一种模拟路网及事故信息的格式，用户根据该格式填写文件，即可上传到系统并得到黑点识别结果。</p>
      </section>
    </article>
  </div>
</template>
<style lang="stylus" scoped>
.page 
  display flex
  flex-direction column
  height: 100%;
  background-color: #fff;
  .m-banner 
    width: 100%;
    padding: 120px 0;
    background: #010101 url('../assets/map-banner.jpg') no-repeat center;
    background-size: 2000px 420px;
    color: #fff;
    .main-title 
      text-align: center;
      font: 40px;
      line-height: 48px;
      color: #ffffff;
      letter-spacing: 2px;
    p 
      margin-top: 18px;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
      line-height: 20px;
  .m-discribe
    width 960px
    margin auto
    padding 20px 
    section 
      display flex
      justify-content space-around
      align-items center
      margin-bottom 30px
      img 
        width 360px
      p
        width 480px
        font-size 14px
        line-height 1.5
        padding 10px 5px
        text-indent:2em
        color #606266
    .section2
      flex-direction row-reverse
      img 
        width 300px
</style>


<script>
export default {};
</script>
