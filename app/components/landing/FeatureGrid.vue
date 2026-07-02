<template>
  <section class="features container" aria-label="Принципы бренда">
    <article v-for="feature in features" :key="feature.title" class="feature">
      <p class="feature__eyebrow">{{ feature.kicker }}</p>
      <h2>{{ feature.title }}</h2>
      <p class="feature__copy">{{ feature.copy }}</p>
      <a href="#">
        {{ feature.link }}
        <Icon name="lucide:arrow-right" aria-hidden="true" />
      </a>
    </article>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    kicker: 'Посадка и качество',
    title: 'У каждой детали есть задача.',
    copy: 'Мы дорабатываем каждую модель, пока посадка не станет точной, а вещь надежной.',
    link: 'Подробнее'
  },
  {
    kicker: 'Материалы',
    title: 'Натуральные материалы с внимательным отбором.',
    copy: 'Мы выбираем ткани, которые приятны к телу, хорошо носятся и красиво стареют.',
    link: 'О материалах'
  },
  {
    kicker: 'Заметки студии',
    title: 'Мысли с рабочего стола.',
    copy: 'Заметки о дизайне, тканях, посадке и процессе создания наших вещей.',
    link: 'В журнал'
  }
]
</script>

<style scoped>
.features {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding-top: 0;
  padding-bottom: 0;
  border-bottom: var(--line-thin);
}

.feature {
  display: grid;
  align-content: start;
  min-height: 270px;
  padding: 50px clamp(28px, 4vw, 54px) 42px 0;
  border-right: var(--line-thin);
}

.feature + .feature {
  padding-left: clamp(28px, 4vw, 54px);
}

.feature:last-child {
  border-right: 0;
}

.feature__eyebrow {
  margin-bottom: 26px;
  font-size: 11px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  text-transform: uppercase;
}

.feature h2 {
  max-width: 250px;
  font-size: clamp(28px, 2.45vw, 36px);
  line-height: 1.06;
}

.feature__copy {
  max-width: 240px;
  margin-top: 18px;
  font-size: 13px;
  line-height: 1.45;
}

.feature a {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  margin-top: 34px;
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  text-transform: uppercase;
}

@media (max-width: 800px) {
  .features {
    grid-template-columns: 1fr;
  }

  .feature,
  .feature + .feature {
    min-height: 0;
    padding: 36px 0;
    border-right: 0;
    border-bottom: var(--line-thin);
  }

  .feature:last-child {
    border-bottom: 0;
  }
}
</style>
