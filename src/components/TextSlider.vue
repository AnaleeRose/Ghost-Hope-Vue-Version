<script setup lang="ts">
import { docReady, setAriaHidden, allyText } from './utils'
import TextSliderSlideItem from './TextSliderSlideItem.vue'

docReady(function () {
  const textSwiper = document.querySelector('swiper-container')
  const textSwiperParams = {
    a11y: {
      prevSlideMessage: 'Previous slide: none',
      nextSlideMessage: 'Next slide: ' + allyText(1, this),
      firstSlideMessage: 'This is the ' + allyText(0, this) + '.',
      lastSlideMessage: 'This is the ' + allyText(2, this) + '.',
    },
    autoplay: {
      delay: 12000,
    },
    centeredSlides: true,
    initialSlide: 0,
    injectStyles: [
      `
      .swiper-button-prev svg,
      .swiper-button-next svg {
        display: none
      }
      `,
    ],
    navigation: true,
    slidesPerView: 1,
    on: {
      afterInit: function () {
        let activeIndex = parseInt(this.activeIndex)
        setAriaHidden(activeIndex, this)
        this.slides[0].ariaLabel = allyText(0, this)
        this.slides[1].ariaLabel = allyText(1, this)
        this.slides[2].ariaLabel = allyText(2, this)
      },
      slideChange: function () {
        let activeIndex = parseInt(this.activeIndex)
        setAriaHidden(activeIndex, this)
      },
      slideChangeTransitionEnd: function () {
        let activeIndex = parseInt(this.activeIndex)
        setAriaHidden(activeIndex, this)
        this.navigation.prevEl.ariaLabel = 'Previous slide: ' + allyText(activeIndex - 1, this)

        this.navigation.nextEl.ariaLabel = 'Next slide: ' + allyText(activeIndex + 1, this)
      },
    },
  }

  Object.assign(textSwiper, textSwiperParams)
  textSwiper.initialize()
})
</script>

<template>
  <swiper-container init="false" class="text-slider" controller-control=".img-slider">
    <TextSliderSlideItem>
      <template #heading>The Robert Family's Story</template>
      <template #content>
        <p>
          The circumstances that might lead to homelessness can include loss of income or
          transportation, a falling out with loved ones, or an abrupt economic downturn. For Brandon
          and Jennifer, it was all of these things.
        </p>
      </template>
    </TextSliderSlideItem>
    <TextSliderSlideItem>
      <template #heading>The Mason Family's Story</template>
      <template #content>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </p>
      </template>
    </TextSliderSlideItem>
    <TextSliderSlideItem>
      <template #heading>The Smith Family's Story</template>
      <template #content>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet consectetur.
        </p>
      </template>
    </TextSliderSlideItem>
  </swiper-container>
</template>

<style>
.text-slider {
  flex: 0 0.08 auto;
}

swiper-container::part(button-prev),
swiper-container::part(button-next) {
  border-radius: 50%;
  background: var(--deep-blue);
  box-sizing: border-box;
  color: #fff;
  color: var(--deep-blue);
  display: none;
  height: 2rem;
  left: calc(3.5rem + 4vw);
  right: unset;
  top: 6.25rem;
  transform: translateX(-50%);
  width: 2rem;
}

swiper-container::part(button-prev) svg,
swiper-container::part(button-next) > svg {
  display: none;
}

swiper-container::part(button-next)::after,
swiper-container::part(button-prev)::after {
  content: '';
  background: url('@/assets/media/icons/arrow.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1rem;
  height: 2rem;
  width: 2rem;
}

swiper-container::part(button-next):hover,
swiper-container::part(button-prev):hover {
  background: var(--yellow);
}

swiper-container::part(button-next) {
  left: calc(6.5rem + 4vw);
}

swiper-container::part(button-next):after {
  transform: rotate(180deg);
}
@media (min-width: 1200px) {
  .text-slider {
    margin-bottom: 8vh;
    width: 33%;
  }

  swiper-container::part(button-prev),
  swiper-container::part(button-next) {
    display: flex;
    left: calc(min(2vw, 5%) + 6rem);
    top: 4.25rem;
  }

  swiper-container::part(button-next) {
    left: calc(min(2vw, 5%) + 9.5rem);
  }
}
</style>
