<template>
  <footer class="site-footer container">
    <p>© Nora Hale Atelier<br>All rights reserved</p>
    <nav aria-label="Footer navigation">
      <a href="#">Shipping & returns</a>
      <a href="#">Terms & conditions</a>
      <a href="#">Privacy policy</a>
    </nav>
    <nav aria-label="Social links">
      <a href="#">Instagram</a>
      <a href="#">Pinterest</a>
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
