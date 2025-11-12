interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillCategory {
  [key: string]: Skill[];
}

export const skills: SkillCategory = {
  Frontend: [
    {
      name: "React",
      level: 90,
      description: "Expert in React, including hooks, context, and performance optimization"
    },
    {
      name: "TypeScript",
      level: 85,
      description: "Strong typing, interfaces, and advanced TypeScript features"
    },
    {
      name: "JavaScript",
      level: 95,
      description: "Deep understanding of ES6+, async programming, and DOM manipulation"
    },
    {
      name: "MUI",
      level: 80,
      description: "professional CSS, animations, responsive design, and CSS-in-JS"
    },
    {
      name: "Tailwind CSS",
      level: 90,
      description: "Creative  CSS, animations, responsive design, and CSS-in-JS"
    },
    {
      name: "Bootstrap",
      level: 80,
      description: "Modern CSS, animations, responsive design, and CSS-in-JS"
    }
  ],
  Backend: [
    {
  name: "PHP",
  level: 80,
  description: "Developed dynamic and secure server-side applications, handled form validation, and integrated MySQL for database operations."
},
{
  name: "Laravel",
  level: 85,
  description: "Built RESTful APIs, implemented authentication, managed Eloquent ORM, and optimized backend performance for scalable web applications."
},
    {
      name: "Node.js",
      level: 75,
      description: "RESTful APIs, Express.js, and server-side rendering"
    },
    {
      name: "Express.js",
      level: 75,
      description: "RESTful APIs, Express.js, and server-side rendering"
    },
    {
      name: "MongoDB",
      level: 70,
      description: "Schema design, resolvers, Client/Server managemant"
    },
    {
      name: "MYSQL",
      level: 80,
      description: "Schema design, perform operations,  Client/Server management"
    }
  ],
  Design: [
    {
      name: "UI/UX Design",
      level: 80,
      description: "User-centered design, wireframing, and prototyping"
    },
   
  ],
  Tools: [
    {
      name: "Git",
      level: 85,
      description: "Version control, branching strategies, and collaboration"
    },
    { name: "VS Code",
       level: 90,
       description: "Extensions, shortcuts, and productivity tips"}
    
  ]
};