<template>
  <div class="min-h-screen p-6">
    <NuxtLink to="/" class="inline-flex items-center gap-1 text-green-500 hover:text-green-700 mb-6 text-lg">
      ← Kembali
    </NuxtLink>

    <h1 class="text-4xl font-bold text-green-700 text-center mb-6">Belajar Hewan</h1>

    <div class="max-w-lg mx-auto mb-6">
      <CategoryTabs :tabs="habitats" :active="activeHabitat" @select="activeHabitat = $event" />
    </div>

    <div class="grid grid-cols-3 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
      <AnimalCard
        v-for="(item, i) in filtered"
        :key="item.id"
        :animal="item"
        :color="cardColors[i % cardColors.length]"
        @select="selected = i"
      />
    </div>

    <Transition name="fade">
      <div
        v-if="selected !== null"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        @click.self="selected = null"
      >
        <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm">
          <button
            class="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600 z-10"
            @click="selected = null"
          >
            ✕
          </button>

          <AnimalDetail :animal="filtered[selected]" />

          <div class="flex justify-between px-6 pb-6">
            <button
              v-if="selected > 0"
              class="flex items-center gap-1 text-green-500 hover:text-green-700 text-lg font-semibold"
              @click="selected--"
            >
              ← {{ filtered[selected - 1].name }}
            </button>
            <span v-else />

            <button
              v-if="selected < filtered.length - 1"
              class="flex items-center gap-1 text-green-500 hover:text-green-700 text-lg font-semibold"
              @click="selected++"
            >
              {{ filtered[selected + 1].name }} →
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
import { animals } from '~/data/animals'
import type { Habitat } from '~/data/animals'

const habitats = [
  { id: 'farm' as Habitat, label: 'Peternakan', emoji: '🚜' },
  { id: 'jungle' as Habitat, label: 'Hutan', emoji: '🌴' },
  { id: 'ocean' as Habitat, label: 'Laut', emoji: '🌊' },
]

const cardColors = [
  'bg-green-400', 'bg-emerald-400', 'bg-teal-400', 'bg-lime-400',
  'bg-amber-400', 'bg-orange-400', 'bg-yellow-400',
  'bg-sky-400', 'bg-blue-400', 'bg-cyan-400',
  'bg-red-400', 'bg-rose-400', 'bg-fuchsia-400', 'bg-violet-400',
]

const activeHabitat = ref<Habitat>('farm')

const filtered = computed(() => animals.filter(a => a.habitat === activeHabitat.value))

const selected = ref<number | null>(null)
const router = useRouter()
const { markModuleComplete } = useProgressTracker()
const { play } = useAudioEngine()

watch(selected, (i) => {
  if (i !== null) {
    play(undefined, filtered.value[i].name)
  }
})

function complete() {
  markModuleComplete('animals')
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
