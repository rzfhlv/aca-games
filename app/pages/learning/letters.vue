<template>
  <div class="min-h-screen p-4 sm:p-6">
    <NuxtLink to="/" class="inline-flex items-center gap-1 py-2 text-purple-500 hover:text-purple-700 mb-6 text-lg">
      ← Back
    </NuxtLink>

    <h1 class="text-4xl font-bold text-purple-700 text-center mb-8">Learn Letters</h1>

    <div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3 max-w-3xl mx-auto">
      <button
        v-for="(item, i) in alphabet"
        :key="item.uppercase"
        class="flex flex-col items-center justify-center aspect-square rounded-2xl shadow-md transition-transform hover:scale-105 active:scale-90 text-white"
        :class="[cardColors[i % cardColors.length], { 'ring-4 ring-purple-400 scale-105': selected === i }]"
        @click="selected = i"
      >
        <span class="text-3xl font-bold">{{ item.uppercase }}</span>
        <span class="text-lg text-white/80">{{ item.lowercase }}</span>
      </button>
    </div>

    <Transition name="fade">
      <div
        v-if="selected !== null"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        @click.self="selected = null"
      >
        <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm">
          <button
            class="absolute top-2 right-2 w-10 h-10 flex items-center justify-center text-2xl text-gray-400 hover:text-gray-600 z-10 rounded-full"
            @click="selected = null"
          >
            ✕
          </button>

          <LetterCard :letter="alphabet[selected]" />

          <div class="flex justify-between px-6 pb-6">
            <button
              v-if="selected > 0"
              class="flex items-center gap-1 py-2 text-purple-500 hover:text-purple-700 text-lg font-semibold"
              @click="selected--"
            >
              ← {{ alphabet[selected - 1].uppercase }}
            </button>
            <span v-else />

            <button
              v-if="selected < alphabet.length - 1"
              class="flex items-center gap-1 py-2 text-purple-500 hover:text-purple-700 text-lg font-semibold"
              @click="selected++"
            >
              {{ alphabet[selected + 1].uppercase }} →
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
        Done ✅
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { alphabet } from '~/data/alphabet'

const cardColors = [
  'bg-red-400', 'bg-orange-400', 'bg-amber-400', 'bg-yellow-400',
  'bg-lime-400', 'bg-green-400', 'bg-emerald-400', 'bg-teal-400',
  'bg-cyan-400', 'bg-sky-400', 'bg-blue-400', 'bg-indigo-400',
  'bg-violet-400', 'bg-fuchsia-400', 'bg-pink-400', 'bg-rose-400',
]

const selected = ref<number | null>(null)
const router = useRouter()
const { markModuleComplete } = useProgressTracker()
const { play, speak } = useAudioEngine()
const { show } = useConfetti()

watch(selected, (i) => {
  if (i !== null) {
    play(undefined, alphabet[i].uppercase)
  }
})

function complete() {
  show()
  speak('Well done!')
  setTimeout(() => {
    markModuleComplete('letters')
    router.push('/')
  }, 2000)
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
