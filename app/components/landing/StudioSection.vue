<template>
  <section class="studio container" aria-labelledby="studio-title">
    <div class="studio__content">
      <p class="studio__eyebrow">Студия</p>
      <h2 id="studio-title">Место для хороших идей и лучшей базы.</h2>
      <p>Nora Hale Atelier — небольшая независимая студия, построенная на вере в то, что простота, сделанная хорошо, меняет ощущение вещи.</p>
      <NuxtLink to="/studio">
        О студии
        <Icon name="lucide:arrow-right" aria-hidden="true" />
      </NuxtLink>
    </div>

    <div class="studio__gallery" aria-hidden="true">
      <UiOptimizedImage
        v-for="image in studioImages"
        :key="image.alt"
        class="studio__image"
        :src="image.src"
        :alt="image.alt"
        :width="1254"
        :height="1254"
        sizes="xs:100vw md:33vw"
        :tone="image.tone"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const studioImages = [
  { src: '/images/landing/studio-mannequin.png', alt: 'Манекен в ателье с сантиметровой лентой', tone: 'soft' as const },
  { src: '/images/landing/fabric-swatches.png', alt: 'Образцы тканей в натуральных оттенках', tone: 'warm' as const },
  { src: '/images/landing/tee-details.png', alt: 'Детали базовых футболок в нейтральных цветах', tone: 'dark' as const }
]
</script>

<style scoped>
.studio {
  display: grid;
  grid-template-columns: minmax(190px, 245px) 1fr;
  gap: clamp(36px, 5.6vw, 72px);
  padding-top: 26px;
  padding-bottom: 42px;
  border-bottom: var(--line-thin);
}

.studio__content {
  display: grid;
  align-content: start;
  gap: 22px;
  padding-top: 12px;
}

.studio__eyebrow {
  margin-bottom: 8px;
  font-size: 11px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  text-transform: uppercase;
}

.studio h2 {
  font-size: clamp(32px, 3.2vw, 42px);
  line-height: 1.02;
}

.studio p:not(.studio__eyebrow) {
  max-width: 218px;
  font-size: 13px;
  line-height: 1.45;
}

.studio a {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  margin-top: 18px;
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  text-transform: uppercase;
}

.studio__gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 4px;
}

.studio__image {
  aspect-ratio: 1 / 1;
}

@media (max-width: 760px) {
  .studio {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 48px 24px;
  }

  .studio__content {
    padding-top: 0;
  }

  .studio p:not(.studio__eyebrow) {
    max-width: none;
  }
}

@media (max-width: 760px) {
  .studio__gallery {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .studio__image {
    aspect-ratio: 3 / 2;
  }
}
</style>
