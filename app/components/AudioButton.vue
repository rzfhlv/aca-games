<template>
  <button
    class="flex items-center justify-center rounded-full bg-white/90 shadow-md transition-transform active:scale-90 hover:scale-105"
    :class="[sizeClasses, { 'animate-pulse': audio.isPlaying.value }]"
    :style="{ minWidth: sizePx, minHeight: sizePx }"
    @click="handleClick"
    :aria-label="`Dengarkan ${text || src || ''}`"
  >
    <span :class="textSizeClass">
      {{ audio.isPlaying.value ? '🔊' : '🔈' }}
    </span>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  src?: string
  text?: string
  lang?: string
  size?: 'sm' | 'md' | 'lg'
}>(), {
  size: 'md',
  lang: 'en-US',
})

const audio = useAudioEngine()

const sizeMap = { sm: { px: '48px', classes: 'p-2', text: 'text-xl' }, md: { px: '64px', classes: 'p-3', text: 'text-2xl' }, lg: { px: '80px', classes: 'p-4', text: 'text-3xl' } }

const sizePx = computed(() => sizeMap[props.size].px)
const sizeClasses = computed(() => sizeMap[props.size].classes)
const textSizeClass = computed(() => sizeMap[props.size].text)

function handleClick() {
  audio.play(props.src, props.text, props.lang)
}
</script>
