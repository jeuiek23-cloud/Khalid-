'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Book } from '@/lib/types';
import { useCartStore } from '@/lib/store/cart';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(book);
  };

  return (
    <Link href={`/book/${book.id}`}>
      <Card hover className="group">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {book.isFree && (
            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
              FREE
            </div>
          )}
          {book.isBestSeller && (
            <div className="absolute top-2 right-2 bg-primary-500 text-white px-2 py-1 rounded text-xs font-bold">
              ⭐ BESTSELLER
            </div>
          )}
          {book.originalPrice && (
            <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
              SALE
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="mb-2">
            <span className="text-xs text-primary-500 font-medium">{book.category}</span>
          </div>
          <h3 className="font-bold text-lg mb-1 text-neutral-900 dark:text-white line-clamp-1">
            {book.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
            by {book.author}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2">
            {book.description}
          </p>
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">⭐</span>
              <span className="text-sm font-semibold">{book.rating}</span>
              <span className="text-xs text-neutral-500 ml-1">({book.reviews})</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              {book.originalPrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary-500">
                    ${book.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-neutral-500 line-through">
                    ${book.originalPrice.toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-xl font-bold text-primary-500">
                  {book.isFree ? 'FREE' : `$${book.price.toFixed(2)}`}
                </span>
              )}
            </div>
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};
