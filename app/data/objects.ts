export type ObjectCategory = 'fruits' | 'vehicles' | 'shapes' | 'colors'

export interface ObjectData {
  id: string
  name: string
  emoji: string
  category: ObjectCategory
}

export const objects: ObjectData[] = [
  { id: 'apple', name: 'Apple', emoji: '🍎', category: 'fruits' },
  { id: 'banana', name: 'Banana', emoji: '🍌', category: 'fruits' },
  { id: 'orange', name: 'Orange', emoji: '🍊', category: 'fruits' },
  { id: 'grape', name: 'Grape', emoji: '🍇', category: 'fruits' },
  { id: 'strawberry', name: 'Strawberry', emoji: '🍓', category: 'fruits' },
  { id: 'watermelon', name: 'Watermelon', emoji: '🍉', category: 'fruits' },
  { id: 'pineapple', name: 'Pineapple', emoji: '🍍', category: 'fruits' },
  { id: 'car', name: 'Car', emoji: '🚗', category: 'vehicles' },
  { id: 'bicycle', name: 'Bicycle', emoji: '🚲', category: 'vehicles' },
  { id: 'airplane', name: 'Airplane', emoji: '✈️', category: 'vehicles' },
  { id: 'ship', name: 'Ship', emoji: '🚢', category: 'vehicles' },
  { id: 'train', name: 'Train', emoji: '🚂', category: 'vehicles' },
  { id: 'helicopter', name: 'Helicopter', emoji: '🚁', category: 'vehicles' },
  { id: 'bus', name: 'Bus', emoji: '🚌', category: 'vehicles' },
  { id: 'circle', name: 'Circle', emoji: '⭕', category: 'shapes' },
  { id: 'square', name: 'Square', emoji: '⬜', category: 'shapes' },
  { id: 'triangle', name: 'Triangle', emoji: '🔺', category: 'shapes' },
  { id: 'star', name: 'Star', emoji: '⭐', category: 'shapes' },
  { id: 'heart', name: 'Heart', emoji: '❤️', category: 'shapes' },
  { id: 'red', name: 'Red', emoji: '🔴', category: 'colors' },
  { id: 'blue', name: 'Blue', emoji: '🔵', category: 'colors' },
  { id: 'green', name: 'Green', emoji: '🟢', category: 'colors' },
  { id: 'yellow', name: 'Yellow', emoji: '🟡', category: 'colors' },
  { id: 'orange-color', name: 'Orange', emoji: '🟠', category: 'colors' },
  { id: 'purple', name: 'Purple', emoji: '🟣', category: 'colors' },
  { id: 'brown', name: 'Brown', emoji: '🟤', category: 'colors' },
]
