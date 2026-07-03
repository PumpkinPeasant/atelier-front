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

    <button class="site-header__menu-button" type="button" aria-label="Открыть меню" @click="isMenuOpen = true">
      <Icon name="lucide:menu" aria-hidden="true" />
    </button>

    <Teleport to="body">
      <div v-if="isMenuOpen" class="site-header__mobile-menu">
        <div class="site-header__mobile-head">
          <NuxtLink class="site-header__brand" to="/" aria-label="Nora Hale Atelier, главная" @click="isMenuOpen = false">
            <span>Nora Hale</span>
            <small>atelier</small>
          </NuxtLink>
          <button type="button" aria-label="Закрыть меню" @click="isMenuOpen = false">
            <Icon name="lucide:x" aria-hidden="true" />
          </button>
        </div>

        <nav class="site-header__mobile-nav" aria-label="Мобильная навигация">
          <NuxtLink to="/catalog" @click="isMenuOpen = false">Коллекция</NuxtLink>
          <NuxtLink to="/studio" @click="isMenuOpen = false">О студии</NuxtLink>
          <a href="#" @click="isMenuOpen = false">Доставка и возврат</a>
          <a href="#" @click="isMenuOpen = false">Контакты</a>
        </nav>
      </div>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const route = useRoute()

const updateScrolledState = () => {
  isScrolled.value = window.scrollY > 8
}

watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})

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
  left: 50%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
  max-width: var(--container-max);
  min-height: 86px;
  padding: 18px var(--container-inline);
  color: var(--color-text);
  background: rgba(245, 242, 237, 0);
  backdrop-filter: blur(0);
  border-bottom: 1px solid rgba(213, 203, 196, 0);
  transform: translateX(-50%);
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
  color: #26251f;
  font-size: 11px;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.14em;
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
  font-size: clamp(24px, 2vw, 26px);
  font-weight: var(--font-weight-heading);
  letter-spacing: 0.34em;
  padding-left: 0.34em;
}

.site-header__brand small {
  font-family: var(--font-heading);
  font-size: 15px;
  font-style: italic;
  font-weight: var(--font-weight-heading);
  letter-spacing: 0.28em;
  padding-left: 0.28em;
  text-transform: lowercase;
}

.site-header__menu-button {
  display: none;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  padding: 0;
  color: var(--color-text);
  background: transparent;
  border: 0;
  cursor: pointer;
}

.site-header__mobile-menu {
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding: 24px;
  color: var(--color-text);
  background: var(--color-background);
}

.site-header__mobile-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-header__mobile-head .site-header__brand {
  justify-items: start;
}

.site-header__mobile-head .site-header__brand span {
  font-size: 22px;
}

.site-header__mobile-head button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  padding: 0;
  color: var(--color-text);
  background: transparent;
  border: 0;
  cursor: pointer;
}

.site-header__mobile-nav {
  display: grid;
  gap: 8px;
  margin-top: 52px;
}

.site-header__mobile-nav a {
  font-family: var(--font-heading);
  font-size: 42px;
  line-height: 1.05;
}

@media (max-width: 760px) {
  .site-header {
    grid-template-columns: 1fr auto 1fr;
    justify-items: center;
    min-height: 72px;
    padding: 16px 22px;
  }

  .site-header__brand {
    grid-column: 2;
  }

  .site-header__nav {
    display: none;
  }

  .site-header__menu-button {
    display: inline-flex;
    grid-column: 3;
    justify-self: end;
  }
}
</style>
