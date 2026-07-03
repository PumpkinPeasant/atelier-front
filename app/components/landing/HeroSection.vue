<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__media" aria-hidden="true">
      <picture>
        <source :srcset="heroImage.mobileSrc" media="(max-width: 760px)">
        <NuxtImg
          class="hero__image"
          :src="heroImage.src"
          :alt="heroImage.alt"
          :width="1536"
          :height="1024"
          loading="eager"
          preload
          provider="none"
        />
      </picture>
    </div>
    <div class="hero__content">
      <h1 id="hero-title">Базовые вещи ручной работы на каждый день.</h1>
      <NuxtLink class="hero__button" to="/catalog">Смотреть коллекцию</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroImage = {
  src: '/images/hero-shirt.png',
  mobileSrc: '/images/hero-shirt-mobile.png',
  alt: 'Кремовая хлопковая футболка с биркой Nora Hale'
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: clamp(620px, 66vw, 760px);
  overflow: hidden;
  background: var(--color-cream-200);
}

.hero__media {
  position: absolute;
  inset: 0;
  background: var(--color-cream-200);
}

.hero__media picture {
  display: block;
  width: 100%;
  height: 100%;
}

.hero__media::after {
  position: absolute;
  inset: 0;
  content: '';
  background: linear-gradient(90deg, rgba(244, 240, 232, 0.32) 0%, rgba(244, 240, 232, 0) 58%);
  pointer-events: none;
}

.hero__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.hero__content {
  position: relative;
  z-index: 1;
  display: grid;
  align-content: center;
  justify-items: start;
  width: 100%;
  max-width: var(--container-max);
  min-height: inherit;
  margin-inline: auto;
  padding: 136px var(--container-inline) 64px;
}

.hero h1 {
  max-width: 560px;
  color: #22211c;
  font-size: clamp(58px, 6vw, 78px);
  line-height: 1.03;
}

.hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 212px;
  min-height: 54px;
  margin-top: 48px;
  padding: 0 28px;
  color: var(--color-primary-contrast);
  background: var(--color-primary);
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  text-transform: uppercase;
  transition: background 160ms ease;
}

.hero__button:hover {
  background: var(--color-primary-hover);
}

@media (max-width: 760px) {
  .hero {
    min-height: 560px;
  }

  .hero__media::after {
    background: linear-gradient(90deg, rgba(244, 240, 232, 0.36) 0%, rgba(244, 240, 232, 0) 68%);
  }

  .hero__content {
    align-content: end;
    padding: 132px 24px 44px;
  }

  .hero h1 {
    max-width: none;
    font-size: 44px;
  }

  .hero__button {
    display: flex;
    width: 100%;
    margin-top: 28px;
  }
}

@media (max-width: 400px) {
  .hero h1 {
    font-size: 38px;
  }
}
</style>
