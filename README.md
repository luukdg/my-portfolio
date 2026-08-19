# 🚀 My Portfolio

A modern, interactive portfolio website built with **Next.js** and **React**. Showcases development projects, creative work, skills, and includes an AI-powered chatbot for visitor engagement.

## ✨ Features

- **Project Showcase** - Display development and creative projects with images, videos, and detailed descriptions
- **Skills Section** - Highlight technical and creative skills with visual tags
- **About Me** - Personal introduction and background
- **Contact Form** - Get in touch with integrated contact section
- **AI Chatbot** - Interactive chatbot for visitor engagement and inquiries
- **Dark/Light Mode** - Theme toggle for user preference
- **Responsive Design** - Fully responsive and mobile-optimized
- **Smooth Animations** - Enhanced UX with motion and transition effects
- **Image Carousels** - Interactive carousel components for project galleries

## 🛠 Tech Stack

- **Framework**: [Next.js 16.2.3](https://nextjs.org/)
- **UI Library**: [React 19.2.4](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Motion](https://motionjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + [Developer Icons](https://www.developer-icons.dev/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Theme**: [Next Themes](https://github.com/pacocoursey/next-themes)

## 📂 Project Structure

```
├── app/                          # Next.js app directory
│   ├── api/chat/                # Chat API routes
│   ├── projects/[slug]/         # Dynamic project pages
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── animations/              # Animation components
│   ├── icons/                   # Icon components
│   ├── sections/                # Page sections
│   └── ui/                      # UI components
├── data/                        # Static data
│   ├── projects.ts              # Project data
│   └── creative.ts              # Creative work data
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── public/                      # Static assets
└── types/                       # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding Projects

Edit `data/projects.ts` to add new development projects:

```typescript
{
  slug: "project-name",
  title: "Project Title",
  description: "Brief description",
  tags: ["Tech", "Stack"],
  live: "https://live-url.com",
  github: "https://github.com/...",
  image: [{ type: "image", src: "/path/to/image.jpg" }],
  content: {
    concept: "Project concept...",
    features: ["Feature 1", "Feature 2"],
    learnings: "What you learned..."
  }
}
```

### Adding Creative Work

Edit `data/creative.ts` to showcase creative projects following the same structure.

### Updating Skills

Modify the `Skills` component in `components/sections/skills.tsx` to display your technical skills.

## 🤖 Chatbot Integration

The AI chatbot uses portfolio knowledge from `lib/portfolio-knowledge.ts`. Update this file to customize chatbot responses about your background, skills, and experience.

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This portfolio can be deployed on:

- **Vercel** (recommended for Next.js) - [Vercel Deployment](https://vercel.com/new)
- **Netlify** - Configure with appropriate Next.js settings
- **Docker** - Build a containerized version
- **Other Node.js Hosting** - Any platform supporting Node.js

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

For questions or collaboration opportunities, use the contact form on the portfolio or reach out directly.
