import Resume from '../assets/Resume.pdf';
import reactLogo from '../assets/react-logo.svg';
import htmlLogo from '../assets/html-logo.svg';
import cssLogo from '../assets/css-logo.svg';
import javascriptLogo from '../assets/javascript-logo.svg';
import tailwindcssLogo from '../assets/tailwindcss-logo.svg';
import nodejsLogo from '../assets/nodejs-logo.svg';
import expressjsLogo from '../assets/expressjs-logo.svg';
import mysqlLogo from '../assets/mysql-logo.svg';
import mongodbLogo from '../assets/mongodb-logo.svg';
import gitLogo from '../assets/git-logo.svg';
import githubLogo from '../assets/github-logo.svg';
import vscodeLogo from '../assets/vscode-logo.svg';
import postmanLogo from '../assets/postman-logo.svg';
import pecLogo from '../assets/pec-logo.png';
import guviLogo from '../assets/guvi-logo.jpg';
import certification1 from '../assets/GuviCertificate.pdf';
import certificationImg1 from '../assets/GuviCertificate.png';
import project1 from '../assets/JobVerse.png';
import project2 from '../assets/FitPro.png';
import project3 from '../assets/CPMS.png';
import project4 from '../assets/ChatApp.png';
import project5 from '../assets/PasswordReset.png';
import project6 from '../assets/WatchShow.png';

export const Bio = {
    name: "Prasanna venkatesh",
    roles: [
        "MERN Stack Developer",
        "Frontend Developer",
        "Backend Developer",
    ],
    description:
        "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
    github: "https://github.com/Prasanna0401",
    resume: Resume,
    linkedin: "https://www.linkedin.com/in/prasanna-venkatesh-73ba98126/"
};

export const skills = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React Js",
                image: reactLogo
            },
            {
                name: "HTML",
                image: htmlLogo
            },
            {
                name: "CSS",
                image: cssLogo
            },
            {
                name: "JavaScript",
                image: javascriptLogo
            },
            {
                name: "Tailwind CSS",
                image: tailwindcssLogo
            }
        ]
    },
    {
        title: "Backend",
        skills: [
            {
                name: "Node Js",
                image: nodejsLogo
            },
            {
                name: "Express Js",
                image: expressjsLogo
            },
            {
                name: "MySQL",
                image: mysqlLogo
            },
            {
                name: "MongoDB",
                image: mongodbLogo
            }
        ]
    },
    {
        title: "Others",
        skills: [
            {
                name: "Git",
                image: gitLogo
            },
            {
                name: "GitHub",
                image: githubLogo
            },
            {
                name: "VS Code",
                image: vscodeLogo
            },
            {
                name: "Postman",
                image: postmanLogo
            }
        ]
    }
];

export const experiences = [
    {
        id: 0,
        img: guviLogo,
        role: "Full Stack Development Course With AI Tools ",
        company: "GUVI - IIT-Madras and IIM-Ahmedabad incubated Ed-tech company",
        date: "August 2024 - November 2024",
        desc: "Currently enrolled in a comprehensive MERN (MongoDB, Express.js, React.js, Node.js) stack development course at GUVI, an Ed-tech company incubated by IIT-Madras and IIM-Ahmedabad. The course covers a range of skills including HTML, CSS, JavaScript, React.js, Tailwind CSS for front-end development, and Node.js, Express.js, MongoDB, MySQL for server-side development. Additionally, I have a strong foundation in Git version control, GitHub collaboration, Postman, and a keen understanding of software development best practices. Excited to acquire hands-on experience and apply these skills to real-world projects.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind CSS",
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "Postman",
            "Git",
            "GitHub"
        ],
        docImg: certificationImg1,
        doc: certification1
    }
];

export const education = [
    {
        id: 0,
        img: pecLogo,
        school: "Panimalar Engineering College, Chennai",
        date: "2019 - 2023",
        grade: "8.41 CGPA",
        desc: "I successfully completed my Bachelor's degree in Electronics and Communication Engineering from Panimalar Engineering College in April 2023. Throughout the four-year program, I completed 8 Semesters with a CGPA of 8.41. My coursework covered a wide range of subjects including analog and digital electronics, microprocessors, communication systems, control systems, embedded systems, and signal processing.",
        degree: "Bachelor of Engineering in Electronics and Communication Engineering - B.E ECE"
    }
];

