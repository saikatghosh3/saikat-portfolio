import { Certification } from '../types';
import image1 from '../assets/roxnor certificate.jpeg';
import image2 from '../assets/rafusoft certificate.jpeg';

export const certifications: Certification[] = [
{
  title: "React.js Software Development Certification",
  issuer: "Roxnor Bangladesh",
  date: "April 2026",
  description:
    "Successfully completed a React.js software development program covering modern React concepts, component-based architecture, hooks, state management, API integration, routing, and best practices for building responsive and scalable web applications.",
  imageUrl: image1,
},
{
  title: "Junior Web Developer Certification",
  issuer: "Rafusoft",
  date: "November 2025",
  description:
    "Successfully completed a Full Stack PHP Laravel development program covering PHP, Laravel framework, MySQL, MVC architecture, authentication, CRUD operations, RESTful APIs, and responsive web application development.",
  imageUrl: image2,
},
];
