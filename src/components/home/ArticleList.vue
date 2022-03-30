<template>
<v-container>
  <v-row> 
    <v-col cols="12">
      <slot></slot>
    </v-col>
    <v-col
      cols="12"
      v-if="!articleList.arr.length"
    >
      <v-card >
        <v-card-header-text>
          <v-card-title>暂无相关文章，请清空搜索框。</v-card-title>
        </v-card-header-text>
      </v-card>
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
import { onMounted, reactive, ref, watch } from 'vue'
import ArticleCard from '@/components/home/ArticleCard.vue'
import { getArticleCount, getArticleList } from '@/api/articles'
import mitter from '@/mitt/index'

const page = ref(1)
const pageLen = ref(0)

const articleList = reactive({
  arr: new Array<{
    _id: string
    title: string
    author: string
    category: string
    poster: string
    createdAt: string
    introduction: string
    readCount: number
  }>()
})
const layout = [2, 2, 1, 2, 2, 3, 3, 3]

watch(page, (value, oldValue) => {
  getArticleList(page.value).then(res => {
    articleList.arr = res.data
  })
})

onMounted(() => {
  getArticleCount().then(res => {
    pageLen.value = Math.ceil(res.data / 8)
  })
  getArticleList(page.value).then(res => {
    articleList.arr = res.data
  })
  mitter.on('searchArticle', searchKey => {
    getArticleCount(String(searchKey)).then(res => {
      pageLen.value = Math.ceil(res.data / 8)
    })
    getArticleList(page.value, String(searchKey)).then(res => {
      articleList.arr = res.data
    })
  })
})
</script>