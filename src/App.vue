<template>
  <el-container class="layout">
    <el-header>
      <el-menu mode="horizontal" router :default-active="$route.path">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
      </el-menu>
    </el-header>

    <el-main class="main">
      <router-view />
    </el-main>

    <el-footer class="footer">
      ©2025 林强叔叔的小屋 ｜
      <a href="https://beian.miit.gov.cn/" target="_blank">
        闽ICP备2025087254号
      </a>
    </el-footer>
  </el-container>
</template>

<style scoped>
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .el-container,
  .el-header,
  .el-main,
  .el-footer {
    margin: 0;
    padding: 0;
  }

  .el-main {
    flex: 1;
    display: flex; /* 关键：让 router-view 内部能用 flex 撑满 */
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: 12px;
    color: #999;
    background: linear-gradient(to right, #f8f8f8, #f0f0f0);
    border-top: 1px solid #e0e0e0;
  }

  .footer a {
    color: #999;
    text-decoration: none;
    transition: color 0.3s;
  }

  .footer a:hover {
    color: #409eff;
  }
</style>
