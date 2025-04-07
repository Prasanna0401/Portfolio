import Resume from '../assets/resume.pdf';
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
import guviLogo from '../assets/guvi-logo.jpg';
import certification1 from '../assets/certification-1.png';
import pecLogo from '../assets/pec-logo.png';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.png';
import project5 from '../assets/project-5.png';
import project6 from '../assets/project-6.png';

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
    linkedin: "https://www.linkedin.com/in/prasanna-venkatesh-73ba98126/",
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
            "GitHub",
        ],
        docImg: certification1,
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
        degree: "Bachelor of Engineering in Electronics and Communication Engineering - B.E ECE",
    }
];

export const projects = [
    {
        id: 0,
        title: "College Placement Management System",
        description:
            "The College Placement Management System is a web application designed to streamline the placement process in educational institutions. This system provides distinct roles for students, TPO (Training and Placement Officer) admin, management admin, and super admin, ensuring a smooth and efficient workflow.",
        image: project1,
        tags: [
            "React.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
        category: "full stack",
        github: "https://github.com/Prasanna0401/College-Placement-Management-System-FrontEnd",
        webapp: "https://collegeplacementmanagementsystemfe.netlify.app/"
    },
    {
        id: 1,
        title: "Password Reset Flow",
        description:
            "In this project, I implemented a secure password reset flow for a web application, ensuring a smooth user experience while maintaining security standards. The password reset process includes email verification and proper password update in the database.",
        image: project2,
        tags: [
            "React.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
        category: "full stack",
        github: "https://github.com/Prasanna0401/Password-Reset-Flow-FrontEnd",
        webapp: "https://passwordresetflowfe.netlify.app/"
    },
    {
        id: 2,
        title: "Movies Search App",
        description:
            "This Movie Search Application built with React allows users to search for movies using the OMDB API. It provides a detailed view of movie information such as title, year, genre, and plot. This app offers an interactive and user-friendly experience for movie enthusiasts.",
        image: project3,
        tags: [
            "React.js",
            "Tailwind CSS",
            "HTML",
            "JavaScript",
            "OMDB API"
        ],
        category: "frontend app",
        github: "https://github.com/Prasanna0401/Movies-Search-App",
        webapp: "https://watchshow-tv.netlify.app/"
    },
    {
        id: 3,
        title: "E-commerce store",
        description:
            "This ReactJS application has two pages: one for viewing products and another for managing the shopping cart. Users can add products to the cart from the Product page and remove items from the Cart page. React Router handles navigation between the pages, ensuring a smooth user experience.",
        image: project4,
        tags: [
            "React.js",
            "Tailwind CSS",
            "HTML",
            "JavaScript"
        ],
        category: "frontend app",
        github: "https://github.com/Prasanna0401/E-commerce-store",
        webapp: "https://e-commerce-store-pro.netlify.app/"
    },
    {
        id: 4,
        title: "Income Expense Calculator",
        description:
            "A web app to manage income and expenses, allowing users to add, edit, and delete entries. It provides an overview of financial status using CRUD operations (Create, Read, Update, Delete).",
        image: project5,
        tags: [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        category: "frontend app",
        github: "https://github.com/Prasanna0401/Income-Expense-Calculator",
        webapp: "https://eclectic-toffee-8b0caf.netlify.app/"
    },
    {
        id: 5,
        title: "HTML/Tailwind CSS Landing Page",
        description:
            "A simple HTML and Tailwind CSS landing page is a basic webpage that uses HTML to structure content and Tailwind CSS for styling. Tailwind is a utility-first CSS framework that provides pre-designed classes to quickly create modern, responsive layouts.",
        image: project6,
        tags: [
            "HTML",
            "Tailwind CSS"
        ],
        category: "frontend app",
        github: "https://github.com/Prasanna0401/HTML-Tailwind-CSS-Landing-Page",
        webapp: "https://lovely-macaron-ca4ea2.netlify.app/"
    }
];