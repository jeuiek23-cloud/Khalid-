export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  originalPrice?: number;
  coverImage: string;
  category: string;
  rating: number;
  reviews: number;
  pages: number;
  language: string;
  publishDate: string;
  isFree: boolean;
  isBestSeller: boolean;
  tags: string[];
  preview?: string;
}

export interface Review {
  id: string;
  bookId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  coverImage: string;
  category: string;
  readTime: number;
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  purchasedBooks: string[];
}

export type Category = 
  | 'Fiction'
  | 'Self-Development'
  | 'Education'
  | 'Children'
  | 'Coloring Books'
  | 'Business'
  | 'Technology'
  | 'Health'
  | 'All';
