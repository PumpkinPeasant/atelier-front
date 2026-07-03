<template>
  <main class="studio-page" aria-labelledby="studio-page-title">
    <section class="studio-hero">
      <p class="studio-hero__eyebrow">Студия · Москва · с 2020</p>
      <h1 id="studio-page-title">Одна мастерская для тихих и долговечных вещей.</h1>
      <p>Nora Hale Atelier — небольшая студия в Москве, где вещи проектируются, кроятся и шьются вручную. Каждая модель выпускается малыми партиями, часто по одной.</p>
    </section>

    <section class="studio-intro studio-container" aria-labelledby="studio-intro-title">
      <NuxtImg
        class="studio-intro__image"
        src="/images/about/studio-workspace.png"
        alt="Светлая мастерская Nora Hale Atelier с рабочим столом, швейной машиной и рейлом одежды"
        width="1536"
        height="1024"
        loading="eager"
        provider="none"
      />
      <div class="studio-intro__text">
        <h2 id="studio-intro-title">Сделано одной парой рук: от первого эскиза до последнего стежка.</h2>
        <div>
          <p>Студия появилась в 2020 году как способ делать одежду, которую сложно найти: простую, хорошо скроенную базу, рассчитанную на годы, а не на один сезон.</p>
          <p>Здесь нет фабрики и большой команды. Выкройки строятся вручную, ткани выбираются внимательно, а каждая вещь проходит через небольшой московский рабочий стол.</p>
        </div>
      </div>
    </section>

    <section class="studio-split studio-container" aria-labelledby="studio-batches-title">
      <div class="studio-split__copy">
        <p class="studio-kicker">Малые партии</p>
        <h2 id="studio-batches-title">Небольшими запусками или по одной вещи.</h2>
        <p>Ничего не производится массово. Модель может выйти тиражом в несколько штук или быть сшита на заказ как единичное изделие.</p>
        <p>Так остаётся меньше лишнего, больше внимания к деталям и больше контроля над посадкой, обработкой и финальным ощущением вещи.</p>
      </div>
      <NuxtImg
        class="studio-split__image"
        src="/images/about/small-batches.png"
        alt="Ряд базовых вещей на вешалке в студии"
        width="1024"
        height="1536"
        loading="lazy"
        provider="none"
      />
    </section>

    <section class="studio-process studio-container" aria-labelledby="studio-process-title">
      <div class="studio-process__head">
        <p class="studio-kicker">Внутри студии</p>
        <h2 id="studio-process-title">Как создаётся одежда.</h2>
      </div>
      <div class="studio-process__grid">
        <figure v-for="shot in productionShots" :key="shot.src" class="studio-process__figure">
          <NuxtImg
            class="studio-process__image"
            :src="shot.src"
            :alt="shot.alt"
            width="1024"
            height="1536"
            loading="lazy"
            provider="none"
          />
          <figcaption>{{ shot.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="studio-range studio-container" aria-labelledby="studio-range-title">
      <div class="studio-range__head">
        <p class="studio-kicker">Ассортимент</p>
        <h2 id="studio-range-title">Повседневная база, намеренно простая.</h2>
        <p>Коллекция остаётся небольшой: базовые вещи в спокойных нейтральных оттенках, которые легко сочетать и носить сезон за сезоном.</p>
      </div>
      <div class="studio-range__grid">
        <article v-for="item in range" :key="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section class="studio-stats studio-container" aria-label="Факты о студии">
      <div v-for="stat in stats" :key="stat.label" class="studio-stats__item">
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </div>
    </section>

    <section class="studio-cta" aria-labelledby="studio-cta-title">
      <h2 id="studio-cta-title">Медленно, в Москве, чтобы носить долго.</h2>
      <NuxtLink to="/catalog">Смотреть коллекцию</NuxtLink>
    </section>
  </main>
</template>

<script setup lang="ts">
const productionShots = [
  {
    src: '/images/about/process-cutting.png',
    alt: 'Раскрой выкройки на рабочем столе',
    caption: 'раскрой'
  },
  {
    src: '/images/about/process-pinning.png',
    alt: 'Закрепление ткани булавками перед шитьём',
    caption: 'подготовка ткани'
  },
  {
    src: '/images/about/process-sewing.png',
    alt: 'Пошив изделия на швейной машине',
    caption: 'работа за машиной'
  },
  {
    src: '/images/about/process-mannequin.png',
    alt: 'Готовая футболка на манекене в студии',
    caption: 'финальная обработка'
  }
]

const range = [
  {
    title: 'Tops & Tees',
    description: 'Футболки и лонгсливы из мягкого плотного хлопка — основа повседневного гардероба.'
  },
  {
    title: 'Sweats & Knits',
    description: 'Свитшоты и простые трикотажные вещи со свободной посадкой, которые держат форму.'
  },
  {
    title: 'Trousers & Shorts',
    description: 'Брюки и шорты со спокойной продуманной посадкой: удобно, но без небрежности.'
  }
]

const stats = [
  { value: '1', label: 'мастер в студии' },
  { value: '2020', label: 'год начала работы' },
  { value: 'Москва', label: 'где всё сделано' },
  { value: 'Малые', label: 'только партии' }
]

useSeoMeta(createSeoMeta({
  title: 'Студия Nora Hale Atelier',
  description: 'История и принципы Nora Hale Atelier: базовая одежда ручной работы, малые партии и производство в Москве.',
  path: '/studio'
}))
</script>

<style scoped>
.studio-page {
  min-height: 100vh;
  padding-top: 86px;
}

.studio-container {
  max-width: 1240px;
  margin: 0 auto;
  padding-inline: var(--container-inline);
}

.studio-hero {
  max-width: 1000px;
  margin: 0 auto;
  padding: clamp(72px, 8vw, 112px) var(--container-inline) clamp(56px, 7vw, 76px);
  text-align: center;
}

.studio-hero__eyebrow,
.studio-kicker {
  color: var(--color-text-muted);
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.14em;
  line-height: 1;
  text-transform: uppercase;
}

.studio-hero h1 {
  max-width: 840px;
  margin: 26px auto 0;
  font-size: clamp(46px, 6vw, 74px);
  line-height: 1.04;
}

.studio-hero p:not(.studio-hero__eyebrow) {
  max-width: 600px;
  margin: 30px auto 0;
  color: var(--color-text-muted);
  font-size: 15px;
  line-height: 1.75;
}

.studio-placeholder {
  display: flex;
  align-items: flex-end;
  min-width: 0;
  background:
    repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.22) 0 2px, transparent 2px 24px),
    var(--color-stone-200);
}

