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
          97年，武汉轻工大学CS，喜欢技术，记录学习，希望自己可以让这个世界更加美好。
        </v-card-subtitle>
      </v-card-header-text>
      <v-card-text>
        <v-btn
          href="https://github.com/arkwq97"
          target="_blank"
          icon="mdi-github"
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