<script setup lang="ts">
// import { SwiperSlide } from 'swiper/vue'
</script>
<template>
  <swiper-slide>
    <div class="text-slide-wrapper">
      <div class="content-text">
        <h2>
          <slot name="heading"></slot>
        </h2>
        <slot name="content"></slot>
        <a class="hope-slider-cta" href="./">
          More Client Stories
          <span class="arrow">
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.66667 1L2 7.66667L8.66667 14.3333" stroke-width="1.5" />
              <path d="M2 7.66675L18 7.66675" stroke-width="1.5" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </swiper-slide>
</template>
<style>
.text-slide-wrapper {
  padding: 4rem 0 0 2.5rem;
}

.text-slide-wrapper h2 {
  font: 700 2.88rem/0.94 var(--font-family);
  padding: 2.625rem 0 1.4rem 0;
}

.text-slide-wrapper .content-text {
  max-width: 90vw;
  padding: 0 3.75rem 0 5vw;
}

.text-slide-wrapper .hope-slider-cta {
  background-color: var(--yellow);
  border-radius: 2rem;
  color: var(--text-dark);
  font: 500 1rem/1.13 var(--font-family-mono);
  padding: 1rem 3.5rem 1rem 2rem;
  position: relative;
  margin: 1.625rem 0 0;
}

.text-slide-wrapper .hope-slider-cta:hover {
  background-color: var(--deep-blue);
  color: var(--text-light);
}

.text-slide-wrapper .hope-slider-cta:hover .arrow svg {
  stroke: var(--text_light);
}

.text-slide-wrapper .hope-slider-cta .arrow {
  position: absolute;
  right: 2rem;
  top: calc(50% - 0.45rem);
}

.text-slide-wrapper .hope-slider-cta .arrow svg {
  height: 1rem;
  stroke: var(--deep-blue);
  transform: rotate(180deg);
  width: 1rem;
}

@media (min-width: 1200px) {
  .text-slide-wrapper .content-text {
    padding: 0 3.75rem 0 min(5vw, 4rem);
    max-width: 18.625rem;
  }
}
</style>
