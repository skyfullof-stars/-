<template>
<el-main>
   <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
     <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="店铺名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="店铺介绍">
                <span>{{ props.row.introduce }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="联系电话">
                <span>{{ props.row.tel }}</span>
              </el-form-item>
              <el-form-item label="评分">
                <span>{{ props.row.score }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
              <el-form-item label="月销量">
                <span>{{ props.row.volume }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="商品分类"
      prop="name">
    </el-table-column>
    <el-table-column
      label="商品编码"
      prop="name">
    </el-table-column>
    <el-table-column
      label="规格"
      prop="name">
    </el-table-column>
    <el-table-column
      label="操作"
      >
      <template slot-scope="scope">
       
        <el-button
        class="el-icon-more operation-button"
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"></el-button>
        <el-button
          size="mini"
          type="danger"
         class="el-icon-delete operation-button" 
          @click="handleDelete(scope.$index, scope.row)"></el-button>
        <el-button
          size="mini"
         class="el-icon-edit-outline operation-button" 
          @click="handleDelete(scope.$index, scope.row)"></el-button>
      </template>
    </el-table-column>
  
    <el-table-column
      align="right"
      >
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      
    </el-table-column>
  </el-table>
  </el-main>
</template>
<script>
export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
}
</script>
<style>

.el-table th>.cell{
    padding-left:14px;
}
.operation-button{
   border: none;
   padding: 0;
}

</style>