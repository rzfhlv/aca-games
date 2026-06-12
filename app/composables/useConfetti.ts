const isVisible = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

export function useConfetti() {
  function show(duration = 3000) {
    if (import.meta.server) return
    isVisible.value = true
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      isVisible.value = false
    }, duration)
  }

  return { isVisible, show }
}
