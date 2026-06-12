<template>
  <div
    v-if="completed"
    class="absolute -top-2 -right-2 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-400 shadow-lg ring-2 ring-white"
  >
    <span class="text-lg sm:text-xl">⭐</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  completed: boolean
}>()
</script>
