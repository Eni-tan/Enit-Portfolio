# Portfolio Website

A modern, animated, and responsive portfolio website built with React, React Router, and CSS Modules.

## Features

✨ **Smooth Animations** - Scroll reveal animations and smooth transitions throughout
🎨 **Animated Background** - Interactive glowing cursor effect that follows mouse movement
📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
⚡ **Lazy Loading** - React.lazy and Suspense for optimal performance
🧭 **React Router** - Smooth navigation between sections
🎯 **CSS Modules** - Scoped styling for maintainability
📊 **Animated Skills** - Progress bars that animate on scroll
💼 **Portfolio Showcase** - Grid layout for 10 projects
📧 **Contact Form** - Form validation and user feedback
🔗 **Social Links** - Connect via Facebook, Twitter, Instagram, and LinkedIn

## Sections

- **Profile/Hero** - Introduction with profile image, bio, and CV download
- **Education** - Educational background in timeline format
- **Experience** - Professional experience with detailed descriptions
- **Skills** - Animated progress bars showing proficiency levels
- **Portfolio** - Showcase of 10 projects with descriptions
- **Contact** - Working contact form with validation
- **Footer** - Social links and availability message

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Customization Guide

### 1. Personal Information

Update your personal details in `src/components/Profile/Profile.js`:
- Replace "Your Name" with your actual name
- Update the position/title
- Modify the about me text
- Change location
- Update email address
- Add your profile image (replace the imagePlaceholder div)
- Upload your CV and update the download link

### 2. Profile Image

Replace the placeholder in `src/components/Profile/Profile.js`:
```jsx
<img src="/path-to-your-image.jpg" alt="Profile" />
```

### 3. Education & Experience

Edit the data arrays in:
- `src/components/Education/Education.js`
- `src/components/Experience/Experience.js`

### 4. Skills

Modify the skills array in `src/components/Skills/Skills.js` to reflect your actual skills and proficiency levels.

### 5. Portfolio Projects

Update the projects array in `src/components/Portfolio/Portfolio.js`:
- Add your project images
- Update project names, roles, and descriptions
- Add real project links

### 6. Social Links

Update social media links in `src/components/Footer/Footer.js`:
- Facebook
- Twitter
- Instagram
- LinkedIn

### 7. Colors & Styling

The main gradient colors can be changed in:
- `src/index.css` - Background gradient
- Component CSS modules - Adjust individual section colors

Current gradient: Purple to Pink (#667eea to #764ba2)

## Project Structure

```
src/
├── components/
│   ├── AnimatedBackground/
│   ├── NavBar/
│   ├── Profile/
│   ├── Education/
│   ├── Experience/
│   ├── Skills/
│   ├── Portfolio/
│   ├── Contact/
│   └── Footer/
├── hooks/
│   └── useScrollReveal.js
├── App.js
├── App.module.css
├── index.js
└── index.css
```

## Build for Production

Create an optimized production build:

```bash
npm run build
```

The build folder will contain optimized files ready for deployment.

## Deployment

You can deploy this site to:
- **Vercel** - `vercel --prod`
- **Netlify** - Drag and drop the build folder
- **GitHub Pages** - Use gh-pages package
- **Any static hosting** - Upload the build folder

## Technologies Used

- React 18
- React Router DOM 6
- CSS Modules
- Intersection Observer API (for scroll animations)
- Modern ES6+ JavaScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lazy loading for all route components
- Optimized animations with CSS transforms
- Efficient scroll detection with Intersection Observer
- Minimal JavaScript bundle size

## License

This project is open source and available for personal and commercial use.

## Contact

Feel free to reach out if you have any questions or suggestions!

---

Made with ❤️ using React
