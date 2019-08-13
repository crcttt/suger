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
<div class="singerpage">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first">
      <div class="singerlist">
         <div class="rec-item"  v-for="(item,i) of artist" :key="i">
            <ul class="rec-list">
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片正在加载..."></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCount}}首歌曲</li>
          </ul>
        </div>
       </div>
        
    </el-tab-pane>
    <el-tab-pane label="华语男" name="second">
        <div class="singerlist">
         <div class="rec-item "  v-for="(item,i) of singerlist1" :key="i">
            <ul class="rec-list">
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片正在加载..."></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCount}}首歌曲</li>
          </ul>
        </div>
       </div>
    </el-tab-pane>
    <el-tab-pane label="华语女" name="third">  
        <div class="singerlist">
         <div class="rec-item "  v-for="(item,i) of singerlist11" :key="i">
            <ul class="rec-list">
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片正在加载..."></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCount}}首歌曲</li>
          </ul>
        </div>
       </div>
    </el-tab-pane>
    <el-tab-pane label="华语组合" name="fourth">
        <div class="singerlist">
         <div class="rec-item "  v-for="(item,i) of singerlist4" :key="i">
            <ul class="rec-list">
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片正在加载..."></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCount}}首歌曲</li>
          </ul>
        </div>
       </div>
       
    </el-tab-pane>
    <el-tab-pane label="日韩男" name="fifth">
        <div class="singerlist">
         <div class="rec-item "  v-for="(item,i) of singerlist2" :key="i">
            <ul class="rec-list">
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片正在加载..."></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCount}}首歌曲</li>
          </ul>
        </div>
       </div>   
    </el-tab-pane>
    <el-tab-pane label="日韩女" name="sixth">
       <div class="singerlist">
         <div class="rec-item "  v-for="(item,i) of singerlist21" :key="i">
            <ul class="rec-list">
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片正在加载..."></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCount}}首歌曲</li>
          </ul>
        </div>
       </div>
    </el-tab-pane>
     <el-tab-pane label="日韩组合" name="sevent">
       <div class="singerlist">
         <div class="rec-item "  v-for="(item,i) of singerlist41" :key="i">
            <ul class="rec-list">
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片正在加载..."></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCount}}首歌曲</li>
          </ul>
        </div>
       </div>
    </el-tab-pane>
    <el-tab-pane label="欧美男" name="eighth">
        <div class="singerlist">
         <div class="rec-item "  v-for="(item,i) of singerlist3" :key="i">
            <ul class="rec-list">
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片正在加载..."></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCount}}首歌曲</li>
          </ul>
        </div>
       </div>
       
    </el-tab-pane>
    <el-tab-pane label="欧美女" name="ninth">
        <div class="singerlist">
         <div class="rec-item "  v-for="(item,i) of singerlist31" :key="i">
            <ul class="rec-list">
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片正在加载..."></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCount}}首歌曲</li>
          </ul>
        </div>
       </div>
       
    </el-tab-pane>
    <el-tab-pane label="欧美组合" name="tenth">
       <div class="singerlist">
         <div class="rec-item "  v-for="(item,i) of singerlist4" :key="i">
            <ul class="rec-list">
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片正在加载..."></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCount}}首歌曲</li>
          </ul>
        </div>
       </div>
  
    </el-tab-pane>
    <el-tab-pane label="其他" name="last">
     <div class="singerlist">
         <div class="rec-item "  v-for="(item,i) of singerlist1" :key="i">
            <ul class="rec-list">
            <li><a href="javascript:;">
              <img :src=item.photoUrl alt="图片正在加载..."></a></li>
            <li><a href="javascript:;">{{item.singerName}}</a></li>
            <li class="num">{{item.songerCount}}首歌曲</li>
          </ul>
        </div>
       </div>
    </el-tab-pane>
  </el-tabs>
  <div class="artist-list">
         <div class="artist" v-for="(item,i) of artist" :key="i">
           <div class="Imgsmall"><img :src=item.photoUrl alt="图片正在加载..."></div>
           <span>{{item.singerName}}</span>
         </div>
       </div>
  <el-pagination
        layout="prev, pager, next"
        :total=singercount
        :page-size=pagenum
        :pager-count="5"
        background
        @next-click="singernext"
        @prev-click="singerprev"
        @current-change="singerchange"
        :current-page.sync="currentPage">
