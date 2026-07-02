<template>
  <div class="site-shell">
    <NuxtRouteAnnouncer />
    <LandingSiteHeader />
    <main>
      <LandingHeroSection />
      <LandingIntroBar />
      <LandingCollectionSection />
      <LandingFeatureGrid />
      <LandingStudioSection />
    </main>
    <LandingSiteFooter />
  </div>
</template>

<style scoped>
.site-shell {
  min-height: 100vh;
}
</style>
