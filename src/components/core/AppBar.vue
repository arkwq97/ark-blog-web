<template>
  <v-app-bar>
    <v-divider
      class="mx-4"
      vertical
    ></v-divider>
    <v-app-bar-title tag="h1"><span class="blog-title" @click="goHome">Ark Blog</span></v-app-bar-title>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field
          density="comfortable"
          variant="contained"
          prepend-inner-icon="mdi-magnify"
          single-line
          clearable
          v-model="searchKey"
          placeholder="搜索(按 回车)"
          @keyup.enter="searchArticle"
          @click:clear="searchArticle"
        ></v-text-field>
      </v-col>
    <v-btn
      icon="mdi-heart-outline"
      @click="like()"
      :class="{ like: isLike }"
      class="like-btn"
    ></v-btn>
    <v-divider
      class="mx-4"
      vertical
    ></v-divider>
  </v-app-bar>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import router from '@/router'
import mitter from '@/mitt/index'

const isLike = ref(false)
const thanks = ref(false)
const searchKey = ref('')

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

function searchArticle() {
  mitter.emit('searchArticle', searchKey.value)
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