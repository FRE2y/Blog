<script setup>
const props = defineProps({
  title: String, //文章标题
  category: String, //分类标签
  summary: String, //摘要
  date: String, //日期
  cover: String, //封面图片
})
</script>

<template>
  <div class="article-card">
    <img :src="cover" :alt="title" class="card-cover" />
    <div class="card-content">
      <span class="card-category">{{ category }}</span>
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-summary">{{ summary }}</p>
      <span class="card-date">{{ date }}</span>
    </div>
  </div>
</template>
<style scoped>
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
