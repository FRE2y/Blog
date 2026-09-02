<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <h1>yyy</h1>
    <nav>
      <RouterLink to="/">主页</RouterLink>
      <RouterLink to="/post">文章</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
/* 头 */
.navbar {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  align-items: center;
  padding: 16px 40px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.navbar h1 {
  font-size: 24px;
  color: #266eda;
}
.navbar a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
}
</style>
