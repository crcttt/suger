<template>
    <div>
        <div >
            <login></login>
        </div>
        <div>
            <listenmusic></listenmusic>
        </div>
        <div>
            <titlebar></titlebar>
        </div>
        <!-- 像素占位符 -->
        <div style="margin-top:60px;">
        </div>
        <div>
            <titlet></titlet>
        </div>
        <div>
            <carousel></carousel>
        </div>
        <div class="with-aside" id="apprence">

        </div>
        <div>
            <ranking></ranking>
        </div>
        <div>
            <recommen></recommen>
        </div>
        <div>
            <asidebar></asidebar>
         </div>
        <div>
            <footerbar></footerbar>
        </div>
    </div>
</template>
<script>
import TitleBar from "./common/TitleBar";
import AsideBar from "./common/AsideBar";
import FooterBar from "./common/FooterBar";
import Recommen from "./common/Recommen";
import TitleT from "./common/TitleT";
import Carousel from "./common/Carousel";
import Ranking from "./common/Ranking";
import Login from "./common/Login";
import ListenMusic from "./common/ListenMusic";
export default {
    data(){
        return{
            // uname:'',
            // id:'',
            


        }
    },
    created() {
        // console.log(localStorage.getItem("login"));
        if(localStorage.getItem("login")){
            
            this.$store.state.isLogin=true;
            // console.log(localStorage.getItem("login"));
            console.log(localStorage.getItem("uname"));
            
        }else{
            this.$store.state.isLogin=false;
            
        }
    },
    mounted() {
        
    },
    components:{
        "titlebar":TitleBar,
        "asidebar":AsideBar,
        "footerbar":FooterBar,
        "recommen":Recommen,
        "carousel":Carousel,
        "ranking":Ranking,
        "login":Login,
        "listenmusic":ListenMusic,
        "titlet":TitleT,
    },
    methods: {
      
        
        
    },
}
</script>
<style>
html ::-webkit-scrollbar {/*滚动条整体样式*/
width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
height: 5px;
}
::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
border-radius: 5px;
background: rgba(0,0,0,0.2);
}
.footer{
    position: relative;
    bottom: -12px;
}

</style>
