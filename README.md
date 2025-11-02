# Reddit-Themed Portfolio - Aman Biswakarma

A modern, responsive portfolio website styled like Reddit, built with Next.js 15, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Reddit-Style Feed**: Projects displayed as posts with upvotes, views, and tags
- **Advanced Search & Filtering**: Fuzzy search with Fuse.js and tag-based filtering
- **Dark Mode**: System-aware theme toggle with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Type-Safe**: Built with TypeScript for better developer experience
- **Fast Performance**: Next.js App Router with static generation
- **Accessible**: ARIA labels, keyboard navigation, and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes
- **Search**: Fuse.js
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
reddit-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── page.tsx           # Home page (feed)
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── resume/            # Resume page
│   │   └── project/[slug]/    # Dynamic project detail pages
│   ├── components/            # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PostCard.tsx       # Reddit-style project card
│   │   ├── PostFeed.tsx       # Main feed with search/filter
│   │   ├── SearchBar.tsx
│   │   ├── TagFilter.tsx
│   │   └── ThemeProvider.tsx
│   └── lib/                   # Utilities and data
│       ├── projects.ts        # Project data (EDIT THIS)
│       ├── types.ts           # TypeScript types
│       └── utils.ts           # Helper functions
├── public/
│   ├── images/                # Project screenshots
│   └── Aman_Biswakarma_Resume.pdf  # Your resume PDF
└── package.json
```

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

Place your resume PDF in `public/` folder as:
- `Aman_Biswakarma_Resume.pdf`

### 4. Update Personal Information

- **Header/Footer**: Edit `src/components/Header.tsx` and `src/components/Footer.tsx`
  - Update GitHub URL: `https://github.com/Aman-mania`
  - Update LinkedIn URL: `https://linkedin.com/in/aman-biswakarma`
  - Update email address
- **About Page**: Edit `src/app/about/page.tsx`
- **Contact Info**: Update links in `src/app/contact/page.tsx`
- **Meta Tags**: Edit `src/app/layout.tsx` for SEO

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial portfolio setup"
git push
```

2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

Your portfolio will be live at `your-project.vercel.app`

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

## 🎯 Next Steps

1. **Add Images**: Place your project screenshots in `public/images/`
2. **Add Resume**: Add your PDF resume to `public/`
3. **Update Links**: Change all placeholder URLs to your actual profiles
4. **Test Locally**: Run `npm run dev` and verify everything works
5. **Deploy**: Push to GitHub and deploy on Vercel

## 🐛 Troubleshooting

### Build Errors

If you get type errors during build:
```bash
npm run lint
```

### Images Not Loading

Make sure images are in `public/images/` and referenced as `/images/filename.png` (with leading slash)

### Dark Mode Not Working

The theme provider requires JavaScript. Make sure you're testing in a browser with JS enabled.

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

