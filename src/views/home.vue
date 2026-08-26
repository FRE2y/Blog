<script setup>
import { computed, ref } from 'vue'
import prearticles from '../testDate/testData'

// const articles = ref([
//   {
//     id: 1,
//     title: 'Vue3 入门完全指南',
//     summary:
//       '从零开始学习 Vue3 组合式 API，涵盖 ref、reactive、computed 等核心概念。从零开始学习 Vue3 组合式 API，涵盖 ref、reactive、computed 等核心概念。从零开始学习 Vue3 组合式 API，涵盖 ref、reactive、computed 等核心概念。从零开始学习 Vue3 组合式 API，涵盖 ref、reactive、computed 等核心概念。从零开始学习 Vue3 组合式 API，涵盖 ref、reactive、computed 等核心概念。从零开始学习 Vue3 组合式 API，涵盖 ref、reactive、computed 等核心概念。',
//     date: '2024-05-10',
//     category: 'Vue',
//     cover: './images/测试图片.png',
//   },
//   {
//     id: 2,
//     title: 'JavaScript 异步编程详解',
//     summary: '一文搞懂 Promise、async/await、事件循环与微任务队列。',
//     date: '2024-05-08',
//     category: 'JavaScript',
//     cover: './images/测试图片.png',
//   },
//   {
//     id: 3,
//     title: 'CSS Grid 布局实战',
//     summary: '用 CSS Grid 轻松实现复杂的响应式布局。',
//     date: '2024-05-05',
//     category: 'CSS',
//     cover: './images/测试图片.png',
//   },
// ])
// 获取所有标签

const articles = ref(prearticles)
const categories = computed(() => {
  const all = articles.value.map((a) => a.category)
  return ['全部', ...new Set(all)]
})
// 当前选中标签
const activeCategory = ref('全部')
// 根据标签过滤文章
const filteredArticles = computed(() => {
  if (activeCategory.value === '全部') {
    return articles.value
  }
  return articles.value.filter((a) => a.category === activeCategory.value)
})
</script>

<template>
  <div class="home">
    <h2 v-if="articles.length" class="section-title">动态</h2>

    <div class="category-bar">
      <button
        v-for="each in categories"
        :key="each"
        :class="{ active: activeCategory === each }"
        @click="activeCategory = each"
      >
        {{ each }}
      </button>
    </div>
    <p class="res-info">共{{ filteredArticles.length }}条</p>

    <!-- 加载中 -->
    <p v-if="!articles.length" class="empty-tip">还没有文章，敬请期待。</p>
    <!-- 文章列表 -->
    <div v-else class="article-grid">
      <!-- 文章卡片 -->
      <div v-for="article in filteredArticles" :key="article.id" class="article-card">
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

/* 筛选栏 */
.category-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.category-bar button {
  padding: 6px 16px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}
.category-bar button.active {
  background: #85baff;
  color: #fff;
  border-color: #85baff;
}
.category-bar button:hover {
  background: #85baff;
  color: #fff;
  border-color: #85baff;
}

.res-info {
  color: #999;
  font-size: 14px;
  margin-bottom: 16px;
}
</style>
