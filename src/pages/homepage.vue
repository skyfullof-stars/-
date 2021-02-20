<template>
  <el-container>
    <el-header>
      <button class="open" @click="open_side">{{ view }}</button>
      <!-- 使默认样式失效 separator-class=" "  -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <a href="#/homepage" @click="show">首页</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item v-show="active">{{ active }}</el-breadcrumb-item>
        <el-breadcrumb-item v-show="activity">{{
          activity
        }}</el-breadcrumb-item>
      </el-breadcrumb>

      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{ $store.state.userinfo.username }}</span>
    </el-header>
    <el-container>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      </el-radio-group>
      <el-menu
        router
        class="el-menu-vertical-demo menu"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#4B4C55"
        text-color="#fff"
        active-text-color="orange"
      >
        <!-- default-active  当前激活菜单的 index -->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">数据管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/user" id="list">会员列表</el-menu-item>
            <el-menu-item index="/business">商家列表</el-menu-item>

            <el-menu-item index="/goodslist">商品列表</el-menu-item>
            <el-menu-item index="1-3">订单列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">添加数据</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">添加商家</el-menu-item>
            <el-menu-item index="2-1">添加商品</el-menu-item>
            <el-menu-item index="1-3">商品列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">用户列表</el-menu-item>
            <el-menu-item index="1-2">商家列表</el-menu-item>
            <el-menu-item index="1-3">商品列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">用户列表</el-menu-item>
            <el-menu-item index="1-2">商家列表</el-menu-item>

            <el-menu-item index="1-3">商品列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">图表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">商家分布</el-menu-item>
            <el-menu-item index="1-1">访客分布</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>

      <el-main v-show="this.$route.path == '/homepage'">
      <span>欢迎来到电商后台管理系统</span>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>用户信息</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >操作按钮</el-button
            >
          </div>
          <div class="text item">
            "用户id: " {{ id }} "用户名称: "{{ username }} "用户密码: "{{ psw }}
          </div>
        </el-card>

        <el-card class="box-card" >
        <div slot="header" class="clearfix serach-header">
          <p>天气搜索</p>
          <span>城市名称:</span>
           <input
                        v-model="query"
                       @keypress="fetchWeather"
                        type="text"
                        class="search"
                        placeholder="请输入城市名称">
        </div>
       <div v-if="weather.cityid">
         <div   class="text item">
        <span>当前城市: {{ weather.city }}</span>
        </div>
            <div   class="text item">
        <span>当前日期: {{ weather.date }} {{ weather.week }}</span>
        </div>
             <div   class="text item">
        <span>当前天气: {{ weather.wea }}</span>
        </div>
            <div   class="text item">
        <span>实时温度: {{ weather.tem }}</span>
        </div>
            <div   class="text item">
        <span>最高温度: {{ weather.tem1 }}</span>
        </div>
            <div   class="text item">
        <span>最低温度: {{ weather.tem2 }}</span>
        </div>
       
       </div>
      </el-card>
      </el-main>
      <router-view></router-view>

      <!-- <el-main>
        <test />

        <router-view></router-view>
       
      </el-main> -->
    </el-container>
  </el-container>
</template>
<script>
import { mapState } from "vuex";

export default {
 
  computed: {
   ...mapState({
      username: state => state.userinfo.username,
      id: state => state.userinfo.id,
      psw: state => state.userinfo.password,
    }),
  },

  data() {
    return {
      view: "展开",
      isCollapse: true,
      active: "",
      activity: "",
      query: "",
      weather: {},
      citys: [],
    };
  },
  methods: {
    show() {
      this.active = false;
      this.activity = false;
    },
    open_side() {
      if (this.isCollapse) {
        this.view = "关闭";
      } else {
        this.view = "展开";
      }
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    fetchWeather(e) {
      if (e.key == "Enter") {
        this.axios.get(
            `https://tianqiapi.com/api?version=v6&appid=91962821&appsecret=T89Ci7If&city=${this.query}`
          )
          .then((res) => {
            return res.data;
          })
          .then(this.setResult);
      }
    },
    setResult(result) {
      console.log(result);

      this.weather = result;
    },
    querySearch(queryString, cb) {
      //这个queryString就是我输入框中的值
      //把所有的citys赋值给变量
      var citys = this.citys;
      //这个是判断输入框中有没有输入什么,如果输入则执行前面过滤,如果没有输入则直接显示完整的显示
      var results = citys;
    
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
   
  },
};
</script>


<style>


.search{
    margin-top: 10px;
    width: 150px;
    outline: none;
    height: 30px;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
 .serach-header{
     text-align: center;
 }


  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
* {
  text-decoration: none;
}
a {
  color: black;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-breadcrumb {
  line-height: 60px;
  /* 文字的导航*/
  margin-left: 10px;
  float: left;
  font-size: 12px;
}

.el-submenu .el-menu-item-group .el-menu-item a {
  display: block;
  width: 100%;
  height: 100%;
}
.el-header {
  padding: 0;
  padding-right: 20px;
  /* // background-color: #B3C0D1; */
  color: #333;
  background-color: #7f8ea8;
  text-align: right;
  line-height: 60px;
}

.open {
  background-color: rgb(163, 169, 202);
  border: none;
  outline: none;
  width: 64px;
  height: 60px;
  float: left;
  font-size: 10px;
}

.el-menu-item-group__title {
  padding: 0;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
body,
html,
#app,
#app .el-container {
  height: 100%;
}



</style>
