<template>
  <div class="flex flex-col items-center gap-6 p-8">
    <div class="flex items-baseline gap-4">
      <span class="text-8xl font-bold text-purple-700">{{ letter.uppercase }}</span>
      <span class="text-6xl font-semibold text-purple-400">{{ letter.lowercase }}</span>
    </div>

    <div class="flex flex-col items-center gap-3">
      <span class="text-7xl">{{ letter.emoji }}</span>
      <div class="flex items-center gap-3">
        <span class="text-3xl font-semibold text-gray-700">{{ letter.word }}</span>
        <AudioButton :text="letter.word" size="sm" />
      </div>
    </div>

    <AudioButton
      :text="letter.uppercase"
      size="lg"
      class="mt-2"
    />
    <span class="text-sm text-gray-400 -mt-2">Ketuk untuk mendengar</span>
  </div>
</template>

<script setup lang="ts">
import type { LetterData } from '~/data/alphabet'

defineProps<{
  letter: LetterData
}>()
</script>
