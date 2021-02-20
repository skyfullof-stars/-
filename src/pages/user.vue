<template>

   <el-main>
      <el-table  height="533" border style="width: 100%"   :data="tableData.slice((currentPage1-1)*pagesize,currentPage1*pagesize)" >
        <el-table-column prop="id" label="#" width="180">
        </el-table-column>
        <el-table-column prop="username" label="用户名称" width="180">
        </el-table-column>
        <el-table-column prop="password" label="用户密码" width="180">
        </el-table-column>
       
      </el-table>
       
      <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
    
      layout="total, prev, pager, next"
      :total="tableData.length">
    </el-pagination>
  </div>
   </el-main>

</template>

<script>
import {mapActions, mapState} from 'vuex'
 
  export default {
      created(){
        //触发adction的一种方式
        this.$store.dispatch('getuserlist')
      },
    computed:{
      
      ...mapState({
        tableData:state=>state.userlist
      }),
      
    },
  
    data() {
      return {
          currentPage1:1, //初始页
          pagesize:10,    //    每页的数据
        
      }
    },
    methods: {
    ...mapActions(['getuserlist']),
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val){
        this.currentPage1=val;
        console.log(`当前第${val}页`);
      },
      tableRowClassName({
        row,
        rowIndex
      }) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    }

  }
</script>

<style>
.form{
  width: 100%;
  padding: 20px;
}
  .el-table .warning-row {
    background: oldlace;

  }

  .el-table__header-wrapper {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #E9EEF3;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
