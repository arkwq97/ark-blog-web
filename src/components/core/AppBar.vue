<template>
  <v-app-bar>
    <v-divider
      class="mx-4"
      vertical
    ></v-divider>
    <v-app-bar-title tag="h1"><span class="blog-title" @click="goHome">Ark Blog</span></v-app-bar-title>
   
      <v-btn icon="mdi-heart-outline" @click="like()" :class="{ like: isLike }" class="like-btn"></v-btn>
 
     <v-divider
      class="mx-4"
      vertical
    ></v-divider>
  </v-app-bar>
  <v-alert
    v-model="thanks"
    absolute
    top
    timeout="1000"
  >
    感谢喜欢！
  </v-alert>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import router from '@/router'

const isLike = ref(false)
const thanks = ref(false)

onMounted(() => {
  if(localStorage.getItem('like') && localStorage.getItem('like') === 'true') {
    isLike.value = true
  }
})

function goHome() {
  router.push({
    path: '/'
  })
}

function like() {
  if(localStorage.getItem('like') && localStorage.getItem('like') === 'true') {
    localStorage.setItem('like', 'false')
    isLike.value = false
    thanks.value = false
  } else {
    localStorage.setItem('like', 'true')
    isLike.value = true
    thanks.value = true
  }
}
</script>

<style scoped lang="less">
.blog-title {
  user-select: none;
  cursor: pointer;
}

.like {
  color: red;
  transition: 1s;
}

.like-btn {
  transition: 1s;
}
</style>