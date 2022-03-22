<template>
  <v-col
    cols="12"
    :md="size === 2 ? 6 : size === 3 ? 4 : undefined"
    @click="readArticle()"
  >
    <v-card
      height="350"
      class="article-card"
      rounded="0"
    >
      <v-img
        :src="article.poster"
        height="100%"
        cover
      >
        <v-row
          class="fill-height text-right ma-0 white"
        >
          <v-col cols="12">
            <app-chip class="mb-2 text-uppercase font-weight-light">
              {{ article.category }}
            </app-chip>

            <h3 class="title mb-2 font-weight-light">
              {{ article.title }}
            </h3>

            <div class="text-body-2 font-weight-light">
              {{ article.author }}<br>{{ article.createdAt }}
            </div>

            <div class="text-body-2 font-weight-light">
              <v-icon small left>mdi-eye</v-icon>{{ article.readCount }} 
            </div>
          </v-col>
          <v-col>
            <div class="text-body-2 text-left font-weight-light article-intro">
              {{ article.introduction }}
            </div>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import AppChip from '@/components/core/AppChip.vue'
import router from '@/router'

const props = defineProps<{
  article: {
    _id: string
    title: string
    author: string
    category: string
    poster: string
    createdAt: string
    introduction: string
    readCount: number
  }
  size: number
}>()

function readArticle() {
  router.push({
    path: `/article/${props.article._id}`
  })
}
</script>

<style scoped lang="less">
.white {
  color: white;
}
.article-card {
  cursor: pointer;
}
.article-intro {
  opacity: 0;
  filter: blur(15px);
  font: 200 22px '';
  user-select: none;
  color: white;
  transition: 0.4s;
}
.article-card:hover .article-intro {
  opacity: 1;
  filter: blur(0);
}
</style>