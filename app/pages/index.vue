<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-6">
    <h1 class="text-5xl font-bold text-purple-700 mb-2">Acha Games</h1>
    <p class="text-xl text-purple-500 mb-12">Belajar sambil bermain</p>

    <div class="grid grid-cols-2 gap-6 w-full max-w-md">
      <NuxtLink
        v-for="m in modules"
        :key="m.path"
        :to="m.path"
        class="relative flex flex-col items-center justify-center aspect-square rounded-3xl shadow-lg text-white text-center p-4 transition-transform hover:scale-105 active:scale-95"
        :class="m.color"
      >
        <span v-if="progress.isModuleComplete(m.id)" class="absolute top-2 right-2 text-2xl">
          ⭐
        </span>
        <span class="text-5xl mb-2">{{ m.icon }}</span>
        <span class="text-xl font-semibold">{{ m.label }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const progress = useProgressTracker()

const modules = [
  { id: 'letters', path: '/learning/letters', label: 'Huruf', icon: '🔤', color: 'bg-red-400' },
  { id: 'numbers', path: '/learning/numbers', label: 'Angka', icon: '🔢', color: 'bg-blue-400' },
  { id: 'animals', path: '/learning/animals', label: 'Hewan', icon: '🐾', color: 'bg-green-400' },
  { id: 'objects', path: '/learning/objects', label: 'Benda', icon: '🧸', color: 'bg-yellow-400' },
]
</script>
