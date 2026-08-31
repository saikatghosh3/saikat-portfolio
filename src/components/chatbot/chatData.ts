export interface ChatIntent {
  patterns: string[];
  response: string;
}

export interface ChatCategory {
  name: string;
  icon: string;
  intents: ChatIntent[];
}

export const BOT_NAME = "Assistant";
export const BOT_TAGLINE = "Portfolio Assistant";

export const GREETINGS: string[] = [
  "Hello! I'm the **portfolio assistant** here to help you. I can tell you everything about Saikat's skills, experience, projects, education, and more. What would you like to know?",
  "Welcome to Saikat's portfolio! I'm the assistant — ask me anything about his work, tech stack, skills, or experience.",
  "Hi! Welcome. I'm here to help you learn about Saikat Ghosh — his skills, projects, experience, and more. What interests you?",
];

export const FALLBACK_RESPONSES: string[] = [
  "That's an interesting question! While I don't have a specific answer for that, I can help you with details about Saikat's **skills**, **experience**, **projects**, **education**, or **certifications**. What would you like to explore?",
  "I'm not sure I understand that fully. But I'd love to help! Try asking about Saikat's **tech stack**, **work history**, **projects**, or how to **contact** him.",
  "Hmm, that's beyond my current knowledge. However, I'm an expert on everything Saikat Ghosh! Ask me about his **skills**, **experience**, **projects**, or **education**.",
  "Great question, but I don't have that info yet. I can tell you all about Saikat's **frontend expertise**, **backend skills**, **notable projects**, or **career journey**. Pick a topic!",
  "I appreciate the curiosity! That specific topic isn't in my database, but I can share insights about Saikat's **professional background**, **technical abilities**, **certifications**, or **contact information**.",
];

