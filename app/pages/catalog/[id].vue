<template>
  <main class="product-page" aria-labelledby="product-title">
    <nav class="product-breadcrumbs" aria-label="Хлебные крошки">
      <NuxtLink to="/catalog">Каталог</NuxtLink>
      <span>/</span>
      <span>{{ product.category }}</span>
      <span>/</span>
      <span>{{ product.name }}</span>
    </nav>

    <section class="product-shell">
      <div class="product-gallery" aria-label="Фотографии товара">
        <div class="product-gallery__thumbs">
          <button
            v-for="(shot, index) in shots"
            :key="shot.label"
            class="product-gallery__thumb"
            :class="{ 'product-gallery__thumb--active': activeShotIndex === index }"
            type="button"
            :aria-label="`Показать фото: ${shot.label}`"
            @click="activeShotIndex = index"
          >
            <UiOptimizedImage
              :src="shot.src"
              :alt="shot.alt"
              :width="1254"
              :height="1254"
              sizes="sm:76px"
              :tone="shot.tone"
            />
            <span>{{ shot.label }}</span>
          </button>
        </div>

        <figure class="product-gallery__main">
          <UiOptimizedImage
            :src="activeShot.src"
            :alt="activeShot.alt"
            :width="1254"
            :height="1254"
            sizes="xs:100vw md:60vw"
            loading="eager"
            :tone="activeShot.tone"
          />
          <figcaption>{{ activeShot.label }}</figcaption>
        </figure>
      </div>

      <aside class="product-info" aria-label="Информация о товаре">
        <p class="product-info__model">{{ product.category }}</p>
        <h1 id="product-title">{{ product.name }}</h1>
        <p class="product-info__price">{{ product.price }}</p>
        <p class="product-info__description">
          {{ product.description }}
        </p>

        <section class="product-control" aria-labelledby="product-color-title">
          <div class="product-control__head">
            <h2 id="product-color-title">Цвет</h2>
            <span>{{ activeColor.name }}</span>
          </div>
          <div class="product-control__swatches">
            <button
              v-for="(color, index) in colors"
              :key="color.name"
              class="product-control__swatch"
              :class="{ 'product-control__swatch--active': activeColorIndex === index }"
              type="button"
              :aria-label="`Выбрать цвет ${color.name}`"
              :style="{ backgroundColor: color.hex }"
              @click="activeColorIndex = index"
            />
          </div>
        </section>

        <section class="product-control" aria-labelledby="product-size-title">
          <div class="product-control__head">
            <h2 id="product-size-title">Размер</h2>
            <button type="button">Таблица размеров</button>
          </div>
          <div class="product-control__sizes">
            <button
              v-for="size in sizes"
              :key="size"
              class="product-control__size"
              :class="{ 'product-control__size--active': activeSize === size }"
              type="button"
              @click="activeSize = size"
            >
              {{ size }}
            </button>
          </div>
        </section>

        <button class="product-info__cart" type="button" @click="addToCart">
          {{ cartLabel }}
        </button>

        <div class="product-info__benefits">
          <span>Бесплатная доставка от 8 000 ₽</span>
          <span>Возврат 14 дней</span>
        </div>

        <div class="product-details">
          <article v-for="(detail, index) in details" :key="detail.title" class="product-details__item">
            <button type="button" @click="toggleDetail(index)">
              <span>{{ detail.title }}</span>
              <Icon :name="openDetailIndex === index ? 'lucide:minus' : 'lucide:plus'" aria-hidden="true" />
            </button>
            <p v-if="openDetailIndex === index">{{ detail.body }}</p>
          </article>
        </div>
      </aside>
    </section>

    <section class="product-related" aria-labelledby="related-title">
      <div class="product-related__head">
        <h2 id="related-title">Сочетается с</h2>
        <NuxtLink to="/catalog">
          Вся коллекция
          <Icon name="lucide:arrow-right" aria-hidden="true" />
        </NuxtLink>
      </div>

      <div class="product-related__grid">
        <NuxtLink v-for="item in related" :key="item.slug" class="related-card" :to="productPath(item.slug)">
          <UiOptimizedImage
            class="related-card__image"
            :src="item.frontImage"
            :alt="item.name"
            :width="1254"
            :height="1254"
            sizes="xs:100vw sm:50vw lg:25vw"
            :tone="item.tone"
          />
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }}</p>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const productId = computed(() => String(route.params.id ?? ''))

