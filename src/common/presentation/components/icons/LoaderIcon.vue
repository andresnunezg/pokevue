<script lang="ts" setup>
interface Props {
  width?: string
  height?: string
}
withDefaults(defineProps<Props>(), {
  width: '106',
  height: '106',
})
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 106 106"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="53" cy="53" r="51" fill="white" stroke="#333333" stroke-width="4" />
    <mask
      id="mask0_12_49"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="106"
      height="53"
    >
      <rect width="106" height="53" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0_12_49)">
      <circle cx="53" cy="53" r="51" fill="#F22539" stroke="#333333" stroke-width="4" />
    </g>
    <path d="M0.392578 53H105.607" stroke="#333333" stroke-width="4" />
    <circle cx="53" cy="52.9998" r="20.8074" fill="white" />
    <circle cx="53" cy="52.9998" r="18.8074" stroke="#333333" stroke-width="4" />
    <path
      d="M91.731 36.7077C86.9398 25.3318 77.283 16.5081 65.3667 12.8428"
      stroke="white"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="53" cy="53.0004" r="10.3852" stroke="#808080" stroke-width="2" />
  </svg>
</template>
