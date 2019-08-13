<template>
  <div>
    <div>
            <titlebar></titlebar>
        </div>
        <!-- 像素占位符 -->
        <div style="margin-top:60px;">
        </div>
  <div id="ranklist">
    <el-container style="height: 800px; border: 1px solid #eee">
      <el-aside width="300px" >
        <el-menu>
          <el-menu-item index="1">
            <template slot="title">
              <img src="../../../assets/ranking/rege.jpg">
              <span>热歌榜</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <template slot="title">
              <img src="../../../assets/ranking/xinge.jpg">
              <span>新歌榜</span>
            </template>
          </el-menu-item>
          <el-menu-item index="3">
            <template slot="title">
              <img src="../../../assets/ranking/oumei.jpg">
              <span>欧美榜</span>
            </template>
          </el-menu-item>
          <el-menu-item index="4">
            <template slot="title">
              <img src="../../../assets/ranking/rihan.jpg">
              <span>日韩榜</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="height:270px;">
          <span class="title">热歌榜</span>
          <span class="update-time">更新日期：2017-07-17</span>
          <div class="btns">
            <el-button round icon="el-icon-headset">播放全部</el-button>
            <el-button round icon="el-icon-plus">添加</el-button>
            <el-button round icon="el-icon-sugar">收藏</el-button>
            <el-button round icon="el-icon-chat-dot-square">评论</el-button>
          </div>
          <div class="listhead">
            <span>排名</span>
            <span>歌曲</span>
            <span>歌手</span>
            <span>专辑</span>
            <span>时长</span>
          </div>
        </el-header>
        <el-main>
          
          
          <div class="list" v-for="(item,i) of list" :key="i">
            <span>{{item.songId}}</span>
            <img :src="item.songImg">
            <span>{{item.songName}}</span>
            <span>{{item.singer}}</span>
            <span>{{item.album}}</span>
            <span>{{item.songTime}}</span>
            <div class="tool">
              <span class="el-icon-headset"></span>
              <span class="el-icon-plus"></span>
              <span class="el-icon-sugar"></span>
              <span class="el-icon-download"></span>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
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
        list:[
        {songId:'1', songName:'来自天堂的恶魔', singer:'G.E.M 邓紫棋', album:'新的心跳',language:'华语',playCount:'0',downloadCount:'0',collectionCount:'0',songImg:'http://img4.kuwo.cn/star/albumcover/120/63/49/990007113.jpg',song:'song/来自天堂的恶魔.mp3',lrc:'lrc/来自天堂的恶魔.lrc',songTime:'04:05'},
        {songId:'2', songName:'缘分一道桥', singer:'王力宏&谭维维', album:'缘分一道桥',language:'华语',playCount:'0',downloadCount:'0',collectionCount:'0',songImg:'http://img1.kuwo.cn/star/albumcover/120/34/92/3595800350.jpg',song:'song/缘分一道桥.mp3',lrc:'lrc/缘分一道桥.lrc',songTime:'04:06'},
        {songId:'3',songName: '多年以后',singer: '大欢', album:'多年以后',language:'华语',playCount:'0',downloadCount:'0',collectionCount:'0',songImg:'http://img4.kuwo.cn/star/albumcover/120/38/95/2982583956.jpg',song:'song/多年以后.mp3',lrc:'lrc/多年以后.lrc',songTime:'04:03'},
        {songId:'4',songName: '你的酒馆对我打了烊', singer:'陈雪凝', album:'你的酒馆对我打了烊',language:'华语',playCount:'0',downloadCount:'0',collectionCount:'0',songImg:'http://img2.kuwo.cn/star/albumcover/120/57/5/2300106887.jpg',song:'song/你的酒馆对我打了烊.mp3',lrc:'lrc/你的酒馆对我打了烊.lrc',songTime:'04:11'},
        {songId:'5',songName: '余情未了', singer:'魏新雨', album:'余情未了',language:'华语',playCount:'0',downloadCount:'0',collectionCount:'0',songImg:'http://img2.kuwo.cn/star/albumcover/120/26/35/1877109495.jpg',song:'song/余情未了.mp3',lrc:'lrc/余情未了.lrc',songTime:'03:36'},{songId:'6', songName:'来自天堂的恶魔', singer:'G.E.M 邓紫棋', album:'新的心跳',language:'华语',playCount:'0',downloadCount:'0',collectionCount:'0',songImg:'http://img4.kuwo.cn/star/albumcover/120/63/49/990007113.jpg',song:'song/来自天堂的恶魔.mp3',lrc:'lrc/来自天堂的恶魔.lrc',songTime:'04:05'},
        {songId:'7', songName:'缘分一道桥', singer:'王力宏&谭维维', album:'缘分一道桥',language:'华语',playCount:'0',downloadCount:'0',collectionCount:'0',songImg:'http://img1.kuwo.cn/star/albumcover/120/34/92/3595800350.jpg',song:'song/缘分一道桥.mp3',lrc:'lrc/缘分一道桥.lrc',songTime:'04:06'},
        {songId:'8',songName: '多年以后',singer: '大欢', album:'多年以后',language:'华语',playCount:'0',downloadCount:'0',collectionCount:'0',songImg:'http://img4.kuwo.cn/star/albumcover/120/38/95/2982583956.jpg',song:'song/多年以后.mp3',lrc:'lrc/多年以后.lrc',songTime:'04:03'},
        {songId:'9',songName: '你的酒馆对我打了烊', singer:'陈雪凝', album:'你的酒馆对我打了烊',language:'华语',playCount:'0',downloadCount:'0',collectionCount:'0',songImg:'http://img2.kuwo.cn/star/albumcover/120/57/5/2300106887.jpg',song:'song/你的酒馆对我打了烊.mp3',lrc:'lrc/你的酒馆对我打了烊.lrc',songTime:'04:11'},
        {songId:'10',songName: '余情未了', singer:'魏新雨', album:'余情未了',language:'华语',playCount:'0',downloadCount:'0',collectionCount:'0',songImg:'http://img2.kuwo.cn/star/albumcover/120/26/35/1877109495.jpg',song:'song/余情未了.mp3',lrc:'lrc/余情未了.lrc',songTime:'03:36'}
      ]
        
      }
    },
    components:{
    "titlebar":TitleBar,
    "footerbar":FooterBar,
    "title-t":TitleT,
  },
  }
