<template>
  <div class="about-page">
    <div class="intro">
      <img class="avatar" src="@/assets/avatar.jpg" alt="头像" />
      <h1>林强叔叔</h1>
      <p>一个爱摄影、会写代码、也热爱生活的普通人。</p>
    </div>

    <div class="cards">
      <div class="card">
        <h2>📷 摄影</h2>
        <p>
          镜头记录的不只是风景，还有我当时的心情。每一张照片，都是记忆的快门。
        </p>
      </div>
      <div class="card">
        <h2>💻 技术</h2>
        <p>
          Vue3 / Java / Element Plus / 后端接口实现...
          这里记录着我的学习和成长。
        </p>
      </div>
      <div class="card">
        <h2>🌿 生活</h2>
        <p>
          跑步、健身、旅行、写字、和她的日常。生活不只是眼前的代码，还有远方的山河。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
  .about-page {
    padding: 40px 20px;
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
  }

  .intro {
    margin-bottom: 40px;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }

  .intro h1 {
    font-size: 28px;
    margin-bottom: 8px;
  }

  .intro p {
    font-size: 16px;
    color: #666;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }

  .card {
    background: #fff;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
    text-align: left;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-6px);
  }

  .card h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .card p {
    font-size: 14px;
    color: #555;
    line-height: 1.6;
  }
</style>
