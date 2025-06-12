<script setup lang="ts">
import LoaderIcon from '@/components/icons/LoaderIcon.vue'
</script>

<template>
  <section class="container">
    <div class="loader-icon">
      <loader-icon />
    </div>
  </section>
</template>

<style scoped lang="css">
.container {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100svh;
}
.loader-icon {
  display: block;
  overflow: hidden;
  transform-origin: bottom;
  cursor: pointer;
  animation:
    shake 1s ease-in-out 0.5s 2,
    catch 1s ease 2.5s infinite;
}

@keyframes shake {
  0% {
    transform: translateX(0) rotate(0);
  }
  20% {
    transform: translateX(-10px) rotate(-20deg);
  }
  30% {
    transform: translateX(10px) rotate(20deg);
  }
  50% {
    transform: translateX(-5px) rotate(-10deg);
  }
  60% {
    transform: translateX(5px) rotate(10deg);
  }
  100% {
    transform: translateX(0) rotate(0);
  }
}

@keyframes catch {
  0% {
    filter: saturate(1.5) brightness(1.5);
  }
  100% {
    filter: saturate(0.8) brightness(0.8);
  }
}
</style>
