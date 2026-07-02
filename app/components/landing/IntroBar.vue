<template>
  <section class="intro container" aria-label="Studio summary">
    <p>A small clothing studio focused on quality, fit and longevity.</p>
    <p class="intro__center">EST<br>2021</p>
    <p class="intro__right">Designed in our studio.<br>Made in limited quantities.</p>
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

@media (max-width: 720px) {
  .intro {
    grid-template-columns: 1fr;
  }

  .intro__center,
  .intro__right {
    text-align: left;
  }
}
</style>
