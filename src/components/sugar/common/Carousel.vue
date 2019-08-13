<template>
  <div class="top-one" >
    <div class="carousel">
      <el-carousel height="350px">
        <el-carousel-item v-for="(item,i) of list" :key="i">
          <img :src="item">
        </el-carousel-item>
      </el-carousel>
      <div class="download">
        <ul>
          <li>
            <a href="javascript:;"><i class="iconfont icon-windows"></i>下载PC端</a>
          </li>
          <li>
            <a href="javascript:;"><i class="iconfont icon-anzhuo"></i>下载Android版</a>
          </li>
          <li>
            <a href="javascript:;"><i class="iconfont icon-ai-ios"></i>下载iPhone版</a>
          </li>
          <li>
            <a href="javascript:;"><i class="iconfont icon-diannao"></i>下载其他版本</a>
          </li>
        </ul>
      </div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane disabled label="推荐歌单"></el-tab-pane>
      <el-tab-pane label="每日推荐" name="first">
        <div class="recommend">
          <div v-for="(item,i) of first_tj" :key="i">
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
      </el-tab-pane>
      <el-tab-pane label="翻唱" name="second">
        <div class="recommend">
          <div v-for="(item,i) of second_fc" :key="i">
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
      </el-tab-pane>
      <el-tab-pane label="网路" name="third">
        <div class="recommend">
          <div v-for="(item,i) of third_wl" :key="i">
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
      </el-tab-pane>
      <el-tab-pane label="伤感" name="fourth">
        <div class="recommend">
          <div v-for="(item,i) of fourth_sg" :key="i">
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
      </el-tab-pane>
      <el-tab-pane label="欧美" name="five">
        <div class="recommend">
          <div v-for="(item,i) of five_om" :key="i">
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
      </el-tab-pane>

  </el-tabs>

  </div>
  
</template>
<script>
export default {
  props:{ //声明接收父组件数据
  
  },
  data() {
    return {
      activeName: 'first',
      list:[],
      first_tj:[],
      second_fc:[],
      third_wl:[],
      fourth_sg:[],
      five_om:[]
      /*list:[
        {img_url:"http://img3.kwcdn.kuwo.cn/star/upload/4/4/1562037309108_.jpg"},
        {img_url:"http://img1.kwcdn.kuwo.cn/star/upload/3/3/1561543352419_.jpg"},
        {img_url:"http://img2.kwcdn.kuwo.cn/star/upload/10/10/1562418350442_.jpg"},
        {img_url:"http://kwimg4.kuwo.cn/star/upload/47/52/1557311466098_.png"}
      ],*/

      /*
      first_tj:[
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/10/13/1562640045053_132026710_150.jpg",
        tit:"每日最新单曲推荐",
        dj:"19000.4"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/84/83/1518157889664_187327784_500.jpg",
        tit:"『纯音乐』为生活添一抹宁静的颜色",
        dj:"11.9"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/95/40/1521860955195_254780995_500.jpg",
        tit:"【古风】男人媚起来女人都自愧不如",
        dj:"13.5"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/42/28/1515943889272_418036042_500.jpg",
        tit:"嘻哈的说爱方式，你一定也会喜欢。",
        dj:"13.7"},
        {fir_rul:"http://img1.kwcdn.kuwo.cn/star/userpl2015/79/58/1522291060710_388632379_500.jpg",
        tit:"【颜值与才华齐飞】韩语流行歌曲",
        dj:"8.5"},
      ],*/

    }
  },
  created() {
    this.car()

  },
  methods: {
    handleClick(tab, event) {
       
    },
    car(){
      var url1="carousel";
      this.axios.get(url1).then(result=>{
        //console.log(result)
        for (const item of result.data) {
            this.list.push(item.img_url)
        }
       
      })
      var url2="catuijian";
      this.axios.get(url2).then(result=>{
        //console.log(result)
        for (const item of result.data.first_tj) {
            this.first_tj.push(item)
        }
        for (const item of result.data.second_fc) {
            this.second_fc.push(item)
        }
        for (const item of result.data.third_wl) {
            this.third_wl.push(item)
        }
        for (const item of result.data.fourth_sg) {
            this.fourth_sg.push(item)
        }
        for (const item of result.data.five_om) {
            this.five_om.push(item)
        }

      })
    },

  },
  
  components:{//注册子组件
    
  },

}
</script>
<style scoped>
.top-one{
  width: 1200px;
  margin: 0px auto; 
}
ul{
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
}
.carousel img{
  width: 100%;height: 100%;
}
.carousel{
  position: relative;
  margin-bottom: 40px;
}
.download{
    width: 100%;height: 45px;
    display: block;  
    background: rgba(0,0,0,.35);
    position: absolute;
    bottom: 0px;
    z-index: 10;
}
.download ul{
  width: 100%;z-index: 13;
  justify-content:space-around;
}
.download a{
  text-decoration: none;
  display: inline-block;
  width: 150px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  color: #fff
}
/*轮播上小图标*/
.download .iconfont{
  font-size: 18px;
  margin-right: 10px
}

/*每日推荐*/
.recommend{
  display: flex;
  justify-content: space-between;
}
.recommend>div{
width: 220px;
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
</style>
<style>
/*录播图ul位置*/
.carousel .el-carousel__indicators{
   bottom: 35px ;
}
/*录播图li改为圆点*/
.carousel .el-carousel__button{
  width: 10px;height: 10px;
  border-radius: 50%;

}
.top-one #tab-0{
  font-size: 28px;
  color: #333;
  font-weight: bold;
}
.top-one .el-tabs__item:hover {
    color: #ff6700;
    cursor: pointer;
}
.top-one .el-tabs__item.is-active {color: #ff6700;}
.top-one .el-tabs__active-bar{background-color: #ff6700;}
.top-one .el-carousel__arrow i{
  font-size: 50px;
}
.top-one .el-carousel__arrow{width: 60px ; height: 60px;}
</style>
