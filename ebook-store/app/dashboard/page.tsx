'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { books } from '@/lib/data/books';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
  const purchasedBooks = books.slice(0, 6);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 dark:text-white mb-4">
            My Library
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Access all your purchased books
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 text-center">
              <div className="text-4xl mb-2">📚</div>
              <p className="text-3xl font-bold text-primary-500 mb-1">
                {purchasedBooks.length}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Books Owned
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 text-center">
              <div className="text-4xl mb-2">📖</div>
              <p className="text-3xl font-bold text-accent-500 mb-1">3</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Currently Reading
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 text-center">
              <div className="text-4xl mb-2">✅</div>
              <p className="text-3xl font-bold text-green-500 mb-1">12</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Completed
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-6 text-center">
              <div className="text-4xl mb-2">⭐</div>
              <p className="text-3xl font-bold text-yellow-500 mb-1">4.8</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Avg. Rating
              </p>
            </Card>
          </motion.div>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Your Books
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              All
            </Button>
            <Button variant="ghost" size="sm">
              Reading
            </Button>
            <Button variant="ghost" size="sm">
              Completed
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {purchasedBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <div className="flex gap-4 p-4">
                  <div className="relative w-24 h-32 flex-shrink-0">
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-1 truncate">
                      {book.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                      {book.author}
                    </p>
                    <div className="mb-3">
                      <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                        <div
                          className="bg-primary-500 h-2 rounded-full"
                          style={{ width: `${Math.random() * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                        {Math.floor(Math.random() * 100)}% complete
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/book/${book.id}`} className="flex-1">
                        <Button size="sm" className="w-full text-xs">
                          Read Now
                        </Button>
                      </Link>
                      <Button size="sm" variant="outline" className="text-xs">
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Looking for more books to read?
          </p>
          <Link href="/shop">
            <Button size="lg">Browse Library</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
