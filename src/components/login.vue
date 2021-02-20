<template>
  <div class="login">
    
    <el-form
      :model="login"
      status-icon
      :rules="rules"
      ref="login"
      label-width="100px"
      class="demo-login"
    >
      <span class="title">电商管理系统登陆</span>
      <el-form-item label="用户账户:" prop="username">
        <el-input
          type="text"
          v-model="login.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          type="password"
          v-model="login.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      
      
      <el-form-item>
        <el-button @click="move('/register')">注册</el-button>
    
        <el-button type="primary" @click="submitForm('login')"
          >提交</el-button
        >
        <el-button @click="resetForm('login')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
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
    };
  },
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let _this = this;
            //在这里通过vue
            //发送url请求
            console.log("即将请求login发送代码验证")
            this.axios.post('http://localhost:3000/login',{
                name:_this.login.username,
                psw:_this.login.password
            }).then(value=>{
               localStorage.setItem('user',JSON.stringify(value.data))
              //在这里去操作存储
             this.$store.dispatch('getuser',value.data)
             if(value.data.length){
             _this.$message({
               message:"恭喜你登陆成功",
               type:'success'
             }) 
             _this.$router.push('/homepage')
             }else{
                _this.$message.error("登陆失败,请重置后重新输入");
             }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      move(str){
        let path =str
        this.$router.push(path)
      }
     
      
    }
  
};
</script>
<style>
.login{
  background-color: #bfa;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login > .el-form{
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
