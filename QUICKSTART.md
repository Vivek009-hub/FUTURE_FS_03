# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Firebase (Optional for Development)
For development, the app will work without Firebase. To enable full functionality:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Enable Authentication (optional)
5. Enable Storage (optional)
6. Copy your config to `.env.local` (see `.env.example`)

### Step 3: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

## 🎨 Features Included

✅ Modern, responsive design  
✅ Smooth animations with Framer Motion  
✅ SEO optimized  
✅ Mobile-first approach  
✅ Firebase integration ready  
✅ AI-generated color scheme  
✅ Accessible components  

## 📱 Test Mobile View

- Open Chrome DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test on various device sizes

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme.

### Content
- Products: `components/FeaturedProducts.tsx`
- Categories: `components/Categories.tsx`
- Testimonials: `components/Testimonials.tsx`

### SEO
Edit `app/layout.tsx` and `app/metadata.ts` for SEO settings.

## 🚀 Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy!

The site is production-ready!

