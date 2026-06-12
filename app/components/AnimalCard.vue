<template>
  <button
    class="flex flex-col items-center justify-center aspect-square rounded-2xl shadow-md transition-transform hover:scale-105 active:scale-90 text-white"
    :class="color"
    @click="$emit('select')"
  >
    <span class="text-5xl mb-1">{{ animal.emoji }}</span>
    <span class="text-sm sm:text-base font-semibold leading-tight text-center px-1">{{ animal.name }}</span>
  </button>
</template>

<script setup lang="ts">
import type { AnimalData } from '~/data/animals'

defineProps<{
  animal: AnimalData
  color: string
}>()

defineEmits<{
  select: []
}>()
</script>
