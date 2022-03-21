<template>
  <v-container>
    <v-row justify="center">
      <v-col md="9">
        <v-card class="article-page">
          <v-card-header-text>
            <v-card-title>JavaScript笔记 “作用域和闭包”</v-card-title>
            <v-card-subtitle>Arkwq</v-card-subtitle>
            <v-card-subtitle>最后更新时间：1997-09-06</v-card-subtitle>
          </v-card-header-text>
          <v-card-text v-html="articleMD" class="markdown-body"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, defineProps, onMounted, ref } from 'vue'
import MarkdownIt from 'markdown-it'
import { getArticle } from '@/api/articles'

const props = defineProps<{
  id: string
}>()

let article = reactive({
  content: ''
})

const articleMD = ref('')
const md = new MarkdownIt()

onMounted(() => {
  getArticle(props.id).then(res => {
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