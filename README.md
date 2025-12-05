# Ashwin Cheripally - Personal Profile Website

A modern, academic-grade personal profile website built with Next.js, Tailwind CSS, and Framer Motion. Designed to showcase leadership, STEM projects, and achievements for college applications.

## Features

- **Modern Design**: Clean, minimal aesthetic inspired by MIT Media Lab
- **Dark Mode**: Elegant dark/light theme toggle
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth scroll animations and micro-interactions
- **SEO Optimized**: Full metadata and Open Graph support
- **Easy to Update**: All content in a single data file

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to project directory
cd ashwin-profile

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customizing Content

### Step 1: Update Personal Data

Edit `src/data/siteData.ts` to update all website content:

```typescript
// Personal Information
personal: {
  name: "Your Name",
  tagline: "Your tagline",
  email: "your@email.com",
  // ... more fields
}
```

### Step 2: Add Images

Place your images in the `public/images/` directory:

```
public/
  images/
    profile.jpg          # Your profile photo
    cheri-foundation.jpg # Leadership initiative image
    equibot.jpg          # Project images
    gallery/
      *.jpg              # Gallery images
```

### Step 3: Update Resume

Add your resume PDF to `public/resume.pdf`

## Project Structure

```
src/
  app/
    page.tsx           # Main page (assembles all sections)
    layout.tsx         # Root layout with metadata
    globals.css        # Global styles and theme
  components/
    ui/                # Reusable UI components
      Button.tsx
      Card.tsx
      HighlightBadge.tsx
      SectionHeader.tsx
    cards/             # Content card components
      LeadershipCard.tsx
      ProjectCard.tsx
      AwardBadge.tsx
      ActivityCard.tsx
    sections/          # Page sections
      Hero.tsx
      About.tsx
      Leadership.tsx
      Projects.tsx
      Competitions.tsx
      Activities.tsx
      Gallery.tsx
      FutureGoals.tsx
      Contact.tsx
    layout/            # Layout components
      Navbar.tsx
      Footer.tsx
  data/
    types.ts           # TypeScript type definitions
    siteData.ts        # All website content (EDIT THIS)
  lib/
    utils.ts           # Utility functions
```

## Sections Overview

| Section | Purpose |
|---------|---------|
| **Hero** | First impression - name, tagline, aspirations |
| **About** | Personal story and quick stats |
| **Leadership** | Cheri Foundation and initiatives |
| **Projects** | STEM projects (Equibot, Mars Society) |
| **Competitions** | Awards and competition achievements |
| **Activities** | Extracurriculars (archery, art, etc.) |
| **Gallery** | Photo gallery with lightbox |
| **Future Goals** | Timeline of aspirations |
| **Contact** | Contact form and social links |

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Your site will be live at `your-project.vercel.app`

### Custom Domain

1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed

## Updating the Site

1. Edit content in `src/data/siteData.ts`
2. Add/update images in `public/images/`
3. Commit and push to GitHub
4. Vercel will automatically redeploy

## Color Palette

The design uses a carefully curated palette:

- **Primary**: Deep space blue (#2563eb) - Technology, innovation
- **Accent**: Mars orange (#f97316) - Ambition, exploration
- **MIT Red**: #A31F34 - Used in the "Why MIT" section

## Performance Tips

- Optimize images before uploading (use WebP format)
- Keep gallery images under 500KB each
- Profile image should be square (recommended: 800x800px)

## Support

For questions or issues, contact the developer or open a GitHub issue.

---

Built with purpose for Ashwin Cheripally's MIT application journey.
