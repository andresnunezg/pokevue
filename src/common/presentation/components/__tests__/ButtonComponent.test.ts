import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonComponent from '../ButtonComponent.vue'
import ButtonVariant from '../ButtonVariant'

describe('ButtonComponent', () => {
  it('should render with default props', () => {
    const wrapper = mount(ButtonComponent)
    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.classes()).toContain('btn--primary')
    expect(button.attributes('disabled')).toBeUndefined()
  })

  it('should display the provided label', () => {
    const label = 'Click me'
    const wrapper = mount(ButtonComponent, {
      props: { label }
    })

    const buttonText = wrapper.find('.text-semibold')
    expect(buttonText.text()).toBe(label)
  })

  it('should apply the correct variant class', () => {
    const wrapper = mount(ButtonComponent, {
      props: { variant: ButtonVariant.Secondary }
    })

    const button = wrapper.find('button')
    expect(button.classes()).toContain('btn--secondary')
  })

  it('should be disabled when isDisabled prop is true', () => {
    const wrapper = mount(ButtonComponent, {
      props: { isDisabled: true }
    })

    const button = wrapper.find('button')

    expect(button.attributes('disabled')).toBeDefined()
    expect(button.classes()).toContain('btn--disabled')
  })

  it('should emit click event when clicked', async () => {
    const wrapper = mount(ButtonComponent)

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')?.[0]).toBeDefined()
  })

  it('should render trailing icon slot content', () => {
    const wrapper = mount(ButtonComponent, {
      slots: {
        'trailing-icon': '<span class="test-icon">🔍</span>'
      }
    })

    const icon = wrapper.find('.test-icon')

    expect(icon.exists()).toBe(true)
    expect(icon.text()).toBe('🔍')
  })

  it('should not emit click event when disabled', async () => {
    const wrapper = mount(ButtonComponent, {
      props: { isDisabled: true }
    })

    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })
})
