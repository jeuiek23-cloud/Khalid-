'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getBlogPostBySlug } from '@/lib/data/blog';
import { Button } from '@/components/ui/Button';

export default function BlogPostPage() {
  const params = useParams();
  const post = getBlogPostBySlug(params.slug as string);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 font-medium"
          >
            ← Back to Blog
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 dark:text-white mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 mb-8 text-neutral-600 dark:text-neutral-400">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>

          <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4">
              <p>{post.content}</p>
              <p>
                Reading is not just a hobby; it's a gateway to knowledge, imagination, and personal growth. 
                Whether you're diving into fiction or exploring non-fiction, every book offers something unique.
              </p>
              <p>
                In today's digital age, eBooks have made reading more accessible than ever. You can carry 
                an entire library in your pocket and read anywhere, anytime. This convenience has opened up 
                new possibilities for readers around the world.
              </p>
              <p>
                Remember, the key to building a reading habit is consistency. Start small, set realistic goals, 
                and gradually increase your reading time. Before you know it, reading will become an integral 
                part of your daily routine.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
