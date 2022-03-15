<template>
  <v-app-bar hide-on-scroll>
    <v-divider
      class="mx-4"
      vertical
    ></v-divider>
    <v-app-bar-title tag="h1"><span class="blog-title">Ark Blog</span></v-app-bar-title>
   
      <v-btn icon="mdi-heart-outline"></v-btn>
 
     <v-divider
      class="mx-4"
      vertical
    ></v-divider>
  </v-app-bar>
</template>

<style scoped lang="less">
.blog-title {
  user-select: none;
  cursor: pointer;
}
</style>