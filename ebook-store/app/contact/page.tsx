'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Send us a message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Name"
                {...register('name', { required: 'Name is required' })}
                error={errors.name?.message}
                placeholder="Your name"
              />

              <Input
                label="Email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                error={errors.email?.message}
                placeholder="your.email@example.com"
              />

              <Input
                label="Subject"
                {...register('subject', { required: 'Subject is required' })}
                error={errors.subject?.message}
                placeholder="What is this about?"
              />

              <div>
                <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                  Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                      Email
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      support@bookhaven.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                      Phone
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">🕐</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                      Business Hours
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                Follow Us
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Stay connected for updates, new releases, and exclusive offers
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
                >
                  <span className="text-xl">f</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
                >
                  <span className="text-xl">𝕏</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
                >
                  <span className="text-xl">in</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
                >
                  <span className="text-xl">📷</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