const product = getProductBySlug(productId.value)

if (!product) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Товар не найден'
  })
}

const shots = productShots(product)
const colors = productColors(product)
const sizes = product.sizes
const details = productDetails(product)
const related = relatedProducts(product)

const activeShotIndex = ref(0)
const activeColorIndex = ref(0)
const activeSize = ref(sizes.includes('M') ? 'M' : sizes[Math.floor(sizes.length / 2)] ?? sizes[0])
const openDetailIndex = ref(0)
const isAdded = ref(false)

const activeShot = computed(() => shots[activeShotIndex.value])
const activeColor = computed(() => colors[activeColorIndex.value])
const cartLabel = computed(() => isAdded.value ? 'Добавлено в корзину' : `Добавить в корзину — ${activeSize.value}`)

const toggleDetail = (index: number) => {
  openDetailIndex.value = openDetailIndex.value === index ? -1 : index
}

const addToCart = () => {
  isAdded.value = true
  window.setTimeout(() => {
    isAdded.value = false
  }, 1800)
}

useSeoMeta(createSeoMeta({
  title: product.name,
  description: product.description,
  image: product.frontImage,
  path: productPath(product.slug)
}))
</script>

<style scoped>
.product-page {
  min-height: 100vh;
  padding: 122px var(--container-inline) 0;
}

.product-breadcrumbs {
  display: flex;
  gap: 9px;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  color: var(--color-text-muted);
  font-size: 11px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  text-transform: uppercase;
}

.product-breadcrumbs span:last-child {
  color: var(--color-text);
}

.product-shell {
  display: grid;
  grid-template-columns: 1.34fr 1fr;
  gap: clamp(44px, 6vw, 72px);
  align-items: start;
  max-width: 1240px;
  margin: 0 auto;
  padding-top: 28px;
}

.product-gallery {
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr);
  gap: 16px;
}

.product-gallery__thumbs {
  display: grid;
  gap: 12px;
  align-content: start;
}

.product-gallery__thumb {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1;
  padding: 0;
  overflow: hidden;
  background: var(--color-stone-200);
  border: 1px solid var(--color-border);
  cursor: pointer;
}

.product-gallery__thumb--active {
  border-color: var(--color-primary);
}

.product-gallery__thumb span,
.product-gallery__main figcaption {
  position: absolute;
  left: 0;
  bottom: 0;
  color: rgba(70, 66, 56, 0.72);
  background: rgba(245, 242, 237, 0.72);
  font-family: 'Courier New', monospace;
  line-height: 1;
  text-transform: uppercase;
}

.product-gallery__thumb span {
  right: 0;
  padding: 4px 2px;
  font-size: 7px;
  letter-spacing: 0;
  text-align: center;
}

.product-gallery__main {
  position: relative;
  aspect-ratio: 1;
  margin: 0;
  background: var(--color-stone-200);
}

.product-gallery__main figcaption {
  padding: 8px 12px;
  font-size: 10px;
  letter-spacing: 0.05em;
}

.product-info {
  position: sticky;
  top: 112px;
}

.product-info__model,
.product-control__head h2 {
  color: var(--color-text-muted);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.12em;
  line-height: 1;
  text-transform: uppercase;
}

.product-info h1 {
  margin-top: 12px;
  font-size: clamp(42px, 4vw, 52px);
  line-height: 1.04;
}

.product-info__price {
  margin-top: 16px;
  color: var(--color-primary);
  font-size: 19px;
  font-weight: var(--font-weight-medium);
  line-height: 1;
}

