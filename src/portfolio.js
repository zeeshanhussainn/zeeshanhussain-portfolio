import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation


const splashScreen = {
  enabled: true, 
  duration: 2000 
};



const illustration = {
  animated: true 
};

const greeting = {
  username: "Zeeshan Hussain",
  title: "Hi all, I'm Zeeshan Hussain",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 turning ideas into reality with Web & Mobile apps using React.js, React Native, Node.js, and cutting-edge tech. I craft smooth UIs, robust backends, and seamless experiences that users love."

  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", 
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zeeshanhussainn",
  linkedin: "https://www.linkedin.com/in/zeeshan-hussain-59123b243/",
  gmail: "zeeshanhussain534@gmail.com",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      " Develop highly interactive front-end interfaces for web and mobile applications using React.js and React Native."
    ),
    emoji(" Build scalable web applications and mobile apps, including single-page applications (SPA) with smooth performance and responsive design."),
    emoji(
      " Integrate third-party services and APIs such as Supabase, Razorpay, Firebase, and cloud platforms to enhance functionality and user experience."
    )
  ],

  /* include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "TypeScript",
    fontAwesomeClassname: "fab fa-js" 
  },
  {
    skillName: "React.js",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "React Native",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "Express.js",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Supabase",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Razorpay",
    fontAwesomeClassname: "fas fa-credit-card"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "Spring Boot",
    fontAwesomeClassname: "fas fa-leaf"
  },
  {
    skillName: "Tailwind CSS",
    fontAwesomeClassname: "fas fa-wind"
  },
  {
    skillName: "Material UI",
    fontAwesomeClassname: "fas fa-layer-group"
  },
  {
    skillName: "Framer Motion",
    fontAwesomeClassname: "fas fa-magic"
  },
  {
    skillName: "shadcn/ui",
    fontAwesomeClassname: "fas fa-cubes"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "Postman",
    fontAwesomeClassname: "fas fa-envelope-open-text"
  },
  {
    skillName: "VS Code",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  }
],
display: true 
};

// Education Section

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Malnad College of Engineering · Karnataka, India",
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "Aug. 2019 - June 2023",
      desc: "I specialized in programming, web and mobile development, and software engineering, building a strong foundation for a career in full-stack development.",
      descBullets: [
        "Focused on full-stack web and mobile development using React.js, React Native, Node.js, and MongoDB.",
        "Gained hands-on experience through internships and real-world projects.",
        "Learned database management, API integration, and deployment practices."
      ]
    },
    {
      schoolName: "SDM PU College · Ujire",
      subHeader: "Pre-University (PCMB)",
      duration: "July 2017 - May 2019",
      desc: "Completed 12th grade with Physics, Chemistry, Mathematics, and Biology from SDM Pre University College, Ujire, Karnataka.",
      descBullets: [
        "Built strong foundation in logical thinking and problem-solving.",
        "Participated in academic and co-curricular activities to enhance overall skills."
      ]
    },
    {
      schoolName: "Poorna Prajna Education Center · Belur",
      subHeader: "Secondary Education (SSLC)",
      duration: "2017",
      desc: "Completed foundational education up to SSLC at Poorna Prajna Education Center, Belur, Karnataka.",
      descBullets: [
        "Acquired basic knowledge and skills in mathematics, science, and language.",
        "Developed discipline and foundational learning habits."
      ]
    }
  ]
};




const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "75%" 
    },
    {
      Stack: "Programming",
      progressPercentage: "80%" 
    }
  ],
  displayCodersrank: false 
};

// Work experience section
const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Zen4Tech Solution",
      companylogo: require("./assets/images/zen4tech.png"),
      date: "Apr. 2025 – Present",
      desc: "Working as a Full Stack Developer contributing to both frontend and backend development of scalable web and mobile applications.",
      descBullets: [
        "Frontend expertise in React.js, React Native, HTML, CSS, and JavaScript for building responsive, user-friendly interfaces.",
        "Backend development using Java, Spring Boot, and MongoDB to create secure RESTful APIs and integrate with databases.",
        "Collaborating with cross-functional teams under Agile methodologies, participating in code reviews, and contributing to architectural decisions."
      ]
    },
    {
      role: "AI Trainer",
      company: "Wenkraft Technologies",
      companylogo: require("./assets/images/wenkraft.png"),
      date: "Jun. 2024 – Feb. 2025",
      desc: "Trained AI models in coding-related domains, including Java, Python, JavaScript, HTML, and CSS.",
      descBullets: [
        "Developed and optimized training data and workflows for coding-focused AI models.",
        "Ensured model performance and accuracy by curating high-quality datasets and evaluating results.",
        "Collaborated with cross-functional teams to align AI model outputs with project requirements."
      ]
    },
    {
      role: "Software Development Intern",
      company: "Kodnest Technologies",
      companylogo: require("./assets/images/kodnest.png"),
      date: "Aug. 2023 – Feb. 2024",
      desc: "Intern at Kodnest Technologies, where I acquired practical skills in Java, Full Stack, and SQL development.",
      descBullets: [
        "Gained hands-on experience with SQL databases — writing efficient queries and optimizing performance.",
        "Worked on real-world projects involving both frontend and backend components.",
        "Actively contributed to brainstorming sessions, sharing innovative ideas and best practices to improve project efficiency."
      ]
    }
  ]
};


/* Github Projects*/

