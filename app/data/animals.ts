export type Habitat = 'farm' | 'jungle' | 'ocean'

export interface AnimalData {
  id: string
  name: string
  emoji: string
  habitat: Habitat
  sound: string
}

export const animals: AnimalData[] = [
  { id: 'chicken', name: 'Chicken', emoji: '🐔', habitat: 'farm', sound: 'Cock-a-doodle-doo' },
  { id: 'duck', name: 'Duck', emoji: '🦆', habitat: 'farm', sound: 'Quack quack' },
  { id: 'cow', name: 'Cow', emoji: '🐄', habitat: 'farm', sound: 'Moo' },
  { id: 'goat', name: 'Goat', emoji: '🐐', habitat: 'farm', sound: 'Baa' },
  { id: 'horse', name: 'Horse', emoji: '🐎', habitat: 'farm', sound: 'Neigh' },
  { id: 'rabbit', name: 'Rabbit', emoji: '🐰', habitat: 'farm', sound: 'Squeak squeak' },
  { id: 'sheep', name: 'Sheep', emoji: '🐑', habitat: 'farm', sound: 'Baa' },
  { id: 'tiger', name: 'Tiger', emoji: '🐯', habitat: 'jungle', sound: 'Roar' },
  { id: 'lion', name: 'Lion', emoji: '🦁', habitat: 'jungle', sound: 'Roar' },
  { id: 'elephant', name: 'Elephant', emoji: '🐘', habitat: 'jungle', sound: 'Trumpet' },
  { id: 'monkey', name: 'Monkey', emoji: '🐵', habitat: 'jungle', sound: 'Ooh ooh' },
  { id: 'snake', name: 'Snake', emoji: '🐍', habitat: 'jungle', sound: 'Hiss' },
  { id: 'bird', name: 'Bird', emoji: '🐦', habitat: 'jungle', sound: 'Chirp chirp' },
  { id: 'butterfly', name: 'Butterfly', emoji: '🦋', habitat: 'jungle', sound: 'Flutter' },
  { id: 'fish', name: 'Fish', emoji: '🐟', habitat: 'ocean', sound: 'Bubble' },
  { id: 'dolphin', name: 'Dolphin', emoji: '🐬', habitat: 'ocean', sound: 'Click click' },
  { id: 'whale', name: 'Whale', emoji: '🐳', habitat: 'ocean', sound: 'Whoosh' },
  { id: 'octopus', name: 'Octopus', emoji: '🐙', habitat: 'ocean', sound: 'Swim' },
  { id: 'turtle', name: 'Turtle', emoji: '🐢', habitat: 'ocean', sound: 'Crawl' },
  { id: 'crab', name: 'Crab', emoji: '🦀', habitat: 'ocean', sound: 'Snap snap' },
  { id: 'starfish', name: 'Starfish', emoji: '⭐', habitat: 'ocean', sound: 'Twinkle' },
]
