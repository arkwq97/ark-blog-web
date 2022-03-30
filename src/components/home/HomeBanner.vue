<template>
  <div class="home-banner">
    <div class="banner-a"></div>
    <div class="banner-b"></div>
    <div class="banner-d"></div>
    <div class="banner-c"></div>
    <div>
      <h1 class="banner-title display-3 font-weight-light">{{ title }}</h1>
      <p class="banner-slogan">{{ slogan }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref(`Ark's Blog`)
const slogan = ref(`人们总说时间会改变一切，但事实上你得自己来`)
</script>

<style scoped lang="less">
.home-banner {
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url('https://ark-blog-resource-1252728286.cos.ap-guangzhou.myqcloud.com/ark.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.banner-a,
.banner-b,
.banner-c,
.banner-d {
  position: absolute;
  width: 100%;
  height: 400px;
  background-size: cover;
  display: flex;
  justify-content: center;
  overflow: hidden;
  opacity: 0.5;
  transition: 0.6s;
}

.banner-a::after,
.banner-b::after,
.banner-c::after,
.banner-d::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 400px;
  background-image: url('https://ark-blog-resource-1252728286.cos.ap-guangzhou.myqcloud.com/ark.jpg');
  background-size: cover;
}

.banner-a {
  left: -420px;
  transform: rotateZ(100deg);
  filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 1));
}

.banner-a::after {
  transform: rotateZ(-100deg);
  background-position-x: 420px;
}

.banner-b {
  left: -420px;
  transform: rotateZ(-100deg);
  filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 1));
  transition-delay: 0.2s;
}

.banner-b::after {
  transform: rotateZ(100deg);
  background-position-x: 420px;
}

.banner-c {
  right: -420px;
  transform: rotateZ(100deg);
  filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 1));
  transition-delay: 0.2s;
}

.banner-c::after {
  transform: rotateZ(-100deg);
  background-position-x: -420px;
}

.banner-d {
  right: -420px;
  transform: rotateZ(-100deg);
  filter: drop-shadow(4px -4px 12px rgba(0, 0, 0, 1));
}

.banner-d::after {
  transform: rotateZ(100deg);
  background-position-x: -420px;
}

.banner-title {
  font: 400 40px ' ';
  text-align: center;
  margin-block-start: 1em;
  margin-block-end: 1em;
  user-select: none;
  color: white;
}

.banner-slogan {
  opacity: 0;
  filter: blur(15px);
  font: 200 22px ' ';
  user-select: none;
  color: white;
  transition: 0.4s;
}

.home-banner:hover .banner-a,
.home-banner:hover .banner-b {
  left: -600px;
  opacity: 0;
}

.home-banner:hover .banner-c,
.home-banner:hover .banner-d {
  right: -600px;
  opacity: 0;
}

.home-banner:hover .banner-slogan {
  opacity: 1;
  filter: blur(0);
  transition-delay: 0.3s;
}
</style>