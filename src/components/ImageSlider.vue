<script setup lang="ts">
import { docReady, setAriaHidden, allyText, remove_pagination_button } from './utils'
import ImageSliderSlideItem from './ImageSliderSlideItem.vue'

docReady(function () {
  let img_container = document.querySelector('.img-slider-container')
  const imgSwiper = img_container.querySelector('swiper-container')
  const imgSwiperParams = {
    a11y: {
      prevSlideMessage: 'Previous slide: none',
      nextSlideMessage: 'Next slide: ' + allyText(1, this),
      firstSlideMessage: 'This is the ' + allyText(0, this) + '.',
      lastSlideMessage: 'This is the ' + allyText(2, this) + '.',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1100: {
        slidesPerView: 1.1,
        slidesOffsetAfter: 120,
      },
      1680: {
        slidesPerView: 1,
      },
    },
    initialSlide: 0,
    injectStyles: [
      `
      .swiper {
        position: static
      }
      @media (min-width: 1200px) {
        .swiper {
          position: relative
        }
      }
      `,
    ],
    on: {
      afterInit: function () {
        let activeIndex = parseInt(this.activeIndex)
        setAriaHidden(activeIndex, this)
        this.slides[0].ariaLabel = allyText(0, this)
        this.slides[1].ariaLabel = allyText(1, this)
        this.slides[2].ariaLabel = allyText(2, this)
        this.pagination.bullets[0].ariaLabel = 'jump to the ' + allyText(0, this)
        this.pagination.bullets[1].ariaLabel = 'jump to the ' + allyText(1, this)
        this.pagination.bullets[3]
          ? (this.pagination.bullets[3].ariaLabel = 'jump to the ' + allyText(2, this))
          : (this.pagination.bullets[2].ariaLabel = 'jump to the ' + allyText(2, this))
      },
      slideChange: function () {
        let activeIndex = parseInt(this.activeIndex)
        setAriaHidden(activeIndex, this)
        this.pagination.bullets[0].ariaLabel = 'jump to the ' + allyText(0, this)
        this.pagination.bullets[1].ariaLabel = 'jump to the ' + allyText(1, this)
        this.pagination.bullets[2].ariaLabel = 'jump to the ' + allyText(2, this)
        if (activeIndex == 2) {
          document
            .querySelector('.img-slider')
            .shadowRoot.children[0].children[3].children[2].classList.add(
              'swiper-pagination-bullet-active',
            )
        }
      },
      slideChangeTransitionEnd: function () {
        let activeIndex = parseInt(this.activeIndex)
        setAriaHidden(activeIndex, this)
      },
      resize: function () {
        console.log('this.pagination.bullets.removeChild[0]')
        console.log(
          document.querySelector('.img-slider').shadowRoot.children[0].children[3].children,
        )
        document.querySelector('.img-slider').shadowRoot.children[0].children[3].children.length ==
        4
          ? document
              .querySelector('.img-slider')
              .shadowRoot.children[0].children[3].removeChild(
                document.querySelector('.img-slider').shadowRoot.children[0].children[3]
                  .children[2],
              )
          : null
        // this.pagination.bullets[3] ? this.pagination.bullets[3] : false
      },
    },
    pagination: {
      clickable: true,
    },
    spaceBetween: 30,
  }

  Object.assign(imgSwiper, imgSwiperParams)

  console.log('imgSwiper')
  console.log(imgSwiper)

  imgSwiper.initialize()
})
</script>

<template>
  <swiper-container init="false" class="img-slider" controller-control=".text-slider">
    <ImageSliderSlideItem :data-hash="'Robert'">
      <template #img>
        <img src="@/assets/media/imgs/Thumbnail_1.jpg" alt="Image of the Robert Family" />
      </template>
    </ImageSliderSlideItem>
    <ImageSliderSlideItem :data-hash="'Mason'">
      <template #img>
        <img src="@/assets/media/imgs/Thumbnail_2.jpg" alt="Image of the Mason Family" />
      </template>
    </ImageSliderSlideItem>
    <ImageSliderSlideItem :data-hash="'Smith'">
      <template #img>
        <img src="@/assets/media/imgs/Thumbnail_3.jpg" alt="Image of the Smith Family" />
      </template>
    </ImageSliderSlideItem>
  </swiper-container>
</template>

<style>
.img-slider {
  position: static;
}
.img-slider .img-slide-wrapper {
  height: fit-content;
  max-width: 70rem;
  overflow-x: hidden;
  padding: 3rem 2rem 4rem;
}

.img-slider .img-slide-wrapper .content-media {
  flex: 1 1 auto;
  text-align: center;
}

.img-slider .img-slide-wrapper .content-media > img {
  border-radius: 5px;
  height: 100%;
  width: calc(100% - 10vw);
}

swiper-container::part(pagination) {
  top: 4rem;
  transform: none;
  text-align: left;
  left: calc(5vw + 2.25rem);
  height: 2rem;
}

swiper-container::part(bullet),
swiper-container::part(bullet-active) {
  background: #fff;
  height: 1.15rem;
  margin-bottom: 0.75rem;
  margin-right: 0.5rem;
  pointer-events: all !important;
  width: 1.15rem;
}

@media (min-width: 1200px) {
  .img-slider {
    position: relative;
  }

  .img-slider .img-slide-wrapper {
    padding: 1rem 0 4rem;
  }

  .img-slider .img-slide-wrapper .content-media > img {
    min-width: 40rem;
    width: 100%;
  }

  swiper-container::part(pagination) {
    top: inherit;
    left: -0.25rem;
  }

  swiper-container::part(bullet),
  swiper-container::part(bullet-active) {
    width: 1rem;
    height: 1rem;
  }

  swiper-container::part(bullet-active) {
    opacity: 1;
  }
}
</style>
