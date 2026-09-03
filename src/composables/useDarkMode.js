import { ref, watchEffect } from 'vue'

export function useDarkMode() {
  //从localStorage 读取用户之前的设置（没有则默认light
  const saved = localStorage.getItem('blog-theme')
  const isDark = ref(saved === 'dark')
  //应用主题到DOM
  function applyTheme(dark) {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('blog-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('blog-theme', 'light')
    }
  }
  watchEffect(() => {
    applyTheme(isDark.value)
  })
  function toggleDark() {
    isDark.value = !isDark.value
  }
  return {
    toggleDark,
    isDark,
  }
}
