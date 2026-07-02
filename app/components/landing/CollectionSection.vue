<template>
  <section class="collection container" aria-labelledby="collection-title">
    <div class="collection__lead">
      <p class="eyebrow">Core collection</p>
      <h2 id="collection-title">Permanent essentials.</h2>
      <a href="#">
        View all patterns
        <Icon name="lucide:arrow-right" aria-hidden="true" />
      </a>
    </div>

    <div class="collection__grid">
      <article v-for="item in products" :key="item.name" class="product-card">
        <UiOptimizedImage
          class="product-card__image"
          :src="item.image.src"
          :alt="item.image.alt"
          :width="640"
          :height="728"
          sizes="xs:100vw sm:50vw lg:25vw"
        />
        <p class="product-card__pattern">{{ item.pattern }}</p>
        <h3>{{ item.name }}</h3>
        <p class="product-card__colors">{{ item.colors }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const products = [
  { pattern: 'Pattern 01', name: 'Classic Tee', colors: '6 colors', image: { src: '', alt: 'Classic tee' } },
  { pattern: 'Pattern 04', name: 'Heavy Sweatshirt', colors: '5 colors', image: { src: '', alt: 'Heavy sweatshirt' } },
  { pattern: 'Pattern 06', name: 'Relaxed Shorts', colors: '4 colors', image: { src: '', alt: 'Relaxed shorts' } },
  { pattern: 'Pattern 08', name: 'Wide Pants', colors: '3 colors', image: { src: '', alt: 'Wide pants' } }
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
  font-size: 11px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  text-transform: uppercase;
}

.collection h2 {
  max-width: 190px;
  font-size: clamp(30px, 3vw, 40px);
  line-height: 1.05;
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
  aspect-ratio: 0.88;
  height: auto;
  margin-bottom: 22px;
}

.product-card h3 {
  margin-top: 10px;
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: var(--font-weight-regular);
  line-height: 1.2;
}

.product-card__colors {
  margin-top: 20px;
}

@media (max-width: 980px) {
  .collection {
    grid-template-columns: 1fr;
  }

  .collection__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .collection__grid {
    grid-template-columns: 1fr;
  }
}
</style>
