<template>
    <div>
        <div class="lm-main">
            <div class="lm-left">
                <div class="left-contain">
                    <div @click="theBefore"><span class="iconfont icon-shangyishou"></span></div>
                    <div>
                        <div @click="zanting"  v-if="value1==1"><span class="iconfont icon-zanting1" ></span></div>
                        <div @click="bofang"  v-else-if="value1==2"><span class="iconfont icon-bofang" ></span></div>
                    </div>
                    <div @click="theNext"><span class="iconfont icon-xiayishou"></span></div>
                </div>
            </div>
            <div class="lm-middle">
                <ul class="right-top">
                    <li><a href="">再见，昨天</a></li>
                    <li class="icon-rows">
                        <div @click="shoucang" v-if="value4==1"><span class="iconfont icon-xihuan1"></span></div>
                        <div @click="yishoucang" v-else-if="value4==2"><span class="iconfont icon-xihuan"></span></div>
                        <span class="iconfont icon-danchuang_tianjiadaogedan_"></span>
                        <span class="iconfont icon-download"></span>
                        <span class="iconfont icon-fenxiang"></span>
                    </li>
                </ul>
                
                <ul class="right-bottom">
                    <li class="progress-bar" v-on:mouseup="trim" >
                        <div class="block">
                            <el-slider v-model="value2"></el-slider>
                        </div>
                    </li>
                    <li >
                        <span class="curTime">{{timex}}</span>
                        <span class="split">/</span>
                        <span class="totalTime">{{totle_time}}</span>  
                    </li>
                </ul>
            </div>
            <div class="lm-right">
                <ul>
                    <li class="right-trans">
                        <div @click="xunhuan" v-if="value3==1"><span class="iconfont icon-xunhuan"></span></div>
                        <div @click="suiji" v-else-if="value3==2"><span class="iconfont icon-suijibofang"></span></div>
                        <div @click="s_loop" v-else-if="value3==3"><span class="iconfont icon-single-loop"></span></div>
                    </li>
                    <li class="right-sound">
                        <div class="block">
                            <div @click="yinliang" v-if="value5==1" class="shengyin"><span class="demonstration iconfont icon-shengyinyinliangxianxing"></span></div>
                            <div @click="jingyin" v-if="value5==2" class="shengyin"><span class="demonstration iconfont icon-shengyinjingyinxianxing"></span></div>
                            <div @mouseup="sound"><el-slider v-model="value6"></el-slider></div>
                        </div>
                    </li>
                    <li class="btn btn1">
                        <button>选择音质</button>
                    </li>
                    <li class="btn btn2">
                        <button>随心听</button>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <audio :src="'http://127.0.0.1:3000/song01.mp3'"  ref="myaudio"></audio>
        </div>
    </div>
    
</template>
<script>

