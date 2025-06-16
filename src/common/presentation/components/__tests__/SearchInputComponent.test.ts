import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchInputComponent from '../SearchInputComponent.vue'

describe('SearchInputComponent', () => {
  it('should render the search input with default empty value', () => {
    const wrapper = mount(SearchInputComponent)
    const input = wrapper.find('input')

    expect(input.exists()).toBe(true)
    expect(input.element.value).toBe('')
  })

  it('should update model value when typing', async () => {
    const wrapper = mount(SearchInputComponent)
    const input = wrapper.find('input')
    const searchText = 'pikachu'

    await input.setValue(searchText)
    expect(input.element.value).toBe(searchText)
  })

  it('should emit search event when clicking search icon', async () => {
    const wrapper = mount(SearchInputComponent)
    const searchText = 'charmander'
    await wrapper.find('input').setValue(searchText)

    await wrapper.find('.search-icon').trigger('click')
    expect(wrapper.emitted('search')).toBeTruthy()
    expect(wrapper.emitted('search')?.[0]).toEqual([searchText])
  })

  it('should emit search event when pressing enter', async () => {
    const wrapper = mount(SearchInputComponent)
    const searchText = 'bulbasaur'
    await wrapper.find('input').setValue(searchText)

    await wrapper.find('input').trigger('keydown', { key: 'Enter' })

    expect(wrapper.emitted('search')).toBeTruthy()
    expect(wrapper.emitted('search')?.[0]).toEqual([searchText])
  })

  it('should not emit search event when pressing other keys', async () => {
    const wrapper = mount(SearchInputComponent)
    const searchText = 'mew'
    await wrapper.find('input').setValue(searchText)

    await wrapper.find('input').trigger('keydown', { key: 'Space' })

    expect(wrapper.emitted('search')).toBeFalsy()
  })

  it('should initialize with provided modelValue', () => {
    const initialValue = 'squirtle'

    const wrapper = mount(SearchInputComponent, {
      props: {
        'modelValue': initialValue
      }
    })

    const input = wrapper.find('input')
    expect(input.element.value).toBe(initialValue)
  })

  it('should have correct placeholder text', () => {
    const wrapper = mount(SearchInputComponent)

    const input = wrapper.find('input')

    expect(input.attributes('placeholder')).toBe('Search')
  })

  it('should render search icon', () => {
    const wrapper = mount(SearchInputComponent)

    const searchIcon = wrapper.find('.search-icon')
    expect(searchIcon.exists()).toBe(true)
  })
})
