<template>
  <div class="flex flex-col items-center gap-6 p-8">
    <span class="text-8xl">{{ animal.emoji }}</span>
    <span class="text-3xl font-bold text-green-700">{{ animal.name }}</span>

    <div class="flex gap-8 mt-2">
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm text-gray-400">Sound</span>
        <AudioButton :text="animal.sound" size="md" />
      </div>
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm text-gray-400">Name</span>
        <AudioButton :text="animal.name" size="md" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AnimalData } from '~/data/animals'

defineProps<{
  animal: AnimalData
}>()
</script>
