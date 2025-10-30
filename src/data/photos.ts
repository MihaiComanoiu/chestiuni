export interface Photo {
  id: number
  src: string
  alt: string
  width: number
  height: number
}

/**
 * Original set (kept as-is except the problematic "Cityscape at night" entry
 * is replaced with an existing image from the set).
 *
 * NOTE: no new external images are introduced — only the URLs already present
 * in your code are reused below.
 */
const basePhotos: Photo[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80',
    alt: 'Mountain landscape at sunset by Chestiuni',
    width: 800,
    height: 1200,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=800&q=80',
    alt: 'Urban architecture photography by Chestiuni',
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&q=80',
    alt: 'Portrait photography by Chestiuni',
    width: 800,
    height: 800,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1682687220015-186f63b8850a?w=800&q=80',
    alt: 'Nature and wildlife photography by Chestiuni',
    width: 800,
    height: 1000,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1682687219800-bba120d709c5?w=800&q=80',
    alt: 'Street photography by Chestiuni',
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1682687982107-14492010e05e?w=800&q=80',
    alt: 'Coastal landscape by Chestiuni',
    width: 800,
    height: 1200,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?w=800&q=80',
    alt: 'Abstract art photography by Chestiuni',
    width: 800,
    height: 800,
  },
  // Replaced the problematic Cityscape entry by reusing an existing image URL
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=800&q=80', // reused from id:2
    alt: 'Urban architecture (replacement for cityscape) by Chestiuni',
    width: 800,
    height: 600,
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&q=80',
    alt: 'Minimalist architecture by Chestiuni',
    width: 800,
    height: 1000,
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=800&q=80',
    alt: 'Forest landscape photography by Chestiuni',
    width: 800,
    height: 1200,
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1682687221248-3116ba6ab483?w=800&q=80',
    alt: 'Desert landscape by Chestiuni',
    width: 800,
    height: 600,
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1682687220777-2c60708d6889?w=800&q=80',
    alt: 'Ocean waves photography by Chestiuni',
    width: 800,
    height: 800,
  },
]

/**
 * Build a larger test set by repeating the above existing images.
 * - IDs are made unique.
 * - Alt text appends a copy index so you can see repetitions.
 * - No new image URLs are added.
 */
const TOTAL = 300 // adjust if you want more/less
export const photos: Photo[] = Array.from({ length: TOTAL }, (_, i) => {
  const base = basePhotos[i % basePhotos.length]
  const copyIndex = Math.floor(i / basePhotos.length) + 1
  return {
    id: i + 1,
    src: base.src,
    alt: `${base.alt} (copy ${copyIndex})`,
    width: base.width,
    height: base.height,
  }
})
