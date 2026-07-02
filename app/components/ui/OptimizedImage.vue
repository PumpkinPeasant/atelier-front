<template>
  <figure class="optimized-image" :class="[`optimized-image--${tone}`, { 'optimized-image--empty': !src }]">
    <NuxtImg
      v-if="src"
      class="optimized-image__asset"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :sizes="sizes"
      :loading="loading"
      :preload="preload"
      :style="{ objectPosition }"
      densities="x1 x2"
      fit="cover"
    />
  </figure>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  src?: string
  alt?: string
  width: number
  height: number
  sizes: string
  loading?: 'lazy' | 'eager'
  preload?: boolean
  objectPosition?: string
  tone?: 'soft' | 'warm' | 'dark' | 'hero'
}>(), {
  src: '',
  alt: '',
  loading: 'lazy',
  preload: false,
  objectPosition: 'center',
  tone: 'soft'
})
</script>

<style scoped>
.optimized-image {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
  background: var(--color-cream-100);
}

.optimized-image__asset {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.optimized-image--empty::before {
  position: absolute;
  inset: 0;
  content: '';
}

.optimized-image--soft::before {
  background:
    linear-gradient(145deg, rgba(245, 242, 237, 0.72), rgba(171, 162, 152, 0.28)),
    var(--color-cream-100);
}

.optimized-image--warm::before {
  background:
    linear-gradient(140deg, rgba(245, 242, 237, 0.58), rgba(91, 73, 53, 0.42)),
    var(--color-stone-300);
}

.optimized-image--dark::before {
  background:
    linear-gradient(140deg, rgba(245, 242, 237, 0.36), rgba(29, 27, 23, 0.72)),
    var(--color-taupe-500);
}

.optimized-image--hero::before {
  background:
    linear-gradient(105deg, rgba(245, 242, 237, 0.72) 0%, rgba(245, 242, 237, 0.22) 46%, rgba(213, 203, 196, 0.34) 100%),
    linear-gradient(155deg, var(--color-cream-50) 0%, var(--color-stone-100) 48%, var(--color-taupe-500) 100%);
}
</style>
