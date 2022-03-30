<template>
  <v-container>
    <v-btn
      icon="mdi-keyboard-backspace"
      position="fixed"
      @click="goHome"
    >
    </v-btn>
    <v-row justify="center">
      <v-col md="9">
        <v-card class="article-page">
          <v-card-header-text>
            <v-card-title>{{ article.title }}</v-card-title>
            <v-card-subtitle>{{ article.author }}</v-card-subtitle>
            
            <v-card-subtitle>最后更新时间：{{ article.updatedAt }}</v-card-subtitle>
          </v-card-header-text>
          <v-card-text v-html="articleMD" class="markdown-body"></v-card-text>
          <v-card-text>发布于：{{ article.createdAt }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, defineProps, onMounted, ref } from 'vue'
import MarkdownIt from 'markdown-it'
import { getArticle } from '@/api/articles'
import router from '@/router'

const props = defineProps<{
  id: string
}>()

let article = reactive({
  title: '',
  author:'',
  createdAt: '',
  updatedAt:'',
  content: ''
})

const articleMD = ref('')
const md = new MarkdownIt()

function goHome() {
  router.push({
    path: '/'
  })
}

onMounted(() => {
  getArticle(props.id).then(res => {
    article.title = res.data.title
    article.author = res.data.author
    article.createdAt = res.data.createdAt
    article.updatedAt = res.data.updatedAt
    article.content = res.data.content
    articleMD.value = md.render(article.content)
  })
})
</script>

<style lang="less">
@import '@/assets/styles/markdown.less';
.article-page {
  min-height: 650px;
}
</style>