export type Habitat = 'farm' | 'jungle' | 'ocean'

export interface AnimalData {
  id: string
  name: string
  emoji: string
  habitat: Habitat
  sound: string
}

export const animals: AnimalData[] = [
  { id: 'ayam', name: 'Ayam', emoji: '🐔', habitat: 'farm', sound: 'Kukuruyuk' },
  { id: 'bebek', name: 'Bebek', emoji: '🦆', habitat: 'farm', sound: 'Kwek kwek' },
  { id: 'sapi', name: 'Sapi', emoji: '🐄', habitat: 'farm', sound: 'Moo' },
  { id: 'kambing', name: 'Kambing', emoji: '🐐', habitat: 'farm', sound: 'Mbek' },
  { id: 'kuda', name: 'Kuda', emoji: '🐎', habitat: 'farm', sound: 'Hee hee' },
  { id: 'kelinci', name: 'Kelinci', emoji: '🐰', habitat: 'farm', sound: 'Ciit ciit' },
  { id: 'domba', name: 'Domba', emoji: '🐑', habitat: 'farm', sound: 'Mbee' },
  { id: 'harimau', name: 'Harimau', emoji: '🐯', habitat: 'jungle', sound: 'Aum' },
  { id: 'singa', name: 'Singa', emoji: '🦁', habitat: 'jungle', sound: 'Aum' },
  { id: 'gajah', name: 'Gajah', emoji: '🐘', habitat: 'jungle', sound: 'Preet' },
  { id: 'monyet', name: 'Monyet', emoji: '🐵', habitat: 'jungle', sound: 'Uek uek' },
  { id: 'ular', name: 'Ular', emoji: '🐍', habitat: 'jungle', sound: 'Sssss' },
  { id: 'burung', name: 'Burung', emoji: '🐦', habitat: 'jungle', sound: 'Cuit cuit' },
  { id: 'kupu-kupu', name: 'Kupu-Kupu', emoji: '🦋', habitat: 'jungle', sound: 'Terbang terbang' },
  { id: 'ikan', name: 'Ikan', emoji: '🐟', habitat: 'ocean', sound: 'Gelembung' },
  { id: 'lumba-lumba', name: 'Lumba-Lumba', emoji: '🐬', habitat: 'ocean', sound: 'Wiii' },
  { id: 'paus', name: 'Paus', emoji: '🐳', habitat: 'ocean', sound: 'Wooosh' },
  { id: 'gurita', name: 'Gurita', emoji: '🐙', habitat: 'ocean', sound: 'Renang renang' },
  { id: 'penyu', name: 'Penyu', emoji: '🐢', habitat: 'ocean', sound: 'Jalan jalan' },
  { id: 'kepiting', name: 'Kepiting', emoji: '🦀', habitat: 'ocean', sound: 'Rakit rakitan' },
  { id: 'bintang-laut', name: 'Bintang Laut', emoji: '⭐', habitat: 'ocean', sound: 'Bintang di laut' },
]
