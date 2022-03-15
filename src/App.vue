<template>
  <v-app>
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
</script>