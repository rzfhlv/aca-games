<template>
  <div class="min-h-screen p-4 sm:p-6">
    <NuxtLink to="/" class="inline-flex items-center gap-1 py-2 text-yellow-500 hover:text-yellow-700 mb-6 text-lg">
      ← Back
    </NuxtLink>

    <h1 class="text-4xl font-bold text-yellow-700 text-center mb-6">Learn Objects</h1>

    <div class="max-w-lg mx-auto mb-6">
      <CategoryTabs :tabs="categories" :active="activeCategory" @select="activeCategory = $event" />
    </div>

    <div class="grid grid-cols-3 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
      <ObjectCard
        v-for="(item, i) in filtered"
        :key="item.id"
        :object="item"
        :color="cardColors[i % cardColors.length]"
      />
    </div>

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
import { objects } from '~/data/objects'
import type { ObjectCategory } from '~/data/objects'

const categories = [
  { id: 'fruits' as ObjectCategory, label: 'Fruits', emoji: '🍎' },
  { id: 'vehicles' as ObjectCategory, label: 'Vehicles', emoji: '🚗' },
  { id: 'shapes' as ObjectCategory, label: 'Shapes', emoji: '⭕' },
  { id: 'colors' as ObjectCategory, label: 'Colors', emoji: '🔴' },
]

const cardColors = [
  'bg-yellow-400', 'bg-amber-400', 'bg-orange-400',
  'bg-red-400', 'bg-rose-400', 'bg-fuchsia-400',
  'bg-violet-400', 'bg-indigo-400', 'bg-blue-400', 'bg-sky-400',
  'bg-cyan-400', 'bg-teal-400', 'bg-emerald-400', 'bg-green-400',
]

const activeCategory = ref<ObjectCategory>('fruits')

const filtered = computed(() => objects.filter(o => o.category === activeCategory.value))

const router = useRouter()
const { markModuleComplete } = useProgressTracker()
const { speak } = useAudioEngine()
const { show } = useConfetti()

function complete() {
  show()
  speak('Well done!')
  setTimeout(() => {
    markModuleComplete('objects')
    router.push('/')
  }, 2000)
}
</script>
