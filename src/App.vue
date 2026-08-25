<script setup></script>

<template>
  <div id="box">
    <!-- 导航栏 -->
    <header class="navbar">
      <h1>yyy</h1>
      <nav>
        <a href="/">主页</a>
        <a href="#">主页2</a>
      </nav>
    </header>

    <!-- 内容区 -->
    <main class="container">
      <p>随便写点不是吧</p>
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
body {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  background: #f5f5f5;
  color: #333;
}
.navbar {
  display: flex;
  justify-content: space-between;
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
}
.container {
  max-width: 960px;
  margin: 40px auto;
  padding: 0 20px;
}
.footer {
  margin-top: auto;
  text-align: center;
  padding: 12px;
  color: #999;
  font-size: 14px;
  border-top: 1px solid #eee;
}
</style>
