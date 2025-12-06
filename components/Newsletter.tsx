'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to Firebase
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-nike-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-block p-4 bg-nike-accent/20 rounded-full">
            <Mail className="w-8 h-8 text-nike-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Stay in the Loop
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get exclusive access to new releases, special offers, and athlete stories.
            Join over 1 million members worldwide.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nike-accent focus:border-transparent"
            />
            <button
              type="submit"
              disabled={submitted}
              className="bg-nike-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitted ? (
                <span>Subscribed!</span>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-sm"
            >
              Thanks for subscribing! Check your email for confirmation.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

