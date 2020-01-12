<template>
  <div id="login">
    <h4>用户名</h4>
    <input v-model="username" placeholder="用户名">
    <h4>密码</h4>
    <input v-model="password" type="password" placeholder="密码" v-on:keyup.enter = 'onLogin'>
    <button size="medium" @click='onLogin'>立即登录</button>
    <p class="notice">已有账号？<router-link to="/register">立即注册</router-link></p>
  </div>
</template>
<style src='./template.css'></style>
<script src='./template.js'></script>
