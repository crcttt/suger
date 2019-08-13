<template>
  <div class="sugarbox">
    <el-tabs :tab-position="tabPosition" style="height: 100%;">
      <el-tab-pane label="临时列表">
        <div class="playlist">
          <el-table
          ref="multipleTable"
          :data="tableData"
          height="530"
          tooltip-effect="dark"
          style="width: 100%;max-height:550px;fit:true;"
            >
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="song"
            label="歌曲"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            label="歌手"
            >
          </el-table-column>
          <el-table-column
            prop="address"
            label="专辑"
            show-overflow-tooltip>
          </el-table-column>
          </el-table>
            <div style="margin-top: 20px">
            <el-button @click="toggleSelection()">取消选择</el-button>
            <el-button class="iconfont icon-xihuan1"> 喜欢</el-button>
            <el-button class="iconfont icon-danchuang_tianjiadaogedan_"> 加到歌单</el-button>
            <el-button class="iconfont icon-download">下载</el-button>
            <el-button class="el-icon-circle-close"> 删除</el-button>
            <el-button class="el-icon-delete"> 清空歌单</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="播放记录">配置管理</el-tab-pane>
      <el-tab-pane label="我最常听">角色管理</el-tab-pane>
      <el-tab-pane label="下载历史">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>

  export default {
     components:{
        
    },
    data() {
      return {
        tabPosition: 'left',
        tableData: [{
          song: '你会不会',
          name: '王霏霏，GenNeo梁根荣',
          address: '《不会不会》'
        }],
          search: '',
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      
      },
      playList(){
        var url="sugarbox";
        this.axios.get(url).then(result=>{
        var rows=result.data.data;
        this.tableData=rows;
      })
      },



    }
  }
</script>
<style>
  
  .el-tabs--left .el-tabs__nav.is-left{
    width: 180px;
    text-align:center !important;
  }
  .playlist{
    width: 900px;
  }
   
</style>