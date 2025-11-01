'use client';

import React from 'react';
import Image from 'next/image';
import { useCartStore } from '@/lib/store/cart';
import { Button } from '@/components/ui/Button';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-neutral-900 z-50 shadow-2xl overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Shopping Cart
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            >
              ✕
            </button>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-500 dark:text-neutral-400 mb-4">
                Your cart is empty
              </p>
              <Button onClick={onClose}>Continue Shopping</Button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={item.book.id}
                    className="flex gap-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
                  >
                    <div className="relative w-16 h-24 flex-shrink-0">
                      <Image
                        src={item.book.coverImage}
                        alt={item.book.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-neutral-900 dark:text-white truncate">
                        {item.book.title}
                      </h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                        {item.book.author}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.book.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 rounded hover:bg-neutral-300 dark:hover:bg-neutral-600"
                          >
                            −
                          </button>
                          <span className="text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.book.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 rounded hover:bg-neutral-300 dark:hover:bg-neutral-600"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary-500">
                            ${(item.book.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeItem(item.book.id)}
                            className="text-xs text-red-500 hover:text-red-600"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-neutral-600 dark:text-neutral-400">Subtotal</span>
                  <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-neutral-900 dark:text-white">Total</span>
                  <span className="text-2xl font-bold text-primary-500">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <Button className="w-full mb-2" size="lg">
                  Proceed to Checkout
                </Button>
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-neutral-600 dark:text-neutral-400 hover:text-red-500 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
