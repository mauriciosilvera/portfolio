import { HiOutlineHome, HiOutlineCode, HiOutlineMail } from 'react-icons/hi';
import {
  DiJavascript1, DiHtml5, DiCss3, DiReact, DiGithubBadge,
} from 'react-icons/di';
import {
  BiLogoTypescript, BiLogoTailwindCss, BiLogoNodejs, BiLogoRedux,
} from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMui, SiFigma, SiStyledcomponents } from 'react-icons/si';

const profileData = {
  name: 'Mauricio Silvera',
  job: 'Web developer',
  email: 'mauricioagustinsilvera@gmail.com',
  phone: '+54 9 1150207579',
  location: 'Capital Federal, Buenos Aires',
  linkedIn: 'https://www.linkedin.com/in/mauricio-silvera/',
  gitHub: 'https://www.github.com/mauriciosilvera',
  buttonLabel: 'Download CV',
};

const projects = [{
  name: 'Polls - LuzuTV',
  src: '/luzu.png',
  description: 'Esse exercitation elit deserunt tempor dolor sint amet irure eiusmod non sint commodo irure.',
  techUsed: [{ icon: DiReact }, { icon: SiStyledcomponents }, { icon: SiMui }],
},
{
  name: 'SSBU Iron-man tracker',
  src: '/iron-man-tracker.png',
  description: 'Esse exercitation elit deserunt tempor dolor sint amet irure eiusmod non sint commodo irure.',
  techUsed: [{ icon: DiReact }, { icon: BiLogoTailwindCss }, { icon: BiLogoRedux }],
},
{
  name: 'To-do app',
  src: '/todos-ts.png',
  description: 'Esse exercitation elit deserunt tempor dolor sint amet irure eiusmod non sint commodo irure.',
  techUsed: [{ icon: DiReact }, { icon: BiLogoTypescript }, { icon: BiLogoTailwindCss }],
},
{
  name: 'Hoobank',
  src: '/hoobank.png',
  description: 'Esse exercitation elit deserunt tempor dolor sint amet irure eiusmod non sint commodo irure.',
  techUsed: [{ icon: DiReact }, { icon: BiLogoTailwindCss }],
}];

const headerOptions = [{
  id: 1,
  name: 'Home',
  icon: HiOutlineHome,
  link: '/',
},
{
  id: 2,
  name: 'Projects',
  icon: HiOutlineCode,
  link: '/projects',
},
{
  id: 3,
  name: 'Contact',
  icon: HiOutlineMail,
  link: '/contact',
}];

const technologies = {
  title: 'Hi! I\'m Mauricio ✌',
  firstParagraph: 'Web developer from Argentina 🧉 I like cats and doing cool aestetic stuff with my code. Most of the time I\'m challenging myself to focus and improve.',
  secondParagraph: 'Constantly studying to be the best 😃',
  skillsTitle: 'My skills 🐱‍👤',
  cvTitle: 'Get to know me a little more! 😋',
  downloadButton: 'Download CV',
  skills: [{
    id: 1,
    name: 'Javascript',
    icon: DiJavascript1,
  },
  {
    id: 2,
    name: 'HTML',
    icon: DiHtml5,
  },
  {
    id: 3,
    name: 'CSS',
    icon: DiCss3,
  },
  {
    id: 4,
    name: 'React',
    icon: DiReact,
  },
  {
    id: 5,
    name: 'NextJS',
    icon: TbBrandNextjs,
  },
  {
    id: 6,
    name: 'Tailwind',
    icon: BiLogoTailwindCss,
  },
  {
    id: 7,
    name: 'MaterialUI',
    icon: SiMui,
  },
  {
    id: 8,
    name: 'Typescript',
    icon: BiLogoTypescript,
  },
  {
    id: 9,
    name: 'Redux',
    icon: BiLogoRedux,
  },
  {
    id: 10,
    name: 'GitHub',
    icon: DiGithubBadge,
  },
  {
    id: 11,
    name: 'Figma',
    icon: SiFigma,
  },
  {
    id: 12,
    name: 'NodeJS',
    icon: BiLogoNodejs,
  },
  ],
};

export {
  profileData, projects, headerOptions, technologies,
};
