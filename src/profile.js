// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Dumidu Kasun Rajakaruna",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    // "I'm undergraduate with a passion for problem-solving and programming able to utilize strong math skills, problem-solving and programming, interpersonal strengths, time-management and organizational abilities, willingly working unpredictable hours and to learn new skills.",
    "I am an undergraduate who is extremely motivated and accomplished with a background in software engineering and information systems. I have a strong passion for problem-solving and programming, an energetic and self-motivated nature, and a high level of reliability and time-management. I am passionate about researching on deep learning and reinforcement learning.  Additionally, I have worked on several projects as a full-stack engineer.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "C",
    faClass: "fab fa-cuttlefish",
  },
  {
    name: "Java",
    faClass: "fab fa-java",
  },
  {
    name: "Python",
    faClass: "fab fa-python",
  },
  {
    name: "PHP",
    faClass: "fab fa-php",
  },
  // {
  //   name: "R",
  //   faClass: "fab fa-r-project",
  // },
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "SASS",
    faClass: "fab fa-sass",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },

  {
    name: "Bootstrap",
    faClass: "fab fa-bootstrap",
  },
  {
    name: "React",
    faClass: "fab fa-react",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  // {
  //   name: "Database",
  //   faClass: "fas fa-database",
  // },
  {
    name: "Spring Boot",
    faClass: "fas fa-leaf",
  },
  {
    name: "AWS",
    faClass: "fab fa-aws",
  },
  {
    name: "GCP",
    faClass: "fab fa-google",
  },
  {
    name: "Docker",
    faClass: "fab fa-docker",
  },
  // {
  //   name: "Android",
  //   faClass: "fab fa-android",
  // },
  {
    name: "Git",
    faClass: "fab fa-git-square",
  },
  {
    name: "Stripe",
    faClass: "fab fa-cc-stripe",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "My Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "International Rail - Europe railway ticket booking system",
    skills: ["Next Js, Nest Js, AWS"],
    url: "https://www.internationalrail.com.au/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Tackle - Platform to account your crypto wallet",
    skills: ["Next Js, Nest Js, AWS"],
    url: "https://www.ordoau.io/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "AutoAid - Service Station Management System",
    skills: ["React, Tailwind CSS, Spring Boot"],
    url: "https://github.com/dumidu1998/autoaid-front",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Infini Greens",
    skills: ["React, Node.js, MySQL"],
    url: "https://github.com/dumidu1998",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Thoga.lk",
    skills: ["HTML, CSS, JS, PHP"],
    url: "https://github.com/dumidu1998",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Rent Us",
    skills: ["HTML, CSS, JS, PHP"],
    url: "https://github.com/dumidu1998",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Github Repo Viewer",
    skills: ["HTML, CSS, JS, PHP"],
    url: "https://githubrepoview.web.app/",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Instagram Clone",
    skills: ["HTML, CSS, JS, PHP"],
    url: "https://dumiagram.web.app/",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Mask Detector",
    skills: ["HTML, CSS, JS, PHP"],
    url: "https://github.com/dumidu1998/MaskdetectorAPI",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc4",
    name: "Chrome Extension for Activity Tracking",
    skills: ["JS, Firebase, Express, Heroku"],
    url: "https://github.com/dumidu1998/user-activity-tracker",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc5",
    name: "Simple Web Server Using C",
    skills: ["C"],
    url: "https://github.com/dumidu1998/Simple-web-Server-in-C",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc6",
    name: "To-Do App",
    skills: ["React, Firebase"],
    url: "https://github.com/dumidu1998/to-do-app-",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch: "Contact me with this form or contact me at my social media. Donwload my CV below for more Details.",
  copyright: "Dumidu Kasun",
  contactUrl: "https://formspree.io/f/xoqynkej",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/dumidu1998",
  facebook: "https://facebook.com/dumidukb",
  linkedin: "https://linkedin.com/in/dumidukasun98/",
  instagram: "https://instagram.com/__dumikasun__/",
  resume: "https://drive.google.com/uc?id=1kMWnESPbVrSfuiFIe-8dRRKxo90fr98H&export=download",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
