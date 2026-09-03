<script setup>
import { computed, onMounted, ref } from 'vue'
import BlogCard from '@/components/BlogCard.vue'
import CategoryFilter from '@/components/CategoryFilter.vue'
import { usePosts } from '@/composables/usePosts'
const {
  isLoading,
  error,
  activeCategory,
  keyword,
  categories,
  filteredArticles,
  handleUpdate,
  fetchPosts,
  articles,
  favoritePosts,
} = usePosts()

console.log()
</script>

<template>
  <div class="home">
    <h2 v-if="articles.length" class="section-title">收藏</h2>

    <!-- 加载中 -->

    <p v-if="!favoritePosts.length" class="empty-tip">还没有收藏文章。</p>

    <!-- 文章列表 -->
    <div v-else class="article-grid">
      <!-- 文章卡片 -->
      <BlogCard
        v-for="article in favoritePosts"
        :key="article.id"
        :category="article.category"
        :title="article.title"
        :cover="article.cover"
        :date="article.date"
        :summary="article.summary"
        :articleId="article.id"
      ></BlogCard>
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
  color: var(--text-primary);
}
.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(580px, 1fr));
  gap: 24px;
}

.status-msg {
  text-align: center;
  padding: 60px 0;
  font-size: 16px;
  color: #999;
}
.error {
  color: #e74c3c;
}
.error button {
  margin-left: 10px;
  padding: 4px 12px;
  cursor: pointer;
}

.search-bar {
  position: relative;
  margin-bottom: 20px;
}
.search-input {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 2px solid;
  border-radius: 12px;
  outline: none;
  background: var(--bg-input);
  border-color: var(--border-input);
  color: var(--text-primary);
}
.search-input:focus {
  border-color: var(--border-input-focus);
  outline: none;
}
.search-input::placeholder {
  color: var(--text-tertiary);
}
.clear-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #838282;
  font-size: 20px;
}

.empty-tip {
  color: var(--text-tertiary);
}
</style>
