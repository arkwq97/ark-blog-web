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
      <div class="notfound">
        暂无相关文章，请清空搜索框。
      </div>
    </v-col>
    <transition-group name="flip-list">
      <article-card
        v-for="(article, i) in articleList.arr"
        :key="article._id"
        :size="layout[i]"
        :article="article"
      />
    </transition-group>
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
import { Article } from './data'

const page = ref(1)
const pageLen = ref(0)

const articleList = reactive({
  arr: new Array<Article>()
})
const layout = [2, 2, 1, 2, 2, 3, 3, 3]

watch(page, () => {
  getArticleList(page.value).then(res => {
    articleList.arr = res.data
  })
  window.scrollTo(0, 0);
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

<style lang="less" scoped>
.notfound {
  text-align: center;
  color: #BDBDBD;
  user-select: none;
}
.flip-list-move {
  transition: transform 0.5s ease;
}

.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
}

.flip-list-leave-active {
  position: absolute;
  transition: all 0.25s ease;
}
</style>