<template>
  <section class="collection container" aria-labelledby="collection-title">
    <div class="collection__lead">
      <p class="eyebrow">Основная коллекция</p>
      <h2 id="collection-title">Базовые вещи вне сезона.</h2>
      <a href="#">
        Все модели
        <Icon name="lucide:arrow-right" aria-hidden="true" />
      </a>
    </div>

    <div class="collection__grid">
      <article v-for="item in products" :key="item.name" class="product-card">
        <NuxtLink :to="item.to" :aria-label="`Открыть ${item.name}`">
          <UiOptimizedImage
            class="product-card__image"
            :src="item.image.src"
            :alt="item.image.alt"
            :width="640"
            :height="728"
            sizes="xs:100vw sm:50vw lg:25vw"
          />
        </NuxtLink>
        <p class="product-card__pattern">{{ item.pattern }}</p>
        <h3>
          <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
        </h3>
        <p class="product-card__colors">{{ item.colors }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const products = [
  {
    pattern: 'Модель 01',
    name: 'Classic Tee',
    colors: '6 цветов',
    image: { src: '/images/examples/classic-tee.png', alt: 'Classic Tee' },
    to: '/catalog'
  },
  {
    pattern: 'Модель 04',
    name: 'Heavy Sweatshirt',
    colors: '5 цветов',
    image: { src: '/images/examples/heavy-sweatshirt.png', alt: 'Heavy Sweatshirt' },
    to: '/catalog/heavy-sweatshirt'
  },
  {
    pattern: 'Модель 06',
    name: 'Relaxed Shorts',
    colors: '4 цвета',
    image: { src: '/images/examples/relaxed-shorts.png', alt: 'Relaxed Shorts' },
    to: '/catalog'
  },
  {
    pattern: 'Модель 08',
    name: 'Wide Pants',
    colors: '3 цвета',
    image: { src: '/images/examples/wide-pants.png', alt: 'Wide Pants' },
    to: '/catalog'
  }
]
</script>

<style scoped>
.collection {
  display: grid;
  grid-template-columns: minmax(180px, 220px) 1fr;
  gap: clamp(40px, 6vw, 72px);
  padding-top: 64px;
  padding-bottom: 64px;
  border-bottom: var(--line-thin);
}

.collection__lead {
  display: grid;
  align-content: start;
  gap: 24px;
}

.eyebrow,
.product-card__pattern,
.product-card__colors {
  color: var(--color-text-muted);
  font-size: 11px;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.12em;
  line-height: 1;
  text-transform: uppercase;
}

.collection h2 {
  max-width: 190px;
  color: #22211c;
  font-size: clamp(30px, 2.6vw, 34px);
  line-height: 1.08;
}

.collection__lead a {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  margin-top: 16px;
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  text-transform: uppercase;
}

.collection__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(24px, 3.4vw, 36px);
}

.product-card {
  min-width: 0;
}

.product-card__image {
  width: 100%;
  aspect-ratio: 1023 / 1537;
  height: auto;
  margin-bottom: 22px;
}

.product-card h3 {
  margin-top: 9px;
  color: #22211c;
  font-family: var(--font-heading);
  font-size: 23px;
  font-weight: var(--font-weight-heading);
  line-height: 1.1;
}

.product-card__colors {
  margin-top: 20px;
}

@media (max-width: 760px) {
  .collection {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 52px 24px 64px;
  }

  .collection h2 {
    max-width: none;
  }

  .collection__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px 18px;
  }
}

@media (max-width: 400px) {
  .collection__grid {
    grid-template-columns: 1fr;
  }
}
</style>
