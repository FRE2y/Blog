import { computed, onMounted, ref } from 'vue'
export function usePosts() {
  //文章载入
  const articles = ref([])
  const isLoading = ref(true)
  const error = ref(null)
  const activeCategory = ref('全部')
  const keyword = ref('')

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

  //     所有标签
  const categories = computed(() => {
    const all = articles.value.map((a) => a.category)
    return ['全部', ...new Set(all)]
  })

  //      filteredArticles根据标签过滤文章
  const filteredArticles = computed(() => {
    let res = articles.value
    // console.log(res)
    //    根据标签筛选
    if (activeCategory.value !== '全部') {
      res = res.filter((a) => a.category === activeCategory.value)
    }

    if (keyword.value.trim()) {
      const kw = keyword.value.trim().toLowerCase()
      res = res.filter(
        (a) => a.title.toLowerCase().includes(kw) || a.summary.toLowerCase().includes(kw),
      )
    }
    return res
  })

  //      处理CategoryFilter传来的参数
  function handleUpdate(cat) {
    activeCategory.value = cat
  }
  return {
    articles,
    isLoading,
    error,
    activeCategory,
    keyword,
    categories,
    filteredArticles,
    handleUpdate,
    fetchPosts,
  }
}
