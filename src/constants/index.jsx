import project1 from "../assets/Instagram post - 8.png";
import project2 from "../assets/port.png";
import project3 from "../assets/t.png";
import project4 from "../assets/logoP.png";
import project5 from "../assets/nam.png";
import project6 from "../assets/Instagram post - 31.png";
// import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiCodeSSlashLine
} from "react-icons/ri";

import { SiNextdotjs, SiFigma, SiAdobephotoshop } from "react-icons/si";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Rabab Qasim",
  role: "Front End Developer | Ui Ux designer | Graphic designer",
  subheading:
    "I’m a creative front-end developer who loves building responsive websites with seamless user experiences. As a UI/UX designer, I craft intuitive interfaces, and my graphic design work brings powerful visuals to life. Let's turn your ideas into reality!",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Music App UI/UX Design",
    description:
      "A Figma-designed music streaming app with 15+ pages, featuring song screens, customizable playlists, and options like most played, liked songs, and recently added. Scalable for future features.",
    techStack: ["Figma", "PS"],
    imgSrc: project1,
    link: "https://www.behance.net/gallery/209025257/music-app-design",
  },
  {
    id: 2,
    title: "Modern Portfolio Website",
    description:
      "A sleek, black-themed portfolio website built with React.js, Vite, and Tailwind CSS. Featuring multiple sections, this responsive design showcases work in a visually engaging and modern layout.",
    techStack: ["React js", "tailwind css", "framer motion "],
    imgSrc: project2,
    link: "modern-react-portfolio-seven.vercel.app",
  },
  {
    id: 3,
    title: "Weather App UI",
    description:"A responsive weather app built with React.js, TypeScript, and CSS. The app delivers real-time weather data with a clean, user-friendly interface, offering features like current conditions, forecasts, and location-based updates.",

    techStack: ["react js", "Typescript"],
    imgSrc: project3,
    link: "https://github.com/rabab003/weather",  
  
  },
  {
    id: 4,
    title: "Logoply Landing Page",
    description:
      "A static landing page for the startup Logoply, designed with HTML, Tailwind CSS, and React.js. This professional and elegant layout highlights the company’s offerings with a clean, user-friendly design.",
    techStack: ["React js","Tailwind CSS"],
    imgSrc: project4,
    link: "https://github.com/rabab003/react-projects/tree/main/logoPly",
  },
  {
    id: 5,
    title: "Namari Landing Page",
    description:
      "A static landing page for the startup Namari, developed with HTML, CSS, JavaScript, and Tailwind CSS. This design offers a professional, elegant layout to showcase the company’s brand and services.",
    techStack: ["HTML","Tailwind Css"],
    imgSrc: project5,
    link: "https://github.com/rabab003/tailwind/tree/main/namary",
  },
  {
    id: 6,
    title: "NFT Website Design",
    description:
      "A dynamic, visually captivating website designed in Figma, tailored for showcasing NFT products. The design includes engaging sections to highlight featured NFTs, collections, and creators, ensuring an intuitive and modern user experience.",
    techStack: ["Figma", "PS"],
    imgSrc: project6,
    link: "https://www.behance.net/gallery/207439329/NFTs-modern-website-design",
  },
];

// export const SKILLS = [
//   {
//     name: "HTML5",
//     icon: <RiHtml5Line className="text-orange-600" />,
//   },
//   {
//     name: "CSS3",
//     icon: <RiCss3Line className="text-blue-500" />,
//   },
//   {
//     name: "JavaScript",
//     icon: <RiJavascriptLine className="text-yellow-500" />,
//   },
//   {
//     name: "React",
//     icon: <RiReactjsLine className="text-blue-400" />,
//   },
//   {
//     name: "Node.js",
//     icon: <RiNodeTree className="text-green-500" />,
//   },
//   {
//     name: "MongoDB",
//     icon: <RiDatabaseLine className="text-green-600" />,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: <RiCodeSSlashLine className="text-teal-400" />,
//   },
//   {
//     name: "GraphQL",
//     icon: <RiGitBranchLine className="text-pink-400" />,
//   },
// ];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-6xl text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-6xl text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-6xl text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-6xl text-blue-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-6xl text-black" />, 
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-6xl text-pink-500" />, 
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-6xl text-teal-400" />,
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop className="text-6xl text-blue-300" />, 
  },
];


export const EXPERIENCES = [
  {
    yearRange: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description:
      "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
    techStack: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
  {
    yearRange: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description:
      "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    techStack: ["HTML", "CSS", "Vue.js", "MySQL"],
  },
  {
    yearRange: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description:
      "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
    techStack: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    yearRange: "2020 - 2021",
    role: "Software Engineer",
    company: "PayPal",
    description:
      "Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.",
    techStack: ["Ruby", "Rails", "PHP", "SQLite"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Stanford University",
    duration: "2012 - 2016",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  },
  {
    id: 2,
    degree: "Master of Science in Software Engineering",
    institution: "MIT",
    duration: "2016 - 2018",
    description:
      "Focused on advanced software engineering concepts, system design, and AI technologies. Completed a thesis on machine learning applications in real-time data processing.",
  },
  {
    id: 3,
    degree: "Certified React Developer",
    institution: "Udacity Nanodegree",
    duration: "2019",
    description:
      "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  },
];

// export const TESTIMONIAL = {
//   name: "Sarah Doe",
//   title: "CEO, TechCorp",
//   quote:
//     "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
//   image: personImage,
// };
