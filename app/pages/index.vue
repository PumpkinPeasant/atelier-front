<template>
  <main>
    <LandingHeroSection />
    <LandingIntroBar />
    <LandingCollectionSection />
    <LandingFeatureGrid />
    <LandingStudioSection />
  </main>
</template>

<script setup lang="ts">
const landingTitle = 'NORA HALE · Базовые вещи ручной работы'

useSeoMeta({
  ...createSeoMeta(),
  title: landingTitle,
  ogTitle: landingTitle,
  twitterTitle: landingTitle
})
</script>
