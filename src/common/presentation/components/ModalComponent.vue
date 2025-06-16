<script setup lang="ts">
defineProps<{
  showCloseBtn: boolean
}>()
const modalShowValue = defineModel()

function close() {
  modalShowValue.value = false
}
</script>

<template>
  <Teleport to="body">
    <div v-if="modalShowValue" class="modal-backdrop" @click.self="close">
      <div class="modal-content">
        <button v-show="showCloseBtn" class="close-btn" @click="close">
          &times;
        </button>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

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
  background: white;
  padding: 0;
  border-radius: 50px;
  height: 30px;
  width: 30px;
  border: none;
  font-size: 1.75rem;
  cursor: pointer;
  z-index: 999;
  display: grid;
  place-content: center;
  color: #79C9F9;
  font-weight: 800;
}
</style>
