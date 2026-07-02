<template>
  <footer class="site-footer container">
    <p>© Nora Hale Atelier<br>Все права защищены</p>
    <nav aria-label="Навигация в подвале">
      <a href="#">Доставка и возврат</a>
      <a href="#">Условия</a>
      <a href="#">Политика конфиденциальности</a>
    </nav>
    <nav aria-label="Социальные сети">
      <a href="#">Авито</a>
      <a href="#">Telegram</a>
      <a href="#">VK</a>
    </nav>
  </footer>
</template>

<style scoped>
.site-footer {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 24px;
  align-items: end;
  padding-top: 34px;
  padding-bottom: 34px;
  font-size: 11px;
  font-weight: var(--font-weight-bold);
  line-height: 1.6;
  text-transform: uppercase;
}

.site-footer nav {
  display: flex;
  gap: clamp(24px, 4vw, 54px);
  align-items: center;
}

.site-footer nav:last-child {
  justify-content: flex-end;
}

@media (max-width: 900px) {
  .site-footer {
    grid-template-columns: 1fr;
  }

  .site-footer nav,
  .site-footer nav:last-child {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
</style>
