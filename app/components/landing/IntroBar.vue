<template>
  <section class="intro container" aria-label="Кратко о студии">
    <p>Небольшая студия одежды с фокусом на качество, посадку и долговечность.</p>
    <p class="intro__center">Основана<br>2021</p>
    <p class="intro__right">Разработано в нашей студии.<br>Выпускается малыми партиями.</p>
  </section>
</template>

<style scoped>
.intro {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 32px;
  align-items: start;
  padding-top: 40px;
  padding-bottom: 32px;
  border-bottom: var(--line-thin);
  font-size: 13px;
  line-height: 1.45;
}

.intro__center {
  text-align: center;
}

.intro__right {
  text-align: right;
}

@media (max-width: 760px) {
  .intro {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 36px 24px;
  }

  .intro__center,
  .intro__right {
    text-align: left;
  }

  .intro__center {
    display: none;
  }
}
</style>
