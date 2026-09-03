<script setup>
import { RouterLink } from 'vue-router'
import { useDarkMode } from '@/composables/useDarkMode'
const { isDark, toggleDark } = useDarkMode()
import { useFavoriteStore } from '@/Stores/useFavoriteStore'
const favoriteStore = useFavoriteStore()
</script>

<template>
  <header class="navbar">
    <h1>yyy</h1>
    <nav>
      <RouterLink to="/">主页</RouterLink>
      <RouterLink to="/favorites"> 收藏</RouterLink>

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
  font-size: 15px;
  margin-left: 20px;
  text-decoration: none;
  color: var(--text-primary);
}
.fav {
  /* margin-left: 20px; */
  font-size: 15px;
  cursor: pointer;
  color: var(--text-primary);
}
.fav:hover {
  color: rgb(0, 162, 255);
}
.theme-btn {
  font-size: 15px;
  background: none;
  margin-left: 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  color: var(--text-primary);
}
.theme-btn:hover {
  color: rgb(0, 162, 255);
}
</style>
