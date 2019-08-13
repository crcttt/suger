<template>
    <div>
        <div class="login_modal" v-bind:style="{ display: this.$store.state.active }">
            <div class="login_outer">
                <div class="login_header clear">
                    <p class="title">sugar音乐</p>
                    <div class="close" @click="close">
                    <a href="javascript:;">×</a>
                    </div>
                </div>
                <div class="uname">
                    <input type="text" placeholder="邮箱/手机号/ID" v-model="uname">
                </div>
                <div class="upwd">
                    <input type="password" placeholder="登录密码" v-model="upass">
                </div>
                <div class="btns" @click="login">
                    <a class="login_btn">登录</a>
                </div>
                <div class="help">
                    <a href="#">忘记密码</a>
                    <a href="#">忘记用户名</a>
                    <a href="#">免费注册</a>
                </div>
                <div class="login_footer">
                    <p class="otherway">使用其他方式登录:
                    <a href="#">
                        <span class="iconfont icon-weibo"></span>
                    </a>
                    <a href="#">
                        <span class="iconfont icon-weixin"></span>
                    </a>
                    <a href="#">
                        <span class="iconfont icon-qq"></span>
                    </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",
            upass:"",
            
            
        }
    },
    methods: {
        // 关闭登录框
        close(){
            this.$store.state.active="none";
        },
        // 登录界面
        login(){
        // 完成用户登录
        var n = this.uname;
        // 2.获取用户输入的用户密码
        var p = this.upass;
        // 3.创建两个正则表达式
        var nreg = /^[a-zA-Z0-9]{3,10}$/;
        var preg = /^[a-zA-Z0-9]{3,8}$/;
        // 4.判断用户名格式不正确 提示出错
        if (!nreg.test(n)){
            this.$confirm("用户名格式不正确");
            return;
        };
        // 5.判断密码格式不正确，提示出错
        if (!preg.test(p)){
            this.$confirm("密码格式不正确");
            return;
        };
        // 6.将用户名和密码发送 ajax请求
        var url="login";
        var obj={uname:n,upass:p};
        // 7.获取服务器返回结果
        this.axios.get(url,{params:obj}).then(result=>{
            if (result.data.code==1){
            // 8.返回成功 跳转Home.vue
            this.$confirm(result.data.msg);
            var rows=result.data.data;
            this.$store.state.informations=rows;
            // console.log(this.$store.state.informations[0].uname);
            this.close();
            localStorage.setItem("login",true);
            localStorage.setItem("uname",this.$store.state.informations[0].uname);
            this.$store.commit("perinfor");
            // console.log(this.informations);
            // this.$router.push({
            //         path: '/index', 
            //         name:'index',
            //         // params: {   
            //         //     msg: this.$store.state.informations  
            //         // },
            //       })

        }else{
            // 9.返回失败 提示出错
            this.$confirm("消息",result.data.msg)
        }
        });
        },

        
    },
}
</script>
<style>
    body {
        font: 1em "poppin","Microsoft YaHei", "SimSun", "SimHei", Arial;
        color: #000;
        /* white-space: nowrap; */
        word-break: keep-all;
        text-overflow: ellipsis;
    }
    .login_modal{
        background:rgba(0,0,0,0.6);
        height:9999px;
        width:9999px;
        z-index:111;
        top:0;
        left:0;
        position: fixed;
        display:none;
    }
    .login_outer{
        white-space: nowrap;
        background: rgba(255, 255, 255, 0.9);
        color: #000;
        position: absolute;
        width: 500px;
        height: 380px;
        left: 530px;
        top: 100px;
        margin: auto;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0px 0px 10px 5px rgba(74, 73, 73, 0.5);
    }
    .login_outer input{
        background: transparent;
        color: #000;
        outline: none;
        border: none;
        font-size: 0.8em;
        width: 210px;
        height: 23px;
    }
    .login_outer .login_header{
        font-size: 1.2em;
        font-weight: bold;
    }
    .login_outer .login_header .close{
        float: right;
        margin: 12px 12px 5px 0;
        color: #000;
        text-decoration: none;
    }
    .login_outer .login_header .close a {
        color: #000;
        text-decoration: none;
    }
    .login_outer .tag{
        text-align: center;
    }
    .login_outer .btns:hover {
        background: #D41118;
    }
    .login_outer .uname,.login_outer .upwd,.login_outer .btns,.login_outer .login_footer,  
    .login_outer .valicode,.login_outer .help{
        border-radius: 5px;
        border: 1px solid #cbc5c2;
        width: 40%;
        padding: 5px 10px;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
    }
    .login_outer .showMsg,.login_outer .valicode{
        display:none;
        margin: 0 auto;
    }

    .login_outer .help a,.login_outer .otherway{
        color: #000;
        font-size: 0.9em;
    }

    .login_outer .btns{
        background: #E5252C;
        color: #fff;
        text-align: center;
        font-size: 1.1em;
        cursor: pointer;
    }
    .login_outer .login_btn{
        display:block;
        color: #ddd;
    }
    .login_outer .login_footer{
        border: none;
        margin-top:0;
    }
    .login_outer{
        transform-style: preserve-3d;
        transform: rotateX(0deg) rotateY(0deg);
        transform-origin: 50% 50%;
    }
    .login_outer .uname{
        top: 31%;
    }
    .login_outer .upwd{
        top: 44%;
    }
    .login_outer .valicode{
        top: 53%;
    }
    .login_outer .showMsg{
        top: 20%;
        position: absolute;
        left: 0;
        text-align: center;
        right: 0;
        font-size: 0.9em;
    }
    .login_outer .btns{
        top: 65%;
    }
    .login_outer .help{
        top: 86%;
        left: 50%;
    }
    .login_outer .login_footer{
        top: 80%;
        left: -50%;
    }
    .login_outer .uname,
    .login_outer .upwd, 
    .login_outer .valicode, 
    .login_outer .showMsg{
        transform: translateZ(80px);
    }
    .login_outer .btns{
        transform: translateZ(40px);
        width: 205px;
        height: 26px;
    }
    .login_outer .help, 
    .login_outer .login_footer{
        transform: translateZ(10px);
        border:none;
        box-shadow: none;
    }
    .login_outer .help a {
        text-decoration: none;
        cursor: pointer;
        margin-right: 10px;
    }
    .login_outer .login_header{
    transform: translateZ(100px);
    }
   
    #login_bg{
        position: absolute;
        z-index: -1000;
    }
    .login_outer .login_header .title{
        color: #000;
        font-size: 1.2em;
        position: absolute;
        text-align: center;
        left: 0;
        right: 0;
        top: 14px;
        z-index: -1;
        letter-spacing: 3px;
        font-weight: lighter;
        text-shadow: 0px 0px 17px rgba(0,0,0,0.5);
    }
    
    .login_outer .otherway{
        height: 40px;
        line-height: 40px;
    }
    .login_outer .otherway a span {
        vertical-align: middle;
        display: inline-block;
        height: 43px;
        width: 36px;
        font-size: 25px;
    }
    .login_outer .otherway a .icon-weibo {
        color: #d32024
    }
     .login_outer .otherway a .icon-weixin {
        color: #30ce39
    }
    .login_outer .otherway a .icon-qq {
        color: #1296db
    }   
    .login_outer .otherway .icon_wb{
        background-position: -230px -670px;
    }
    .login_outer .otherway .icon_wx{
        background-position: -150px -670px;
    }
    .login_outer .otherway .icon_qq{
        background-position: -190px -670px;
    }
    /* 弹框样式 */
    .el-message-box__btns {
        text-align: center !important;
        position: relative;
        top: 60px;
        
    }
    .el-message-box__btns span {
        font-size: 14px! important;
    }
    
    .el-message-box {
        display: inline-block;
        width: 420px;
        height: 200px;
        position: fixed;
        top: 25%;
        left: 49%;
        background: #f0f0f0;
        text-align: center !important;
        border-radius: 15px !important;
        border: none !important;
    }
    .el-message-box__message p {
        position: relative;
        top: 20px;
        font-size: 16px;
    }



    /* 改写登录输入框默认背景 */
    input:-internal-autofill-selected {
        background-color: #f0f0f0 !important;
        color: rgb(255, 0, 0) !important;
    }

</style>
