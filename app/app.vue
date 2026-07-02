<template>
  <div class="site-shell">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>

<style scoped>
.site-shell {
  min-height: 100vh;
}
</style>
