<template>
  <header class="site-header">
    <nav class="site-header__nav site-header__nav--left" aria-label="Основная навигация">
      <NuxtLink to="/catalog">Магазин</NuxtLink>
      <a href="#">Студия</a>
      <a href="#">Журнал</a>
    </nav>

    <NuxtLink class="site-header__brand" to="/" aria-label="Nora Hale Atelier, главная">
      <span>Nora Hale</span>
      <small>atelier</small>
    </NuxtLink>

    <nav class="site-header__nav site-header__nav--right" aria-label="Навигация аккаунта">
      <a href="#">О нас</a>
      <a href="#">Аккаунт</a>
      <a href="#">Корзина (0)</a>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: start;
  width: 100%;
  padding: 48px var(--container-inline) 0;
  color: var(--color-text);
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
    gap: 22px;
    padding-top: 24px;
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
