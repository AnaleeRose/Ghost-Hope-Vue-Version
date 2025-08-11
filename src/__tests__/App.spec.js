import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  const hopeSlider = 'section.hope-slider'
  it('mounts renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper).toContain(hopeSlider)
  })
})
