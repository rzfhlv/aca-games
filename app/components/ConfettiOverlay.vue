<template>
  <Teleport to="body">
    <div v-if="confetti.isVisible.value" class="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      <div
        v-for="i in 50"
        :key="i"
        class="absolute confetti-piece"
        :style="{
          left: randoms[i - 1][0] + '%',
          width: randoms[i - 1][1] + 'px',
          height: randoms[i - 1][2] + 'px',
          backgroundColor: colors[i % colors.length],
          animationDuration: randoms[i - 1][3] + 's',
          animationDelay: randoms[i - 1][4] + 's',
          borderRadius: randoms[i - 1][2] > 6 ? '2px' : '50%',
        }"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const confetti = useConfetti()

const colors = [
  '#f43f5e', '#e11d48', '#f97316', '#f59e0b',
  '#eab308', '#84cc16', '#22c55e', '#14b8a6',
  '#06b6d4', '#3b82f6', '#6366f1', '#a855f7',
  '#d946ef', '#ec4899',
]

const randoms = Array.from({ length: 50 }, () => [
  Math.random() * 100,
  Math.random() * 8 + 4,
  Math.random() * 14 + 6,
  Math.random() * 2 + 2,
  Math.random() * 0.5,
])
</script>

<style scoped>
.confetti-piece {
  top: -20px;
  animation: confetti-fall linear forwards;
  opacity: 0.9;
}
@keyframes confetti-fall {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg) scale(0.5);
    opacity: 0;
  }
}
</style>
