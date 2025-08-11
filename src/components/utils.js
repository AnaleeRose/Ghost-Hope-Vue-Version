export function docReady(fn) {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(fn, 1)
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}
//swiper has some bug that causes it to add an extra button, this removes the button that is not in use
export function remove_pagination_button(swiper) {
  // imgSwiper.shadowRoot.children[0].children[3].removeChild(
  // textSwiper.shadowRoot.children[0].children[3].children[0],
  // )
  // textSwiper.shadowRoot.children[0].children[4].removeChild(
  //   textSwiper.shadowRoot.children[0].children[4].children[0],
  // )
  // let last_pagination_button = document.querySelector(".img-slider .swiper-pagination-bullet:nth-of-type(4)");
  // (last_pagination_button) ? last_pagination_button.parentElement.removeChild(last_pagination_button.previousSibling) : false;
}

// hides invisible content from screen readers
export function setAriaHidden(index, swiper) {
  index = index && index >= 3 ? 0 : index && index <= -1 ? 2 : index
  let currentSlide = swiper.slides[index]
  currentSlide.setAttribute('aria-hidden', false)
  let counter = 2
  do {
    if (counter != index) {
      swiper.slides[counter].setAttribute('aria-hidden', true)
    }
    counter--
  } while (counter != -1)
}

// defines aria-label text
export function allyText(force_index = -2, swiper) {
  let index =
    force_index >= -1
      ? force_index
      : swiper && Object.prototype.hasOwnProperty.call(swiper, 'activeIndex')
        ? swiper.activeIndex
        : 0

  let ally_text
  switch (index) {
    case 0:
      ally_text = 'Robert Family Slide'
      break
    case 1:
      ally_text = 'Mason Family Slide'
      break
    case 2:
      ally_text = 'Smith Family Slide'
      break

    case -1:
    case 3:
      ally_text = 'None'
      break
    default:
      break
  }
  return ally_text
}
