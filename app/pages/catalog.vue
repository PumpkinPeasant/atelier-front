<template>
  <main class="catalog-page" aria-labelledby="catalog-title">
    <h1 id="catalog-title" class="catalog-page__title">Каталог</h1>

    <section class="catalog-toolbar" aria-label="Фильтры каталога">
      <button class="catalog-toolbar__filter" type="button">
        Фильтры
        <Icon name="lucide:sliders-horizontal" aria-hidden="true" />
      </button>

      <div class="catalog-toolbar__groups">
        <button v-for="filter in filters" :key="filter" class="catalog-toolbar__button" type="button">
          {{ filter }}
          <Icon name="lucide:chevron-down" aria-hidden="true" />
        </button>
      </div>

      <button class="catalog-toolbar__sort" type="button">
        Сортировка: новинки
        <Icon name="lucide:chevron-down" aria-hidden="true" />
      </button>
    </section>

    <section class="catalog-grid" aria-label="Список товаров">
      <article v-for="product in products" :key="product.name" class="catalog-card">
        <div class="catalog-card__media">
          <UiOptimizedImage
            :src="product.image"
            :alt="product.name"
            :width="640"
            :height="640"
            sizes="xs:100vw sm:50vw lg:25vw"
            :tone="product.tone"
          />
          <button class="catalog-card__favorite" type="button" :aria-label="`Добавить ${product.name} в избранное`">
            <Icon name="lucide:heart" aria-hidden="true" />
          </button>
        </div>

        <div class="catalog-card__body">
          <h2>{{ product.name }}</h2>
          <p class="catalog-card__price">{{ product.price }}</p>
          <div class="catalog-card__colors" :aria-label="`${product.colorCount} цветов`">
            <span>{{ product.colorCount }} {{ colorWord(product.colorCount) }}</span>
            <span
              v-for="color in product.colors"
              :key="`${product.name}-${color}`"
              class="catalog-card__swatch"
              :style="{ backgroundColor: color }"
              aria-hidden="true"
            />
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
type ProductTone = 'soft' | 'warm' | 'dark'

const filters = ['Категория', 'Тип', 'Цвет', 'Размер']

const products: Array<{
  name: string
  price: string
  colorCount: number
  colors: string[]
  image: string
  tone: ProductTone
}> = [
  { name: 'Classic Tee', price: '4 200 ₽', colorCount: 6, colors: ['#f5f2ed', '#e6e1dc', '#b8b4ad', '#6b6b66'], image: '', tone: 'soft' },
  { name: 'Heavy Sweatshirt', price: '7 200 ₽', colorCount: 5, colors: ['#1d1b17', '#d5cbc4', '#aba298', '#c6b7a9'], image: '', tone: 'dark' },
  { name: 'Relaxed Shorts', price: '4 800 ₽', colorCount: 4, colors: ['#c6b7a9', '#948778', '#6b6b66', '#d5cbc4'], image: '', tone: 'warm' },
  { name: 'Wide Pants', price: '6 900 ₽', colorCount: 3, colors: ['#d5cbc4', '#1d1b17', '#645f56'], image: '', tone: 'soft' },
  { name: 'Tank Top', price: '2 600 ₽', colorCount: 3, colors: ['#948778', '#1d1b17', '#7c807a'], image: '', tone: 'dark' },
  { name: 'Hoodie', price: '8 900 ₽', colorCount: 4, colors: ['#1d1b17', '#e6e1dc', '#aba298', '#c6b7a9'], image: '', tone: 'warm' },
  { name: 'Long Sleeve', price: '4 900 ₽', colorCount: 3, colors: ['#f5f2ed', '#aba298', '#7c807a'], image: '', tone: 'soft' },
  { name: 'Relaxed Shorts 2.0', price: '5 100 ₽', colorCount: 3, colors: ['#d5cbc4', '#1d1b17', '#645f56'], image: '', tone: 'dark' },
  { name: 'Crew Neck Tee', price: '4 500 ₽', colorCount: 5, colors: ['#e6e1dc', '#d5cbc4', '#948778', '#1d1b17', '#7c807a'], image: '', tone: 'warm' },
  { name: 'Sweatpants', price: '6 700 ₽', colorCount: 3, colors: ['#d5cbc4', '#1d1b17', '#948778'], image: '', tone: 'soft' },
  { name: 'Oversize Tee', price: '4 900 ₽', colorCount: 4, colors: ['#1d1b17', '#d5cbc4', '#7c807a', '#c6b7a9'], image: '', tone: 'dark' },
  { name: 'Shirt Jacket', price: '7 900 ₽', colorCount: 2, colors: ['#c6b7a9', '#948778'], image: '', tone: 'warm' }
]

const colorWord = (count: number) => {
  if (count === 1) return 'цвет'
  if (count > 1 && count < 5) return 'цвета'
  return 'цветов'
}

useSeoMeta(createSeoMeta({
  title: 'Каталог базовой одежды',
  description: 'Каталог базовой одежды Nora Hale Atelier: футболки, свитшоты, шорты и брюки ручной работы.',
  path: '/catalog'
}))
</script>

<style scoped>
.catalog-page {
  min-height: 100vh;
  padding: 128px var(--container-inline) 72px;
}

.catalog-page__title {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.catalog-toolbar {
  display: grid;
  grid-template-columns: minmax(150px, 1fr) auto minmax(190px, 1fr);
  gap: 24px;
  align-items: center;
  margin-bottom: 38px;
}

.catalog-toolbar__groups {
  display: flex;
  gap: clamp(40px, 6vw, 76px);
  align-items: center;
  justify-content: center;
}

.catalog-toolbar button {
  display: inline-flex;
  gap: 9px;
  align-items: center;
  padding: 0;
  color: var(--color-text);
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 11px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  text-transform: uppercase;
}

.catalog-toolbar__filter {
  justify-self: start;
}

.catalog-toolbar__sort {
  justify-self: end;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 38px 30px;
}

.catalog-card {
  min-width: 0;
}

.catalog-card__media {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--color-cream-100);
}

.catalog-card__favorite {
  position: absolute;
  top: 18px;
  right: 18px;
  display: inline-grid;
  width: 24px;
  height: 24px;
  padding: 0;
  place-items: center;
  color: var(--color-text-muted);
  background: transparent;
  border: 0;
  cursor: pointer;
}

.catalog-card__body {
  display: grid;
  gap: 9px;
  padding-top: 22px;
}

.catalog-card h2 {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  text-transform: uppercase;
}

.catalog-card__price {
  font-size: 16px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
}

.catalog-card__colors {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 12px;
  color: var(--color-text-muted);
  font-size: 11px;
  line-height: 1;
}

.catalog-card__swatch {
  width: 10px;
  height: 10px;
  flex: 0 0 auto;
  border: 1px solid rgba(29, 27, 23, 0.14);
  border-radius: 50%;
}

@media (max-width: 1020px) {
  .catalog-toolbar {
    grid-template-columns: 1fr;
  }

  .catalog-toolbar__groups {
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px 34px;
  }

  .catalog-toolbar__sort {
    justify-self: start;
  }

  .catalog-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .catalog-page {
    padding-top: 132px;
  }

  .catalog-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px 16px;
  }
}

@media (max-width: 480px) {
  .catalog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
