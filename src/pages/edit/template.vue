<template>
  <div id="edit">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <input v-model='title'>
    <!-- <p class="msg">限30个字</p> -->
    <h3>内容简介</h3>
    <textarea v-model='description' rows=3></textarea>
    <!-- <p class="msg">限100个字</p> -->
    <h3>文章内容</h3>
    <textarea v-model='content' rows=20></textarea>
    <!-- <p class="msg">限1000个字</p> -->
    <button class='submit' @click='onSubmit'>确定</button>
  </div>
</template>
<style src='./template.css'></style>
<script src='./template.js'></script>
