<template>
  <header class="site-header" :class="{ 'site-header--scrolled': isScrolled }">
    <nav class="site-header__nav site-header__nav--left" aria-label="Основная навигация">
      <NuxtLink to="/catalog">Коллекция</NuxtLink>
      <NuxtLink to="/studio">О студии</NuxtLink>
    </nav>

    <NuxtLink class="site-header__brand" to="/" aria-label="Nora Hale Atelier, главная">
      <span>Nora Hale</span>
      <small>atelier</small>
    </NuxtLink>

    <nav class="site-header__nav site-header__nav--right" aria-label="Навигация аккаунта">
      <a href="#">Доставка и возврат</a>
      <a href="#">Контакты</a>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)

const updateScrolledState = () => {
  isScrolled.value = window.scrollY > 8
}

onMounted(() => {
  updateScrolledState()
  window.addEventListener('scroll', updateScrolledState, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrolledState)
})
</script>

<style scoped>
.site-header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
  min-height: 86px;
  padding: 18px var(--container-inline);
  color: var(--color-text);
  background: rgba(245, 242, 237, 0);
  backdrop-filter: blur(0);
  border-bottom: 1px solid rgba(213, 203, 196, 0);
  transition:
    background 220ms ease,
    backdrop-filter 220ms ease,
    border-color 220ms ease;
}

.site-header--scrolled {
  background: rgba(245, 242, 237, 0.72);
  backdrop-filter: blur(18px);
  border-bottom-color: rgba(213, 203, 196, 0.45);
}

.site-header__nav {
  display: flex;
  gap: clamp(24px, 3.8vw, 48px);
  align-items: center;
  font-size: 11px;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  text-transform: uppercase;
}

.site-header__nav--right {
  justify-content: flex-end;
}

.site-header__brand {
  display: grid;
  justify-items: center;
  gap: 4px;
  line-height: 1;
  text-transform: uppercase;
}

.site-header__brand span {
  font-family: var(--font-heading);
  font-size: clamp(24px, 2.35vw, 32px);
  font-weight: var(--font-weight-heading);
  letter-spacing: 0.16em;
}

.site-header__brand small {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: var(--font-weight-heading);
  letter-spacing: 0.18em;
  text-transform: lowercase;
}

@media (max-width: 760px) {
  .site-header {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 16px;
    min-height: 112px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .site-header__brand {
    grid-row: 1;
  }

  .site-header__nav {
    width: 100%;
    justify-content: center;
    gap: 18px;
    font-size: 10px;
  }

  .site-header__nav--left {
    grid-row: 2;
  }

  .site-header__nav--right {
    display: none;
  }
}
</style>
