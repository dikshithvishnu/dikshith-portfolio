import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs, TbBrandTypescript, TbSql } from "react-icons/tb";
import { SiExpress, SiMongodb, SiTableau, SiFlask } from "react-icons/si";
import { RiNodejsFill } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";
import { SiDocker } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export const content = {
  personal: {
    name: 'Dikshith Vishnuvardhan',
    email: 'dvishnuvardhan@clarku.edu',
    phone: '+1 (508) 615-3786',
    socials: [{
      icon: FaGithub,
      link: 'https://github.com/dikshithvishnu',
      name: 'Github'
    },
    {
      icon: FaLinkedin,
      link: 'https://linkedin.com/in/dikshith-vishnuvardhan',
      name: 'LinkedIn'
    },
    {
      icon: FaInstagram,
      link: 'https://instagram.com/dikshith.vishnu',
      name: 'Instagram'
    },
    {
      icon: MdOutlineEmail,
      link: 'mailto: dvishnuvardhan@clarku.edu',
      name: 'Email'
    },
  ],
  address: {
    street: '950 Main Street',
    city: 'Worcester',
    state: 'MA, USA',
    zip: '01610'
  }
  },
  home: {
    title: `I am Dikshith Vishnuvardhan`,
    description: `A software developer with 4 years of experience in web development. Currently pursuing my Master of Science in Information Technology at Clark University`,
    location: `Worcester, MA, USA`,
  },
  about: {
    title: "About Me",
    content: `I'm a passionate software engineer with a diverse background in web development, data analysis, and
            project management. I'm driven by a desire to create innovative solutions that solve real-world problems
            and improve people's lives.`,
  },
  education: [
    {
      degree: "Master of Science in Information Technology",
      school: "Clark University",
      years: "May 2025",
      icon: "/Clark_university_seal.svg.png",
      grade: '3.9/4.0 GPA',
      description: `Currently having a score of 3.9 GPA. Completed coursework in technologies such as Python, Splunk, Tableau and Cybersecurity.`
    },
    {
      degree: "Bachelor of Technology in Computer Science & Technology",
      school: "Dayananda Sagar University",
      years: "May 2022",
      icon: "/dsu.jpeg",
      grade: '6.94/10.00 GPA',
      description: `Graduated with a score of 6.94 GPA out of 10.00. Completed coursework in subjects such as Data Structures and Algorithms, Algorithm Analysis and Design, Cloud Computing and Software Development.` 
    },
  ],
  workExperience: [
    {
      title: "Web Designer and Data Analyst",
      logo: "/Clark_University_seal.svg.png",
      company: "Clark University",
      employmentType: "Part-time",
      duration: "Feb 2024 - Present",
      location: "Worcester, Massachusetts, United States",
      responsibilities: [
        "Managed and updated event calendars using WordPress to streamline event scheduling.",
        "Analyzed alumni and student survey data using MS-Excel and MySQL, generating insightful reports on employment rates and other outcomes.",
        "Collaborated on daily tasks including poster design and data visualization.",
      ],
      description: `This role is for Clark University's Career Connection Center. My day-to-day tasks include analyzing alumni and students data, web design and WordPress Management.`,
      skills: ["WordPress", "MySQL"],
    },
    {
      title: "Research Assistant",
      logo: "/Clark_University_seal.svg.png",
      company: "Clark University",
      employmentType: "Part-time",
      duration: "Dec 2023 - Present",
      location: "Worcester, Massachusetts, United States",
      responsibilities: [
        "Designed and implemented a survey interface for seamless TikTok video viewing using NextJS, TypeScript and Tailwind CSS.",
        "Integrated TikTok and OpenAI APIs to develop a personalized video recommendation system based on user preferences.",
        "Created a client-side solution to track video watch times, assessing the impact of GPT recommendations on user behavior.",
      ],
      description: "As a research assistant for the Department of Mathematics and Computer Science, under Dr. Shuo Niu, we have set out to assess the impact of GPT-4 on TikTok video recommendations to users.",
      skills: ["Node.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Software Engineer",
      company: "OpeninApp",
      logo: "/oiaRocket.svg",
      employmentType: "Full-time",
      duration: "Dec 2022 - Jun 2023",
      location: "Bengaluru, Karnataka, India",
      responsibilities: [
        "Developed robust and visually appealing user interfaces and components for 250,000+ daily active users using ReactJS, NextJS, and Tailwind, achieving a Lighthouse performance score of 95.",
        "Collaborated with backend developers to integrate REST APIs, providing link performance analytics and secure endpoints.",
        "Led the frontend development of a new revenue-generating feature, leading to an increase in user retention and monthly user growth.",
        "Implemented WebSockets for real-time communication and incorporated thorough testing procedures to enhance product reliability, contributing to a user retention increase.",
        "Managed code versioning and control using Git CLI and Bitbucket.",
      ],
      description: "As a Frontend developer at OpeninApp, I managed a team of 3-4 developers, collaborated with backend developers to build and ship a featureful application for social media creators with 250k+ DAUs (Daily Active Users).",
      skills: [
        "ReactJS",
        "NextJS",
        "Tailwind CSS",
        "WebSocket",
        "Git CLI",
        "Bitbucket",
      ],
    },
    {
      title: "E-Commerce Manager",
      logo: "/cropped-Meme-Chat-Logo.png",
      company: "Meme Chat",
      employmentType: "Part-time",
      duration: "Jan 2022 - Dec 2022",
      location: "Remote",
      description: "Managed a high volume Shopify store for an Instagram Influencer with over 700k followers. Helped the store achieve USD 25k+ in sales month-on-month, 200k+ visitors monthly by optimising SEO and UI, and implementing abandoned cart marketing.",
      skills: ["Web Technologies", "Shopify"],
    },
    {
      title: "Web Developer",
      logo: "/cropped-Meme-Chat-Logo.png",
      company: "Meme Chat",
      employmentType: "Part-time",
      duration: "Jul 2020 - Oct 2022",
      location: "Remote",
      description: "Developed multiple websites and landing pages using frameworks such as React.js, Next.js. Collaborated with developers to integrate business logic with user interfaces.",
      skills: ["Web Technologies", "User Interface Design"],
    },
    {
      title: "Content Moderator",
      logo: "/cropped-Meme-Chat-Logo.png",
      company: "Meme Chat",
      employmentType: "Part-time",
      duration: "Apr 2020 - Jun 2020",
      location: "Remote",
      description: "Moderated content for a social media application with over 250k+ DAUs (Daily Active Users). Managed a team of 10-15 moderators.",
      skills: ["Web Technologies"],
    },
  ],
  skills: [
    { name: "React.js", icon: GrReactjs },
    { name: "Next.js", icon: TbBrandNextjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Node.js", icon: RiNodejsFill },
    { name: "MongoDB", icon: SiMongodb },
    { name: "TypeScript", icon: TbBrandTypescript },
    { name: "Git", icon: FaGitAlt },
    { name:"Docker", icon: SiDocker },
    { name: "SQL", icon: TbSql },
    { name: "Tableau", icon: SiTableau },
    { name: "Python", icon: AiOutlinePython },
    { name: "Flask", icon: SiFlask },
  ],
  projects: [
    {
      title: "The Meme Club",
      description: `Meme Club is a NFT Marketplace where users can buy, sell and trade NFTs. Built on the MATIC Blockchain, this is a Web3 Application using Metamask as the wallet provider.`,
      url: `https://thememe.club`,
      image: "/tmc.png",
    },
    {
      title: "Chrome Extension for OpeninApp",
      description: `Created a chrome extension with Next.js for creating and managing smartlinks. This application can also doubles as a bookmark for important URLs that you would want to visit later.`,
      image: "/oiaRocket.svg",
      url: "https://chromewebstore.google.com/detail/openinapp-links-that-open/nlobmelldlojlomikicneipgpmjbofmf"
    },
  ],
};
