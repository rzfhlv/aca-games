<template>
  <div class="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="flex items-center gap-2 px-5 py-3 rounded-full text-lg font-semibold whitespace-nowrap transition-all duration-200"
      :class="active === tab.id
        ? 'bg-white shadow-md text-gray-800 scale-105'
        : 'bg-white/60 text-gray-500 hover:bg-white/80'"
      @click="$emit('select', tab.id)"
    >
      <span>{{ tab.emoji }}</span>
      <span>{{ tab.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
export interface Tab {
  id: string
  label: string
  emoji: string
}

defineProps<{
  tabs: Tab[]
  active: string
}>()

defineEmits<{
  select: [id: string]
}>()
</script>
