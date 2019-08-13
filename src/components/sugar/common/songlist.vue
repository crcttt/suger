<template>
  <div>
    <div>
        <titlebar></titlebar>
    </div>
    <!-- 像素占位符 -->
    <div style="margin-top:60px;">
    </div>
    <div>
        <title-t></title-t>
    </div>    
  <div class="songlist">
    <div class="songtit">
      <p>精选歌单</p>
    </div>
    <div class="cen">
      <div class="recommend">
        <div v-for="(item,i) of list" :key="i">
          <div class="rec-img">
            <img :src="item.img_url" alt="">
            <div class="pic">
              <i class="iconfont icon-bofang1"></i>
            </div>
          </div>
          <div><p class="tjjanjie" v-text="item.slname"></p></div>
          <div><p class="danji iconfont icon-bofangsanjiaoxing" v-text="item.dianji"></p></div>
        </div>
      </div>
      
      <!-- 
        :total总个数  :page-size每页个数
      -->
      <div class="yema"><el-pagination
        layout="prev, pager, next"
        :total=songlistnumbe
        :page-size=songitemnum
        :pager-count="5"
        background
        @next-click="songlistnext"
        @prev-click="songlistprev"
        @current-change="songlistchange"
        :current-page.sync="currentPage"
        >
        
      </el-pagination></div>

    </div>
    
  </div>
    <div>
        <footerbar></footerbar>
    </div>
  </div>
</template>
<script>
import TitleBar from "./TitleBar";
import FooterBar from "./FooterBar";
import TitleT from "./TitleT";

export default {
  data() {
    return {
      list:[],
      /*[
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/10/13/1562640045053_132026710_150.jpg",
        tit:"每日最新单曲推荐",
        dj:"19000.4"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/10/13/1562640045053_132026710_150.jpg",
        tit:"每日最新单曲推荐",
        dj:"19000.4"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/10/13/1562640045053_132026710_150.jpg",
        tit:"每日最新单曲推荐",
        dj:"19000.4"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/84/83/1518157889664_187327784_500.jpg",
        tit:"『纯音乐』为生活添一抹宁静的颜色",
        dj:"11.9"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/84/83/1518157889664_187327784_500.jpg",
        tit:"『纯音乐』为生活添一抹宁静的颜色",
        dj:"11.9"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/84/83/1518157889664_187327784_500.jpg",
        tit:"『纯音乐』为生活添一抹宁静的颜色",
        dj:"11.9"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/95/40/1521860955195_254780995_500.jpg",
        tit:"【古风】男人媚起来女人都自愧不如",
        dj:"13.5"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/95/40/1521860955195_254780995_500.jpg",
        tit:"【古风】男人媚起来女人都自愧不如",
        dj:"13.5"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/95/40/1521860955195_254780995_500.jpg",
        tit:"【古风】男人媚起来女人都自愧不如",
        dj:"13.5"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/42/28/1515943889272_418036042_500.jpg",
        tit:"嘻哈的说爱方式，你一定也会喜欢。",
        dj:"13.7"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/42/28/1515943889272_418036042_500.jpg",
        tit:"嘻哈的说爱方式，你一定也会喜欢。",
        dj:"13.7"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/42/28/1515943889272_418036042_500.jpg",
        tit:"嘻哈的说爱方式，你一定也会喜欢。",
        dj:"13.7"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/79/58/1522291060710_388632379_500.jpg",
        tit:"【颜值与才华齐飞】韩语流行歌曲",
        dj:"8.5"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/79/58/1522291060710_388632379_500.jpg",
        tit:"【颜值与才华齐飞】韩语流行歌曲",
        dj:"8.5"},/*
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/79/58/1522291060710_388632379_500.jpg",
        tit:"【颜值与才华齐飞】韩语流行歌曲",
        dj:"8.5"},
      ],*/
      songlistnumbe:1000,//总数据数
      songitemnum:15,//页大小一页几个
      pno:0,//页码
      currentPage:0//点的第几页
    }
  },
  components:{
    "titlebar":TitleBar,
    "footerbar":FooterBar,
    "title-t":TitleT,
  },
  created() {
    this.songlistnext()
  },
  methods: {
    songlistnext(){//下一页
      var url="songlist";
      this.pno++;
      var obj={pno:this.pno,pageSize:this.songitemnum}
      this.axios.get(url,{params:obj}).then(result=>{
        this.list=[];
        for (const item of result.data.data) {
          this.list.push(item)
        }
        this.songlistnumbe=result.data.songlistnumbe;
        
      })
    },
    songlistprev(){
      this.pno=this.pno-2;
      this.songlistnext()
    },
    songlistchange(){
      this.pno=this.currentPage-1;
      this.songlistnext()
    }
  },
}
</script>
<style scoped>
.songlist{width: 1200px;margin: 0 auto}
.songtit{  
  font-size: 28px;
  color: #333;
  font-weight: bold;
  cursor: pointer;
}
.recommend{
  display: flex;
  flex-wrap: wrap;
}
.recommend>div{
width: 220px;
margin-right: 25px;
}
.recommend>div:nth-child(5n){
margin-right: 0px;
}
.recommend img{
width: 100%;
}
.rec-img{position: relative;}

/*遮罩*/
.pic{
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0);
  transition: all .2s ease-in-out;
}
.pic .icon-bofang1{
  position: absolute;
  top:50%;
  left:50%;
  margin-left:-30px;
  margin-top:-30px;
  font-size: 60px;
  color:#fff;
  display: none;
}
.rec-img{overflow: hidden;}
/*播放隐藏*/
.rec-img:hover .pic .icon-bofang1{display: inline-block;}
/*遮罩阴影*/
.rec-img:hover .pic{
  background: rgba(0,0,0,0.35);
  cursor: pointer;
}
/*图片放大*/
.rec-img:hover img{
    transform:scale(1.1);
    transition:0.5s;
}
/*点击，简介*/
.tjjanjie{color: #333;font-weight: 300;cursor:pointer; }
/*悬停加粗*/
.tjjanjie:hover{font-weight: 600;}
.danji{ color: #999;cursor:pointer;}

/* 页码 */
.yema{
  text-align: right;
  height: 42px;
  margin: 10px 0;
  margin-right: 10px;
}
</style>
<style>
.songlist .el-pagination button, .el-pagination span:not([class*=suffix]){
  height: 42px;
}
.songlist .el-pager li{
  font-size: 16px;
  min-width: 50px;
  height: 42px;
  line-height: 42px;
}
/* 选中背景颜色 */
.songlist .el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color: #ff6700 ;
}
/* 字体悬停颜色 */
.songlist .el-pagination.is-background .el-pager li:not(.disabled):hover{
  color: #ff6700 
}
.songlist .el-pagination.is-background .el-pager li:not(.disabled).active:hover{
   color: #fff;
}
/* 箭头居中 */
.songlist .el-pager .more::before{
  line-height: 42px;
}

</style>

