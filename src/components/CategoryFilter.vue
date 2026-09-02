<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  categories: Array, //所有标签列表
  activeCategory: String, // 当前选中标签
  length: Number,
})
// console.log('子：length ' + props.length)
// console.log('子：ctiveCategory ' + props.activeCategory)
// console.log('子：categories ' + props.categories)

const emit = defineEmits(['update-category'])
// // 根据标签过滤文章
function selectCategory(category) {
  emit('update-category', category)
}
</script>

<template>
  <div class="category-bar">
    <button
      v-for="each in categories"
      :key="each"
      :class="{ active: activeCategory === each }"
      @click="selectCategory(each)"
    >
      {{ each }}
    </button>
  </div>
  <p class="res-info">共{{ length }}条</p>
</template>

<style scoped>
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