export default {
    data(){
        return{
            value1:2,
            value2:0,
            value3:1,
            value4:1,
            value5:1,
            value6:50,
            timex:"",
            totle_time:"",
            i:0,
            t2:0,
            t1:0,
        }
    },
    // watch: {
    //     value2:function() {
    //             this.value2 = this.t2*100/this.t1;
    //             this.t2 = this.value2*this.t1/100;
    //            },
    //     t2:function() {
    //             this.t2 = this.value2*this.t1/100;
    //             this.value2 = this.t2*100/this.t1;
    //         },
    // },
    created() {
        
    },
    mounted() {
        this.progress();
        this.timeshow();
    },
    methods: {
        formatTooltip(val) {
            return val / 100;
        },
        
        zanting(){
            this.value1=2;
            this.$refs.myaudio.pause()
        },
        bofang(){
            this.value1=1;
            this.$refs.myaudio.play();
            this.progress();
        },
        xunhuan(){
            this.value3=2;
        },
        suiji(){
            this.value3=3;
        },
        s_loop(){
            this.value3=1;
        },
        shoucang(){
            this.value4=2;
        },
        yishoucang(){
            this.value4=1;
        },
        yinliang(){
            this.value5=2;
            this.$refs.myaudio.muted=true;
        },
        jingyin(){
            this.value5=1;
            this.$refs.myaudio.muted=false;
        },
        sound(){
            this.$refs.myaudio.volume=this.value6/100;
        },
        theBefore(){
            this.$refs.myaudio.src="http://127.0.0.1:3000/song02.mp3";
            this.value1=1;
            this.$refs.myaudio.play();
        },
        theNext(){
            this.$refs.myaudio.src="http://127.0.0.1:3000/song03.mp3";
            this.value1=1;
            this.$refs.myaudio.play();
        },
        
        //  playTime(){
        //     var t1=document.getElementById("myaudio").duration;
        //     this.i++;
        //     this.value2=this.i*100/t1;
        //     if(this.i<=100&& this.value1==1){
        //         setTimeout(this.playTime,1000);
        //     }
        //     console.log(this.value2);
        // },
        progress(){
            var t1=this.$refs.myaudio.duration;
            var t2=this.$refs.myaudio.currentTime;
            this.value2=t2*100/t1;
            this.timeshow();
            setTimeout(this.progress,1000);
        },
        
        trim(){
            var t1=this.$refs.myaudio.duration;
            this.$refs.myaudio.currentTime = this.value2*t1/100;
            this.value1=1;
            this.$refs.myaudio.play();
        },
        timeshow(){
            var t1=this.$refs.myaudio.duration;
            var s1=parseInt(t1%60);
            var m1=parseInt(t1/60);
            this.totle_time=(m1+":"+s1);
            // console.log(this.totle_time);/
            var t2=this.$refs.myaudio.currentTime;
            var s2=parseInt(t2%60);
            var m2=parseInt(t2/60);
            this.timex=(m2+":"+s2);
            // console.log(this.timex);
        },
        
          
      
    },
}
</script>
<style>
    .lm-main{
        width: 100%;
        min-width: 1200px;
        overflow: hidden;
        height: 80px;
        position: fixed;
        bottom: 0;
        background: #666;
        display: flex;
        justify-content: space-between;
        z-index: 110;

    }
    .lm-left{
        width: 150px;
        position: relative;
        color: #fff;
    }
    .lm-left span{
        cursor: pointer;
    }
    .left-contain{
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        top: 15px;
    }
    .lm-left .icon-shangyishou,.lm-left .icon-xiayishou{
        font-size: 25px; 
    }
    .lm-left .icon-shangyishou:hover,.lm-left .icon-xiayishou:hover{
        color: rgb(212, 212, 212); 
    }
    .lm-left .icon-zanting1,.lm-left .icon-bofang{
        font-size: 45px; 
    }
    /* .lm-left .icon-zanting1{
        display: none; 
    } */
    .lm-middle{
        width: 53%;
        position: relative;
        top:20px;
    }
    .lm-middle ul{
        list-style: none;
        position: relative;
        display: flex;
        justify-content: space-between;
        color: #fff;
        font-size: 15px;

    }
    .lm-middle ul a{
        color: #fff;
        text-decoration: none;
    }
    .lm-middle ul li .iconfont{
        font-size: 20px;
        cursor: pointer;
    }
    .lm-middle ul li span{
        font-size: 15px;
    }
    .lm-middle .right-top .icon-rows div{
        width: 20px;
        height: 20px;
    }
    .lm-middle .right-top .icon-rows div span{
        font-size: 20px;
    }
    /* .lm-middle .right-top .icon-rows div .icon-qietu-{
        font-size: 17px;
    } */
    .lm-middle .right-top :nth-child(2){
        position: relative;
        width: 25%;
        display: flex;
        justify-content: space-around;
    }
    .lm-middle .right-bottom .progress-bar{
        position: relative;
        top: -12px;
        width: 90%;
    }
    .lm-middle .right-bottom .progress-bar+li {
        position: relative;
        top: -3px;
        right: 7px;
    }
   
    .lm-right {
        width: 500px;
        position: relative;
        top:20px;

    }
    .lm-right ul{
        position: relative;
        display: flex;
        list-style: none;
        color: #fff;
    }
    .right-sound{
        width: 150px;
    }
    .right-sound .block .shengyin {
        width: 25px;
        height: 25px;
        position: relative;
        top: 7px;
    }
    .right-sound .block div span{
        font-size: 20px;
    }
    
    
    .lm-right ul .btn {
        margin-left: 25px; 

    }
    .lm-right ul .btn button{
        width: 100px;
        height: 32px;
        border: 1px solid #fff;
        background-color: #666;
        border-radius: 7px;
        color: #fff;

    }
    .lm-right ul li .block{
        position: relative;
        display: flex;
    } 
    .lm-right ul li span{
        cursor: pointer;
    }
    .lm-right ul li .icon-volumemedium{
        position: relative;
        font-size: 28px;
    }
    .lm-right ul li .block .el-slider{
        width: 100px;
        position: relative;
        left: 12px;
    }
    .lm-right ul .right-trans{
        position: relative;
        top: 7px;
        
    }
    .lm-right ul .right-trans div {
        width: 30px;
        height: 30px;
    }
    .lm-right ul .right-trans div span {
        font-size: 20px;
    }
    .lm-right ul .right-trans div span:hover{
        color: rgb(212, 212, 212);
    }
        
        
    

</style>
