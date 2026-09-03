import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useFavoriteStore = defineStore('favorites', () => {
  // 数组存储文章id
  const favoriteIds = ref([])
  //   获取本地文章id列表
  const saved = localStorage.getItem('blog-favorites')
  //json转换成数组
  if (saved) {
    favoriteIds.value = JSON.parse(saved)
  }
  //   计算文章数
  const favoriteCount = computed(() => {
    return favoriteIds.value.length
  })
  //   判断文章是否已收藏
  function isFavorite(id) {
    return favoriteIds.value.includes(id)
  }

  //   切换收藏状态
  function toggleFavorite(id) {
    const index = favoriteIds.value.indexOf(id)
    if (index === -1) {
      favoriteIds.value.push(id)
    } else {
      favoriteIds.value.splice(index, 1)
    }
    localStorage.setItem('blog-favorites', JSON.stringify(favoriteIds.value))
  }
  return { favoriteIds, favoriteCount, isFavorite, toggleFavorite }
})
