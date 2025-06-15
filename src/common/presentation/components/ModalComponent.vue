<template>
  <Teleport to="body">
    <div v-if="modalShowValue" class="modal-backdrop" @click.self="close">
      <div class="modal-content">
        <button class="close-btn" @click="close">&times;</button>
        <!-- TODO: CREATE AND REPLACE THIS BUTTON -->
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const modalShowValue = defineModel()

function close() {
  modalShowValue.value = false
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 2rem;
}

.modal-content {
  background: white;
  border-radius: var(--border-radius-md);
  position: relative;
  width: 100%;
  max-width: var(--width-md);
}

.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 999;
}
</style>
