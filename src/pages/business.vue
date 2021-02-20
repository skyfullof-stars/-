<template>

<el-main>
  
      <el-table :data="tableData" style="width: 100%">
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
        <el-table-column label="店铺名称" prop="name">
        </el-table-column>
        <el-table-column label="店铺地址" prop="address">
        </el-table-column>
        <el-table-column label="店铺介绍" prop="desc">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible">
              <el-form>
                <!--:model="arr" -->
                <el-form-item label="店铺名称">
                  <el-input v-model="name" style="width: 50%" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <el-input v-model="address" style="width: 50%" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="店铺介绍">
                  <el-input v-model="desc" style="width: 50%" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                  <el-input v-model="tel" style="width: 50%" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="店铺分类">
                  <el-select v-model="region" placeholder="请选择店铺分类">
                    <el-option label="小吃" value="shanghai"></el-option>
                    <el-option label="风味" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="change">确 定</el-button>
              </div>
            </el-dialog>
            <el-button size="mini" id="myButton" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
          name: '好滋好味鸡蛋仔',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          tel: 78522548,
          shopId: '10333',
          introduce: '江浙小吃、小吃零食',
          volume: 1056,
          score: 9.5
        }, {
          name: '淮南牛肉汤',
          desc: '好喝的牛肉汤',
          address: '淮南市',
          tel: 78522548,
          shopId: '10333',
          introduce: '淮南小吃',
          volume: 1056,
          score: 9.5
        }, {
          name: '阜阳格拉条',
          desc: '阜阳特色',
          address: '阜阳市到处可见',
          tel: 78522548,
          shopId: '10333',
          introduce: '阜阳美食',
          volume: 1056,
          score: 9.5
        }, {
          name: '阜阳卷膜',
          desc: '卷着吃的摸',
          address: '阜阳',
          tel: 78522548,
          shopId: '10333',
          introduce: '早餐',
          volume: 1056,
          score: 9.5
        }, {
          name: '渣肉蒸饭',
          desc: '香的不得了',
          address: '芜湖',
          tel: 78522548,
          shopId: '10321',
          introduce: '芜湖早餐',
          volume: 1056,
          score: 9.5
        }],
        name: '',
        address: '',
        desc: '',
        tel: '',
        region: '',
        dialogFormVisible: false,
        changeindex: 0,
        arr: []
        /*  formLabelWidth: '120px' */
      }
    },
    methods: {
      handleEdit(index, row) {

        /* 获取每个元素的值,在下方change中去变更*/
        this.changeindex = index;
        this.name = this.tableData[index].name;
        this.address = this.tableData[index].address;
        this.desc = this.tableData[index].desc;
        this.tel = this.tableData[index].tel;
        this.region = this.tableData[index].region;
        this.dialogFormVisible = true;
      },
      handleDelete(index, row) {
        /* 在这里需要用到jquer去掏空这一个删除,使用原生js好像也可以*/
         this.$confirm('此操作将永久删除该店铺, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  let myButton = document.getElementById("myButton");
                  myButton.parentElement.parentElement.parentElement.remove();
                  this.$message({
                    type: 'success',
                    message: '删除成功!'
                  });
                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '已取消删除'
                  });
                });
      },
      /* 通过这个去修改编辑后的内容,用v-model实时改变不太好*/
      change() {

        this.tableData[this.changeindex].name = this.name;
        this.tableData[this.changeindex].address = this.address;
        this.tableData[this.changeindex].desc = this.desc;
        this.tableData[this.changeindex].tel = this.tel;
        this.tableData[this.changeindex].region = this.region;
        this.dialogFormVisible = false;

      }
    }
  }
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .el-dialog__wrapper{
    overflow: hidden;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
