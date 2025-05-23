// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
import newLogo from "./images/425-4258668_lordfarquaad-farquaad-markiplier-e-markiplier-meme-lord-farquaad.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/light.jpg";
import HeroDark from "./images/dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

import Picture from "./images/image.jpg";

import Resume from "./images/RyanHaskinsResume.pdf";

export const githubUsername = "RTHaskins";

// Navbar Logo image
export const navLogo = newLogo;

export const profileAvatar = Picture;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = <Icon icon="ph:link-bold"/>;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add paragraphs for the about me section.
*/
export const aboutMe =
  "Hello there thanks for stopping by! I'm Ryan, a software developer with a Bachelor's degree in Computing Science and a certificate in Computer Game Development from the University of Alberta.";
export const moreInfo =
  "I enjoy learning anything technology, programming and game development. It's always been a dream of mine to work with computers and create my own video games. I've built web application and video games using various technologies and tools such as Unity, React and Django. I'm always looking for new opportunities to learn and grow as a developer.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="fa6-brands:java" className="display-4" />,
    name: "Java",
  },
  {
    id: 2,
    skill: <Icon icon="fa6-brands:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 3,
    skill: <Icon icon="devicon-plain:django" className="display-4" />,
    name: "Django",
  },
  {
    id: 4,
    skill: <Icon icon="devicon-plain:c" className="display-4" />,
    name: "C",
  },
  {
    id: 5,
    skill: <Icon icon="devicon-plain:cplusplus" className="display-4" />,
    name: "C++",
  },
  {
    id: 6,
    skill: <Icon icon="devicon-plain:csharp" className="display-4" />,
    name: "C#",
  },
  {
    id: 7,
    skill: <Icon icon="devicon-plain:unity" className="display-4" />,
    name: "Unity",
  },
  {
    id: 8,
    skill: <Icon icon="devicon-plain:intellij" className="display-4" />,
    name: "IntelliJ",
  },
  {
    id: 9,
    skill: <Icon icon="devicon-plain:postgresql" className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 10,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 11,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 12,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 13,
    skill: <Icon icon="devicon-plain:typescript" className="display-4" />,
    name: "TypeScript",
  },
  {
    id: 14,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 15,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 16,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 17,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 18,
    skill: <Icon icon="simple-icons:robotframework" className="display-4" />,
    name: "ROBOT Framework",
  },
  {
    id: 19,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 20,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 21,
    skill: <Icon icon="fa6-brands:gitlab" className="display-4" />,
    name: "GitLab",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = Resume;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
*/
export const formspreeUrl = "https://formspree.io/f/meojbqvn";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
