import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-nike-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-nike-black font-bold text-lg">✓</span>
              </div>
              <span className="font-display font-bold text-xl">NIKE</span>
            </div>
            <p className="text-gray-400 text-sm">
              Bringing inspiration and innovation to every athlete in the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-nike-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-nike-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-nike-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-nike-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Find Store */}
          <div>
            <h3 className="font-semibold mb-4">Find Store</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Become a Member
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Sign Up for Email
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Student Discount
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="font-semibold mb-4">Get Help</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* About Nike */}
          <div>
            <h3 className="font-semibold mb-4">About Nike</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400">
              <span>© 2024 Nike, Inc. All Rights Reserved</span>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              Made with ❤️ using Next.js & AI
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