.studio-placeholder span {
  padding: 14px;
  color: rgba(70, 66, 56, 0.62);
  font-family: 'Courier New', monospace;
  font-size: 10px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.studio-placeholder--wide {
  aspect-ratio: 16 / 7;
}

.studio-intro__image {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 7;
  object-fit: cover;
  object-position: center;
}

.studio-placeholder--portrait,
.studio-placeholder--process {
  aspect-ratio: 4 / 5;
}

.studio-placeholder--portrait {
  background:
    repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.28) 0 2px, transparent 2px 22px),
    var(--color-cream-200);
}

.studio-intro__text {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(36px, 5vw, 56px);
  padding: 56px 0;
  border-bottom: var(--line-thin);
}

.studio-intro h2,
.studio-split h2,
.studio-process h2,
.studio-range h2,
.studio-cta h2 {
  font-size: clamp(32px, 3.4vw, 44px);
  line-height: 1.1;
}

.studio-intro p,
.studio-split p,
.studio-range p {
  color: var(--color-text-muted);
  font-size: 14px;
  line-height: 1.8;
}

.studio-intro p + p,
.studio-split p + p {
  margin-top: 18px;
}

.studio-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 5vw, 64px);
  align-items: center;
  padding-top: 72px;
  padding-bottom: 72px;
  border-bottom: var(--line-thin);
}

