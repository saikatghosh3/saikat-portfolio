import { Project } from '../types';
import image1 from '../assets/E-commerce.jpg';
import image2 from '../assets/Business.jpg';
import image3 from '../assets/Landing page.jpg';
import image4 from '../assets/Travel.jpg';

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart functionality and payment integration",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    imageUrl: image1, 
    liveUrl: "https://modernshop-e-commerce-website.vercel.app/",
    githubUrl: "https://github.com"
  },
  {
    title: "Business portfolio",
    description: "A business portfolio website with a modern design and smooth animations",
    technologies: ["React", "TypeScript", "Animations", "Tailwind CSS"],
    imageUrl: image2,
    liveUrl: "https://portfolio-website-business.netlify.app/",
    githubUrl: "https://github.com"
  },
  {
    title: "Landing Page Template",
    description: "A responsive landing page template with a clean design and reusable components",
    technologies: ["React", "Gsap", "Tailwind css", "TypeScript", "vite"],
    imageUrl: image3,
    liveUrl: "https://landing-page-design-eight-topaz.vercel.app/",
    githubUrl: "https://github.com"
  },
  {
    title: "Travel and turism website", 
    description: "A travel and tourism website with a booking system and user authentication",
    technologies: ["React", "TypeScript", "Redux", "Styled Components", "Firebase"],
    imageUrl: image4,
    liveUrl: "https://destination-travel-theta.vercel.app/",
    githubUrl: "https://github.com"
  }
  // {
  //   title: "Weather Dashboard",
  //   description: "Interactive weather dashboard with real-time updates and historical data visualization",
  //   technologies: ["React", "D3.js", "TypeScript", "API Integration"],
  //   imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80",
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com"
  // },
  // {
  //   title: "Fitness Tracking App",
  //   description: "Mobile-first fitness tracking application with workout plans and progress visualization",
  //   technologies: ["React Native", "TypeScript", "Redux", "Chart.js"],
  //   imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80",
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com"
  // }
];