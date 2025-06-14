<script setup lang="ts">
import SearchIcon from './icons/SearchIcon.vue'

const emit = defineEmits<{
  (e: 'search', value: string): void
}>()

const searchQuery = defineModel<string>({
  default: '',
})

const handleSearch = () => {
  emit('search', searchQuery.value)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    handleSearch()
  }
}
</script>

<template>
  <div class="search-container">
    <div class="search-icon" @click="handleSearch">
      <search-icon />
    </div>
    <input
      id="search-input"
      v-model="searchQuery"
      type="text"
      placeholder="Search"
      class="search-input"
      @keydown="handleKeydown"
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
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 10px 0px;
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
  /* TODO CHECK THIS */
}

.search-input {
  width: 100%;
  padding: var(--spacing-md);
  padding-left: 40px;
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
