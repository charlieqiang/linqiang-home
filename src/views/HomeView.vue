<template>
  <div
    class="home-page"
    :style="{ backgroundImage: `url(${bgUrl})` }"
    @click="changeBg"
  >
    <div class="welcome">
      <h1>👋 欢迎来到林强叔叔的小屋</h1>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const bgUrl = ref(getRandomBgUrl());

  function getRandomBgUrl() {
    const randomNum = Math.floor(Math.random() * 356);
    return `https://www.ruanyifeng.com/images_pub/pub_${randomNum}.jpg`;
  }

  function changeBg() {
    bgUrl.value = getRandomBgUrl();
  }
</script>

<style scoped>
  .home-page {
    flex: 1; /* 关键 */
    width: 100%; /* 防止不满宽 */
    background-size: cover;
    background-position: center;
    transition: background-image 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 20px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .welcome {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 24px 32px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .welcome h1 {
    font-size: 28px;
    margin-bottom: 10px;
  }
</style>
