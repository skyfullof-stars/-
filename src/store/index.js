//这个是vuex
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)
export default new  Vuex.Store({
state:{
    userinfo:JSON.parse(localStorage.getItem('user')),
    userlist:[]
},
actions:{
    getuser({commit},getuserinfo){
        let josn = JSON.parse(localStorage.getItem('user'))
        commit('GETUSER',josn)
   },
   getuserlist({commit}){
    //去发送请求数据库,获取数据
    axios.get('/api/getuserlist').then(Response=>{
        commit('GETUSERLIST',Response.data)
    })
   }


},
getters:{
    username :state=>{
      return state.userinfo.username
    },
    id :state=>state.userinfo.id,
    psw :state=>state.userinfo.password
  },

mutations:{
    GETUSER(state,josn){
      state.userinfo = josn[0];
    },
    GETUSERLIST(state,userlist){
        state.userlist= userlist
    }
},
getters:{

}

})