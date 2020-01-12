<template>
  <div id="myself">
    <section class="user-info">
      <img :src="user.avatar" alt="user.username" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section>
      <router-link class="item" v-for='blog in blogs' :key='blog.id' :to='`/detail/${blog.id}`'>
        <div class="date">
          <div class="day">{{splitDate(blog.createdAt).date}}</div>
          <div class="month">{{splitDate(blog.createdAt).month}}</div>
          <div class="year">{{splitDate(blog.createdAt).year}}</div>
        </div>
        <div class="content">
          <h3>{{blog.title}}</h3>
          <p>{{blog.description}}</p>
          <p>{{blog.content}}</p>
          <div class="actions">
            <router-link :to="`/edit/${blog.id}`">编辑</router-link>
            <a href="#" @click.prevent='onDelete(blog.id)'>删除</a>
          </div>
        </div>
      </router-link>
    </section>
    <!-- <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        @current-change="onPageChange">
      </el-pagination>
    </section> -->
  </div>
</template>

<style src='./template.css'></style>
<script src='./template.js'></script>