</script>
<style scoped>
  #ranklist{
    width: 1200px;
    margin:20px auto;
  }
  .el-header {
    text-align: left; 
    height: 250px;
    color: #333;
    line-height: 100px;
  }
  .el-aside {
    color: #333;
    padding-top: 100px;
  }
  .el-menu-item{
    width: 300px;
    height: 120px;
    line-height: 120px;
    border-radius: 5px;
  }
  .el-menu-item img{
    width: 80px;
    height: 80px;
  }
  .el-menu-item span{
    padding:20px ;
    font-size: 20px;
  }
  .el-menu-item.is-active {
    color:#ff6700;
    font-weight:bold;
    background-color: #ff670066;
}
.title{
  font-size: 48px;
  margin-top: 15px;
}
.update-time{
  padding: 0 30px;
  color:gray;
}
.btns{
  height: 60px;
  line-height: 60px;
  padding: 20px;
  align-content: center;
}
.el-button{
  font-size: 18px;
  background-color: #ff6700;
  color: #fff;
}
.listhead{
  height: 60px;
  line-height: 60px;
  background: #fafafa;
  color: #999;
}
.listhead span{
  display: inline-block;
}
.listhead span:nth-child(1){
  
  width: 136px;
  padding-left: 20px;
}
.listhead span:nth-child(2){
  width: 220px;
  text-align: center;
}
.listhead span:nth-child(3){
  width: 170px;
  text-align: center;
}
.listhead span:nth-child(4){
  width: 170px;
  text-align: center;
}
.listhead span:nth-child(5){
  width: 130px;
  text-align: right;
}.list{
  height: 70px;
  display:flex;
}
.list span{
  display: inline-block;
  line-height: 70px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list span:nth-child(1){
  width: 60px;
  
}
.list span:nth-child(3){
  width: 220px;
  
}
.list span:nth-child(4){
  width: 170px;
  
}
.list span:nth-child(5){
  width: 170px;
  
}
.list span:nth-child(6){
  width: 130px;
  text-align: right;
}
.list img{
  width: 56px;
  height: 56px;
  padding: 7px 20px;  
} 
.tool{
  float: right;
  display:none;
} 
</style>
