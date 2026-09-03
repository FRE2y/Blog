<script setup>
const props = defineProps({
  title: String, //文章标题
  category: String, //分类标签
  summary: String, //摘要
  date: String, //日期
  cover: String, //封面图片
  articleId: Number,
})
</script>

<template>
  <RouterLink :to="{ name: 'post', params: { id: articleId } }" class="router-link">
    <div class="article-card">
      <img :src="cover" :alt="title" class="card-cover" />
      <div class="card-content">
        <span class="card-category">{{ category }}</span>
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-summary">{{ summary }}</p>
        <span class="card-date">{{ date }}</span>
      </div>
    </div>
  </RouterLink>
</template>
<style scoped>
.router-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.article-card {
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: var(--bg-card);
  box-shadow: var(--shadow-card);
  transition:
    background 0.3s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}
.article-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
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
  border-radius: 12px;
  font-size: 12px;
  margin-bottom: 8px;
  background: var(--bg-category);
  color: var(--text-secondary);
}
.card-title {
  font-size: 18px;
  margin-bottom: 8px;

  color: var(--text-primary);
}
.card-summary {
  font-size: 14px;

  line-height: 1.4;
  margin-bottom: 12px;
  color: var(--text-secondary);
}
.card-date {
  font-size: 12px;
  color: var(--text-tertiary);
}
</style>
