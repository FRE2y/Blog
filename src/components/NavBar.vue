<script setup>
import { RouterLink } from 'vue-router'
import { useDarkMode } from '@/composables/useDarkMode'
const { isDark, toggleDark } = useDarkMode()
</script>

<template>
  <header class="navbar">
    <h1>yyy</h1>
    <nav>
      <RouterLink to="/">主页</RouterLink>
      <RouterLink to="/post/1">最新文章</RouterLink>
      <button class="theme-btn" @click="toggleDark">{{ isDark ? '☀亮色' : '🌙黑暗' }}</button>
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
  background: var(--bg-navbar);
  box-shadow: var(--shadow-navbar);
  transition: background 0.3s ease;
}
.navbar h1 {
  font-size: 24px;
  color: var(--text-accent);
}
.navbar a {
  margin-left: 20px;
  text-decoration: none;
  color: var(--text-primary);
}
.theme-btn {
  background: var(--bg-navbar);
  margin-left: 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  color: var(--text-primary);
  transition: background 0.3s ease;
}
</style>
