<template>
  <div class="min-h-screen p-6">
    <NuxtLink to="/" class="inline-flex items-center gap-1 text-blue-500 hover:text-blue-700 mb-6 text-lg">
      ← Kembali
    </NuxtLink>

    <h1 class="text-4xl font-bold text-blue-700 text-center mb-8">Belajar Angka</h1>

    <div class="grid grid-cols-4 sm:grid-cols-5 gap-3 max-w-xl mx-auto">
      <button
        v-for="(item, i) in numbers"
        :key="item.value"
        class="flex items-center justify-center aspect-square rounded-2xl shadow-md transition-transform hover:scale-105 active:scale-90 text-white text-3xl font-bold"
        :class="[cardColors[i % cardColors.length], { 'ring-4 ring-blue-400 scale-105': selected === i }]"
        @click="selected = i"
      >
        {{ item.value }}
      </button>
    </div>

    <Transition name="fade">
      <div
        v-if="selected !== null"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        @click.self="selected = null"
      >
        <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm max-h-[90vh] overflow-y-auto">
          <button
            class="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600 z-10"
            @click="selected = null"
          >
            ✕
          </button>

          <NumberCard :number="numbers[selected]" />

          <div class="flex justify-between px-6 pb-6">
            <button
              v-if="selected > 0"
              class="flex items-center gap-1 text-blue-500 hover:text-blue-700 text-lg font-semibold"
              @click="selected--"
            >
              ← {{ numbers[selected - 1].value }}
            </button>
            <span v-else />

            <button
              v-if="selected < numbers.length - 1"
              class="flex items-center gap-1 text-blue-500 hover:text-blue-700 text-lg font-semibold"
              @click="selected++"
            >
              {{ numbers[selected + 1].value }} →
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <div class="flex justify-center mt-8">
      <button
        class="px-8 py-3 bg-green-400 text-white rounded-2xl text-xl font-semibold shadow-lg transition-transform hover:scale-105 active:scale-90"
        @click="complete"
      >
        Selesai ✅
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { numbers } from '~/data/numbers'

const cardColors = [
  'bg-blue-400', 'bg-sky-400', 'bg-cyan-400', 'bg-teal-400',
  'bg-emerald-400', 'bg-green-400', 'bg-lime-400', 'bg-yellow-400',
  'bg-amber-400', 'bg-orange-400', 'bg-red-400', 'bg-rose-400',
  'bg-fuchsia-400', 'bg-violet-400', 'bg-purple-400', 'bg-indigo-400',
]

const selected = ref<number | null>(null)
const router = useRouter()
const { markModuleComplete } = useProgressTracker()
const { play } = useAudioEngine()

watch(selected, (i) => {
  if (i !== null) {
    play(undefined, numbers[i].word)
  }
})

function complete() {
  markModuleComplete('numbers')
  router.push('/')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
