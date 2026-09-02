<script setup>
import { computed, onMounted, ref } from 'vue'
import prearticles from '../../public/testData'
import BlogCard from '@/components/BlogCard.vue'
import CategoryFilter from '@/components/CategoryFilter.vue'
//文章载入
const articles = ref([])
const isLoading = ref(true)
const error = ref(null)

async function fetchPosts() {
  isLoading.value = true
  error.value = null
  try {
    const response = await fetch('/testData.json')
    if (!response.ok) {
      throw new Error(`加载失败 ${response.status}`)
    }
    const data = await response.json()
    articles.value = data
  } catch (err) {
    error.value = err.message
    console.error(`文章数据加载失败：`, err)
  } finally {
    isLoading.value = false
  }
}
onMounted(() => {
  fetchPosts()
})
//标签分类筛选功能
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
</style>
