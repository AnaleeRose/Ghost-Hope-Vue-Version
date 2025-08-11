<script setup>
import { RouterView } from 'vue-router'
import 'swiper/css/bundle'
</script>

<template>
  <RouterView />
</template>

<style>
:root {
  --main-bg-color: #fff6de;
  --deep-orange: #f15c22;
  --light-orange: #f7931d;
  --yellow: #ffc840;
  --deep-blue: #262861;
  --text-light: #fff;
  --text-dark: var(--deep-blue);

  --font-family: 'Roboto', sans-serif;
  --font-family-mono: 'Roboto Mono', monospace;
}

@font-face {
  font-family: 'Roboto';
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src:
    local('Roboto'),
    url('/fonts/Roboto/Roboto-Regular.woff2') format('woff2'),
    url('/fonts/Roboto/Roboto-Regular.woff') format('woff');
}

body {
  background-color: var(--main-bg-color);
  position: relative;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a {
  color: var(--text-light);
  font: 1rem/1.4 var(--font-family);
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'wdth' 100;
  padding: 0 0 1rem;
  display: inline-block;
}

h1 {
  font: 700 2.88rem/0.94 var(--font-family);
  padding: 2.625rem 0 1.4rem 0;
}
</style>

<style scoped></style>
