# Nike Website Redesign ( TASK 3 )

A modern, AI-enhanced redesign of the Nike website built with Next.js, Tailwind CSS, and Firebase.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **AI-Generated Branding**: Custom color schemes and logo elements
- **SEO Optimized**: Comprehensive meta tags, structured data, and semantic HTML
- **Mobile First**: Fully responsive design optimized for all devices
- **Firebase Integration**: Ready for CMS and data storage
- **Performance**: Optimized images, lazy loading, and fast page loads

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Firebase (Firestore, Storage, Auth)
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nike-redesign
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Copy your Firebase config
   - Create a `.env.local` file:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Features

- **AI-Generated Color Palette**: Modern gradient schemes and accent colors
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Hero Section**: Eye-catching landing area with call-to-action
- **Product Showcase**: Featured products with hover effects
- **Category Grid**: Visual category browsing
- **Testimonials**: Social proof section
- **Newsletter**: Email subscription form

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly buttons and interactions
- Optimized images for different screen sizes
- Mobile-first CSS approach
- Fast loading times

## 🔍 SEO Features

- Semantic HTML structure
- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready
- Sitemap and robots.txt ready

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Your own server

## 📝 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── Categories.tsx       # Category grid
│   ├── FeaturedProducts.tsx # Product showcase
│   ├── Testimonials.tsx     # Customer reviews
│   └── Newsletter.tsx       # Email subscription
├── lib/
│   └── firebase.ts          # Firebase configuration
└── public/                  # Static assets
```

## 🎯 Next Steps

- [ ] Connect Firebase Firestore for product data
- [ ] Implement user authentication
- [ ] Add shopping cart functionality
- [ ] Create product detail pages
- [ ] Set up payment integration
- [ ] Add search functionality
- [ ] Implement filters and sorting
- [ ] Add admin dashboard for CMS

## 📄 License

This project is for educational purposes. Nike is a registered trademark of Nike, Inc.

## 🙏 Acknowledgments

- Design inspiration from modern e-commerce trends
- AI-generated color schemes and branding elements
- Unsplash for placeholder images

