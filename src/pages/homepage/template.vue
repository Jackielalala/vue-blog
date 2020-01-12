<template>
  <div id='homepage'>
    <section class="blog-posts">
      <router-link class="item" v-for='blog in blogs' :to="`/detail/${blog.id}`" :key='blog.id'>
        <router-link class="avatar" :to='`/user/${blog.user.id}`'>
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{blog.user.username}}</figcaption> 
        </router-link>
        <div class='ct'>
          <h3>{{blog.title}} <span>{{blog.createdAt}}</span></h3> 
          <p>{{blog.description}}</p>
        </div>
      </router-link>
    </section>
    <!-- <section>
      <el-pagination background layout="prev, pager, next" :total="total" @current-change='onPageChange'></el-pagination>  
    </section>         -->
        
  </div>
</template>
<style src='./template.css'></style>
<script src='./template.js'></script>

