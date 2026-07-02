<template>
  <div class="default-layout">
    <LandingSiteHeader />
    <slot />
    <LandingSiteFooter />
  </div>
</template>

<style scoped>
.default-layout {
  min-height: 100vh;
}
</style>
