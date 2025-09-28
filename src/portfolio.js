/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vinay Pandey",
  title: "Hi all, I'm Vinay",
  subTitle: emoji(
    "💻 Full-Stack Developer with 2+ years of experience building scalable 🌐 web and 📱 mobile applications using React ⚛️, Node.js 🖧, React Native 📲, MongoDB 🍃, MySQL 🗄️, and Django 🐍 along with other modern frameworks and tools."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1aol_4ZJzg5yZi0He3I0NM1ysLg-jD5EJ/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pandeyvinayy",
  linkedin: "https://www.linkedin.com/in/pandeyvinay01/",
  gmail: "vinaypandey2305@gmail.com",
  gitlab: "https://gitlab.com/pandeyvinayy",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "From front end to back end, I’m passionate about creating and learning in the world of software.",
  skills: [
    emoji(
      "⚡ Architecting and deploying scalable web applications on cloud platforms like Azure and AWS"
    ),
    emoji(
      "⚡ Creating seamless user experiences with React, Next.js, and modern front-end frameworks"
    ),
    emoji(
      "⚡ Integrating AI-powered features using OpenAI, Copilot Studio, and other cutting-edge APIs"
    ),
    emoji(
      "⚡ Automating workflows and enhancing productivity with the latest developer tools and cloud services"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    // {
    //   skillName: "microsoft",
    //   fontAwesomeClassname: "fab fa-microsoft"
    // },
    {
      skillName: "windows 11",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "OpenAi/Copilot",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indraprastha Institute of Information Technology, Delhi",
      logo: require("./assets/images/iiitdLogo.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "June 2019 - June 2023",
      desc: "Graduated with a CGPA of 8.46. Completed impactful projects in deep learning and machine learning, held leadership roles in student societies, and contributed to community initiatives.",
      descBullets: [
        "CGPA: 8.46/10",
        "Completed two independent projects in deep learning and machine learning, including work on the CIFAR-10 model",
        "Lead member of Enactus and E-Cell clubs; Lead event manager for Odyssey (Cultural fest)",
        "Major coursework: Data Structures & Algorithm Design, Operating Systems, Computer Networks, Artificial Intelligence & Machine Learning",
        "Designed posters for social awareness and taught underprivileged students in New Delhi"
      ]
    },
    {
      schoolName: "DAV Sreshtha Vihar, Delhi",
      logo: require("./assets/images/davLogo.png"),
      subHeader: "Senior Secondary (CBSE Class XII), Science Stream",
      duration: "June 2017 - June 2019",
      desc: "Achieved 96% in CBSE Class XII. Secured top 1 percentile rank in JEE among 1.15 million candidates, and received multiple scholarships and awards.",
      descBullets: [
        "Scored 96% in CBSE Class XII examination",
        "Secured top 1 percentile rank in JEE (out of 1.15 million candidates)",
        "Received scholarships and awards for academic excellence within the State",
        "Subjects: English, Physics, Chemistry, Mathematics, Computer Science",
        "Hobbies: Badminton and Basketball"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming | Java, C++, Python",
      progressPercentage: "85%"
    },
    {
      Stack: "Artifical Intelligence & Machine Learning",
      progressPercentage: "88%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Microsoft",
      companylogo: require("./assets/images/ms.png"),
      date: "June 2023 – Present",
      desc: "Developed key telemetry, automation, and security solutions for Windows and BlackRock, driving improvements in accessibility, deployment, and anomaly detection.",
      descBullets: [
        "Developed real-time telemetry service for Windows File Explorer’s Dark Mode; enabled feature usage tracking across 100M+ devices globally and contributed to UI alignment across multiple system dialog boxes, ensuring visual consistency across 5+ themes and improved accessibility for millions.",
        "Designed and implemented an infrastructure-aware automation tool for Copilot deployments across ISVs like Siemens; reduced deployment time by 40% via tailored DevOps workflows and CI/CD pipelines.",
        "Built a security automation pipeline with breach alerts, reducing acknowledgment by 95% and resolution time by 80%. Optimized traceability dashboards via wrapper functions and cross-cluster workflows, cutting latency by 99% and enabling monthly trend analysis across BlackRock’s Aladdin synthetic environment.",
        "Enhanced anomaly detection fidelity for BlackRock’s Aladdin synthetic system; reduced alert latency from 3 hours to under 5 minutes and improved accuracy by 90% using telemetry signals across critical production environments."
      ]
    },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    {
      role: "Software Engineer Intern",
      company: "Microsoft",
      companylogo: require("./assets/images/ms.png"),
      date: "May 2022 – July 2022",
      desc: "Built a production-ready push notification service and technical documentation, driving user engagement and efficient decision-making.",
      descBullets: [
        "Developed a push-based notification service that increased user engagement by 25% and reduced delivery time by 40%.",
        "Created comprehensive technical design documentation with my mentor, improving decision-making efficiency by 30% and aligning 3 key stakeholders.",
        "Delivered a scalable, secure notification system using Azure Service Bus, Event Hub, and Key Vault within 2 months."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Global Hackathon 2025",
      subtitle: "Awarded by Microsoft",
      image:
        "https://images.credly.com/images/c5af23c8-2a73-44bf-bbad-3480da39808e/blob", // You can leave this empty or use a placeholder
      imageAlt: "Microsoft Global Hackathon Badge",
      footerLink: [
        {
          name: "View Badge",
          url: "https://www.credly.com/badges/30ca4bfa-53ee-43d7-b072-b39bbdaeb5c1/public_url"
        }
      ],
      customEmbed: (
        <iframe
          width="150"
          height="270"
          src="https://www.credly.com/badges/30ca4bfa-53ee-43d7-b072-b39bbdaeb5c1/public_url"
          frameBorder="0"
          allowFullScreen
          title="Microsoft Global Hackathon Badge"
        ></iframe>
      )
    },
    {
      title: "Microsoft Global Hackathon 2024",
      subtitle: "Awarded by Microsoft",
      image:
        "https://images.credly.com/size/340x340/images/ac4d1eba-bbc1-42f9-aa64-d3149a99894a/image.png", // You can leave this empty or use a placeholder
      imageAlt: "Microsoft Global Hackathon Badge",
      footerLink: [
        {
          name: "View Badge",
          url: "https://www.credly.com/badges/d3cf6af0-e640-48a1-be4c-8f6db931f0c3/public_url"
        }
      ],
      customEmbed: (
        <iframe
          width="150"
          height="270"
          src="https://www.credly.com/badges/d3cf6af0-e640-48a1-be4c-8f6db931f0c3/public_url"
          frameBorder="0"
          allowFullScreen
          title="Microsoft Global Hackathon Badge"
        ></iframe>
      )
    },
    {
      title: "Microsoft Global Hackathon 2023",
      subtitle: "Awarded by Microsoft",
      image:
        "https://images.credly.com/size/340x340/images/690dd7e4-e88a-4e4e-8681-f3b9d1119b2e/image.png", // You can leave this empty or use a placeholder
      imageAlt: "Microsoft Global Hackathon Badge",
      footerLink: [
        {
          name: "View Badge",
          url: "https://www.credly.com/badges/38de70b6-8644-4b35-9348-7fc5ddb13613/public_url"
        }
      ],
      customEmbed: (
        <iframe
          width="150"
          height="270"
          src="https://www.credly.com/badges/38de70b6-8644-4b35-9348-7fc5ddb13613/public_url"
          frameBorder="0"
          allowFullScreen
          title="Microsoft Global Hackathon Badge"
        ></iframe>
      )
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9821955350",
  email_address: "vinaypandey2305@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "vinay_2305", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