.product-info__description {
  margin-top: 26px;
  color: var(--color-text-muted);
  font-size: 14px;
  line-height: 1.8;
}

.product-control {
  margin-top: 32px;
}

.product-control__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
}

.product-control__head span,
.product-control__head button {
  color: var(--color-text-muted);
  font-size: 12px;
  line-height: 1;
}

.product-control__head button {
  padding: 0;
  background: transparent;
  border: 0;
  border-bottom: 1px solid rgba(62, 71, 64, 0.34);
  cursor: pointer;
}

.product-control__swatches,
.product-control__sizes {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 14px;
}

.product-control__swatch {
  width: 30px;
  height: 30px;
  padding: 0;
  border: 1px solid rgba(29, 27, 23, 0.15);
  border-radius: 50%;
  cursor: pointer;
  outline: 0 solid transparent;
  outline-offset: 3px;
}

.product-control__swatch--active {
  outline: 2px solid var(--color-primary);
}

.product-control__size {
  min-width: 52px;
  min-height: 44px;
  padding: 0 10px;
  color: var(--color-text);
  background: transparent;
  border: 1px solid var(--color-stone-300);
  cursor: pointer;
  font-size: 13px;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.06em;
  line-height: 1;
}

.product-control__size--active {
  color: var(--color-primary-contrast);
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.product-info__cart {
  width: 100%;
  min-height: 58px;
  margin-top: 32px;
  color: var(--color-primary-contrast);
  background: var(--color-primary);
  border: 0;
  cursor: pointer;
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.14em;
  line-height: 1;
  text-transform: uppercase;
  transition: background 180ms ease;
}

.product-info__cart:hover {
  background: var(--color-primary-hover);
}

.product-info__benefits {
  display: flex;
  gap: 20px;
  margin-top: 16px;
  color: var(--color-text-muted);
  font-size: 11px;
  line-height: 1.45;
}

.product-details {
  margin-top: 38px;
  border-top: var(--line-thin);
}

.product-details__item {
  border-bottom: var(--line-thin);
}

.product-details__item button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 58px;
  padding: 0;
  color: var(--color-text);
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.12em;
  line-height: 1;
  text-align: left;
  text-transform: uppercase;
}

.product-details__item svg {
  flex: 0 0 auto;
  color: var(--color-text-muted);
}

.product-details__item p {
  padding: 0 0 20px;
  color: var(--color-text-muted);
  font-size: 13px;
  line-height: 1.75;
}

.product-related {
  max-width: 1240px;
  margin: 88px auto 0;
  padding-bottom: 88px;
}

.product-related__head {
  display: flex;
  gap: 24px;
  align-items: end;
  justify-content: space-between;
  padding-top: 44px;
  border-top: var(--line-thin);
}

.product-related h2 {
  font-size: clamp(30px, 3vw, 38px);
  line-height: 1.1;
}

.product-related__head a {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: var(--color-primary);
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  text-transform: uppercase;
}

.product-related__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.related-card {
  min-width: 0;
}

.related-card__image {
  aspect-ratio: 1;
}

.related-card h3 {
  margin-top: 16px;
  font-size: 22px;
  line-height: 1.1;
}

.related-card p {
  margin-top: 7px;
  color: var(--color-primary);
  font-size: 13px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
}

@media (max-width: 900px) {
  .product-page {
    padding: 118px var(--container-inline) 0;
    overflow-x: hidden;
  }

  .product-breadcrumbs {
    max-width: 680px;
  }

  .product-shell {
    grid-template-columns: 1fr;
    gap: 30px;
    max-width: 680px;
    padding-top: 22px;
  }

  .product-info {
    position: static;
  }

  .product-info h1 {
    max-width: 520px;
  }

  .product-info__description {
    max-width: 580px;
  }

  .product-related {
    max-width: 680px;
    margin-top: 66px;
    padding-bottom: 64px;
  }

  .product-related__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }
}

