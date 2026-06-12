<template>
  <div class="flex flex-col items-center gap-5 p-8">
    <div class="text-8xl font-bold text-blue-600">{{ number.value }}</div>
    <div class="flex items-center gap-3">
      <span class="text-2xl font-semibold text-gray-700">{{ number.word }}</span>
      <AudioButton :text="number.word" size="sm" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NumberData } from '~/data/numbers'

defineProps<{
  number: NumberData
}>()
</script>
