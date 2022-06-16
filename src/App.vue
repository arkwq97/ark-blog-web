<template>
  <v-app :style="{minHeight: appHeight}">
    <app-bar />
    <v-main>
      <router-view />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script setup lang="ts">
import AppBar from '@/components/core/AppBar.vue'
import AppFooter from '@/components/core/AppFooter.vue'

const appHeight = window.innerHeight + 'px'
</script>