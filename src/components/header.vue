<template>
    <header :class="{'login':isLogin,'no-login':!isLogin}">
      <template v-if='!isLogin'>
        <h1><router-link to='/'>Let's share</router-link></h1>
        <div class='btns'>
          <router-link to='/login'><button class='log'>登 录</button></router-link>
          <router-link to='/register'><button class='reg'>注 册</button></router-link>
        </div>
      </template>
      <template v-if='isLogin'>
          <h1><router-link to='/'>Let's share</router-link></h1>
          <div class='user'>
            <ul>
              <li><router-link to='/create'>创建</router-link></li>
              <li><router-link to='/myself'>我的</router-link></li>
              <li><a href='#' @click='onLogout'>注销</a></li>
            </ul>
          </div>

      </template>
    </header>
  </template>
  
  <style>
    header {
      background-color:#ccc;
      padding:0;
      display:grid;
      grid-template-columns:12% auto 12%;
    }
    h1 {
      font-size:32px;
      margin:10px;
      color:rgb(0, 153, 0);
    }
    h1 a {
      text-decoration:none;
      color:inherit;
    }
    .no-login {
      grid-template-rows:auto auto;
    }
    .no-login h1 {
      grid-column:2;
      grid-row:1;
      align-self:center;
    }
    .no-login .btns {
      grid-column:2;
      grid-row:2;
      
    }
    .login h1 {
      grid-column:2/3;
      justify-self:center;
      align-self:center;
      grid-area:'middle';
    }
    ul {
      padding:0;
      padding-right:20px;
    }
    ul a {
      text-decoration:none;
      color: rgb(0, 153, 0);
    }
    header.login {
      grid-template-rows:1fr;
      grid-template-areas:'. middle right'
    }
    .login .user {
      grid-area:'right';
      grid-column:3/4;
    }
    .log,
    .reg {
      padding:10px;
      margin:0 10px 10px 10px;
    }
  </style>
  
  <script>
    import {mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
      data(){
        return {
        }
      },
      created(){
        this.checkLogin()
      },//组件构建完成后去判断用户登录与否，再去渲染到浏览器上
      computed:{
        ...mapGetters([
          'isLogin',
          'user'
        ])
      },
      methods:{
        ...mapActions([
          'checkLogin',
          'logout'
        ]),
        onLogout(){
          this.logout()
        }
      }
    }
  </script>
  
  