@media (max-width: 640px) {
  .product-page {
    --mobile-edge: max(18px, var(--container-inline));

    padding: 106px 0 0;
  }

  .product-breadcrumbs {
    padding-inline: var(--mobile-edge);
    overflow-x: auto;
    flex-wrap: nowrap;
    max-width: none;
    white-space: nowrap;
    scrollbar-width: none;
  }

  .product-breadcrumbs::-webkit-scrollbar {
    display: none;
  }

  .product-breadcrumbs span:last-child {
    max-width: 44vw;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-shell {
    gap: 0;
    max-width: none;
    padding-top: 18px;
  }

  .product-gallery {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .product-gallery__thumbs {
    display: flex;
    order: 2;
    gap: 8px;
    width: 100%;
    padding: 10px var(--mobile-edge) 0;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .product-gallery__thumbs::-webkit-scrollbar {
    display: none;
  }

  .product-gallery__thumb {
    flex: 0 0 62px;
    border-color: rgba(29, 27, 23, 0.12);
  }

  .product-gallery__thumb--active {
    border-color: var(--color-primary);
    box-shadow: inset 0 0 0 1px var(--color-primary);
  }

  .product-gallery__thumb span {
    display: none;
  }

  .product-gallery__main {
    width: 100vw;
    aspect-ratio: 1 / 1.12;
  }

  .product-gallery__main figcaption {
    right: auto;
    bottom: 12px;
    left: 12px;
    padding: 7px 10px;
    color: rgba(29, 27, 23, 0.74);
    background: rgba(245, 242, 237, 0.78);
    font-size: 9px;
    letter-spacing: 0.08em;
  }

  .product-info {
    padding: 26px var(--mobile-edge) 0;
  }

  .product-info__model,
  .product-control__head h2 {
    font-size: 10px;
    letter-spacing: 0.11em;
  }

  .product-info h1 {
    margin-top: 9px;
    font-size: 40px;
    line-height: 0.98;
  }

  .product-info__price {
    margin-top: 13px;
    font-size: 18px;
  }

  .product-info__description {
    margin-top: 20px;
    font-size: 13px;
    line-height: 1.7;
  }

  .product-control {
    margin-top: 25px;
  }

  .product-control__head span,
  .product-control__head button {
    font-size: 11px;
  }

  .product-control__swatches,
  .product-control__sizes {
    gap: 10px;
    margin-top: 12px;
  }

  .product-control__swatch {
    width: 34px;
    height: 34px;
  }

  .product-control__sizes {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .product-control__size {
    min-width: 0;
    min-height: 46px;
    padding: 0 4px;
  }

  .product-info__cart {
    position: sticky;
    z-index: 2;
    bottom: 14px;
    min-height: 56px;
    margin-top: 26px;
    box-shadow: 0 16px 34px rgba(29, 27, 23, 0.18);
  }

  .product-info__benefits {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin-top: 18px;
  }

  .product-info__benefits span {
    min-height: 42px;
    padding: 12px;
    background: rgba(230, 225, 220, 0.56);
    font-size: 10px;
    line-height: 1.35;
  }

  .product-details {
    margin-top: 28px;
  }

  .product-details__item button {
    min-height: 54px;
    font-size: 11px;
    letter-spacing: 0.1em;
  }

  .product-details__item p {
    padding-bottom: 18px;
    font-size: 12px;
    line-height: 1.7;
  }

  .product-related {
    max-width: none;
    margin-top: 54px;
    padding: 0 var(--mobile-edge) 58px;
  }

  .product-related__head {
    align-items: start;
    flex-direction: column;
    gap: 14px;
    padding-top: 30px;
  }

  .product-related h2 {
    font-size: 30px;
  }

  .product-related__head a {
    font-size: 11px;
  }

  .product-related__grid {
    gap: 14px 10px;
    margin-top: 22px;
  }

  .related-card h3 {
    margin-top: 12px;
    font-size: 18px;
  }

  .related-card p {
    font-size: 12px;
  }
}
</style>
