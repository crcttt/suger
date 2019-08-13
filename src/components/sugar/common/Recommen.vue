<template>
  <div>
  <div class="recommend">
   <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="歌手推荐" disabled></el-tab-pane>
     <el-tab-pane label="华语" name="first">
        <div class="rec-list">
         <div class="rec-item "  v-for="(item,i) of recommen1" :key="i">
            <ul>
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片加载失败"></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCount}}首歌曲</li>
          </ul>
        </div>
       </div>
    </el-tab-pane>
    <el-tab-pane label="欧美" name="second">
      <div class="rec-list">
         <div class="rec-item "  v-for="(item,i) of recommen2" :key="i">
            <ul>
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片加载失败"></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCount}}首歌曲</li>
          </ul>
        </div>
       </div>
   </el-tab-pane>
    <el-tab-pane label="日韩" name="third">
      <div class="rec-list">
         <div class="rec-item "  v-for="(item,i) of recommen3" :key="i">
            <ul>
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片加载失败"></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCount}}首歌曲</li>
          </ul>
        </div>
       </div>
   </el-tab-pane>
    <el-tab-pane label="组合" name="fourth"> 
       <div class="rec-list">
         <div class="rec-item "  v-for="(item,i) of recommen4" :key="i">
            <ul>
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片加载失败"></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCountt}}首歌曲</li>
          </ul>
        </div>
       </div>
   </el-tab-pane>
   <el-tab-pane label="更多" disabled></el-tab-pane>
  </el-tabs>  
  </div>
  <div class="station">
    <div class="rad-nav">
      <h3 class="title-rad iconfont">主播电台</h3>
      <el-button type="text" @click="dialogVisible = true">畅听更多精品电台
        <span class="iconfont icon-download"></span>
      </el-button>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        >
      <span>收听更多电台节目，请在酷我音乐客户端操作</span>
      <span slot="footer" class="dialog-footer ">
        <el-button @click="dialogVisible = false">下载Sugar音乐</el-button>
        <el-button type="primary" @click="dialogVisible = false">已安装Sugar音乐</el-button>
      </span>
    </el-dialog>
    </div>
    <div class="radio">
    <div class="smallimg" v-for="(item,i) of radiolist" :key="i">
    <div class="imglist" >
      <img :src=item.photoUrl>
      <div class="pic">
               <i class="iconfont icon-bofang1"></i>
        </div>
    </div>
    <div class="radio-title">
      <span style="font-size:16px">{{item.title}}</span>
      <p style="font-size:14px">{{item.radioname}}</p>
    </div>
    </div>
    </div>
   </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        dialogVisible: false,
        recommen1:[],
        recommen2:[],
        recommen3:[],
        recommen4:[],
        radiolist:[]
      };
    },
    methods: {
      handleClick(tab, event) {
      
      },
       add(){
            var url="Recommen";
            this.axios.get(url).then(result=>{ 
                 //console.log(result)
        for (const item of result.data.recommen1) {
            this.recommen1.push(item)
        }
        for (const item of result.data.recommen2){
            this.recommen2.push(item)
        }
        for (const item of result.data.recommen3) {
            this.recommen3.push(item)
        }
        for (const item of result.data.recommen4) {
            this.recommen4.push(item)
        }
          });
        },
      add1(){
      var url="Recommend";
      this.axios.get(url).then(result=>{ 
         for(const item of result.data.radiolist){
          this.radiolist.push(item)
         
        }
      })
    },
    },
    
    created() {
        this.add();
        this.add1();
        
    }
  };
</script>
<style>
/*更改tab标签标题默认颜色*/
.el-tabs__item.is-active{
    color:#ff6700 !important;
}
/*歌手推荐,主播电台样式*/
.recommend #tab-0,.station .rad-nav .title-rad{
    font-size:28px;
    color:#333 !important;
    font-weight: bold;
}
/*改变 “更多” 的默认颜色为#333*/
.recommend #tab-5{
    color:#333;
}
.recommend #tab-5:hover{
    cursor: pointer;
    color:#ff6700;
}
/*tab标题悬浮状态的颜色*/
.el-tabs__item.is-top:hover{
    color:#ff6700;
}
/*更改原有下划线背景颜色为#ff6700*/
.el-tabs__active-bar{
  background-color: #ff6700 !important;
}
/*歌手推荐,主播电台的鼠标悬停样式*/
.tabs__item.is-top:last-child,.station .rad-nav .title-rad {
  cursor: default;
}
/*主播电台整体宽高*/
.el-row {
  margin-bottom: 20px;
  width: 1200px;
  margin:auto !important;
  height:600px;
}
/*按钮button的样式*/
.el-button--text{
  color:#333 !important;
  background: #ff6700 !important;
  height: 35px;
  line-height: 0 !important;
  width: 135px;
  margin:30px !important;
  border-radius: 15px !important;
  font-size:14px;
}
/*防止弹出框弹出时跳动*/
.el-popup-parent--hidden{
  overflow-y: visible !important;
}
/*图片放大效果*/
.station .imglist img:hover,.rec-list .rec-item img:hover{
  transform: scale(1.1);
  transition: 0.5s;
}

</style>
<style scoped>
/*整体样式大小*/
.recommend .el-tabs{
    width: 1200px;
    margin:auto; 
}
ul,li,a{
    list-style: none;
    text-decoration: none;
    transition:none;
    color:#333;
    padding:0;
}
/*歌手推荐列表样式*/
.rec-list{
    width: 1200px;
    height: 265px;
    display: flex;
    justify-content: space-between;
    text-align: center;
}
/*歌手推荐中的图片大小，样式*/
.rec-list .rec-item img,.rec-list .rec-item ul :first-child{
    width: 165px;
    height: 165px;
    overflow: hidden;
    border-radius: 50%;
}

/*歌手名字的样式*/
.rec-list .rec-item ul :nth-child(2){
    font-weight: bold;
    font-size:18px;
    padding-top:5px;
}

/*文字大小*/
.rec-list .rec-item ul .num{
    font-size:12px;
    line-height: 25px;
}
.rec-list .rec-item ul :hover{
    color:#ff6700;
} 
.station .rad-nav{
    display: flex;
    width: 1200px;
    height: 95px;
    margin:auto;
}
.station .radio{
    display: flex;
    width: 1200px;
    height: 270px;
    margin:auto;
    justify-content: space-between;
    flex-wrap:wrap; 
}
.station .radio .smallimg{
    display: flex;
    width: 330px; 
    height: 65px;  
    padding-bottom:10px;
    border-bottom:1px solid #ccc;
}
.station .imglist{
    width: 65px;
    height: 65px; 
    overflow: hidden;
    position: relative;
}
.station .imglist img{
    width: 65px;
    height: 65px; 
}
.station .radio .radio-title{
  width: 200px;
  margin-left:18px;
  line-height: 27px;
  cursor: default;
}
/*播放隐藏*/
.imglist:hover .pic .icon-bofang1{display: inline-block;}
/*遮罩阴影*/
.imglist:hover .pic{
  background: rgba(0,0,0,0.35);
  cursor: pointer;
}
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
  margin-left:-15px;
  margin-top:-15px;
  font-size: 30px;
  color:#fff;
  display: none;
}
</style>

