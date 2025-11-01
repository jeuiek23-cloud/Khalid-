'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-900 dark:text-white mb-6">
              About BookHaven
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Your trusted destination for quality digital books and eBooks
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-neutral-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                At BookHaven, we believe that everyone deserves access to quality literature. 
                Our mission is to make reading more accessible, affordable, and enjoyable for 
                readers around the world.
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                We carefully curate our collection to include books across all genres—from 
                captivating fiction to practical self-development guides, from educational 
                resources to delightful children's stories.
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Whether you're a casual reader or a book enthusiast, BookHaven is your gateway 
                to discovering your next great read.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-2xl p-12 text-center"
            >
              <div className="text-6xl mb-6">📚</div>
              <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                10,000+
              </h3>
              <p className="text-lg text-neutral-700 dark:text-neutral-300">
                Digital books available
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-neutral-50 dark:bg-neutral-800 rounded-xl"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                Curated Selection
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Every book in our library is carefully selected for quality and relevance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-neutral-50 dark:bg-neutral-800 rounded-xl"
            >
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                Fair Pricing
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Competitive prices and regular discounts to make reading affordable for everyone
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-neutral-50 dark:bg-neutral-800 rounded-xl"
            >
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                Global Access
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Instant downloads available worldwide, read on any device, anytime
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-900 dark:text-white mb-6">
              Join Our Reading Community
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
              Become part of a growing community of readers who are discovering, learning, 
              and growing through the power of books.
            </p>
            <Link href="/shop">
              <Button size="lg">Start Exploring</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
