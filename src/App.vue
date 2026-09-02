<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="box">
    <!-- 导航栏 -->
    <NavBar></NavBar>
    <!-- <header class="navbar">
      <h1>yyy</h1>
      <nav>
        <a href="/">主页</a>
        <a href="#">主页2</a>
      </nav>
    </header> -->

    <!-- 内容区 -->
    <main class="container">
      <home></home>
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
  background: #f5f5f5;
  color: #333;
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

/* 头 */
/* .navbar {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  align-items: center;
  padding: 16px 40px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.navbar h1 {
  font-size: 24px;
  color: #266eda;
}
.navbar a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
} */

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
  color: #999;
  font-size: 14px;
  border-top: 1px solid #eee;
  bottom: 0;
}
</style>
