import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { SearchProvider } from "@/contexts/SearchContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nike - Just Do It. | Official Site",
  description: "Discover the latest Nike shoes, clothing, and gear. Shop the newest collection of athletic wear and sneakers. Free shipping and returns.",
  keywords: ["Nike", "sneakers", "athletic wear", "sports shoes", "running shoes", "basketball shoes"],
  authors: [{ name: "Nike" }],
  openGraph: {
    title: "Nike - Just Do It.",
    description: "Discover the latest Nike shoes, clothing, and gear.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nike - Just Do It.",
    description: "Discover the latest Nike shoes, clothing, and gear.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <CartProvider>
          <SearchProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </SearchProvider>
        </CartProvider>
      </body>
    </html>
  );
}

