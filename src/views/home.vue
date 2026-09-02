<script setup>
import { computed, ref } from 'vue'
import prearticles from '../testDate/testData'
import BlogCard from '@/components/BlogCard.vue'
import CategoryFilter from '@/components/CategoryFilter.vue'
//文章载入
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
function handleUpdate(cat) {
  activeCategory.value = cat
}
</script>

<template>
  <div class="home">
    <h2 v-if="articles.length" class="section-title">动态</h2>
    <!-- 标签分类筛选 -->
    <CategoryFilter
      :categories="categories"
      :active-category="activeCategory"
      :length="filteredArticles.length"
      @update-category="handleUpdate"
    ></CategoryFilter>

    <!-- 加载中 -->
    <p v-if="!articles.length" class="empty-tip">还没有文章，敬请期待。</p>

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
</style>
