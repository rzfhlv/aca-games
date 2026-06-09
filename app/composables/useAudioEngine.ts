let audioContext: AudioContext | null = null

function getAudioContext() {
  if (!audioContext) {
    audioContext = new AudioContext()
  }
  return audioContext
}

export function useAudioEngine() {
  const isPlaying = ref(false)
  let currentAudio: HTMLAudioElement | null = null

  function stopAll() {
    if (currentAudio) {
      currentAudio.pause()
      currentAudio.currentTime = 0
      currentAudio = null
    }
    window.speechSynthesis?.cancel()
    isPlaying.value = false
  }

  function playFile(url: string): Promise<void> {
    return new Promise((resolve) => {
      stopAll()
      isPlaying.value = true
      const audio = new Audio(url)
      currentAudio = audio
      audio.onended = () => {
        isPlaying.value = false
        currentAudio = null
        resolve()
      }
      audio.onerror = () => {
        isPlaying.value = false
        currentAudio = null
        resolve()
      }
      audio.play().catch(() => {
        isPlaying.value = false
        currentAudio = null
        resolve()
      })
    })
  }

  function speak(text: string, lang = 'id-ID'): Promise<void> {
    return new Promise((resolve) => {
      stopAll()
      if (!window.speechSynthesis) {
        resolve()
        return
      }
      isPlaying.value = true
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = lang
      utterance.onend = () => {
        isPlaying.value = false
        resolve()
      }
      utterance.onerror = () => {
        isPlaying.value = false
        resolve()
      }
      window.speechSynthesis.speak(utterance)
    })
  }

  async function play(url?: string, text?: string, lang = 'id-ID') {
    if (url) {
      await playFile(url)
    } else if (text) {
      await speak(text, lang)
    }
  }

  return { isPlaying, play, speak, playFile, stopAll }
}
