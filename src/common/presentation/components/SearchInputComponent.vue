<script setup lang="ts">
import { ref, watch } from 'vue'
import SearchIcon from './icons/SearchIcon.vue'

const emit = defineEmits(['search'])

const searchQuery = ref('')
let debounceTimer: number

watch(searchQuery, (newValue) => {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }

  debounceTimer = setTimeout(() => {
    emit('search', newValue)
  }, 500)
})

const handleIconClick = () => {
  emit('search', searchQuery.value)
}
</script>

<template>
  <div class="search-container">
    <div class="search-icon" @click="handleIconClick">
      <search-icon />
    </div>
    <input
      id="search-input"
      v-model="searchQuery"
      type="text"
      placeholder="Search"
      class="search-input"
    />
  </div>
</template>

<style scoped>
.search-container {
  position: relative;
  width: 100%;
  min-width: 100%;
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-gray-3);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s ease;
}

.search-icon:hover {
  color: #3b82f6;
}

.search-input {
  width: 100%;
  padding: 10px 16px 10px 40px;
  border: 1px solid transparent;
  border-radius: var(--border-radius-md);
  background-color: var(--color-bg-tertiary);
  font-size: var(--text-md);
  line-height: 1.5;
  outline: none;
  color: var(--color-text-primary);
}

.search-input::placeholder {
  color: var(--color-gray-3);
  font-weight: 500;
}
</style>