export const chatCategories: ChatCategory[] = [
  {
    name: "Blog",
    icon: "📝",
    intents: [
      {
        patterns: ["blog", "blogs", "write", "writes", "writing", "article", "articles", "post", "posts", "content"],
        response: "Yes, Saikat **writes blogs**! 📝 He runs a blog called **\"Learning English and Web Development\"**.\n\nYou can find it here:\n📖 [Visit His Blog](https://learning-english-and-web-development.blogspot.com)\n\nOn his blog, he shares content about two main topics:\n- **Web Development** — tips, tutorials, and insights from his work with React, TypeScript, Next.js, and more\n- **English** — language learning content and resources\n\nIt's linked right in the **Blog** section of his website's navigation!",
      },
      {
        patterns: ["blog url", "blog link", "blog website", "blog address", "blog platform"],
        response: "Here's Saikat's blog link:\n\n📖 [Learning English and Web Development](https://learning-english-and-web-development.blogspot.com)\n\nIt covers **web development** tutorials and **English** learning content. You can also reach it from the **Blog** link in the website navbar!",
      },
      {
        patterns: ["learning english", "english", "english learning", "web development blog", "blog topics", "blog content"],
        response: "Saikat's blog is called **\"Learning English and Web Development\"** — and as the name suggests, it covers **two topics**:\n\n1. **English Learning** — language learning tips and resources\n2. **Web Development** — tutorials and insights about React, TypeScript, Next.js, Tailwind CSS, and modern frontend development\n\n📖 [Visit His Blog](https://learning-english-and-web-development.blogspot.com)",
      },
    ],
  },
  {
    name: "General",
    icon: "👋",
    intents: [
      {
        patterns: ["who are you", "what are you", "your name", "what is your name", "tell me about yourself", "describe yourself", "introduce yourself"],
        response: "I'm the **portfolio assistant** 🤖 for **Saikat Ghosh's** website.\n\nI'm here to help you learn about Saikat and his work. I can answer questions about his:\n- 💻 **Skills & Tech Stack**\n- 💼 **Work Experience**\n- 🚀 **Projects**\n- 🎓 **Education & Certifications**\n- 📝 **Blog**\n- 📬 **Contact information**\n\nI'm a smart keyword-based assistant trained specifically on the content of this portfolio. Ask me anything about Saikat!",
      },
      {
        patterns: ["what do you do", "what you do", "your purpose", "how can you help", "what can you do", "what is your job", "your job", "aap kya karte ho"],
        response: "My job is simple: to answer your questions about **Saikat Ghosh** and his portfolio! 🎯\n\nHere's what I can help with:\n- **Skills & Tech Stack** — His technical expertise\n- **Work Experience** — His professional journey\n- **Projects** — Featured and recent work\n- **Education** — Academic background & certifications\n- **Blog** — His writing on web dev & English\n- **Contact** — How to reach him\n\nJust ask me anything about Saikat!",
      },
      {
        patterns: ["are you ai", "are you human", "are you real", "are you a robot", "are you chatbot", "are you bot"],
        response: "I'm the **portfolio assistant** 🤖 for Saikat's website.\n\nUnlike large AI models like ChatGPT, I don't use external APIs. I'm a **keyword-based assistant** that's been trained on the content of this portfolio, so I can give you accurate, instant answers about Saikat's skills, experience, projects, and more — all without any AI API keys!",
      },
      {
        patterns: ["hello", "hi", "hey", "greetings", "good morning", "good evening", "what's up", "sup"],
        response: "Hello! I'm the **portfolio assistant**. I can tell you everything about Saikat's skills, experience, projects, education, and more. What would you like to know?",
      },
      {
        patterns: ["who is saikat", "tell me about saikat", "about saikat", "introduce saikat", "about him", "tell me about him"],
        response: "**Saikat Ghosh** is a passionate **Frontend Developer** from Dhaka, Bangladesh with over **2+ years** of professional experience. He specializes in building modern, responsive, and high-performance web applications using **React**, **TypeScript**, **Next.js**, **Tailwind CSS**, and more. He's worked at companies like **Roxnor**, **Rafusoft**, **Itransition**, and **Augmedix**. He's always open to new opportunities and collaborations!",
      },
      {
        patterns: ["thank", "thanks", "thank you", "appreciate"],
        response: "You're welcome! Glad I could help. If you have any more questions about Saikat's work or want to get in touch, feel free to ask! 😊",
      },
      {
        patterns: ["bye", "goodbye", "see you", "later"],
        response: "Goodbye! Thanks for visiting Saikat's portfolio. Feel free to come back anytime if you have more questions. Have a great day! 👋",
      },
    ],
  },
  {
    name: "Skills",
    icon: "💻",
    intents: [
      {
        patterns: ["skill", "skills", "tech stack", "technology", "technologies", "what does he know", "what can he do", "tech", "tools"],
        response: "Saikat is proficient in a wide range of technologies:\n\n**Frontend:**\n- **React** (90%) — Hooks, Context, Performance Optimization\n- **TypeScript** (85%) — Strong typing, Interfaces, Advanced Features\n- **JavaScript** (95%) — ES6+, Async Programming, DOM\n- **Next.js** (85%) — SSR, SSG, App Router\n- **Tailwind CSS** (90%) — Responsive Design, Animations\n- **MUI** (80%) — Component Library, Theming\n- **Sass** & **Ant Design**\n\n**Backend:**\n- **PHP / Laravel** (85%) — RESTful APIs, Auth, Eloquent ORM\n- **Node.js / Express.js** (75%)\n- **MongoDB** (70%) & **MySQL** (80%)\n\n**Tools:** Git, VS Code, Webpack, Vite",
      },
      {
        patterns: ["react", "reactjs", "react.js", "frontend", "frontend skill"],
        response: "Saikat's **React** expertise is at a **90% proficiency level**. He's skilled in:\n\n- **Hooks** — useState, useEffect, useContext, useMemo, useCallback, custom hooks\n- **Context API** — Global state management\n- **Performance Optimization** — Memoization, lazy loading, code splitting\n- **Component Architecture** — Reusable, maintainable UI components\n- **Framer Motion** — Advanced animations and transitions\n\nHe uses React as his primary framework at **Roxnor** where he builds modern, scalable web applications.",
      },
      {
        patterns: ["backend", "server", "node", "nodejs", "express", "php", "laravel", "database"],
        response: "Saikat has solid **backend** skills too:\n\n- **PHP / Laravel** (85%) — RESTful APIs, Authentication, Eloquent ORM, CRUD operations\n- **Node.js / Express.js** (75%) — Server-side APIs, REST architecture\n- **MongoDB** (70%) — Schema design, NoSQL databases\n- **MySQL** (80%) — Relational databases, Schema design\n\nHe worked as a **Junior Backend Developer** at Automation Service Limited with **Python/Django**, and later built Laravel apps at **Rafusoft**.",
      },
      {
        patterns: ["typescript", "ts", "javascript", "js"],
        response: "Saikat has strong **JavaScript** (95%) and **TypeScript** (85%) skills:\n\n- **ES6+** — Arrow functions, destructuring, modules, template literals\n- **Async/Await & Promises** — Asynchronous programming\n- **DOM Manipulation** — Event handling, traversal\n- **TypeScript Interfaces & Generics** — Strong typing patterns\n- **Advanced TS** — Utility types, mapped types, conditional types\n\nJavaScript is his core language, and TypeScript is his go-to for scalable code.",
      },
      {
        patterns: ["css", "tailwind", "styling", "design", "ui", "ux", "responsive", "sass"],
        response: "Saikat's **styling** expertise includes:\n\n- **Tailwind CSS** (90%) — Utility-first CSS, custom themes, responsive design\n- **MUI (Material-UI)** (80%) — Component theming, customization\n- **Sass** — Variables, mixins, nesting, partials\n- **Ant Design** — Enterprise-level UI components\n- **UI/UX Design** (80%) — User-centered design, wireframing, prototyping\n\nHe creates pixel-perfect, responsive designs that work seamlessly across all devices.",
      },
      {
        patterns: ["nextjs", "next.js", "next"],
        response: "Saikat's **Next.js** proficiency is at **85%**. He uses it for:\n\n- **Server-Side Rendering (SSR)** — Dynamic content rendering\n- **Static Site Generation (SSG)** — Pre-rendered pages for speed\n- **App Router** — Modern routing with layouts and nested routes\n- **API Routes** — Backend endpoints within Next.js\n- **Performance Optimization** — Image optimization, fonts, metadata\n\nHe built **Desi Mango**, **E-commerce**, and **Mobile & Gadget** stores using Next.js with MongoDB.",
      },
    ],
  },
  {
    name: "Experience",
    icon: "💼",
    intents: [
      {
        patterns: ["experience", "work", "job", "career", "work history", "where has he worked", "employment", "work experience"],
        response: "Saikat's professional journey:\n\n**1. Software Developer (React.js)** — Roxnor, Dhaka\n📅 Jan 2026 – Apr 2026\n- Building scalable web apps with React.js, JS, and TypeScript\n- Reusable UI components, API integration, code reviews\n\n**2. Junior Web Developer** — Rafusoft, Dhaka\n📅 Aug 2025 – Dec 2025\n- PHP, Laravel, React, TypeScript, Tailwind CSS, MySQL\n- Responsive design, feature development\n\n**3. Intern Frontend Developer** — Itransition Group\n📅 Jul 2024 – Nov 2024\n- React, TypeScript, Next.js, MUI, Tailwind CSS\n- Also worked with Node.js, Express.js, MongoDB\n\n**4. Medical Scribe** — Augmedix Bangladesh\n📅 May 2023 – Aug 2023\n- Medical scribing, 50wpm typing, US healthcare\n\n**5. Junior Backend Developer** — Automation Service Limited\n📅 Sep 2022 – Dec 2022\n- Python, Django development",
      },
      {
        patterns: ["roxnor", "current job", "recent job", "latest job", "where does he work now"],
        response: "At **Roxnor** (Jan 2026 – Apr 2026), Saikat worked as a **Software Developer** specializing in **React.js**:\n\n- Developed modern and scalable web applications using React.js, JavaScript, and TypeScript\n- Built reusable and maintainable UI components with responsive design\n- Integrated APIs and handled dynamic data for improved UX\n- Collaborated through code reviews, Git, and agile practices\n- Optimized performance and improved UI/UX with modern practices\n\nThis is his most recent role!",
      },
      {
        patterns: ["rafusoft", "second job"],
        response: "At **Rafusoft** (Aug 2025 – Dec 2025), Saikat was a **Junior Web Developer**:\n\n- Worked on multiple projects using PHP, Laravel, React, TypeScript, JavaScript, Tailwind CSS, and MySQL\n- Implemented responsive designs and optimized website performance\n- Collaborated closely with the team with clear communication\n- Added new features and improvements for enhanced functionality",
      },
      {
        patterns: ["intern", "internship", "itransition"],
        response: "At **Itransition Group** (Jul 2024 – Nov 2024), Saikat was an **Intern Frontend Developer**:\n\n- Worked on multiple frontend projects with React, TypeScript, JavaScript, Tailwind CSS, MUI, and Next.js\n- Also gained backend experience with Node.js, Express.js, MongoDB, and MySQL\n- Implemented responsive designs and optimized performance\n- Collaborated with the team and maintained excellent communication\n\nThis is where he gained full-stack exposure!",
      },
    ],
  },
  {
    name: "Projects",
    icon: "🚀",
    intents: [
      {
        patterns: ["timeframe", "how long", "how much time", "time to complete", "timeline", "deadline", "duration", "how many days", "how many weeks", "how long will it take", "delivery time", "delivery", "estimate"],
        response: "The **timeframe to complete a project** depends on its **complexity and scope**! Here's a typical estimate from Saikat:\n\n🕐 **Small Project** (Landing page, simple portfolio, small React app)\n→ **3–7 days**\n\n🕓 **Medium Project** (Business website, multi-page React app, dashboard)\n→ **1–3 weeks**\n\n🕔 **Large Project** (Full-stack e-commerce, SaaS platform, complex web app)\n→ **3–6+ weeks**\n\nThe exact timeline depends on your **requirements, features, and responsiveness** to feedback. For a more precise estimate, it's best to **contact Saikat** with your project details!\n\n📧 **Email:** saikat10ghosh@gmail.com",
      },
      {
        patterns: ["project", "projects", "portfolio", "work samples", "what has he built", "show me projects", "coding projects"],
        response: "Here are Saikat's featured projects:\n\n🏥 **HealthCare** — Full-featured healthcare platform with patient portal\n`React · TypeScript · Tailwind CSS · Redux`\n🔗 [Live Demo](https://react-healthcare.vercel.app/)\n\n🥭 **Desi Mango** — Full-stack responsive website\n`Next.js · Tailwind CSS · MongoDB`\n🔗 [Live Demo](https://deshi-mango.vercel.app/)\n\n🛒 **E-commerce** — Full-stack e-commerce platform\n`Next.js · Tailwind CSS · MongoDB`\n🔗 [Live Demo](https://e-commerce-fullstack-ivory.vercel.app/)\n\n📱 **Mobile & Gadget Store** — E-commerce for mobile devices\n`Next.js · Tailwind CSS · MongoDB`\n🔗 [Live Demo](https://mobile-and-gadget.vercel.app/)\n\n🎬 **Movie App** — Responsive movie browsing app\n`React · TypeScript · Tailwind CSS · Vite`\n🔗 [Live Demo](https://react-movie-app-seven-pi.vercel.app/)\n\n💼 **Business Portfolio** — Modern portfolio with animations\n`React · TypeScript · Tailwind CSS · Framer Motion`\n🔗 [Live Demo](https://business-portfolio-website-responsive.vercel.app/)\n\n📊 **Expense Tracker** — Personal finance tracking app\n`React · Tailwind CSS`",
      },
      {
        patterns: ["ecommerce", "e-commerce", "e commerce", "shopping", "store"],
        response: "Saikat has built **3 full-stack e-commerce projects** using **Next.js** and **MongoDB**:\n\n1. **E-commerce Website** — Full-stack e-commerce platform with product listings, cart, and checkout\n   🔗 [Live Demo](https://e-commerce-fullstack-ivory.vercel.app/)\n\n2. **Mobile & Gadget Store** — Specialized e-commerce for mobile devices and gadgets\n   🔗 [Live Demo](https://mobile-and-gadget.vercel.app/)\n\n3. **Desi Mango** — A full-stack website with clean design\n   🔗 [Live Demo](https://deshi-mango.vercel.app/)\n\nAll built with **Next.js**, **Tailwind CSS**, and **MongoDB** for the backend.",
      },
      {
        patterns: ["healthcare", "health care", "medical"],
        response: "**HealthCare** is one of Saikat's featured projects — a full-featured healthcare platform with:\n\n- Patient portal\n- Payment integration\n- Responsive design\n- Modern UI/UX\n\n**Tech Stack:** React, TypeScript, Tailwind CSS, Redux\n\n🔗 [Live Demo](https://react-healthcare.vercel.app/)\n\nThis project showcases his ability to build complex, real-world applications.",
      },
      {
        patterns: ["movie", "movie app", "entertainment"],
        response: "**Movie App** — A responsive movie browsing application with:\n\n- Clean, modern design\n- Reusable components\n- Responsive across all devices\n\n**Tech Stack:** React, TypeScript, Tailwind CSS, Vite\n\n🔗 [Live Demo](https://react-movie-app-seven-pi.vercel.app/)\n\nA great example of Saikat's frontend UI skills!",
      },
      {
        patterns: ["featured", "best project", "top project", "main project", "highlight"],
        response: "Saikat's **featured** projects are:\n\n1. 🏥 **HealthCare** — Complex healthcare platform (React + Redux)\n2. 🥭 **Desi Mango** — Full-stack website (Next.js + MongoDB)\n3. 🛒 **E-commerce** — E-commerce platform (Next.js + MongoDB)\n4. 📱 **Mobile & Gadget Store** — E-commerce (Next.js + MongoDB)\n\nThese showcase his expertise in both **React** and **Next.js** with full-stack capabilities.",
      },
    ],
  },
  {
    name: "Education",
    icon: "🎓",
    intents: [
      {
        patterns: ["education", "degree", "university", "college", "school", "academic", "study", "studies", "qualification"],
        response: "Saikat's educational background:\n\n🎓 **Bachelor of Technology in Computer Science**\nJawaharlal Nehru Technological University, Anantapur\n📅 Graduated: 2021\n- First-class degree with distinction\n- 6-month project on Google Drive clone with encryption/decryption\n- Participated in coding competitions, workshops, and hackathons\n\n🎓 **Higher Secondary School Certificate**\nB.A.F Shaheen College\n📅 2013 — GPA: 5.00\n- Best Student Award in science stream\n- Won medals in games and sports\n\n🎓 **Secondary School Certificate**\nDaud Public School\n📅 2011 — GPA: 5.00\n- Team leader in multiple events\n- Participated in sports and won medals",
      },
      {
        patterns: ["certification", "certifications", "certificate", "certified", "courses", "course"],
        response: "Saikat holds the following **certifications**:\n\n📜 **React.js Software Development Certification**\nIssuer: Roxnor Bangladesh | Date: April 2026\nCovered modern React concepts, component architecture, hooks, state management, API integration, routing, and best practices for responsive, scalable web apps.\n\n📜 **Junior Web Developer Certification**\nIssuer: Rafusoft | Date: November 2025\nCovered PHP, Laravel framework, MySQL, MVC architecture, authentication, CRUD operations, RESTful APIs, and responsive web development.\n\nBoth certifications are from his most recent professional roles!",
      },
    ],
  },
  {
    name: "Contact",
    icon: "📬",
    intents: [
      {
        patterns: ["contact", "email", "phone", "reach", "get in touch", "hire", "freelance", "available", "collaboration", "how to contact", "linkedin", "github"],
        response: "Here's how you can reach Saikat:\n\n📧 **Email:** saikat10ghosh@gmail.com\n💼 **LinkedIn:** [linkedin.com/in/saikat-ghosh-52671b344](https://www.linkedin.com/in/saikat-ghosh-52671b344)\n🐙 **GitHub:** [github.com/saikatghosh3](https://github.com/saikatghosh3)\n📍 **Location:** Dhaka, Bangladesh\n\n🟢 **Currently available for freelance work!**\n\nYou can also use the **Contact** section on this website to send a message directly.",
      },
      {
        patterns: ["hire", "available", "freelance", "open to work", "looking for job", "job opportunity", "recruit"],
        response: "Yes! **Saikat is available for freelance work** and open to new opportunities.\n\nHe's currently based in **Dhaka, Bangladesh** and is open to:\n- **Full-time positions** (Frontend / Full-Stack)\n- **Freelance projects**\n- **Remote collaborations**\n\n**Contact:** saikat10ghosh@gmail.com\n**LinkedIn:** [Connect with him](https://www.linkedin.com/in/saikat-ghosh-52671b344)\n\nFeel free to reach out!",
      },
      {
        patterns: ["location", "where", "where does he live", "where is he from", "country", "city"],
        response: "Saikat is based in **Dhaka, Bangladesh** 🇧🇩\n\nHe's open to remote work and collaborations worldwide!",
      },
      {
        patterns: ["github", "code", "repository", "repos"],
        response: "Saikat's GitHub: [github.com/saikatghosh3](https://github.com/saikatghosh3)\n\nCheck out his repositories to see his code, contributions, and open-source work!",
      },
      {
        patterns: ["linkedin", "professional network"],
        response: "Connect with Saikat on LinkedIn: [linkedin.com/in/saikat-ghosh-52671b344](https://www.linkedin.com/in/saikat-ghosh-52671b344)\n\nHe's active on LinkedIn and open to networking!",
      },
    ],
  },
];

export const TYPING_DELAY = { min: 800, max: 1800 };
