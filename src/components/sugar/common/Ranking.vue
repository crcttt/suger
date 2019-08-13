<template>
  <div id="top">
    <div class="rec-nav">
      <span>排行榜</span>
      <a href=":;javascript"><router-link to="/songlist">更多</router-link>
        <i class="el-icon-arrow-right"></i>
      </a>
    </div>
    <div class="hot-list">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="top-head">
              <img class="top-bg" src="../../../assets/ranking/rege.jpg">
              <img class="top-cover" src="../../../assets/ranking/rege.png">
              <i class="el-icon-video-play"></i>
            </div>
            <ul class="top-list">
              <li class="top-lists">
                <div class="top-num">
                  <img src="../../../assets/ranking/top1.png">
                </div>
                <div class="top-text">
                  <p class="top-sing">来自天堂的魔鬼</p>
                  <p class="top-singer">G.E.M邓紫棋</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">
                  <img src="../../../assets/ranking/top2.png">
                </div>
                <div class="top-text">
                  <p class="top-sing">你的酒馆对我打了烊</p>
                  <p class="top-singer">陈雪凝</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">
                  <img src="../../../assets/ranking/top3.png">
                </div>
                <div class="top-text">
                  <p class="top-sing">缘分一道桥</p>
                  <p class="top-singer">王力宏&谭维维</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">4</div>
                <div class="top-text">
                  <p class="top-sing">心如止水</p>
                  <p class="top-singer">Ice Paper</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">5</div>
                <div class="top-text">
                  <p class="top-sing">多年以后</p>
                  <p class="top-singer">大欢</p>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="top-head">
              <img class="top-bg" src="../../../assets/ranking/xinge.jpg">
              <img class="top-cover" src="../../../assets/ranking/xinge.png">
              <i class="el-icon-video-play"></i>
            </div>
            <ul class="top-list">
              <li class="top-lists">
                <div class="top-num">
                  <img src="../../../assets/ranking/top1.png">
                </div>
                <div class="top-text">
                  <p class="top-sing">长安决</p>
                  <p class="top-singer">汪苏泷</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">
                  <img src="../../../assets/ranking/top2.png">
                </div>
                <div class="top-text">
                  <p class="top-sing">蝴蝶知道她爱谁</p>
                  <p class="top-singer">张杰</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">
                  <img src="../../../assets/ranking/top3.png">
                </div>
                <div class="top-text">
                  <p class="top-sing">你</p>
                  <p class="top-singer">印子月</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">4</div>
                <div class="top-text">
                  <p class="top-sing">棒棒糖</p>
                  <p class="top-singer">兔子牙[主播]</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">5</div>
                <div class="top-text">
                  <p class="top-sing">不抛弃不放弃</p>
                  <p class="top-singer">ONER</p>
                </div>
              </li>
            </ul>
          </div>  
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="top-head">
              <img class="top-bg" src="../../../assets/ranking/oumei.jpg">
              <img class="top-cover" src="../../../assets/ranking/oumei.png">
              <i class="el-icon-video-play"></i>
            </div>
            <ul class="top-list">
              <li class="top-lists">
                <div class="top-num">
                  <img src="../../../assets/ranking/top1.png">
                </div>
                <div class="top-text">
                  <p class="top-sing">That Girl</p>
                  <p class="top-singer">Olly Murs&摩登兄弟&CORSAK</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">
                  <img src="../../../assets/ranking/top2.png">
                </div>
                <div class="top-text">
                  <p class="top-sing">You Need To Calm Down</p>
                  <p class="top-singer">Taylor Swift</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">
                  <img src="../../../assets/ranking/top3.png">
                </div>
                <div class="top-text">
                  <p class="top-sing">bad guy</p>
                  <p class="top-singer">Billie Eilish</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">4</div>
                <div class="top-text">
                  <p class="top-sing">On My Way</p>
                  <p class="top-singer">Alan Walker&Sabrina Carpenter&Farruko</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">5</div>
                <div class="top-text">
                  <p class="top-sing">Speechless</p>
                  <p class="top-singer">Naomi Scott</p>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="top-head">
              <img class="top-bg" src="../../../assets/ranking/rihan.jpg">
              <img class="top-cover" src="../../../assets/ranking/rihan.png">
              <i class="el-icon-video-play"></i>
            </div>
            <ul class="top-list">
              <li class="top-lists">
                <div class="top-num">
                  <img src="../../../assets/ranking/top1.png">
                </div>
                <div class="top-text">
                  <p class="top-sing">如果你也想起我</p>
                  <p class="top-singer">允儿</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">
                  <img src="../../../assets/ranking/top2.png">
                </div>
                <div class="top-text">
                  <p class="top-sing">Snapping</p>
                  <p class="top-singer">金请夏</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">
                  <img src="../../../assets/ranking/top3.png">
                </div>
                <div class="top-text">
                  <p class="top-sing">BIRTHDAY</p>
                  <p class="top-singer">全昭弥</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">4</div>
                <div class="top-text">
                  <p class="top-sing">Boy With Luv</p>
                  <p class="top-singer">BTS(防弹少年团)</p>
                </div>
              </li>
              <li class="top-lists">
                <div class="top-num">5</div>
                <div class="top-text">
                  <p class="top-sing">Ghosts of the Sea</p>
                  <p class="top-singer">米津玄师</p>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods: {
    
  },
}
</script>
<style>
#top{
  width: 1200px;
  margin:20px auto;
}
#top a{
  color:gray;
}
.el-icon-arrow-right{
  color:gray;
}
#top a:hover{
  color:#ff6700;
  font-weight:bold;
}
.rec-nav{
  display:flex;
  height: 80px;
}
.rec-nav span{
  margin-right: 40px;
  font-size: 28px;
  line-height: 80px;
  font-weight:bold;
}
.rec-nav a{
  height: 20px;
  margin-top: 35px;
  font-size: 14px;
  line-height: 20px;
  text-decoration:none;
}
.hot-list .el-row {
  height: 520px;
}
.el-col {
  border-radius: 4px;
  
}
.bg-purple {
  background:  #ff660033;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  height: 500px;
}
.top-head{
  width: 280px;
  height: 140px;
  overflow: hidden;
  position: relative;
  border-radius:4px;
}
.top-bg{
	max-width: 100%;
}
.top-cover{
  position: absolute;
  width: 205px;
  height: 60px;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  padding: 40px;
}
.top-head i{
  display: none; 
}
.el-icon-video-play{
  position: absolute;
  width: 50px;
  height: 50px;
  right: 5px;
  bottom: 5px;
  font-size:50px;
  color: #fff;
}
.top-head:hover .el-icon-video-play{
  display: block;
}
.top-list{
  width: 245px;
  height: 320px;
  padding: 20px;
  list-style:none;
  margin: 0;
}
.top-lists{
  margin: 0;
  height: 64px;
  display:flex;
}
.top-num{
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
}
.top-list img{
  width: 40px;
  height: 40px;
  padding: 5px;
}
.top-text{
  width: 195px;
  height: 60px;
}
.top-sing{
  margin: 0;
  padding: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.top-sing:hover{
  color:#ff6700;
  font-weight: bold;
}
.top-singer{
  margin: 0;
  padding: 5px;
  font-size: 14px;
  color:gray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.top-singer:hover{
  color:#ff6700;
}
</style>