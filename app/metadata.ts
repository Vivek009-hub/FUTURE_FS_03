import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://nike-redesign.vercel.app'),
  title: {
    default: 'Nike - Just Do It. | Official Site',
    template: '%s | Nike',
  },
  description: 'Discover the latest Nike shoes, clothing, and gear. Shop the newest collection of athletic wear and sneakers. Free shipping and returns.',
  keywords: ['Nike', 'sneakers', 'athletic wear', 'sports shoes', 'running shoes', 'basketball shoes'],
  authors: [{ name: 'Nike' }],
  creator: 'Nike',
  publisher: 'Nike',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nike-redesign.vercel.app',
    title: 'Nike - Just Do It.',
    description: 'Discover the latest Nike shoes, clothing, and gear.',
    siteName: 'Nike',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nike - Just Do It.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nike - Just Do It.',
    description: 'Discover the latest Nike shoes, clothing, and gear.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