</el-pagination>
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
        activeName: 'first',
        artist:[],
        singerlist1:[],
        singerlist11:[],
        singerlist2:[],
        singerlist21:[],
        singerlist3:[],
        singerlist31:[],
        singerlist4:[],
        singerlist41:[],
      /* songlist1:[ 
          {photoUrl:"http://img4.kuwo.cn/star/starheads/300/39/41/2312174491.jpg",
           singerName:"G.E.M.邓紫棋" ,
           songerCount:"708"},
            {photoUrl:"http://img4.kuwo.cn/star/starheads/300/57/42/3773488596.jpg",
           singerName:"陈雪凝" ,
           songerCount:"58"},
            {photoUrl:"http://img3.sycdn.kuwo.cn/star/starheads/300/75/22/1016326664.jpg",
           singerName:"林俊杰" ,
           songerCount:"1042"},
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/61/99/2461721588.jpg",
           singerName:"周杰伦" ,
          songerCount:"1158"},
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/62/14/645139024.jpg",
          singerName:"王力宏" ,
           songerCount:"1127"},
            {photoUrl:"http://img1.sycdn.kuwo.cn/star/starheads/300/61/54/2102134023.jpg",
           singerName:"G.E.M.邓紫棋" ,
           songerCount:"3163"}, 
           {photoUrl:"http://star.kuwo.cn/star/starheads/300/38/68/1728322477.jpg",
           singerName:"许嵩" ,
           songerCount:"2163"},
            {photoUrl:"http://img4.kuwo.cn/star/starheads/300/57/42/3773488596.jpg",
           singerName:"陈雪凝" ,
           songerCount:"58"},
            {photoUrl:"http://img3.sycdn.kuwo.cn/star/starheads/300/75/22/1016326664.jpg",
           singerName:"林俊杰" ,
           songerCount:"1042"},
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/61/99/2461721588.jpg",
           singerName:"周杰伦" ,
           songerCount:"1158"},
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/62/14/645139024.jpg",
           singerName:"王力宏" ,
           songerCount:"1127"},
            {photoUrl:"http://star.kuwo.cn/star/starheads/300/38/68/1728322477.jpg",
           singerName:"许嵩" ,
          songerCount:"2163"},
       ],*/
       /* artist:[
          {photoUrl:"http://img4.kuwo.cn/star/starheads/300/39/41/2312174491.jpg",
           singerName:"G.E.M.邓紫棋"},
            {photoUrl:"http://img4.kuwo.cn/star/starheads/300/57/42/3773488596.jpg",
           singerName:"陈雪凝" },
            {photoUrl:"http://img3.sycdn.kuwo.cn/star/starheads/300/75/22/1016326664.jpg",
           singerName:"林俊杰" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/61/99/2461721588.jpg",
           singerName:"周杰伦" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/62/14/645139024.jpg",
          singerName:"王力宏" },
            {photoUrl:"http://img1.sycdn.kuwo.cn/star/starheads/300/61/54/2102134023.jpg",
           singerName:"G.E.M.邓紫棋"}, 
           {photoUrl:"http://star.kuwo.cn/star/starheads/300/38/68/1728322477.jpg",
           singerName:"许嵩" },
            {photoUrl:"http://img4.kuwo.cn/star/starheads/300/57/42/3773488596.jpg",
           singerName:"陈雪凝" },
            {photoUrl:"http://img3.sycdn.kuwo.cn/star/starheads/300/75/22/1016326664.jpg",
           singerName:"林俊杰"},
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/61/99/2461721588.jpg",
           singerName:"周杰伦" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/62/14/645139024.jpg",
           singerName:"王力宏"},
            {photoUrl:"http://star.kuwo.cn/star/starheads/300/38/68/1728322477.jpg",
           singerName:"许嵩" },
           {photoUrl:"http://img4.kuwo.cn/star/starheads/300/39/41/2312174491.jpg",
           singerName:"G.E.M.邓紫棋"},
            {photoUrl:"http://img4.kuwo.cn/star/starheads/300/57/42/3773488596.jpg",
           singerName:"陈雪凝" },
            {photoUrl:"http://img3.sycdn.kuwo.cn/star/starheads/300/75/22/1016326664.jpg",
           singerName:"林俊杰" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/61/99/2461721588.jpg",
           singerName:"周杰伦" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/62/14/645139024.jpg",
          singerName:"王力宏" },
            {photoUrl:"http://img1.sycdn.kuwo.cn/star/starheads/300/61/54/2102134023.jpg",
           singerName:"G.E.M.邓紫棋"}, 
           {photoUrl:"http://star.kuwo.cn/star/starheads/300/38/68/1728322477.jpg",
           singerName:"许嵩" },
            {photoUrl:"http://img4.kuwo.cn/star/starheads/300/57/42/3773488596.jpg",
           singerName:"陈雪凝" },
            {photoUrl:"http://img3.sycdn.kuwo.cn/star/starheads/300/75/22/1016326664.jpg",
           singerName:"林俊杰"},
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/61/99/2461721588.jpg",
           singerName:"周杰伦" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/62/14/645139024.jpg",
           singerName:"王力宏"},
            {photoUrl:"http://star.kuwo.cn/star/starheads/300/38/68/1728322477.jpg",
           singerName:"许嵩" },
           {photoUrl:"http://img4.kuwo.cn/star/starheads/300/39/41/2312174491.jpg",
           singerName:"G.E.M.邓紫棋"},
            {photoUrl:"http://img4.kuwo.cn/star/starheads/300/57/42/3773488596.jpg",
           singerName:"陈雪凝" },
            {photoUrl:"http://img3.sycdn.kuwo.cn/star/starheads/300/75/22/1016326664.jpg",
           singerName:"林俊杰" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/61/99/2461721588.jpg",
           singerName:"周杰伦" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/62/14/645139024.jpg",
          singerName:"王力宏" },
            {photoUrl:"http://img1.sycdn.kuwo.cn/star/starheads/300/61/54/2102134023.jpg",
           singerName:"G.E.M.邓紫棋"}, 
           {photoUrl:"http://star.kuwo.cn/star/starheads/300/38/68/1728322477.jpg",
           singerName:"许嵩" },
            {photoUrl:"http://img4.kuwo.cn/star/starheads/300/57/42/3773488596.jpg",
           singerName:"陈雪凝" },
            {photoUrl:"http://img3.sycdn.kuwo.cn/star/starheads/300/75/22/1016326664.jpg",
           singerName:"林俊杰"},
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/61/99/2461721588.jpg",
           singerName:"周杰伦" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/62/14/645139024.jpg",
           singerName:"王力宏"},
            {photoUrl:"http://star.kuwo.cn/star/starheads/300/38/68/1728322477.jpg",
           singerName:"许嵩" },
           {photoUrl:"http://img4.kuwo.cn/star/starheads/300/39/41/2312174491.jpg",
           singerName:"G.E.M.邓紫棋"},
            {photoUrl:"http://img4.kuwo.cn/star/starheads/300/57/42/3773488596.jpg",
           singerName:"陈雪凝" },
            {photoUrl:"http://img3.sycdn.kuwo.cn/star/starheads/300/75/22/1016326664.jpg",
           singerName:"林俊杰" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/61/99/2461721588.jpg",
           singerName:"周杰伦" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/62/14/645139024.jpg",
          singerName:"王力宏" },
            {photoUrl:"http://img1.sycdn.kuwo.cn/star/starheads/300/61/54/2102134023.jpg",
           singerName:"G.E.M.邓紫棋"}, 
           {photoUrl:"http://star.kuwo.cn/star/starheads/300/38/68/1728322477.jpg",
           singerName:"许嵩" },
            {photoUrl:"http://img4.kuwo.cn/star/starheads/300/57/42/3773488596.jpg",
           singerName:"陈雪凝" },
            {photoUrl:"http://img3.sycdn.kuwo.cn/star/starheads/300/75/22/1016326664.jpg",
           singerName:"林俊杰"},
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/61/99/2461721588.jpg",
           singerName:"周杰伦" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/62/14/645139024.jpg",
           singerName:"王力宏"},
            {photoUrl:"http://star.kuwo.cn/star/starheads/300/38/68/1728322477.jpg",
           singerName:"许嵩" },
           {photoUrl:"http://img4.kuwo.cn/star/starheads/300/39/41/2312174491.jpg",
           singerName:"G.E.M.邓紫棋"},
            {photoUrl:"http://img4.kuwo.cn/star/starheads/300/57/42/3773488596.jpg",
           singerName:"陈雪凝" },
            {photoUrl:"http://img3.sycdn.kuwo.cn/star/starheads/300/75/22/1016326664.jpg",
           singerName:"林俊杰" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/61/99/2461721588.jpg",
           singerName:"周杰伦" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/62/14/645139024.jpg",
          singerName:"王力宏" },
            {photoUrl:"http://img1.sycdn.kuwo.cn/star/starheads/300/61/54/2102134023.jpg",
           singerName:"G.E.M.邓紫棋"}, 
           {photoUrl:"http://star.kuwo.cn/star/starheads/300/38/68/1728322477.jpg",
           singerName:"许嵩" },
            {photoUrl:"http://img4.kuwo.cn/star/starheads/300/57/42/3773488596.jpg",
           singerName:"陈雪凝" },
            {photoUrl:"http://img3.sycdn.kuwo.cn/star/starheads/300/75/22/1016326664.jpg",
           singerName:"林俊杰"},
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/61/99/2461721588.jpg",
           singerName:"周杰伦" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/62/14/645139024.jpg",
           singerName:"王力宏"},
            {photoUrl:"http://star.kuwo.cn/star/starheads/300/38/68/1728322477.jpg",
           singerName:"许嵩" },
           {photoUrl:"http://img4.kuwo.cn/star/starheads/300/39/41/2312174491.jpg",
           singerName:"G.E.M.邓紫棋"},
            {photoUrl:"http://img4.kuwo.cn/star/starheads/300/57/42/3773488596.jpg",
           singerName:"陈雪凝" },
            {photoUrl:"http://img3.sycdn.kuwo.cn/star/starheads/300/75/22/1016326664.jpg",
           singerName:"林俊杰" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/61/99/2461721588.jpg",
           singerName:"周杰伦" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/62/14/645139024.jpg",
          singerName:"王力宏" },
            {photoUrl:"http://img1.sycdn.kuwo.cn/star/starheads/300/61/54/2102134023.jpg",
           singerName:"G.E.M.邓紫棋"}, 
           {photoUrl:"http://star.kuwo.cn/star/starheads/300/38/68/1728322477.jpg",
           singerName:"许嵩" },
            {photoUrl:"http://img4.kuwo.cn/star/starheads/300/57/42/3773488596.jpg",
           singerName:"陈雪凝" },
            {photoUrl:"http://img3.sycdn.kuwo.cn/star/starheads/300/75/22/1016326664.jpg",
           singerName:"林俊杰"},
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/61/99/2461721588.jpg",
           singerName:"周杰伦" },
            {photoUrl:"http://img1.kuwo.cn/star/starheads/300/62/14/645139024.jpg",
           singerName:"王力宏"},
            {photoUrl:"http://star.kuwo.cn/star/starheads/300/38/68/1728322477.jpg",
           singerName:"许嵩" },
        ],*/
      
      singercount:1000,//总数据数
      pagenum:48,//页大小一页几个
      pno:0,//页码
      currentPage:0//点的第几页
      };
    },
    components:{
    "titlebar":TitleBar,
    "footerbar":FooterBar,
    "title-t":TitleT,
  },
   created() {
    this.singernext()
  },
    methods: {
      handleClick(tab, event) {
        
      },
      singernext(){//下一页
      var url="SingerPage";
      this.pno++;
      var obj={pno:this.pno,pageSize:this.pagenum}
      this.axios.get(url,{params:obj}).then(result=>{
        this.artist=[];
        for (const item of result.data.data) {
          this.artist.push(item)
        }
        this.singercount=result.data.singercount;
      })
      var ob={pno:1,pageSize:12}
          this.axios.get(url,{params:ob}).then(result=>{ 
           for (const item of result.data.singerlist1) {
            this.singerlist1.push(item)
        }
           for (const item of result.data.singerlist11) {
            this.singerlist11.push(item)
        }
        for (const item of result.data.singerlist2) {
            this.singerlist2.push(item)
        }
         for (const item of result.data.singerlist21) {
            this.singerlist21.push(item)
        }
        for (const item of result.data.singerlist3) {
            this.singerlist3.push(item)
        }
         for (const item of result.data.singerlist31) {
            this.singerlist31.push(item)
        }
        for (const item of result.data.singerlist4) {
            this.singerlist4.push(item)
        }
         for (const item of result.data.singerlist41) {
            this.singerlist41.push(item)
        }
     });
    },
    singerprev(){
      this.pno=this.pno-2;
      this.singernext()
    },
    singerchange(){
      this.pno=this.currentPage-1;
      this.singernext()
    }
    }
  };
