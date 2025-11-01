'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BookCard } from '@/components/book/BookCard';
import { books } from '@/lib/data/books';
import { Category } from '@/lib/types';

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [sortBy, setSortBy] = useState<'title' | 'price' | 'rating'>('title');

  const categories: Category[] = [
    'All',
    'Fiction',
    'Self-Development',
    'Education',
    'Children',
    'Coloring Books',
    'Business',
    'Technology',
    'Health',
  ];

  const filteredAndSortedBooks = useMemo(() => {
    let filtered = books;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((book) => book.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'price') {
        return a.price - b.price;
      } else {
        return b.rating - a.rating;
      }
    });

    return sorted;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 dark:text-white mb-4">
            Browse Our Library
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Explore our complete collection of digital books
          </p>
        </motion.div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search books, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'title' | 'price' | 'rating')}
              className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="title">Sort by Title</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-neutral-600 dark:text-neutral-400">
            Showing {filteredAndSortedBooks.length} {filteredAndSortedBooks.length === 1 ? 'book' : 'books'}
          </p>
        </div>

        {filteredAndSortedBooks.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-neutral-500 dark:text-neutral-400">
              No books found matching your criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
