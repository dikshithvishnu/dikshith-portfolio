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
import { ProfileData } from "../types";



export const content: ProfileData = {
  personal: {
    name: 'Dikshith Vishnuvardhan',
    email: 'contact@dikshith.com',
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
      link: 'mailto: contact@dikshith.com',
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
    description: `Results-driven software engineer with over 4 years of expertise in full-stack development and cloud 
technologies. Experienced in building scalable web applications that drive user engagement and generate 
revenue. Strong background in API integration, microservices architecture, and data analytics. Graduated with 
MS in Information Technology from Clark University while developing innovative solutions that combine 
technical excellence with practical business impact.`,
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
      schoolURL: "https://clarku.edu/",
      years: "May 2025",
      icon: "/cu.png",
      grade: '3.9/4.0 GPA',
      description: `Graduated with a GPA of 3.9. Completed coursework in technologies such as Python, Splunk, Tableau and Cybersecurity.`
    },
    {
      degree: "Bachelor of Technology in Computer Science & Technology",
      school: "Dayananda Sagar University",
      schoolURL: "https://dsu.edu.in/",
      years: "May 2022",
      icon: "/dsu.jpeg",
      grade: '6.94/10.00 GPA',
      description: `Graduated with a score of 6.94 GPA out of 10.00. Completed coursework in subjects such as Data Structures and Algorithms, Algorithm Analysis and Design, Cloud Computing and Software Development.` 
    },
  ],
  workExperience: [
    {
      title: "Software Development Engineer",
      logo: "/iea.png",
      company: "Insider Edge Analytics",
      companyURL: 'https://thebettinginsider.com/',
      employmentType: "Part-time",
      duration: "Sep 2024 - Present",
      location: "Atlanta, Georgia (Remote)",
      responsibilities: [
        "Designed and built the entire data infrastructure from the ground up, including Entity Relationship Diagrams (ERD), database schema, and deployment of MySQL databases.",
        "Built full-stack applications by developing REST APIs using Flask and Node.js for backend services and a responsive frontend interface using Next.js and Tailwind CSS, enhancing user experience and SEO.",
        "Utilized Stripe payment gateway for checkouts and wrote scripts in Node.js to listen to Stripe webhook events to update and store user metadata.",
        "Automated CI/CD workflows with shell scripts and GitHub Actions which streamlined deployment of both frontend and backend systems, improving release efficiency and minimizing downtime.",
        "Conducted unit testing and ensured code efficiency, contributing to a product that attracted 450 paying users and 250 daily active users (DAUs) within 4 weeks post-launch."
      ],
      description: "As a Software Development Engineer at Insider Edge Analytics, I am responsible for developing and maintaining the company's web applications and APIs.",
      skills: ["ReactJS", "NextJS", "Tailwind CSS", "Python", "Flask", "MySQL", "GCP", "Git", "Docker", "GitHub Actions", "Webhooks"],
    },
    {
      title: "Web Designer and Data Analyst",
      logo: "/cu.png",
      company: "Clark University",
      companyURL: 'https://clarku.edu/',
      employmentType: "Part-time",
      duration: "Feb 2024 - Present",
      location: "Worcester, Massachusetts, United States",
      responsibilities: [
        "Transformed unstructured survey data into actionable insights using MySQL and MS-Excel, producing reports that significantly improved the university's understanding of employment trends.",
        "Developed a robust application using NodeJS, ReactJS, and Canva Developer APIs for bulk creation of posters and invitations, streamlining event operations by 75%.",
        "Administered the WordPress Event Calendar on the university’s multi-site CMS, optimising event scheduling and management.",
      ],
      description: `This role is for Clark University's Career Connection Center. My day-to-day tasks include analyzing alumni and students data, web design and WordPress Management.`,
      skills: ["WordPress", "MySQL", "Canva"],
    },
    {
      title: "Research Assistant",
      logo: "/cu.png",
      company: "Clark University",
      companyURL: 'https://clarku.edu/',
      employmentType: "Part-time",
      duration: "Dec 2023 - Present",
      location: "Worcester, Massachusetts, United States",
      responsibilities: [
        "Engineered an application integrating TikTok APIs and OpenAI to develop a personalised video recommendation system using NextJS, Tailwind CSS, TypeScript, and NodeJS.",
        "Deployed the application using Docker on Azure, providing a scalable solution for research into GPT's effectiveness as a recommendation model.",
        "Designed and implemented a client-side tracking solution to measure video watch times, generating critical data to assess GPT-driven content recommendations.",
      ],
      description: "As a research assistant for the Department of Mathematics and Computer Science, under Dr. Shuo Niu, we have set out to assess the impact of GPT-4 on TikTok video recommendations to users.",
      skills: ["Node.js", "Next.js", "TypeScript", "Tailwind CSS", "Microsoft Azure", "Docker"],
    },
    {
      title: "Software Engineer",
      company: "OpeninApp",
      companyURL: 'https://openinapp.com/',
      logo: "/oiaRocket.svg",
      employmentType: "Full-time",
      duration: "Dec 2022 - Jun 2023",
      location: "Bengaluru, Karnataka, India",
      responsibilities: [
        "Led the frontend development for a high-traffic application serving over 250,000 daily active users, achieving a Lighthouse performance score of 95 by optimising components built with ReactJS, NextJS, and Tailwind CSS.",
        "Directed a team of 3-4 developers to deliver the company’s first revenue-generating feature, boosting daily active users by 25% and driving immediate revenue post-launch.",
        "Collaborated closely with backend developers to integrate business logic, resulting in a 50% decrease in API response times and improved user experience.",
        "Implemented WebSockets for real-time communication and established comprehensive testing protocols, enhancing overall product reliability and user retention.",
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
        "NodeJS",
        "ExpressJS",
        "RabbitMQ"
      ],
    },
    {
      title: "E-Commerce Manager",
      logo: "/cropped-Meme-Chat-Logo.png",
      company: "Meme Chat",
      companyURL: 'https://memechat.app/',
      employmentType: "Part-time",
      duration: "Jan 2022 - Dec 2022",
      location: "Remote",
      description: "Managed a high volume Shopify store for an Instagram Influencer with over 700k followers. Helped the store achieve USD 25k+ in sales month-on-month, 200k+ visitors monthly by optimising SEO and UI, and implementing abandoned cart marketing.",
      skills: ["Polaris", "Shopify", "E-Commerce Management", "Logistics", "Marketing"],
    },
    {
      title: "Web Developer",
      logo: "/cropped-Meme-Chat-Logo.png",
      company: "Meme Chat",
      companyURL: 'https://memechat.app/',
      employmentType: "Part-time",
      duration: "Jul 2020 - Oct 2022",
      location: "Remote",
      description: "Developed multiple websites and landing pages using frameworks such as React.js, Next.js. Collaborated with developers to integrate business logic with user interfaces.",
      skills: ["ReactJS", "User Interface Design", "Docker"],
    },
    {
      title: "Content Moderator",
      logo: "/cropped-Meme-Chat-Logo.png",
      company: "Meme Chat",
      companyURL: 'https://memechat.app/',
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
    // {
    //   title: "USCIS Case Tracker",
    //   description: `USCIS Case Tracker is a simple and user-friendly app designed to help individuals track their U.S. immigration case status with ease. This was built using Next.js, and Tailwind CSS to help my fellow peers and myself to easily track our work authorization cases without having to visit the USCIS website every time.`,
    //   url: `https://uscis-case-tracker.vercel.app/`,
    //   image: "/uscis.png",
    // },
    {
      title: "The Sports Insider",
      description: `The Sports Insider is a sports stats aggregator that pulls in the latest odds and stats from various sports websites. Built using React.js, Flask, and MySQL.`,
      url: `https://thebettinginsider.com`,
      image: "/iea.png",
    },
    {
      title: "Video Recommendation System",
      description: `A video recommendation system that uses GPT-4 to recommend videos from TikTok. Built using Next.js, Tailwind CSS, TypeScript, and Node.js. The Research Paper has been submitted for the CHI '25, Association of Computing Machinery.`,
      url: `https://0d2f0bc53ec40041bef323f40496ed3c.r2.cloudflarestorage.com/pcs/chi25b/chi25b-sub7139-i13.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=7200&X-Amz-Credential=8c3c5bf11286f4699c7019eaeac51dfe%2F20241221%2Fenam%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Date=20241221T015937Z&X-Amz-Signature=abe8644b52b7277877d194273b872c1c0bfc85c8a2a3fb8c6da118fd495d660c`,
      image: "/cu.png",
    },
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

export const validSocials = content.personal.socials.map(social => social.name.toLowerCase())