const STORAGE_KEY = 'acha-games-progress'

export interface ModuleProgress {
  completed: boolean
  completedAt?: string
}

export interface Progress {
  modules: Record<string, ModuleProgress>
}

function load(): Progress {
  if (import.meta.server) return { modules: {} }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return { modules: {} }
}

function save(progress: Progress) {
  if (import.meta.server) return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function useProgressTracker() {
  const progress = useState<Progress>('progress', () => load())

  function markModuleComplete(moduleId: string) {
    progress.value.modules[moduleId] = {
      completed: true,
      completedAt: new Date().toISOString(),
    }
    save(progress.value)
  }

  function isModuleComplete(moduleId: string): boolean {
    return progress.value.modules[moduleId]?.completed ?? false
  }

  function reset() {
    progress.value = { modules: {} }
    save(progress.value)
  }

  return { progress, markModuleComplete, isModuleComplete, reset }
}