export const projects = [
    {
        id: 0,
        title: "Job Verse - Job Portal Application",
        description:
            "Developed a modern, responsive job portal platform that connects job seekers with employers, enabling efficient job search and application management. Implemented user authentication with secure registration, login, password management, and account deletion features using JWT. Designed and built a dynamic user profile system allowing users to upload and update resumes, manage skills, and track job applications. Developed comprehensive job management functionalities including job browsing, detailed job views, save jobs for later, and direct application submission. Built an admin dashboard for managing jobs, users, and applications with role-based access control and real-time platform statistics.",
        image: project1,
        tags: [
            "React", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"
        ],
        category: "full stack",
        github: "https://github.com/Prasanna0401/Job-Portal-Application-JobVerse",
        webapp: "https://jobverseapp.onrender.com"
    },
    {
        id: 1,
        title: "FitPro - Fitness Class Booking Platform",
        description:
            "Built a comprehensive fitness platform that connects users with professional trainers for booking and managing fitness classes. Implemented secure user and trainer authentication with JWT, along with password recovery via email-based reset links. Developed a flexible booking system that allows users to search, filter, and reserve classes by category, trainer specialization, availability, and ratings.Integrated the PayPal payment gateway for secure class transactions, along with automatic refund handling on class cancellations.Built the trainer dashboard, enabling trainers to create and manage classes, reschedule or cancel sessions, and track their earnings with a financial overview. Integrated a real-time notification system that sends confirmation, cancellation, and reminder emails.",
        image: project2,
        tags: [
            "React", "Node.js", "Express", "MongoDB", "PayPal API", "Tailwind CSS"
        ],
        category: "full stack",
        github: "https://github.com/Prasanna0401/Fitness-Class-Booking-Application",
        webapp: "https://fitproapp.vercel.app"
    },
    {
        id: 2,
        title: "CPMS - College Placement Management System",
        description:
            "A robust web-based platform built to manage and streamline the placement process in educational institutions. This system enhances transparency, efficiency, and user experience through clearly defined roles and automated workflows.The system supports role-based access for students, TPO admins, management, and super admins. Key features include job posting and tracking, student application management, interview scheduling, and real-time reporting dashboards.Improved placement workflow efficiency and reduced manual effort through centralized digital management.",
        image: project3,
        tags: [
            "React", "Node.js", "Express", "MongoDB", "Multer", "Tailwind CSS"
        ],
        category: "full stack",
        github: "https://github.com/Prasanna0401/College-Placement-Management-System-FrontEnd",
        webapp: "https://collegeplacementmanagementsystemfe.netlify.app"
    },
    {
        id: 3,
        title: "Real-Time Chat App",
        description:
            "Developed a full-stack, real-time chat application that allows users to register, log in, and exchange instant messages with others. Implemented JWT-based authentication and authorization, and used Socket.IO for persistent WebSocket communication to support real-time chat and online user presence.Utilized Zustand for global state management to efficiently handle authentication, user lists, and message flow. Designed the backend to manage socket sessions, ensure message delivery, and handle real-time connection/disconnection events.",
        image: project4,
        tags: [
            "React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS"
        ],
        category: "full stack",
        github: "https://github.com/Prasanna0401/Real-Time-Chat-Application",
        webapp: "https://realtimechatapplicationfe.onrender.com"
    },
    {
        id: 4,
        title: "Password Reset Flow App",
        description:
            "In this project, I implemented a secure password reset flow for a web application, ensuring a smooth user experience while maintaining security standards. The password reset process includes email verification and proper password update in the database.",
        image: project5,
        tags: [
            "React", "Node.js", "Express", "MongoDB", "Nodemailer", "Tailwind CSS"
        ],
        category: "full stack",
        github: "https://github.com/Prasanna0401/Password-Reset-Flow-FrontEnd",
        webapp: "https://passwordresetflowfe.netlify.app"
    },
    {
        id: 5,
        title: "Watchshow - Movie Search App",
        description:
            "This Movie Search Application built with React allows users to search for movies using the OMDb API. It provides a detailed view of movie information such as title, year, genre, and plot. This app offers an interactive and user-friendly experience for movie enthusiasts.",
        image: project6,
        tags: [
            "HTML/CSS", "React", "OMDb API", "Tailwind CSS"
        ],
        category: "frontend app",
        github: "https://github.com/Prasanna0401/Movies-Search-App",
        webapp: "https://watchshow-tv.netlify.app"
    }
];