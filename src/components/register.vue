<template>
    <div id="zhuce" class="result">
    <el-form
      :model="result"
      status-icon
      :rules="rules"
      ref="result"
      label-width="100px"
      class="demo-result"
    >
      <span class="title">注册</span>
      <el-form-item label="请输入注册账户:" prop="username">
        <el-input
          type="text"
          v-model="result.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="请输入密码:" prop="password">
        <el-input
          type="password"
          v-model="result.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button @click="register('result')">注册</el-button>
         </el-form-item>
          </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return {
        result:{
            username:'',
            password:''
        },
         rules:{
       username:[
          {   required: true, message: '请输入用户名', trigger: 'blur' },//非空
            { min: 5, max:16, message: '长度在 5 到 16 个字符', trigger: 'blur' }//规范
       ],
        password:[
          {   required: true, message: '请输入密码', trigger: 'blur' },//非空
            { min: 5, max:16, message: '长度在 5 到 16 个字符', trigger: 'blur' }//规范
       ],
     }
        }
        
    },
    methods:{
         register(formName){
  this.$refs[formName].validate((valid) =>{
      const _this = this;
            if(valid){
                this.$message({
                    message:"恭喜你注册成功,请手动返回登陆",
                    type:'success'
                })
              //发送axios请求去往数据库中存数据
              const _this =this;
              this.axios.post('/api/register',{
                name:_this.result.username,
                psw:_this.result.password
              }).then(value=>{
                console.log(value)
                })
            }
   });
    }
    }
}
</script>
<style>
.result{
background-color: #bfa;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-form{
    padding: 0px 40px 10px 0px;
    border: 1px solid slategrey;
    border-radius: 10px;
}
.el-form .title{
  font-size: 20px;
  font-weight: bold;
  display: block;
  padding: 20px 0px 10px 100px ;
}
</style>