const openSource = {
  showGithubProfile: "true",
  display: true 
};

// projects 

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/zen4tech.png"),
      projectName: "Zen4Tech Official Website",
      projectDesc:
        "Developed Zen4Tech's official website to highlight the company's offerings including Custom Software Development, Web & App Development, Digital Marketing, AI & Data Solutions, Cloud Services, and IT Consulting. The website emphasizes a modern, clean UI with responsive design, smooth animations, and seamless navigation.",
      techStack: [
        "React.js",
        "HTML",
        "CSS",
        "JavaScript",
        "Framer Motion",
        "GoDaddy"
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://zen4techsolution.com/"
        }
      ]
    },
    {
      image: require("./assets/images/apnaposter.png"),
      projectName: "Apna Poster",
      projectDesc:
        "Apna Poster is an online platform developed to allow users to explore and buy creative posters. The platform includes authentication, secure payments via Razorpay, and a smooth frontend experience with React.js. Supabase was used for authentication and database management, while Node.js handled payment integration.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "Supabase",
        "Razorpay",
        "HTML",
        "CSS",
        "JavaScript",
        "Render"
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://apna-poster.onrender.com/"
        }
      ]
    },
    {
      image: require("./assets/images/stumptalk.png"),
      projectName: "Stump Talk",
      projectDesc:
        "Stump Talk is a React Native mobile application developed to let users form virtual sports teams and compete in contests. The backend uses Node.js, Express.js, and MongoDB to manage users, matches, contests, and secure wallet transactions. The app integrates real-time updates, leaderboards, and interactive team management features.",
      techStack: [
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Razorpay",
        "JWT Authentication"
      ],
      footerLink: [
        {
          name: "View on Play Store",
          url: "https://play.google.com/store/apps/details?id=com.stumptalk"
        }
      ]
    }
  ],
  display: true 
};

// certificates,

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Java Full Stack Development",
      subtitle: "Completed Full Stack Development Certification.",
      image: require("./assets/images/fullstack.png"),
      imageAlt: "Full Stack Development Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1W7H3FehBoiunY6zBfZAFu9-rL084Iu9x/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Certified ISO 20000:2018 Lead Auditor",
      subtitle: "Completed ISO 20000:2018 Lead Auditor Certification.",
      image: require("./assets/images/iso20000.png"),
      imageAlt: "ISO 20000 Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/142xCJ_MpOkWAkNdk2AbAtJNJ-t6N499S/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Certified ISO 27001:2022 Lead Auditor",
      subtitle: "Completed ISO 27001:2022 Lead Auditor Certification.",
      image: require("./assets/images/iso27000.png"),
      imageAlt: "ISO 27001 Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1nFwzrPBKjPvJFTl6zaeUtMOpu3OdBxFJ/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Certified ISO 22301:2019 Lead Auditor",
      subtitle: "Completed ISO 22301:2019 Lead Auditor Certification.",
      image: require("./assets/images/iso22301.png"),
      imageAlt: "ISO 22301 Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1WZjU2jx63TisakoPLwWpJhCgPr1DAiWg/view?usp=sharing"
        }
      ]
    }
  ],
  display: true 
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false// Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach out to me 📞 +91-8431737094", 
  number: "+91-8431737094",
  email_address: "zeeshanhussain534@gmail.com",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/zeeshan-hussain-59123b243/",
      iconClass: "fab fa-linkedin" 
    }
  ]
};
// Twitter Section

const twitterDetails = {
  userName: "twitter", 
  display: true
};

const isHireable = true; 
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
