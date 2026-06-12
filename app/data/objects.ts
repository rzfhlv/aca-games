export type ObjectCategory = 'fruits' | 'vehicles' | 'shapes' | 'colors'

export interface ObjectData {
  id: string
  name: string
  emoji: string
  category: ObjectCategory
}

export const objects: ObjectData[] = [
  { id: 'apel', name: 'Apel', emoji: '🍎', category: 'fruits' },
  { id: 'pisang', name: 'Pisang', emoji: '🍌', category: 'fruits' },
  { id: 'jeruk', name: 'Jeruk', emoji: '🍊', category: 'fruits' },
  { id: 'anggur', name: 'Anggur', emoji: '🍇', category: 'fruits' },
  { id: 'stroberi', name: 'Stroberi', emoji: '🍓', category: 'fruits' },
  { id: 'semangka', name: 'Semangka', emoji: '🍉', category: 'fruits' },
  { id: 'nanas', name: 'Nanas', emoji: '🍍', category: 'fruits' },
  { id: 'mobil', name: 'Mobil', emoji: '🚗', category: 'vehicles' },
  { id: 'sepeda', name: 'Sepeda', emoji: '🚲', category: 'vehicles' },
  { id: 'pesawat', name: 'Pesawat', emoji: '✈️', category: 'vehicles' },
  { id: 'kapal', name: 'Kapal', emoji: '🚢', category: 'vehicles' },
  { id: 'kereta', name: 'Kereta', emoji: '🚂', category: 'vehicles' },
  { id: 'helikopter', name: 'Helikopter', emoji: '🚁', category: 'vehicles' },
  { id: 'bis', name: 'Bis', emoji: '🚌', category: 'vehicles' },
  { id: 'lingkaran', name: 'Lingkaran', emoji: '⭕', category: 'shapes' },
  { id: 'kotak', name: 'Kotak', emoji: '⬜', category: 'shapes' },
  { id: 'segitiga', name: 'Segitiga', emoji: '🔺', category: 'shapes' },
  { id: 'bintang', name: 'Bintang', emoji: '⭐', category: 'shapes' },
  { id: 'hati', name: 'Hati', emoji: '❤️', category: 'shapes' },
  { id: 'merah', name: 'Merah', emoji: '🔴', category: 'colors' },
  { id: 'biru', name: 'Biru', emoji: '🔵', category: 'colors' },
  { id: 'hijau', name: 'Hijau', emoji: '🟢', category: 'colors' },
  { id: 'kuning', name: 'Kuning', emoji: '🟡', category: 'colors' },
  { id: 'jingga', name: 'Jingga', emoji: '🟠', category: 'colors' },
  { id: 'ungu', name: 'Ungu', emoji: '🟣', category: 'colors' },
  { id: 'coklat', name: 'Coklat', emoji: '🟤', category: 'colors' },
]
