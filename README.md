# Reddit-Themed Portfolio - Aman Biswakarma

A modern, responsive portfolio website styled like Reddit, built with Next.js 15, React, TypeScript, and Tailwind CSS.
Live on render: https://aman-biswakarma-protfolio.onrender.com/ (Check it out)

## Features

- **Reddit-Style Feed**: Projects displayed as posts with upvotes, views, and tags
- **Advanced Search & Filtering**: Fuzzy search with Fuse.js and tag-based filtering
- **Dark Mode**: System-aware theme toggle with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Type-Safe**: Built with TypeScript for better developer experience
- **Fast Performance**: Next.js App Router with static generation
- **Accessible**: ARIA labels, keyboard navigation, and semantic HTML

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Render [Click on link: https://aman-biswakarma-protfolio.onrender.com/]


## 🏁 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. The project is already initialized in the current directory

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser
OR 
Visit live website on render [https://aman-biswakarma-protfolio.onrender.com/](Portfolio)

## ✏️ Customization

### 1. Update Project Data

Edit `src/lib/projects.ts` to add/modify your projects. I've added your 6 major projects (Connect-U, CONSULO, Auth API, E-Library, Product Service API, Truxie) with detailed information based on your resume.

### 2. Add Project Images

Place your project screenshots in `public/images/`:
- `connectu-1.png`, `connectu-2.png`
- `consulo-1.png`
- `auth-api-1.png`
- `elibrary-1.png`
- `product-api-1.png`
- `truxie-1.png`

### 3. Add Your Resume
Drive link

### 4. Update Personal Information

- **Header/Footer**: Edit `src/components/Header.tsx` and `src/components/Footer.tsx`
  - Update GitHub URL: `https://github.com/Aman-mania`
  - Update LinkedIn URL: `https://linkedin.com/in/aman-biswakarma`
  - Update email address
- **About Page**: Edit `src/app/about/page.tsx`
- **Contact Info**: Update links in `src/app/contact/page.tsx`
- **Meta Tags**: Edit `src/app/layout.tsx` for SEO

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🎨 Current Pages

- **Home** (`/`): Reddit-style feed with all projects, search, and filters
- **About** (`/about`): Your bio, skills, achievements, and education
- **Resume** (`/resume`): Downloadable resume with summary
- **Contact** (`/contact`): Contact form and links
- **Project Detail** (`/project/[slug]`): Individual project pages with full details

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Vercel Deployment](https://vercel.com/docs)

## 👤 Author

**Aman Biswakarma**
- GitHub: [@Aman-mania](https://github.com/Aman-mania)
- LinkedIn: [aman-biswakarma](https://linkedin.com/in/aman-biswakarma)

---

**Built with Next.js 15, TypeScript, and Tailwind CSS** 🚀

