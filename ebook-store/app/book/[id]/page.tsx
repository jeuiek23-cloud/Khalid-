'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getBookById, books } from '@/lib/data/books';
import { useCartStore } from '@/lib/store/cart';
import { Button } from '@/components/ui/Button';
import { BookCard } from '@/components/book/BookCard';

export default function BookDetailPage() {
  const params = useParams();
  const book = getBookById(params.id as string);
  const addItem = useCartStore((state) => state.addItem);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Book Not Found</h1>
          <Link href="/shop">
            <Button>Back to Library</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedBooks = books
    .filter((b) => b.category === book.category && b.id !== book.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addItem(book);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/shop"
            className="text-primary-500 hover:text-primary-600 font-medium"
          >
            ← Back to Library
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                {book.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 dark:text-white mb-4">
              {book.title}
            </h1>

            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
              by {book.author}
            </p>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center">
                <span className="text-yellow-500 text-2xl mr-2">⭐</span>
                <span className="text-2xl font-bold">{book.rating}</span>
                <span className="text-neutral-500 ml-2">({book.reviews} reviews)</span>
              </div>
              {book.isBestSeller && (
                <span className="px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-bold">
                  ⭐ BESTSELLER
                </span>
              )}
            </div>

            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
              {book.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Pages</p>
                <p className="text-lg font-semibold">{book.pages}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Language</p>
                <p className="text-lg font-semibold">{book.language}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Published</p>
                <p className="text-lg font-semibold">
                  {new Date(book.publishDate).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Format</p>
                <p className="text-lg font-semibold">Digital (PDF/EPUB)</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              {book.originalPrice ? (
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold text-primary-500">
                      ${book.price.toFixed(2)}
                    </span>
                    <span className="text-2xl text-neutral-500 line-through">
                      ${book.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Save ${(book.originalPrice - book.price).toFixed(2)}
                  </p>
                </div>
              ) : (
                <span className="text-4xl font-bold text-primary-500">
                  {book.isFree ? 'FREE' : `$${book.price.toFixed(2)}`}
                </span>
              )}
            </div>

            <div className="flex gap-4">
              <Button size="lg" onClick={handleAddToCart} className="flex-1">
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Preview
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {relatedBooks.length > 0 && (
          <div>
            <h2 className="text-3xl font-serif font-bold text-neutral-900 dark:text-white mb-8">
              Related Books
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBooks.map((relatedBook) => (
                <BookCard key={relatedBook.id} book={relatedBook} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
