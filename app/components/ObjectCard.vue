<template>
  <button
    class="flex flex-col items-center justify-center aspect-square rounded-2xl shadow-md transition-transform active:scale-90 text-white"
    :class="[color, { 'object-flash': flashing }]"
    @click="handleClick"
  >
    <span class="text-5xl mb-1 drop-shadow-sm">{{ object.emoji }}</span>
    <span class="text-sm sm:text-base font-semibold leading-tight text-center px-1 drop-shadow-sm">{{ object.name }}</span>
  </button>
</template>

<script setup lang="ts">
import type { ObjectData } from '~/data/objects'

const props = defineProps<{
  object: ObjectData
  color: string
}>()

const { play } = useAudioEngine()
const flashing = ref(false)

function handleClick() {
  play(undefined, props.object.name)
  flashing.value = true
  setTimeout(() => { flashing.value = false }, 350)
}
</script>

<style scoped>
.object-flash {
  animation: flash-card 0.35s ease;
}
@keyframes flash-card {
  0% { transform: scale(1); }
  40% { transform: scale(1.12); }
  100% { transform: scale(1); }
}
</style>
