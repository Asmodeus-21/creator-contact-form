# Maya's Creator Collaboration

A modern, responsive landing page for creator collaboration opportunities in Kolkata. Built with React, TypeScript, and Vite, styled with Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd creator-contact-form
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📦 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

#### Manual Deployment Steps:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Vite configuration
   - Click "Deploy"

3. **Configure (if needed)**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Deploy to Other Platforms

The built application in the `dist` folder can be deployed to any static hosting service:
- **Netlify**: Drag and drop the `dist` folder or connect your Git repository
- **GitHub Pages**: Use `gh-pages` package or GitHub Actions
- **Cloudflare Pages**: Connect your repository and set build command to `npm run build`

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts (Inter)** - Typography

## 📁 Project Structure

```
creator-contact-form/
├── components/          # React components
│   ├── ContactForm.tsx
│   ├── Header.tsx
│   ├── Icons.tsx
│   └── Section.tsx
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── vercel.json         # Vercel deployment configuration
```

## 🔧 Configuration

### Environment Variables

Currently, this project doesn't require any environment variables. If you need to add any in the future:

1. Copy `.env.example` to `.env.local`
2. Add your variables
3. Access them in your code with `import.meta.env.VITE_YOUR_VARIABLE`

## 📝 License

All rights reserved © 2026 Maya

## 🤝 Contributing

This is a personal project. For inquiries, please use the contact form on the website.
