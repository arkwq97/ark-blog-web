<template>
<v-container>
  <v-row> 
    <v-col cols="12">
      <slot></slot>
    </v-col>
    <article-card
      v-for="(article, i) in articleList.arr"
      :key="article._id"
      :size="layout[i]"
      :article="article"
    />
  </v-row>
  <v-row>
    <v-col>
      <v-pagination
        v-model="page"
        :length="pageLen"
        rounded="0"
      ></v-pagination>
    </v-col>
  </v-row>
</v-container>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import ArticleCard from '@/components/home/ArticleCard.vue'
import { getArticleCount, getArticleList } from '@/api/articles'

interface Article {
  _id: string
  title: string
  author: string
  type: string
  category: string
  poster: string
  createdAt: string
  introduction: string
  viewCount: number
}

const page = ref(1)
const pageLen = ref(0)

const articleList = reactive({
  arr: new Array<Article>()
})
const layout = [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3]

onMounted(() => {
  getArticleCount().then(res => {
    pageLen.value = Math.ceil(res.data / 11)
  })
  getArticleList(page.value).then(res => {
    articleList.arr = res.data
  })
})
</script>