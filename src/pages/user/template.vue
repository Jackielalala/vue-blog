<template>
  <div id="user">
    <section class="user-info">
      <img :src="user.avatar" alt="user.username" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section>
      <router-link class="item" v-for='blog in blogs' :key='blog.id' :to='`/details/${blog.id}`'>
        <div class="date">
          <div class="day">{{splitDate(blog.createdAt).date}}</div>
          <div class="month">{{splitDate(blog.createdAt).month}}</div>
          <div class="year">{{splitDate(blog.createdAt).year}}</div>
        </div>
        <div class="content">
          <h3>{{blog.title}}</h3>
          <p>{{blog.description}}</p>
        </div>
      </router-link>
    </section>
  </div>
</template>
<style src='./template.css'></style>
<script src='./template.js'></script>
