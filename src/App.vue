<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="box">
    <!-- 导航栏 -->
    <NavBar></NavBar>

    <!-- 内容区 -->
    <main class="container">
      <!-- <home></home> -->
      <RouterView />
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <p>@2026 yyy's Blog. Powered by Vue3</p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;

  background: var(--bg-primary);
  color: var(--text-primary);
  transition:
    background 0.3s ease,
    color 0.3s ease;
}

html,
body,
#app {
  height: 100%;
}

#box {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* 肚子 */
.container {
  max-width: 960px;
  margin: 40px auto;
  padding: 0 20px;
}

/* 脚 */
.footer {
  margin-top: auto;
  text-align: center;
  padding: 12px;

  font-size: 14px;
  border-top: 1px solid;
  bottom: 0;
  color: var(--text-tertiary);
  border-top-color: var(--border-color);
}
</style>
