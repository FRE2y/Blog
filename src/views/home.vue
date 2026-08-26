<script setup>
import { ref } from 'vue'

const articles = ref([
  {
    id: 1,
    title: 'Vue3 入门完全指南',
    summary:
      '从零开始学习 Vue3 组合式 API，涵盖 ref、reactive、computed 等核心概念。从零开始学习 Vue3 组合式 API，涵盖 ref、reactive、computed 等核心概念。从零开始学习 Vue3 组合式 API，涵盖 ref、reactive、computed 等核心概念。从零开始学习 Vue3 组合式 API，涵盖 ref、reactive、computed 等核心概念。从零开始学习 Vue3 组合式 API，涵盖 ref、reactive、computed 等核心概念。从零开始学习 Vue3 组合式 API，涵盖 ref、reactive、computed 等核心概念。',
    date: '2024-05-10',
    category: 'Vue',
    cover: './images/测试图片.png',
  },
  {
    id: 2,
    title: 'JavaScript 异步编程详解',
    summary: '一文搞懂 Promise、async/await、事件循环与微任务队列。',
    date: '2024-05-08',
    category: 'JavaScript',
    cover: './images/测试图片.png',
  },
  {
    id: 3,
    title: 'CSS Grid 布局实战',
    summary: '用 CSS Grid 轻松实现复杂的响应式布局。',
    date: '2024-05-05',
    category: 'CSS',
    cover: './images/测试图片.png',
  },
  // {
  //   id: 4,
  //   title: "Vue3 入门完全指南",
  //   summary: "从零开始学习 Vue3 组合式 API，涵盖 ref、reactive、computed 等核心概念。",
  //   date: "2024-05-10",
  //   category: "Vue",
  //   cover: "#",
  // },
  // {
  //   id: 5,
  //   title: "JavaScript 异步编程详解",
  //   summary: "一文搞懂 Promise、async/await、事件循环与微任务队列。",
  //   date: "2024-05-08",
  //   category: "JavaScript",
  //   cover: "#",
  // },
  // {
  //   id: 6,
  //   title: "CSS Grid 布局实战",
  //   summary: "用 CSS Grid 轻松实现复杂的响应式布局。",
  //   date: "2024-05-05",
  //   category: "CSS",
  //   cover: "#",
  // },
])
</script>

<template>
  <div class="home">
    <h2 v-if="articles.length" class="section-title">动态</h2>

    <!-- 加载中 -->
    <p v-if="!articles.length" class="empty-tip">还没有文章，敬请期待。</p>
    <!-- 文章列表 -->
    <div v-else class="article-grid">
      <!-- 文章卡片 -->
      <div v-for="article in articles" :key="article.id" class="article-card">
        <img :src="article.cover" :alt="article.title" class="card-cover" />
        <div class="card-content">
          <span class="card-category">{{ article.category }}</span>
          <h3 class="card-title">{{ article.title }}</h3>
          <p class="card-summary">{{ article.summary }}</p>
          <span class="card-date">{{ article.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-width: 960px;
  margin: 0 auto;
  padding: 20px;
}
.section-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}
.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(580px, 1fr));
  gap: 24px;
}
.article-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition:
    box-shadow 0.2s,
    translateY 0.2s;
  cursor: pointer;
}
.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}
.card-cover {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.card-content {
  padding: 16px;
}
.card-category {
  display: inline-block;
  padding: 2px 10px;
  background: #ccf1ffa8;
  border-radius: 12px;
  font-size: 12px;
  margin-bottom: 8px;
}
.card-title {
  font-size: 18px;
  margin-bottom: 8px;
  color: #222;
}
.card-summary {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin-bottom: 12px;
}

.card-date {
  font-size: 12px;
  color: #999;
}
</style>
