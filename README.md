# Modern Portfolio Website

A stunning, modern personal portfolio website built with React.js and Tailwind CSS, featuring a premium purple and black color theme with glassmorphism effects and smooth animations.

![Portfolio Preview](https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&auto=format&fit=crop)

## 🌟 Features

- **Modern Design**: Faint purple and black theme with glassmorphism effects
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Built with Motion (Framer Motion) for fluid transitions
- **Modular Components**: Clean, reusable React components
- **Premium Effects**: Subtle glow effects, gradients, and backdrop blur
- **Dark Mode Styled**: Professional dark interface
- **SEO Ready**: Optimized structure for search engines

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

### Required Software

1. **Node.js** (v18.0.0 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js) or **pnpm** (recommended)
   - For pnpm installation: `npm install -g pnpm`
   - Verify: `npm --version` or `pnpm --version`

3. **Git** (optional, for version control)
   - Download from: https://git-scm.com/
   - Verify: `git --version`

### Recommended Tools

- **VS Code**: https://code.visualstudio.com/
- **VS Code Extensions**:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets

## 🚀 Installation & Setup

### Step 1: Download/Clone the Project

If using Git:
```bash
git clone <your-repository-url>
cd portfolio-website
```

Or download the ZIP file and extract it to your desired location.

### Step 2: Install Dependencies

Open your terminal in the project directory and run:

**Using npm:**
```bash
npm install
```

**Using pnpm (recommended, faster):**
```bash
pnpm install
```

This will install all required packages including:
- React 18.3.1
- Tailwind CSS 4.1.12
- Motion (Framer Motion) 12.23.24
- Lucide React (icons) 0.487.0
- Vite 6.3.5 (build tool)
- And all other dependencies

### Step 3: Run Development Server

Start the development server:

**Using npm:**
```bash
npm run dev
```

**Using pnpm:**
```bash
pnpm dev
```

The application will open in your browser at:
```
http://localhost:5173
```

You should see your portfolio website running! 🎉

## 🛠️ Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navigation.tsx      # Sticky navigation bar
│   │   │   ├── Hero.tsx            # Hero/landing section
│   │   │   ├── About.tsx           # About me section
│   │   │   ├── Skills.tsx          # Skills with progress bars
│   │   │   ├── Education.tsx       # Education timeline
│   │   │   ├── Experience.tsx      # Work experience
│   │   │   ├── Events.tsx          # Hackathons & events
│   │   │   ├── Projects.tsx        # Project showcase
│   │   │   ├── Resume.tsx          # Resume & certifications
│   │   │   └── Contact.tsx         # Contact form
│   │   └── App.tsx                 # Main app component
│   ├── styles/
│   │   ├── index.css               # Main styles
│   │   ├── theme.css               # Theme colors & variables
│   │   ├── tailwind.css            # Tailwind imports
│   │   └── fonts.css               # Font imports
│   └── main.tsx                    # App entry point
├── public/                         # Static assets
├── package.json                    # Dependencies
├── vite.config.ts                  # Vite configuration
└── README.md                       # This file
```

## 🎨 Customization Guide

### 1. Update Personal Information

Edit the following files to add your information:

**Hero Section** (`src/app/components/Hero.tsx`):
- Replace "Your Name" with your actual name
- Update the subtitle and description

**About Section** (`src/app/components/About.tsx`):
- Update the description text
- Modify the stats (projects, hackathons, years of experience)

**Skills Section** (`src/app/components/Skills.tsx`):
- Update skill names and proficiency levels (0-100%)
- Add or remove skills as needed

**Education Section** (`src/app/components/Education.tsx`):
- Replace with your actual education details
- Update institution names, dates, and achievements

**Experience Section** (`src/app/components/Experience.tsx`):
- Add your work experience and internships
- Update company names, roles, and responsibilities

**Events Section** (`src/app/components/Events.tsx`):
- List your hackathons and events
- Update achievements and descriptions

**Projects Section** (`src/app/components/Projects.tsx`):
- Add your actual projects
- Update project images, descriptions, and links
- Replace GitHub and live demo URLs

**Resume Section** (`src/app/components/Resume.tsx`):
- Add your certifications
- Update the resume download link

**Contact Section** (`src/app/components/Contact.tsx`):
- Update email address
- Update location
- Add your social media links (GitHub, LinkedIn, Twitter)

### 2. Change Colors (Optional)

To modify the purple theme, edit `src/styles/theme.css`:

```css
:root {
  --primary: #a78bfa;        /* Main purple color */
  --background: #0a0a0f;     /* Background color */
  --foreground: #f0f0f5;     /* Text color */
  /* ... other color variables */
}
```

### 3. Add Your Resume PDF

1. Create a `public/assets` folder
2. Add your resume PDF: `public/assets/resume.pdf`
3. Update the download link in `Resume.tsx`:

```tsx
<a href="/assets/resume.pdf" download>
  <button>Download Resume (PDF)</button>
</a>
```

### 4. Update Favicon & Meta Tags

Edit `index.html` in the root directory:
- Update `<title>` tag
- Add meta description
- Change favicon

## 📦 Building for Production

When you're ready to deploy:

**Using npm:**
```bash
npm run build
```

**Using pnpm:**
```bash
pnpm build
```

This creates an optimized production build in the `dist/` folder.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Free)

1. Create account at https://vercel.com
2. Install Vercel CLI: `npm install -g vercel`
3. Run: `vercel`
4. Follow the prompts

### Option 2: Netlify (Free)

1. Create account at https://netlify.com
2. Drag and drop the `dist` folder to Netlify
3. Or connect your Git repository for auto-deployment

### Option 3: GitHub Pages (Free)

1. Install gh-pages: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

### Option 4: Other Platforms

- **Firebase Hosting**: https://firebase.google.com/docs/hosting
- **AWS S3**: https://aws.amazon.com/s3/
- **DigitalOcean**: https://www.digitalocean.com/

## 🔧 Troubleshooting

### Issue: Port 5173 already in use
```bash
# Kill the process using the port
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5173 | xargs kill
```

### Issue: Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Vite build errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Issue: TypeScript errors
Ensure you have the latest TypeScript:
```bash
npm install -D typescript@latest
```

## 📚 Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI Framework |
| TypeScript | Latest | Type Safety |
| Tailwind CSS | 4.1.12 | Styling |
| Vite | 6.3.5 | Build Tool |
| Motion | 12.23.24 | Animations |
| Lucide React | 0.487.0 | Icons |

## 📝 Scripts Reference

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
```

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format for better compression
2. **Lazy Load**: Components are already optimized with `whileInView`
3. **Code Splitting**: Vite automatically handles this
4. **Compress Assets**: Use tools like ImageOptim or TinyPNG

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Ensure all dependencies are installed correctly
3. Verify Node.js version (v18+ required)
4. Clear cache and reinstall dependencies

## 🌟 Credits

- **Design**: Custom modern portfolio design
- **Icons**: Lucide React
- **Images**: Unsplash (replace with your own)
- **Animations**: Motion (Framer Motion)

---

**Built with ❤️ using React and Tailwind CSS**

**Happy Coding! 🚀**

For questions or support, feel free to reach out!
