<template>
  <div id="details">
    <section class="user-info">
      <img :src='user.avatar' :alt='user.username' :title='user.username' class='avatar'>
      <h3>{{title}}</h3>
      <p><router-link :to='`/user/${user.id}`'>{{user.username}}</router-link>发布于<span>{{date}}</span></p>
    </section>
    <section v-html='markdown'>
    </section>
  </div>
</template>
<style src='./template.css'></style>
<script src='./template.js'></script>
