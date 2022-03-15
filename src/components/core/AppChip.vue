<template>
  <v-chip
    class="app-chip mx-0 text-uppercase"
    label
    x-small
  >
    <slot></slot>
  </v-chip>
</template>

<style scoped lang="less">
.app-chip {
  height: 24px;
  background: rgb(14,99,156);
  user-select: none;
  cursor: pointer;
}
.app-chip:hover {
  background-color: rgb(17,119,187);
}
</style>