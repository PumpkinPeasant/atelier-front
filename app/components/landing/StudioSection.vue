<template>
  <section class="studio container" aria-labelledby="studio-title">
    <div class="studio__content">
      <p class="studio__eyebrow">Студия</p>
      <h2 id="studio-title">Место для хороших идей и лучшей базы.</h2>
      <p>Nora Hale Atelier — небольшая независимая студия, построенная на вере в то, что простота, сделанная хорошо, меняет ощущение вещи.</p>
      <a href="#">
        О студии
        <Icon name="lucide:arrow-right" aria-hidden="true" />
      </a>
    </div>

    <div class="studio__gallery" aria-hidden="true">
      <UiOptimizedImage
        v-for="image in studioImages"
        :key="image.alt"
        class="studio__image"
        :src="image.src"
        :alt="image.alt"
        :width="720"
        :height="820"
        sizes="xs:100vw md:33vw"
        :tone="image.tone"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const studioImages = [
  { src: '', alt: 'Манекен в ателье', tone: 'soft' as const },
  { src: '', alt: 'Образцы тканей и эскизы', tone: 'warm' as const },
  { src: '', alt: 'Дизайнер за работой в студии', tone: 'dark' as const }
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
  min-height: clamp(250px, 28vw, 334px);
}

@media (max-width: 880px) {
  .studio {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .studio__gallery {
    grid-template-columns: 1fr;
  }
}
</style>
