<script setup>
import { RouterLink, useRoute } from 'vue-router'

import { computed, ref, onMounted } from 'vue'

const route = useRoute()
const id = Number(route.params.id)

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

const article = computed(() => {
  return articles.value.find((a) => a.id === id)
})
</script>

<template>
  <div class="post-view">
    <p v-if="isLoading">加载中...</p>
    <p v-else-if="error">加载失败：{{ error }}</p>
    <div v-else-if="!article" class="not-found">
      <h2>文章不存在</h2>
      <p>找不到 ID 为 {{ id }} 的文章</p>
      <RouterLink to="/">返回首页</RouterLink>
    </div>
    <article v-else>
      <span class="category-tag">{{ article.category }}</span>
      <h1>{{ article.title }}</h1>
      <time>{{ article.date }}</time>
      <div class="content" v-html="article.content"></div>
      <RouterLink to="/" class="back-link">⬅返回首页</RouterLink>
    </article>
  </div>
</template>
<style scoped>
.bg {
  width: 100%;
  height: 100%;
}
.post-view {
  max-width: 720px;
  margin: 40px auto;
  padding: 0 20px;
}
.category-tag {
  display: inline-block;
  padding: 4px 12px;
  background: #85baff;
  color: #fff;
  border-radius: 12px;
  font-size: 13px;
  margin-bottom: 12px;
}
h1 {
  font-size: 32px;
  margin-bottom: 12px;
  line-height: 1.4;
}
time {
  display: block;
  color: #999;
  font-size: 14px;
  margin-bottom: 30px;
}
.content {
  line-height: 1.8;
  font-size: 16px;
  color: #333;
}
.content :deep(h2) {
  margin: 24px 0 12px;
  font-size: 22px;
}
.content :deep(p) {
  margin-bottom: 12px;
}
.back-link {
  display: inline-block;
  margin-top: 40px;
  color: #42bde2;
  text-decoration: none;
}
.not-found {
  text-align: center;
  padding: 60px 0;
}
</style>
