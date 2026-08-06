<template>
  <div>
    <p class="text-center text-sm text-gray-500 mb-4">Tap an emoji, then tap its name</p>

    <div class="grid grid-cols-3 sm:grid-cols-4 gap-3 max-w-lg mx-auto mb-8">
      <button
        v-for="obj in emojiOrder"
        :key="obj.id"
        class="flex items-center justify-center aspect-square rounded-2xl shadow-md transition-all duration-150 active:scale-90"
        :class="[
          colorFor(obj.id),
          {
            'matched-card': isMatched(obj.id),
            'ring-4 ring-white scale-105': selectedEmoji === obj.id,
            'shake': isWrong(obj.id),
          },
        ]"
        @click="pickEmoji(obj.id)"
      >
        <span class="text-5xl drop-shadow-sm">{{ obj.emoji }}</span>
      </button>
    </div>

    <div class="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
      <button
        v-for="obj in nameOrder"
        :key="obj.id"
        class="px-4 py-3 rounded-full text-lg font-semibold transition-all duration-150 active:scale-90"
        :class="[
          isMatched(obj.id)
            ? 'bg-green-400 text-white shadow-md'
            : selectedName === obj.id
              ? 'bg-yellow-400 text-white shadow-md scale-105'
              : 'bg-white/80 text-gray-700 shadow-sm hover:bg-white',
          { 'shake': isWrong(obj.id) },
        ]"
        @click="pickName(obj.id)"
      >
        {{ obj.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ObjectData } from '~/data/objects'

const props = defineProps<{
  objects: ObjectData[]
  colors: string[]
}>()

const emit = defineEmits<{
  complete: []
}>()

const { play, speak } = useAudioEngine()

const matchedIds = ref<Set<string>>(new Set())
const selectedName = ref<string | null>(null)
const selectedEmoji = ref<string | null>(null)
const wrongIds = ref<string[]>([])
let shakeTimer: ReturnType<typeof setTimeout> | null = null

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const emojiOrder = shuffle(props.objects)
const nameOrder = shuffle(props.objects)

function objectById(id: string) {
  return props.objects.find(o => o.id === id)
}

function colorFor(id: string) {
  const idx = props.objects.findIndex(o => o.id === id)
  return props.colors[idx % props.colors.length]
}

function isMatched(id: string) {
  return matchedIds.value.has(id)
}

function isWrong(id: string) {
  return wrongIds.value.includes(id)
}

function flashWrong(ids: string[]) {
  wrongIds.value = ids
  if (shakeTimer) clearTimeout(shakeTimer)
  shakeTimer = setTimeout(() => { wrongIds.value = [] }, 500)
}

function pickEmoji(id: string) {
  if (isMatched(id)) return
  selectedEmoji.value = selectedEmoji.value === id ? null : id
  if (selectedName.value) checkMatch()
}

function pickName(id: string) {
  if (isMatched(id)) return
  selectedName.value = selectedName.value === id ? null : id
  if (selectedEmoji.value) checkMatch()
}

function checkMatch() {
  const name = selectedName.value
  const emoji = selectedEmoji.value
  selectedName.value = null
  selectedEmoji.value = null

  if (name === emoji && name) {
    const obj = objectById(name)
    matchedIds.value = new Set([...matchedIds.value, name])
    if (obj) speak(obj.name)
    if (matchedIds.value.size === props.objects.length) {
      setTimeout(() => emit('complete'), 700)
    }
  } else {
    const ids = [name, emoji].filter(Boolean) as string[]
    flashWrong(ids)
    speak('Try again!')
  }
}
</script>

<style scoped>
.matched-card {
  opacity: 0.45;
  pointer-events: none;
}
.shake {
  animation: shake-x 0.4s ease;
}
@keyframes shake-x {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}
</style>
