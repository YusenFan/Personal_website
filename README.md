# Yusen Fan - Personal Portfolio Website

A modern, interactive personal portfolio website showcasing my work as a Software Engineer and Founder. Built with React, TypeScript, and Tailwind CSS, featuring a terminal-inspired design with smooth animations and responsive layout.

## Features

- **Interactive Terminal** - Press `Ctrl + ` ` to toggle an interactive terminal with custom commands
- **Smooth Animations** - Powered by Tailwind CSS animations and transitions
- **Responsive Design** - Fully responsive across all devices
- **Terminal Aesthetic** - Inspired by developer tools with a modern twist
- **Multiple Sections**:
  - Hero with typing animation
  - About Me with highlights
  - Skills with filtering and progress bars
  - Work Experience with timeline
  - Projects showcase with category filters
  - Resume download section
  - Contact form with social media links

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations (installed)
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist` directory.

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Customization

### Content Already Customized

The portfolio is already populated with your real information from your resume:
- ✅ Name: Yusen Fan
- ✅ Contact: YusenFan@u.nus.edu, +65 84038810
- ✅ Location: Singapore
- ✅ Social Links: GitHub (yusenfan), LinkedIn (yusenfan)
- ✅ Professional Experience: All 6 positions (FlintX, ProTechs, Classkick, Dempsey Capital, Wave Therapeutics, Codesurance)
- ✅ Skills: 19 technical skills across Frontend, Backend, and Infrastructure
- ✅ Projects: 6 major projects including award-winning Nexus Wrap and Diabetic Ulcer Detection
- ✅ Education: NUS Electrical & Computer Engineering

### To Update Information Later

If you need to update any information in the future:
1. **Hero Section**: Edit `src/components/Hero.tsx`
2. **About Me**: Edit `src/components/About.tsx`
3. **Skills**: Edit `src/components/Skills.tsx`
4. **Experience**: Edit `src/components/Experience.tsx`
5. **Projects**: Edit `src/components/Projects.tsx`
6. **Contact**: Edit `src/components/Contact.tsx`
7. **Terminal Commands**: Edit `src/components/Terminal.tsx`

### Add Your Resume

1. Place your resume PDF in the `public` folder as `resume.pdf`
2. The download/view buttons in the Resume section will automatically link to it

### Color Scheme

The color scheme is defined in `tailwind.config.js`. You can customize:
- `terminal-green`: Main accent color
- `terminal-blue`: Secondary accent color
- `dark-bg`: Main background
- `dark-surface`: Card/section backgrounds

### Terminal Commands

Edit the terminal commands in `src/components/Terminal.tsx` (lines 53-107) to add your own custom commands and responses.

## Interactive Features

- **Smooth Scrolling**: Click navigation items to smoothly scroll to sections
- **Terminal Toggle**: Press `Ctrl + ` ` to open/close the interactive terminal
- **Skill Filtering**: Filter skills by category (Frontend, Backend, Tools)
- **Project Filtering**: Filter projects by type (Full Stack, Frontend, Backend)
- **Hover Effects**: Interactive cards and buttons with glow effects
- **Responsive Navigation**: Mobile-friendly hamburger menu

## Keyboard Shortcuts

- `Ctrl + ` ` - Toggle terminal
- `Arrow Up/Down` (in terminal) - Navigate command history

## Deployment

This site can be deployed to various platforms:

### Vercel (Recommended)
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Netlify
1. Connect your git repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "npm run build && gh-pages -d dist"`
3. Run: `npm run deploy`

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built with inspiration from developer-focused portfolio designs and terminal aesthetics.