</script>
<style>
ul,li,a{
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding:0;
  color:#333;
}
.singerpage .el-tabs{
  width: 1200px;
  margin:auto; 
  margin-top:10px;
  overflow: hidden;
  height: 520px;
  margin-bottom: 20px;
}

.singerpage .singerlist{
  width: 1200px;
  height: 444px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap:wrap; 
}
.singerpage .singerlist .rec-item .rec-list{
  width: 200px;
}
/*歌手推荐中的图片大小，样式*/
 .singerpage .singerlist .rec-item img{
  width: 165px;
  height: 165px;
  overflow: hidden; 
  border-radius: 50%;
}
/*歌手名字的样式*/
 .singerpage .singerlist .rec-item ul :nth-child(2){
  font-weight: bold;
  font-size:18px;
  padding-top:5px;
}
/*文字大小*/
.singerpage .singerlist .rec-item ul .num{
  font-size:12px;
  line-height: 25px;
}

/*---小图片列表---*/
.artist-list{
  display: flex;
  justify-items: center;
  width: 1200px;
  margin:auto;
  flex-wrap:wrap; 
}
.singerpage .artist span{
  line-height: 38px;
  margin-left:15px;
}
.artist-list .artist{
  width: 178px;
  height: 55px;
  display:flex;
  margin-right: -16px;
  cursor: pointer;
  padding-left:35px;
}
.artist-list .artist:nth-child(6n){
  margin-right: 0px;
}
.artist-list .artist img{
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
}
/*设置分页条居中*/
.singerpage .el-pagination{
  width: 435px;
  height: 35px;
  margin:auto;
  margin-top:15px;
  margin-bottom: 35px;
}
.singerpage .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ff6700;
    color: #FFF;
}
</style>