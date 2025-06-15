<script setup lang="ts">
import ButtonComponent from '@/common/presentation/components/ButtonComponent.vue'
import ButtonVariant from '@/common/presentation/components/ButtonVariant'
import MenuIcon from '@/common/presentation/components/icons/MenuIcon.vue'
import StarIcon from '@/common/presentation/components/icons/StarIcon.vue'
</script>

<template>
  <nav class="footer-nav">
    <button-component label="All">
      <template #trailing-icon>
        <menu-icon />
      </template>
    </button-component>
    <button-component :variant="ButtonVariant.Secondary" label="Favorites">
      <template #trailing-icon>
        <star-icon />
      </template>
    </button-component>
  </nav>
</template>

<style lang="css" scoped>
.footer-nav {
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}
</style>
