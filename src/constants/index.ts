import {
  HiOutlineHome,
  HiOutlineCode,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
  DiGithubBadge,
  DiPostgresql
} from "react-icons/di";
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoRedux,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMui, SiStyledcomponents, SiSanity, SiMongodb, SiExpress, SiVite  } from "react-icons/si";
import { BsPinMap } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const profileData: ProfileData = {
  name: "Mauricio Silvera",
  job: "Web developer",
  aboutMe: [
    {
      key: "Email",
      value: "mauricioagustinsilvera@gmail.com",
      icon: HiOutlineMail,
    },
    {
      key: "Phone",
      value: "+54 9 1150207579",
      icon: HiOutlinePhone,
    },
    {
      key: "Location",
      value: "CABA, Buenos Aires",
      icon: BsPinMap,
    },
  ],
  socialNetwork: [
    {
      id: 0,
      icon: AiFillLinkedin,
      link: "https://www.linkedin.com/in/mauricio-silvera",
    },
    {
      id: 1,
      icon: AiFillGithub,
      link: "https://www.github.com/mauriciosilvera",
    },
  ],
  buttonLabel: "Download CV",
};

const projects: Projects[] = [
  {
    name: "Acme Dashboard",
    srcLight: "/dashboardLight.png",
    srcDark: "/dashboardDark.png",
    description:
      "Dashboard with authentication, real time data and searching. Made for NextJS course using best practices.",
    techUsed: [
      { icon: DiReact },
      { icon: BiLogoTypescript },
      { icon: TbBrandNextjs },
      { icon: DiPostgresql }
    ],
  },
  {
    name: "Sneakerhouse",
    srcLight: "/sneakerhouseLight.png",
    srcDark: "/sneakerhouseDark.png",
    description:
      "Releases calendar for Sneakerhouse, a digital communication site about sneakers, music, entertainment and everything about hype world.",
    techUsed: [
      { icon: DiReact },
      { icon: BiLogoTypescript },
      { icon: TbBrandNextjs },
      { icon: SiSanity }
    ],
  },
  {
    name: "Hoobank",
    srcLight: "/hoobankLight.png",
    srcDark: "/hoobankDark.png",
    description:
      "Modern UX/UI single page responsive digital bank landing using existent assets.",
    techUsed: [{ icon: DiReact }, { icon: BiLogoTailwindCss }, { icon: SiVite }],
  },
  {
    name: "Polls - LuzuTV",
    srcLight: "/luzuLight.png",
    srcDark: "/luzuDark.png",
    description:
      "Polls aplication with IP validation and administrator login for CRUD. Made for famous Argentinian podcast Milloton from LuzuTV.",
    techUsed: [
      { icon: DiReact },
      { icon: SiStyledcomponents },
      { icon: SiMui },
    ],
  },
  {
    name: "SSBU Iron-man tracker",
    srcLight: "/ironmanLight.png",
    srcDark: "/ironmanDark.png",
    description:
      "Iron-man is a challenge in SSBU where you win in ranked with every 86 characters in a row in the game sorted randomly. This project is for tracking iron-man runs.",
    techUsed: [
      { icon: DiReact },
      { icon: BiLogoTailwindCss },
      { icon: BiLogoRedux },
    ],
  },
  {
    name: "To-do app",
    srcLight: "/todosLight.png",
    srcDark: "/todosDark.png",
    description: "Todo app made with TS and pre-defined CSS.",
    techUsed: [
      { icon: DiReact },
      { icon: BiLogoTypescript },
      { icon: BiLogoTailwindCss },
    ],
  }
];

const headerOptions: Header[] = [
  {
    id: 1,
    name: "Home",
    icon: HiOutlineHome,
    link: "/",
  },
  {
    id: 2,
    name: "Projects",
    icon: HiOutlineCode,
    link: "/projects",
  },
  {
    id: 3,
    name: "Contact",
    icon: HiOutlineMail,
    link: "/contact",
  },
];

const technologies: Technologies = {
  title: "Hi! I'm Mauricio 👋🏼",
  firstParagraph:
    "Web developer from Argentina 🧉 I love cats and doing cool aesthetic stuff with my code. I really really like tryhard things. In my free time I like to cook and competing.",
  secondParagraph:
    "Constantly studying to be the best and share my knowledge 😃",
  skillsTitle: "My skills 🐱‍👤",
  cvTitle: "Get to know me a little more! 😋",
  downloadButton: "Download CV",
  skills: [
    {
      id: 1,
      name: "Javascript",
      icon: DiJavascript1,
    },
    {
      id: 2,
      name: "HTML",
      icon: DiHtml5,
    },
    {
      id: 3,
      name: "CSS",
      icon: DiCss3,
    },
    {
      id: 4,
      name: "React",
      icon: DiReact,
    },
    {
      id: 5,
      name: "NextJS",
      icon: TbBrandNextjs,
    },
    {
      id: 6,
      name: "Typescript",
      icon: BiLogoTypescript,
    },
    {
      id: 7,
      name: "Tailwind",
      icon: BiLogoTailwindCss,
    },
    {
      id: 8,
      name: "NodeJS",
      icon: BiLogoNodejs,
    },
    {
      id: 9,
      name: "Express",
      icon: SiExpress,
    },
    {
      id: 10,
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      id: 11,
      name: "Redux",
      icon: BiLogoRedux,
    },
    {
      id: 12,
      name: "Git",
      icon: DiGithubBadge,
    },
  ],
};

const contact: Contact = {
  title: "Contact me! ✉",
  subtitle:
    "If you are interested in my services or wanna share your favourite music album with me, send me a message.",
  email: "email",
  emailLabel: "Email",
  name: "name",
  nameLabel: "Name",
  message: "message",
  messageLabel: "Message",
  buttonLabel: "Send email",
  sendedMessage: "Thank you for your contact! I'll reply as soon as I can 😃",
};

export { profileData, projects, headerOptions, technologies, contact };
