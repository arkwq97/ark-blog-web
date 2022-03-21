<template>
   <v-footer theme="dark">
    <v-card
      elevation="0"
      rounded="0"
      width="100%"
      class="text-center"
    >

      <v-card-header-text class="text-left">
        <v-card-title>
          关于
        </v-card-title>
        <v-card-subtitle>
          计科专业，热爱编程，喜欢技术，记录学习。
        </v-card-subtitle>
      </v-card-header-text>
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          variant="text"
          size="x-large"
        ></v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="text-white">
        {{ new Date().getFullYear() }} -
        <span style="font-family: Lucida Handwriting">ARK</span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script setup lang="ts">
const icons: Array<string> = [
  'mdi-github'
]
</script>