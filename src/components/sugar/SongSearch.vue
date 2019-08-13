<template>
    <div>
        <div>
            <titlebar v-on:top="lchild"></titlebar>
        </div>
        <!-- 像素占位符 -->
        <div style="margin-top:60px;">
        </div>
        <div class="search-page">
            <div class="sc-input">
                <div class="sc-carousel">
                    <el-carousel :interval="4000" type="card" height="200px">
                        <el-carousel-item v-for="(item,index) of list" :key="index">
                        <h3 class="medium"><img :src="'http://127.0.0.1:3000/'+item.img" alt="图片加载失败"></h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="button-group">
                <button class="song-play">
                    <span class="iconfont icon-bofangsanjiaoxing"></span>
                    播放音乐
                </button>
                <button class="collect">
                    <span class="iconfont icon-xihuan1"></span>
                    收藏
                </button>
                <button class="song-load">
                    <span class="iconfont icon-download"></span>
                    下载
                </button>
            </div>
            <div class="song-list">
                <div class="page-top">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="搜索结果" disabled>
                        </el-tab-pane>
                        <el-tab-pane label="单曲" name="first">
                            <div class="sc-list">
                                <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
                                    @selection-change="handleSelectionChange">
                                    <el-table-column type="selection" width="55"></el-table-column>
                                    <el-table-column width="63">
                                    <template slot-scope="scope">{{ scope.row.date }}</template>
                                    </el-table-column>
                                    <el-table-column prop="song" label="歌曲" width="300"></el-table-column>
                                    <el-table-column prop="sname" label="歌手" width="300"></el-table-column>
                                    <el-table-column prop="scd" label="专辑" width="300"></el-table-column>
                                    <el-table-column show-overflow-tooltip>
                                        <div class="icon-sc">
                                            <span class="iconfont icon-bofangsanjiaoxing" ></span>
                                            <span class="iconfont icon-danchuang_tianjiadaogedan_"></span>
                                            <span class="iconfont icon-download"></span>
                                            <span class="iconfont icon-fenxiang"></span>
                                        </div>
                                    </el-table-column>
                                    
                                </el-table>
                                <div style="margin-top: 20px">
                                    <el-button @click="toggleSelection()">取消选择</el-button>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="MV" name="second">

                        </el-tab-pane>
                        <el-tab-pane label="歌单" name="third">
                            
                        </el-tab-pane>
                        <el-tab-pane label="歌手" name="fourth">
                            
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
        <div>
            <listenmusic></listenmusic>
        </div>
        <div>
            <footerbar></footerbar>
        </div>
    </div>
    
    
    
</template>
<script>
import TitleBar from "./common/TitleBar";
import FooterBar from "./common/FooterBar";
import ListenMusic from "./common/ListenMusic";
export default {
    props:[],
    name:"app",
    data(){
        return{
            activeName: 'first',
            tableData: [],
            input: '',
            list:[],
            multipleSelection: [],
        }
    },
    components:{
        "titlebar":TitleBar,
        "footerbar":FooterBar,
        "listenmusic":ListenMusic,
    },
    created() {
        this.loadcar();
    },
    
    // watch: {
    //     sclist:function(newVal,oldVal){
    //     this.tableData = newVal;
    // }

    // },
    mounted: function () {
        //使tableData等于页面跳转传输来的数据
      this.tableData = this.$route.params.msg;
    //   console.log(this.tableData);
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        // 歌曲列表方法
        toggleSelection(rows) {
            if (rows) {
            rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
            } else {
            this.$refs.multipleTable.clearSelection();
            }
        },
        //
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //搜索请求
        loadcar(){
            var url="songsearch";
            this.axios.get(url).then(result=>{
                var rows=result.data.data;
                this.list=rows;
            })
        
        
      },
      lchild:function(Data){
            this.tableData=Data;
            console.log(this.tableData[0].img);
      },
    

    },
    
}
</script>
<style>
    /* .search-page{
        background-color: #88d1d7;
    } */
     .sc-input{
        width: 1200px;
        margin: 0 auto;
    } 
    .sc-carousel{
        /* min-width: 1200px; */
        margin: 0 auto;
    }
    .sc-carousel img {
        border-style: none;
        width:100%;
        height: 200px;
    }
    .sc-carousel .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    
    .sc-carousel .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .sc-carousel .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .sc-list{
        margin-top: 60px;
    }
    .page-top{
        margin: 15px 0;
    }
    .page-top #tab-0 {
        font-size: 22px;
        font-weight: 600;
        display: inline-block;
        color: #000;
        
    }
    .page-top .el-tabs__nav-wrap::after {
        display: none;
    }
    .search-page{
        margin: 0 auto;
    }
    .song-list{
        width: 1200px;
        margin: 0 auto;
    }
    .search-page .button-group {
        width: 1200px;
        margin: 0 auto;
    }
        
    .search-page .button-group button {
        border-radius: 20px;
        border: none;
        height: 40px;
        margin-right: 20px;
    }
    .search-page .button-group button span {
        color: #000;
        font-size: 16px;
    }
    .search-page .button-group .song-play {
        background: #ff6700;
        width: 150px;   
    }
    .search-page .button-group .collect {
        background: #f2f2f2;
        width: 120px;   
    }
    .search-page .button-group .song-load {
        background: #f2f2f2;
        width: 150px;   
    }
    .sc-text input::-webkit-calendar-picker-indicator{
        display: none;
        -webkit-appearance: none;
    }
    .page-top .el-tabs__content {
    top: -65px;
    }
    .icon-sc .iconfont {
        font-size: 20px;
        margin-right: 10px;
        cursor: pointer;
    }
    
</style>