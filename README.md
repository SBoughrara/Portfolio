# Seif Boughrara - Full-Stack Developer Portfolio

A modern, interactive portfolio website built with React 19, Tailwind CSS, and Vite. Features a minimalist geometric design with interactive mouse effects and smooth animations.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

The dev server will start at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

This generates optimized static files in the `dist/` directory ready for deployment.

## 📦 Deployment to Vercel

### Option 1: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Connect GitHub Repository
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Vite and configure the build settings
6. Click "Deploy"

### Option 3: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Other" and upload your project folder
4. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"

## 📋 Project Structure

```
react-portfolio/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── pages/          # Page components
│   │   ├── components/     # Reusable UI components
│   │   ├── contexts/       # React contexts
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Global styles & theme
│   └── index.html          # HTML template
├── vercel.json             # Vercel configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies & scripts
```

## 🎨 Features

- **Interactive Background**: Mouse-tracking glow effects with particle burst animations on click
- **Custom Cursor**: Animated red cursor that expands on hover over interactive elements
- **Responsive Design**: Fully responsive layout optimized for all screen sizes
- **Smooth Animations**: Framer Motion and Tailwind animations for polished interactions
- **Dark Theme**: Modern dark aesthetic with red accent colors
- **Geometric Design**: Minimalist geometric shapes and patterns throughout

## 🛠 Technologies

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

## 📝 Customization

### Update Contact Information
Edit `client/src/pages/Home.tsx` and update:
- Email address
- Phone number
- Social media links

### Modify Colors
Edit `client/src/index.css` and adjust the CSS variables in the `:root` section:
```css
--primary: #ef4444;  /* Red accent color */
--background: #0a0a0a;  /* Dark background */
```

### Add Your Photo
Replace the image URL in the hero section with your own photo URL.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Support

For issues or questions, please check the Vite and Tailwind documentation:
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Documentation](https://react.dev)
