'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { BookCard } from '@/components/book/BookCard';
import { FloatingBooks } from '@/components/3d/FloatingBooks';
import { books, getBestSellers } from '@/lib/data/books';

export default function HomePage() {
  const bestSellers = getBestSellers().slice(0, 3);
  const featuredBooks = books.slice(0, 6);

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <FloatingBooks />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
              Discover Your Next
              <span className="block text-primary-500">Great Read</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              Explore thousands of digital books across all genres. Read anywhere, anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Books
                </Button>
              </Link>
              <Link href="/free-books">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Browse Free Books
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 dark:text-white mb-4">
              Bestselling Books
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Discover what everyone is reading right now
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {bestSellers.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/bestsellers">
              <Button variant="outline" size="lg">
                View All Bestsellers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-neutral-800 dark:to-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 dark:text-white mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Handpicked books across all categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8"
            >
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                Vast Library
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Access thousands of books across all genres and categories
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8"
            >
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                Quality Content
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Curated selection of high-quality digital books and eBooks
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8"
            >
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                Instant Access
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Download and start reading immediately after purchase
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Start Your Reading Journey Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of readers who have discovered their favorite books with BookHaven
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-white text-primary-500 hover:bg-neutral-100">
                Browse Library
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
