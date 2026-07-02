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
      <article v-for="product in products" :key="product.slug" class="catalog-card">
        <div class="catalog-card__media">
          <NuxtLink :to="productPath(product.slug)" :aria-label="`Открыть ${product.name}`">
            <UiOptimizedImage
              :src="product.frontImage"
              :alt="product.name"
              :width="640"
              :height="640"
              sizes="xs:100vw sm:50vw lg:25vw"
              :tone="product.tone"
            />
          </NuxtLink>
          <button class="catalog-card__favorite" type="button" :aria-label="`Добавить ${product.name} в избранное`">
            <Icon name="lucide:heart" aria-hidden="true" />
          </button>
        </div>

        <div class="catalog-card__body">
          <h2>
            <NuxtLink :to="productPath(product.slug)">{{ product.name }}</NuxtLink>
          </h2>
          <p class="catalog-card__price">{{ product.price }}</p>
          <div class="catalog-card__colors" :aria-label="`${product.colors.length} цветов`">
            <span>{{ product.colors.length }} {{ colorWord(product.colors.length) }}</span>
            <span
              v-for="color in product.colors"
              :key="`${product.slug}-${color}`"
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
const filters = ['Категория', 'Тип', 'Цвет', 'Размер']

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

.catalog-card__media a {
  display: block;
  width: 100%;
  height: 100%;
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
