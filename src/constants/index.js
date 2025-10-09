export const myProjects = [
  {
    id: 1,
    title: '3D Shirt Model Website',
    description:
        'A web application that allows users to customize a 3D shirt model in real-time, leveraging the power of Three.js for 3D rendering and the DALL-E API (OpenAI) for AI-driven texture generation.',
    subDescription: [
      'Developed an interactive 3D environment using Three.js and React to render and customize a virtual shirt model.',
      'Integrated the OpenAI DALL-E API via an Express backend to generate unique, AI-powered decals and full textures based on user text prompts.',
      'Implemented a React frontend with Tailwind CSS and Framer Motion for a smooth, modern, and animated user interface.',
      'Enabled real-time color changes, texture application (uploading files), and decal placement, with state management handled by Valtio for instant synchronization.',
      'Engineered a Node.js/Express backend route to handle API requests and safely transmit Base64 image data back to the client.',
    ],
    href: 'https://threed-shirt-project-vsok.onrender.com/',
    logo: '',
    image: '/assets/projects/threejs-shirt.png',
    tags: [
      {
        id: 1,
        name: 'OpenAI',
        path: '/assets/logos/openai.svg',
      },
      {
        id: 2,
        name: 'ThreeJS',
        path: '/assets/logos/threejs.png',
      },
      {
        id: 2,
        name: 'React',
        path: '/assets/logos/react.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/assets/logos/tailwindcss.svg',
      },
      {
        id: 4,
        name: 'Express',
        path: '/assets/logos/express.svg',
      },

    ],
  },
  {
    id: 1,
    title: 'MarOil HRMS',
    description:
      'A comprehensive internal application designed to streamline HR operations, including employee records management, payroll processing, and time-off tracking for a mid-sized corporation.',
    subDescription: [
      'Engineered a scalable MERN stack application (MongoDB, Express, React, NodeJS) to efficiently manage complex employee data.',
      'Implemented secure user roles and authentication for HR personnel using Node.js/Express and integrated MongoDB for flexible data storage.',
      'Developed a responsive, modern interface with React and Tailwind CSS, significantly improving HR productivity.',
      'Utilized Redux Toolkit (RTK) for centralized state management to handle complex payroll and attendance workflows.',
      'email: admin@admin || password: admin'
    ],
    href: 'https://hrapp-client.onrender.com/login',
    logo: '',
    image: '/assets/projects/hrApp.png',
    tags: [
      {
        id: 1,
        name: 'MongoDB',
        path: '/assets/logos/mongodb.svg',
      },
      {
        id: 2,
        name: 'React',
        path: '/assets/logos/react.svg',
      },
      {
        id: 3,
        name: 'NodeJS',
        path: '/assets/logos/nodejs.svg',
      },
      {
        id: 4,
        name: 'Express',
        path: '/assets/logos/express.svg',
      },
      {
        id: 5,
        name: 'TailwindCSS',
        path: '/assets/logos/tailwindcss.svg',
      },
      {
        id: 6,
        name: 'RTK',
        path: '/assets/logos/rtk.svg',
      },
    ],
  },
  {
    id: 2,
    title: 'Little Lemon Website',
    description:
      'The capstone project for the Meta Front-End Developer certification, focusing on building a dynamic and responsive website with a fully functional table reservation system.',
    subDescription: [
      'Developed a single-page application (SPA) using React to create a dynamic and modern user interface.',
      'Implemented robust form state management and validation for the reservation system, ensuring data integrity.',
      'Designed and coded a fully responsive layout using CSS/HTML to provide an excellent experience across all devices.',
      'Integrated mock API logic to dynamically manage available booking times based on the selected date.',
    ],
    href: 'https://little-lemon-webapp.onrender.com/',
    logo: '',
    image: '/assets/projects/little-lemon.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/logos/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: '/assets/logos/css3.svg',
      },
      {
        id: 3,
        name: 'HTML',
        path: '/assets/logos/html5.svg',
      },

    ],
  },
  {
    id: 3,
    title: 'This Portfolio',
    description:
      'The very portfolio you are viewing, built as a modern, high-performance Single Page Application (SPA) with a focus on interactive 3D elements.',
    subDescription: [
      'Developed the application using React and modern functional components for a modular, scalable architecture.',
      'Designed and styled all responsive UI components using Tailwind CSS for rapid development and consistency.',
      'Integrated Three.js and React Three Fiber to create complex, engaging 3D graphics and interactive scenes.',
      'Utilized Framer Motion for fluid transitions and a polished user experience.',
    ],
    href: '',
    logo: '',
    image: '/assets/projects/portfolio.png',
    tags: [
      {
        id: 1,
        name: 'ThreeJS',
        path: '/assets/logos/threejs.png',
      },
      {
        id: 2,
        name: 'React',
        path: '/assets/logos/react.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/assets/logos/tailwindcss.svg',
      },
    ],
  }
]

export const mySocials = [
  {
    name: 'Github',
    href: 'https://github.com/asdruaj?tab=repositories',
    icon: '/assets/logos/light-github.svg',
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/asdrubal-aldana-40a53b255/',
    icon: '/assets/socials/linkedIn.svg',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/asdrubaaljr/?hl=es',
    icon: '/assets/socials/instagram.svg',
  },
]

export const experiences = [
  {
    title: 'Meta Front-End Developer Specialization',
    location: 'Meta',
    date: '2025',
    contents: [
      'I completed the Meta curriculum to solidify my skills in building robust web applications. This training focused heavily on real-world application, proving my ability to use React for building scalable components, manage complex state, and implement modern UI/UX principles into production-ready code.',

      ' I gained expertise in creating dynamic user experiences using React and learned crucial skills in API integration, version control (Git), and design accessibility, ensuring the solutions I build are modern and inclusive.',

    ],
  },
  {
    title: 'Azure Fundamentals',
    location: 'Microsoft',
    date: '2025',
    contents: [
      'My development knowledge is significantly expanded by the Microsoft Azure Fundamentals (AZ-900) certification. This course established my foundational understanding of core cloud services, covering essential areas like compute, networking, and storage. It validates my ability to discuss cloud benefits such as high availability and disaster recovery.',
      'I am proficient in identifying suitable Azure services for web solutions, including Azure App Service for hosting and Azure Functions for serverless tasks. This cloud literacy allows for seamless collaboration with DevOps teams. I ensure the applications I build are designed for easy and efficient integration into the cloud ecosystem.',

    ],
  },
  {
    title: 'Informatics Engineer',
    location: 'Universidad Nororiental Privada Gran Mariscal de Ayacucho',
    date: '2019-2025',
    contents: [
      'The curriculum provided deep dives into essential areas for a modern developer. I gained expertise in Data Structures, Algorithms, Database Management, and Software Engineering methodologies. This core knowledge is what allows me to write clean, efficient, and scalable code today.',
      'My commitment to technical mastery is reflected in my academic performance. I graduated with an outstanding overall grade of 16.7/20. This strong achievement showcases my dedication to rigor and my proven ability to consistently excel in challenging technical environments.',

      'The engineering discipline instilled during these years is invaluable to my work. It equipped me with the logical framework necessary for effective problem-solving and system architecture. My academic background ensures every project I undertake is built on sound, engineered principles.'
    ],
  },
]
