<template>
  <div class="w-full">
    <p class="text-center text-sm text-gray-400 mb-3">Tap to count</p>
    <div class="flex flex-wrap justify-center gap-2">
      <button
        v-for="i in count"
        :key="i"
        class="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full font-bold text-lg transition-all duration-200 cursor-pointer select-none"
        :class="tapped.has(i)
          ? 'tapped-dot bg-yellow-400 text-white shadow-md'
          : 'border-2 border-gray-300 bg-white text-gray-300 hover:border-gray-400'"
        @click="toggle(i)"
      >
        {{ i }}
      </button>
    </div>
    <p class="text-center text-sm text-gray-400 mt-3">{{ tapped.size }} of {{ count }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  count: number
}>()

const tapped = ref(new Set<number>())

function toggle(i: number) {
  const set = new Set(tapped.value)
  if (set.has(i)) set.delete(i)
  else set.add(i)
  tapped.value = set
}
</script>

<style scoped>
.tapped-dot {
  animation: bounce-in 0.3s ease;
}
@keyframes bounce-in {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
</style>
