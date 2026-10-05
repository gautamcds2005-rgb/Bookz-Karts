// Book cover colors for SVG-based covers (since we can't generate more images)
const bookCovers = {
  subtle: { bg: '#f97316', text: 'white', title: 'The Subtle Art', subtitle: 'Mark Manson' },
  atomic: { bg: '#fbbf24', text: '#1e293b', title: 'Atomic Habits', subtitle: 'James Clear' },
  ikigai: { bg: '#fce7f3', text: '#831843', title: 'Ikigai', subtitle: 'Héctor García' },
  epic: { bg: '#1e293b', text: '#fbbf24', title: 'Do Epic Shit', subtitle: 'Ankur Warikoo' },
  richDad: { bg: '#7c3aed', text: 'white', title: 'Rich Dad\nPoor Dad', subtitle: 'Robert Kiyosaki' },
  psychology: { bg: '#dc2626', text: 'white', title: 'Psychology\nof Money', subtitle: 'Morgan Housel' },
  sapiens: { bg: '#92400e', text: '#fef3c7', title: 'Sapiens', subtitle: 'Yuval N. Harari' },
  alchemist: { bg: '#0d9488', text: '#ecfdf5', title: 'The Alchemist', subtitle: 'Paulo Coelho' },
  thinking: { bg: '#334155', text: '#e2e8f0', title: 'Thinking\nFast & Slow', subtitle: 'Daniel Kahneman' },
  power: { bg: '#b91c1c', text: '#fef2f2', title: '48 Laws\nof Power', subtitle: 'Robert Greene' },
  mindset: { bg: '#2563eb', text: 'white', title: 'Mindset', subtitle: 'Carol Dweck' },
  grit: { bg: '#ea580c', text: 'white', title: 'Grit', subtitle: 'Angela Duckworth' },
};

// Manga covers
const mangaCovers = {
  naruto: { bg: '#f97316', text: 'white', title: 'Naruto\nVol. 1', subtitle: 'Masashi Kishimoto' },
  onepiece: { bg: '#dc2626', text: '#fef2f2', title: 'One Piece\nVol. 1', subtitle: 'Eiichiro Oda' },
  demonSlayer: { bg: '#059669', text: '#ecfdf5', title: 'Demon\nSlayer', subtitle: 'Koyoharu Gotouge' },
  jjk: { bg: '#1e293b', text: '#818cf8', title: 'Jujutsu\nKaisen', subtitle: 'Gege Akutami' },
  aot: { bg: '#44403c', text: '#fef3c7', title: 'Attack on\nTitan', subtitle: 'Hajime Isayama' },
  mha: { bg: '#16a34a', text: 'white', title: 'My Hero\nAcademia', subtitle: 'Kohei Horikoshi' },
};

// Coming soon covers
const comingSoonCovers = {
  winds: { bg: '#6366f1', text: 'white', title: 'Winds of\nWinter', subtitle: 'George R.R. Martin' },
  midnight: { bg: '#0f172a', text: '#a78bfa', title: 'Midnight\nLibrary 2', subtitle: 'Matt Haig' },
  lessons: { bg: '#0891b2', text: 'white', title: 'Lessons in\nChemistry 2', subtitle: 'Bonnie Garmus' },
  fourth: { bg: '#be123c', text: '#ffe4e6', title: 'Fourth Wing\nIron Flame', subtitle: 'Rebecca Yarros' },
  project: { bg: '#4338ca', text: '#e0e7ff', title: 'Project\nHail Mary 2', subtitle: 'Andy Weir' },
  happy: { bg: '#f59e0b', text: '#1e293b', title: 'The Happy\nPlace', subtitle: 'Emily Henry' },
};

export const mangaBooks = Object.entries(mangaCovers).map(([key, cover], i) => ({
  id: `manga-${i}`,
  title: cover.title.replace('\n', ' '),
  author: cover.subtitle,
  price: 350 + i * 50,
  originalPrice: 499 + i * 50,
  badge: i === 0 ? 'Bestseller' : i === 2 ? 'New' : null,
  cover: key,
  coverData: cover,
  category: 'manga',
}));

export const bestSellers = Object.entries(bookCovers).slice(0, 6).map(([key, cover], i) => ({
  id: `best-${i}`,
  title: cover.title.replace('\n', ' '),
  author: cover.subtitle,
  price: 199 + i * 50,
  originalPrice: 299 + i * 70,
  badge: i === 0 ? 'Bestseller' : i === 2 ? 'Trending' : null,
  cover: key,
  coverData: cover,
  category: 'bestseller',
}));

export const comingSoon = Object.entries(comingSoonCovers).map(([key, cover], i) => ({
  id: `coming-${i}`,
  title: cover.title.replace('\n', ' '),
  author: cover.subtitle,
  price: 399 + i * 30,
  originalPrice: 599 + i * 30,
  badge: 'Pre-order',
  cover: key,
  coverData: cover,
  category: 'coming-soon',
}));

export const categoryMangaBooks = Object.entries(mangaCovers).slice(0, 3).map(([key, cover], i) => ({
  id: `cat-manga-${i}`,
  title: cover.title.replace('\n', ' '),
  author: cover.subtitle,
  price: 399 + i * 50,
  cover: key,
  coverData: cover,
}));

export { bookCovers, mangaCovers, comingSoonCovers };
