<script setup lang="ts">
// import WelcomeItem from './WelcomeItem.vue'
import TextSlider from './TextSlider.vue'
import ImageSlider from './ImageSlider.vue'
import { register } from 'swiper/element/bundle'
register()
</script>

<template>
  <setion class="hope-slider">
    <TextSlider />
    <div class="img-slider-container">
      <ImageSlider />
    </div>
  </setion>
</template>

<style>
.hope-slider {
  box-sizing: border-box;
  margin: 0 auto;
  min-height: 100vh;
}

.hope-slider,
.img-slider-container {
  max-width: 105rem;
  height: fit-content;
}

.hope-slider:before {
  background-color: #f15c22;
  background: linear-gradient(
    90deg,
    rgba(241, 92, 34, 1) 0%,
    rgba(247, 147, 29, 1) 50%,
    rgba(255, 200, 64, 1) 100%
  );
  content: '';
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.text-slide-wrapper,
.img-slide-wrapper {
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 1200px) {
  .hope-slider {
    align-items: center;
    display: flex;
    max-height: 55.5rem;
    min-height: unset;
    padding: max(10vh, 12rem) 0;
  }
  .hope-slider :before {
    height: min(100vh, 55.5rem);
  }

  .text-slider .swiper-button-next,
  .text-slider .swiper-button-prev {
    display: flex;
    left: calc(min(2vw, 5%) + 6rem);
    top: 4.25rem;
  }
  .text-slider .swiper-button-next {
    left: calc(min(2vw, 5%) + 9.5rem);
  }
}
</style>
