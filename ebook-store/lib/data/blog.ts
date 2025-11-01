import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Tips for Building a Daily Reading Habit',
    slug: '10-tips-daily-reading-habit',
    excerpt: 'Transform your life one page at a time. Discover proven strategies to make reading a consistent part of your daily routine.',
    content: 'Reading is one of the most rewarding habits you can develop...',
    author: 'Emily Carter',
    date: '2024-10-15',
    coverImage: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=400&fit=crop',
    category: 'Reading Tips',
    readTime: 5,
  },
  {
    id: '2',
    title: 'The Benefits of Digital Books vs Physical Books',
    slug: 'digital-vs-physical-books',
    excerpt: 'Explore the pros and cons of both formats and find out which one suits your lifestyle best.',
    content: 'The debate between digital and physical books continues...',
    author: 'Mark Stevens',
    date: '2024-10-20',
    coverImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=400&fit=crop',
    category: 'Digital Learning',
    readTime: 7,
  },
  {
    id: '3',
    title: 'How to Write Your First eBook',
    slug: 'write-your-first-ebook',
    excerpt: 'A comprehensive guide for aspiring authors. Learn the essential steps to plan, write, and publish your own eBook.',
    content: 'Writing an eBook can seem daunting, but with the right approach...',
    author: 'Rachel Green',
    date: '2024-10-25',
    coverImage: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&h=400&fit=crop',
    category: 'Writing',
    readTime: 10,
  },
  {
    id: '4',
    title: 'Best Book Genres for Personal Growth',
    slug: 'best-genres-personal-growth',
    excerpt: 'Discover which book categories can help you develop new skills, expand your mindset, and achieve your goals.',
    content: 'Personal growth through reading is a powerful tool...',
    author: 'David Kumar',
    date: '2024-10-28',
    coverImage: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&h=400&fit=crop',
    category: 'Reading Tips',
    readTime: 6,
  },
];

export const getBlogPostBySlug = (slug: string) => 
  blogPosts.find(post => post.slug === slug);
