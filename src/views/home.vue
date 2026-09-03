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
} = usePosts()

console.log()
</script>

<template>
  <div class="home">
    <h2 v-if="articles.length" class="section-title">动态</h2>

    <!-- 搜索框 -->
    <div class="search-bar">
      <input
        v-model="keyword"
        type="text"
        placeholder="搜索文章标题或摘要..."
        class="search-input"
      />
      <span v-if="keyword" class="clear-btn" @click="keyword = ''">×</span>
    </div>
    <!-- 标签分类筛选 -->
    <CategoryFilter
      :categories="categories"
      :active-category="activeCategory"
      :length="filteredArticles.length"
      @update-category="handleUpdate"
    ></CategoryFilter>

    <!-- 加载中 -->
    <p v-if="isLoading" class="status-msg">加载中，请稍后...</p>
    <p v-else-if="error" class="error">
      加载失败：{{ error }}
      <button @click="fetchPosts">重试</button>
    </p>
    <p v-else-if="!articles.length" class="empty-tip">还没有文章，敬请期待。</p>

    <!-- 文章列表 -->
    <div v-else class="article-grid">
      <!-- 文章卡片 -->
      <BlogCard
        v-for="article in filteredArticles"
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
  color: #333;
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
  border: 2px solid #77ccfd;
  border-radius: 12px;
  outline: none;
}
.search-input:focus {
  border-color: rgb(47, 135, 175);
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
</style>
