<template>
  <div>
    <ul class="titleT"  >
      <li><router-link  to="/">推荐</router-link></li>
      <li><router-link to="/RankingList">排行榜</router-link></li>
      <li><router-link to="/SingerPage">歌手</router-link></li>
      <li><router-link to="/songlist">歌单</router-link></li>
      <li><router-link to="/mv">MV</router-link></li>

    </ul>
  </div>
</template>
<script>
export default {
  props:{ //声明接收父组件数据
  },
  data() {
    return {
      
    }
  },
  created() {
    this.mo()
  },
  methods: {

    mo(){
      var str=location.href;
      //str=str.split("#/");
      //str=str[1];
      //console.log(str)
      var as=document.querySelectorAll(".titleT a");
      for (let i = 0; i < as.length; i++) {
        as[i].className="";
        var link=as[i].href;
        //link=link.split("#/");
        //link=link[1];
        //console.log(link)
        if (str==link) {
          as[i].className="active"
        }
      }
    }
  },
}
</script>
<style scoped>
.titleT{
  height: 54px;
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  padding-left: 206px
}
.titleT>li{
  margin-right: 34px;
  padding: 15px 0;
}
.titleT a{
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: 300;
}


</style>

<style >
.titleT .router-link-exact-active.router-link-active, .titleT a.active{
  color: #000;
  font-weight: 600;
  border-bottom: 5px solid #ff6700;
}
</style>