.studio-split__copy h2 {
  margin-top: 20px;
}

.studio-split__copy p:not(.studio-kicker) {
  max-width: 540px;
  margin-top: 22px;
}

.studio-split__image {
  display: block;
  width: 100%;
  height: auto;
  background: var(--color-stone-200);
}

.studio-process {
  padding-top: 56px;
  padding-bottom: 56px;
}

.studio-process__head {
  margin-bottom: 34px;
}

.studio-process h2,
.studio-range h2 {
  margin-top: 16px;
}

.studio-process__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.studio-process__figure {
  position: relative;
  aspect-ratio: 4 / 5;
  margin: 0;
  overflow: hidden;
  background: var(--color-stone-200);
}

.studio-process__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.studio-process__figure figcaption {
  position: absolute;
  left: 12px;
  bottom: 12px;
  padding: 7px 9px;
  color: rgba(245, 242, 237, 0.92);
  background: rgba(29, 27, 23, 0.34);
  backdrop-filter: blur(12px);
  font-size: 10px;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
}

.studio-range {
  border-top: var(--line-thin);
}

.studio-range__head {
  max-width: 640px;
  padding: 44px 0 12px;
}

.studio-range__head p:not(.studio-kicker) {
  margin-top: 20px;
}

.studio-range__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding-bottom: 8px;
}

.studio-range article {
  min-height: 180px;
  padding: 44px 44px 44px 0;
  border-right: var(--line-thin);
}

.studio-range article + article {
  padding-left: 44px;
}

.studio-range article:last-child {
  border-right: 0;
}

.studio-range h3 {
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: var(--font-weight-heading);
  line-height: 1.1;
}

.studio-range article p {
  margin-top: 14px;
  font-size: 13px;
  line-height: 1.7;
}

.studio-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  padding-top: 64px;
  padding-bottom: 64px;
  border-top: var(--line-thin);
  border-bottom: var(--line-thin);
}

.studio-stats__item {
  display: grid;
  gap: 14px;
}

.studio-stats strong {
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: clamp(44px, 5vw, 58px);
  font-weight: var(--font-weight-heading);
  line-height: 1;
}

.studio-stats span {
  color: var(--color-text-muted);
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.studio-cta {
  max-width: 1000px;
  margin: 0 auto;
  padding: 88px var(--container-inline);
  text-align: center;
}

.studio-cta h2 {
  max-width: 760px;
  margin: 0 auto;
}

.studio-cta a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  margin-top: 36px;
  padding: 0 34px;
  color: var(--color-primary-contrast);
  background: var(--color-primary);
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  text-transform: uppercase;
}

@media (max-width: 760px) {
  .studio-intro__text,
  .studio-split,
  .studio-range__grid {
    grid-template-columns: 1fr;
  }

  .studio-split .studio-placeholder {
    order: -1;
  }

  .studio-process__grid,
  .studio-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .studio-range article,
  .studio-range article + article {
    padding: 30px 0;
    border-right: 0;
    border-bottom: var(--line-thin);
  }

  .studio-range article:last-child {
    border-bottom: 0;
  }
  .studio-page {
    padding-top: 112px;
  }

  .studio-hero {
    padding: 56px var(--container-inline) 48px;
  }

  .studio-hero h1 {
    font-size: 44px;
  }

  .studio-process__grid {
    gap: 12px;
  }

  .studio-stats {
    gap: 34px 20px;
    padding-top: 44px;
    padding-bottom: 44px;
  }
}

@media (max-width: 400px) {
  .studio-hero h1 {
    font-size: 37px;
  }

  .studio-stats {
    grid-template-columns: 1fr;
    gap: 26px;
  }
}
</style>
