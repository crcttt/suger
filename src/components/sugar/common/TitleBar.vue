<template>
  <div>
    
    <div class="head">
      <div class="head-container">
          <div class="logo"><a href=""><img src="../../../assets/sugar02.png" alt=""></a></div>
          <div class="head-md">
              <div><a href="javascript:;">发现音乐</a></div>
              <div><a href="javascript:;">下载客户端</a></div>
              <div><a href="javascript:;">音乐现场</a></div>
              <div><a href="javascript:;">VIP会员</a></div>
              <div><a href="javascript:;">sugar耳机</a></div>
          </div>
          <div class="dropdown">
            <a data-trigger="dropdown" href="">更多</a>
            <ul class="dropdown_menu">
                <li><span></span></li>
                <li><a href="javascript:;">sugar音乐人</a></li>
                <li><a href="javascript:;">HiFi音乐</a></li>
                <li><a href="javascript:;">sugar视频</a></li>
                <li><a href="javascript:;">主播电台</a></li>
            </ul>
          </div>
          <div class="search">
              <div class="demo-input-suffix">
                <el-input
                  placeholder="搜索音乐/MV/歌单/歌手"
                  v-model="input" list="s1">
                  <i slot="prefix" class="el-input__icon el-icon-search" @click="tosearch"></i>
                </el-input>
                <datalist id="s1">
                    <option>周杰伦</option>
                    <option>邓紫棋</option>
                    <option>林俊杰</option>
                </datalist>
              </div>
          </div>
          
          <div  class="user-login">
            <div v-if="isLogin==this.$store.state.isLogin">
              <a href="javascript:;" @click="loginshow1">登录 | 注册</a>
            </div>
            <div v-else>
              <a href="javascript:;"  >{{uname}}</a> | <a href="javascript:;" @click="out">注销</a>
            </div>
          </div>
      </div>
    </div>
  </div>
    
  
</template>
<script >
  
  export default {
    data() {
      return {
        activeName: 'second',
        input: '',
        tableData:[],
        isLogin:'',
        uname:'',
      };
    },
    components:{
        
        
    },
    mounted() {
      this.uname=localStorage.getItem("uname")
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      
      loadMore(){
        document.getElementById("dropdown-menu-4205")
        .css({
          "top":"40px",
          "left":"750px"
        })
      },
      loginshow1(){
        this.$store.commit("loginshow");
        
      },
      out(){
        console.log("注销");
        localStorage.removeItem("login");
        this.$store.state.isLogin=false;
      },
      
      
      tosearch(){
        var input=this.input;
        // console.log(input);
        if(input.trim()!==""){
            //内容待后期添加，跳转网页...
            // console.log( `查找 ${input} 相关的网页...`);,params:{tableData:tableData}}
              var url="/titlebar";
              var obj={input:input};
              this.axios.get(url,{params:obj}).then(result=>{
                  var rows=result.data.data;
                  this.tableData=rows;
                  //将数据传给父元素
                  this.$emit("top",this.tableData);
                  // this.$router.push("/songsearch1");
                  // 带着获取的参数跳转到父元素页面
                  this.$router.push({
                    path: '/songsearch', 
                    name:'songslists',
                    params: {   
                        msg: this.tableData  
                    },
                  })
              })
              
            
            
        }
        },


    },
    
  };
</script>
<style >
  .index-tab .el-icon-arrow-down {
    font-size: 12px;
  }
  .index-tab .el-tabs__nav  .el-tabs__item {
    font-size: 16px ;
    padding: 0 30px;
  }
  .index-tab .el-tabs__nav .el-tabs__item.is-active {
    color: #ff6700 ;
    font-size: 16px;
  }
  .index-tab .el-tabs__nav .el-tabs__item:hover {
    color: #ff6700 ;
}
  .index-tab .el-tabs__nav .el-tabs__active-bar {
      background-color: #ff6700;
  }
  body {
      /* width: 100%; */
      margin-top:0 auto;
  }
  .logo a img{
      width: 100px;
      margin: 6px 50px 0 0px;
  }
  .head{
      width: 1200px;
      margin: 0 auto;
  }
  .head-container{
      display: flex;
      /* width: 100%; */
      position: absolute;
      top:0px;
      top: 12px;
  }
  .head-md{
      display: flex;
      width: 560px;
      justify-content: space-between;
  }
  .head-md div {
      /* margin-left: 50px; */
      margin-top: 10px;
  }
  .head-md div a{
      text-decoration: none;
      color: #333;
      font-size: 16px;
  }
  .head-md div a:hover{
      color: #ff6700;
  }
  .search{
    position: relative;
    top: 5px;
    margin-left: 60px;
  }
.search .demo-input-suffix .el-input {
    font-size: 14px;
    width: 200px;
}
.el-input--prefix .el-input__inner {
    height: 35px;
}
.user-login a{
  text-decoration: none;
  color: #333;
  font-size: 14px;
  
}
.user-login a:hover{
  color: #ff6700;
}
.user-login{
  margin-left: 50px;
  position: relative;
  top: 10px;
  width: 75px;
  
}
.dropdown{
  position: relative;
  top: 10px;
  margin-left: 60px;
  width: 50px;
  
}
.dropdown:hover>a{
  color: #ff6700 !important;
  
}
.dropdown:hover>.dropdown_menu{
  height:160px;
}
.dropdown a{
  text-decoration:none; 
  display:inline-block;
  color: #333;
}
.dropdown_menu{
  width: 150px;
  position: relative;
  top: 20px;
  left: -55px;
  list-style:none; margin:0; padding:0;
  box-shadow: 0 0 30px 0 rgba(65,67,70,.08);
  line-height: 25px;
  height:0px;
  overflow:hidden;
  transition:all .5s linear;
  z-index: 999;
  background: #fff;
  
}
.dropdown_menu li{ 
  text-align: center;
}
.dropdown_menu a{ 
  padding: 6px 0px;
  width: 100%;
}
.dropdown_menu li:hover{
  background:#fff
}
/* 去除搜索栏倒三角 */
.search input::-webkit-calendar-picker-indicator{
    display: none;
    -webkit-appearance: none;
}


</style>
